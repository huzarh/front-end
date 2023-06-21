import axios from "axios";

export default axios.create({
  baseURL: "http://localhost:5000/api/v1",
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
  },
});
// .defaults.withCredentials = true /api/v1/categories   // "homepage": "https://huzarh.github.io/front-end",
