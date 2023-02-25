import axios from "axios";

export default axios.create({
  baseURL: "http://64.226.76.186:5000/api/v1",
});
// .defaults.withCredentials = true
