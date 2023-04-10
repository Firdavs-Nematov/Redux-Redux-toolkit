import axios from "./api";

const AuthServise = {
  async userRegister(user) {
    const responce = await axios.post("/users", { user });
    return responce.data;
  },
  async userLogin(user) {
    const { data } = await axios.post("/users/login", { user });
    return data;
  },
  async getUser() {
    // const responce = await axios.post("/user");
  },
};

export default AuthServise;
