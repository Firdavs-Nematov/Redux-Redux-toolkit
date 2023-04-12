import { useEffect } from "react";
import { useParams } from "react-router-dom";
import ArticleServise from "../service/article";
import { useDispatch } from "react-redux";
import {
  getArticlesDetailsFailure,
  getArticlesDetailsStart,
  getArticlesDetailsSucces,
} from "../slice/articles";

const ArticlesCard = () => {
  const { slug } = useParams();
  const dispatch = useDispatch((state) => state.article);

  useEffect(() => {
    const getArticleDetail = async () => {
      dispatch(getArticlesDetailsStart());
      try {
        const responce = await ArticleServise.getArticlesCard(slug);
        console.log(responce.data.article);
        dispatch(getArticlesDetailsSucces(responce.data.article));
      } catch (error) {
        dispatch(getArticlesDetailsFailure());
      }
    };
    getArticleDetail();
  }, [slug]);
  return <div>id: {slug}</div>;
};

export default ArticlesCard;
