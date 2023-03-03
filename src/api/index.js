import axios from "axios";

export default axios.create({
  baseURL: "http://turk--ce.com/api/v1",
});
// .defaults.withCredentials = true /api/v1/categories
