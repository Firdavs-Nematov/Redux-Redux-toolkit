import Moment from "react-moment";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Loader } from "../ui/";
import { useEffect } from "react";
import {
  getArticlesFailure,
  getArticlesStart,
  getArticlesSucces,
} from "../slice/articles";
import ArticleServise from "../service/article";

const Main = () => {
  const { articles, isLoading } = useSelector((state) => state.articles);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const getArticles = async () => {
    dispatch(getArticlesStart());
    try {
      const response = await ArticleServise.getArticles();
      dispatch(getArticlesSucces(response.articles));
    } catch (error) {
      dispatch(getArticlesFailure());
    }
  };

  useEffect(() => {
    getArticles();
  }, []);

  return (
    <>
      {isLoading && <Loader />}
      <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
        {articles.map((item) => (
          <div className="col">
            <div className="card shadow-sm">
              <svg
                className="bd-placeholder-img card-img-top"
                width="100%"
                height="225"
                xmlns={item.author.image}
                role="img"
                preserveAspectRatio="xMidYMid slice"
                focusable="false"
              >
                <title>Image Blog</title>
                <rect width="100%" height="100%" fill="#55595c"></rect>
              </svg>
              <div className="card-body">
                <p className="card-text fw-bold">{item.title.slice(0, 50)}</p>
                <p className="card-text ">{item.description.slice(0, 100)}</p>
                <div className="d-flex justify-content-between align-items-center">
                  <div className="btn-group">
                    <button
                      type="button"
                      className="btn btn-sm btn-outline-primary"
                      onClick={() => navigate(`/articles/${item.slug}`)}
                    >
                      View
                    </button>
                    <button
                      type="button"
                      className="btn btn-sm btn-outline-success"
                    >
                      Edit
                    </button>
                    <button
                      type="button"
                      className="btn btn-sm btn-outline-danger"
                    >
                      Delete
                    </button>
                  </div>
                  <small className="text-body-secondary">
                    <Moment fromNow>{item.updatedAt}</Moment>
                  </small>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Main;
