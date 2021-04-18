import axios from "axios";
const instance = axios.create({
  baseURL:
    "https://panda-tinder-backend.herokuapp.com/" || "http://localhost:8001",
});

export default instance;
