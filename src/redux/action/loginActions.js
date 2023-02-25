import axios from "../../api/index";
export const loginUser = (email, password) => {
  return async function (dispatch) {
    dispatch(loginUserStart());
    const data = {
      email,
      password,
    };
    console.log("emailpass", data);
    try {
      const response = await axios.post("/users/login", data);
      const token = response.data.token;
      const userId = response.data.user._id;
      localStorage.setItem("token", token);
      localStorage.setItem("userId", userId);
      // const userData = JSON.parse(response.data);
      localStorage.setItem("userData", JSON.stringify(response.data));

      console.log(
        "loginUser success ===>",
        response.data.success,
        token,
        userId
      );
      dispatch(loginUserSuccess(response.data));
    } catch (error) {
      console.log("loginUser errCatch ===> " + error);
      dispatch(loginUserError(error));
    }
  };
};
export const loginUserStart = () => {
  return {
    type: "LOGIN_USER_START",
  };
};
export const loginUserSuccess = (authData) => {
  return {
    type: "LOGIN_USER_SUCCESS",
    authData,
  };
};
export const loginUserError = (error) => {
  return {
    type: "LOGIN_USER_ERROR",
    error,
  };
};
