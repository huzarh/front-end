import axios from "axios";

export default axios.create({
  baseURL: "https://back-end-9zp5.onrender.com/api/v1",
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});
// .defaults.withCredentials = true /api/v1/categories   // "homepage": "https://huzarh.github.io/front-end",
