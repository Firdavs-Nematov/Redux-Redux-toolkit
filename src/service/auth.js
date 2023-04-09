import axios from "./api";

const AuthServise = {
  async userRegister(user) {
    const responce = await axios.post("/users", { user });
    return responce;
  },
  async userLogin() {
    // const responce = await Axios.post("/user/login");
  },
  async getUser() {
    // const responce = await Axios.post("/user");
  },
};

export default AuthServise;
