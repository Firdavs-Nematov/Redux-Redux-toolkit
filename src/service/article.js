import axios from "./api";

const ArticleServise = {
  async getArticles() {
    const { data } = await axios.get("/articles");
    return data;
  },
  async getArticlesCard(slug) {
    const data = await axios.get(`/articles/${slug}`);
    return data;
  },
};

export default ArticleServise;
