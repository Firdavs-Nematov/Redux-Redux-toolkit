import axios from "./api";

const ArticleServise = {
  async getArticles() {
    const { data } = await axios.get("/articles");
    return data;
  },
};

export default ArticleServise;
