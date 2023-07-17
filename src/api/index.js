import axios from "axios";

export default axios.create({
  baseURL: "http://localhost:5000/api/v1",
  method: 'POST',
  mode: 'cors',
  cache: 'no-cache',
  credentials: 'same-origin' ,
  headers: {
    'content-type': 'application/json'
  },
});
// .defaults.withCredentials = true /api/v1/categories   // "homepage": "https://huzarh.github.io/front-end",
