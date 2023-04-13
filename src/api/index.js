import axios from "axios";

export default axios.create({
  baseURL: "http://64.226.76.186/api/v1",
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});
// .defaults.withCredentials = true /api/v1/categories
