import axios from "axios";

export default axios.create({
  baseURL: "https://backend-api-4tkn.onrender.com/api/v1",
  mode: 'cors',
  cache: 'no-cache',
  credentials: 'same-origin' ,
  headers: {
    'content-type': 'application/json'
  },
});
// .defaults.withCredentials = true /api/v1/categories   // "homepage": "https://huzarh.github.io/front-end",
