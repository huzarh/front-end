import axios from "axios";

export default axios.create({
  baseURL: "http://localhost:5000/api/v1",
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});
// .defaults.withCredentials = true /api/v1/categories
