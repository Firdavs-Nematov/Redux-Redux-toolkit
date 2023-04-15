import { useState } from "react";
import { Form } from "../ui";
import ArticleServise from "../service/article";
import { useDispatch } from "react-redux";
import {
  postArticleFailure,
  postArticleStart,
  postArticleSuccess,
} from "../slice/articles";
import { useNavigate } from "react-router-dom";

const CreateArticle = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [body, setBody] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const formSubmit = async (e) => {
    e.preventDefault();
    const article = { title, description, body };
    dispatch(postArticleStart());
    try {
      await ArticleServise.postArticle(article);
      dispatch(postArticleSuccess());
      navigate("/");
    } catch (error) {
      dispatch(postArticleFailure());
    }
  };

  const formProps = {
    title,
    setTitle,
    description,
    setDescription,
    body,
    setBody,
    formSubmit,
  };

  return (
    <div className="text-center">
      <p className="fs-2 fw-bold">Create Article</p>
      <div className="w-75 mx-auto">
        <Form {...formProps} />
      </div>
    </div>
  );
};

export default CreateArticle;
