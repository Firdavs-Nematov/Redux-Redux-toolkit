import { useEffect } from "react";
import { useParams } from "react-router-dom";
import ArticleServise from "../service/article";
import { useDispatch, useSelector } from "react-redux";
import {
  getArticlesDetailsFailure,
  getArticlesDetailsStart,
  getArticlesDetailsSucces,
} from "../slice/articles";
import Moment from "react-moment";
import { Loader } from "../ui";

const ArticlesCard = () => {
  const { slug } = useParams();
  const dispatch = useDispatch();
  const { articleDetail, isLoading } = useSelector((state) => state.articles);

  useEffect(() => {
    const getArticleDetail = async () => {
      dispatch(getArticlesDetailsStart());
      try {
        const responce = await ArticleServise.getArticlesCard(slug);
        dispatch(getArticlesDetailsSucces(responce.article));
      } catch (error) {
        dispatch(getArticlesDetailsFailure());
      }
    };
    getArticleDetail();
  }, [slug]);

  return isLoading ? (
    <Loader />
  ) : (
    articleDetail !== null && (
      <div className="container">
        <div className="p-5 text-center bg-body-tertiary rounded-3">
          <h1 className="text-body-emphasis">{articleDetail.title}</h1>
          <p className="col-lg-8 mx-auto fs-5 text-muted">
            {articleDetail.description}
          </p>
          <div className="d-flex align-items-center justify-content-between text-muted">
            <p>
              <span className="fw-bold">Created Data: </span>
              {"  "}
              <Moment fromNow>{articleDetail.createdAt}</Moment>
            </p>
            <p>
              <span className="fw-bold">Updated Data: </span>
              {"  "}
              <Moment fromNow>{articleDetail.updatedAt}</Moment>
            </p>
          </div>
          <div className="d-inline-flex gap-2 my-2">{articleDetail.body}</div>
          <div className="col-md-6">
            <div className="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
              <div className="col p-4 d-flex flex-column position-static">
                <strong className="d-inline-block mb-2 text-primary text-uppercase">
                  {articleDetail.author.username}
                </strong>
                {articleDetail.author.bio ? (
                  <p className="card-text mb-auto">
                    {articleDetail.author.bio}
                  </p>
                ) : (
                  "NULL"
                )}
              </div>
              <div className="col-auto d-none d-lg-block">
                <svg
                  className="bd-placeholder-img"
                  width="200"
                  height={"100%"}
                  xmlns={articleDetail.author.image}
                  role="img"
                  aria-label="Placeholder: Thumbnail"
                  preserveAspectRatio="xMidYMid slice"
                  focusable="false"
                >
                  <title>{articleDetail.author.username}</title>
                  <rect width="100%" height="100%" fill="#55595c"></rect>
                  <text
                    x={"45%"}
                    y={"53%"}
                    fill={"#fff"}
                    className="fs-2 text-uppercase p-0 m-0"
                  >
                    {articleDetail.author.username[0]}
                  </text>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  );
};

export default ArticlesCard;
