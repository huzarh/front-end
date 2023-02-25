import axios from "../../api/index";
export const signupUser = (name, email, password, role) => {
  return async function (dispatch) {
    dispatch(signupUserStart());
    const data = {
      name,
      email,
      password,
      role,
    };
    console.log("frametrs ===> " + name, email, password, role);
    try {
      const response = await axios.post("/users/register", data);
      const token = response.data.token;
      const userId = response.data.user._id;

      localStorage.setItem("token", token);
      localStorage.setItem("userId", userId);
      localStorage.setItem("userData", JSON.stringify(response.data));
      console.log(
        "signupUser success ===>",
        response.data.success,
        token,
        userId
      );
      dispatch(
        signupUserSuccess(
          response.data
          // response.data.success,
          // response.data.user.name,
          // token,
          // userId
        )
      );
    } catch (error) {
      console.error(
        "signupUser errCatch ===>" + error.response.data.error.message
      );
      dispatch(signupUserError(error));
    }
    // axios
    //   .post("/users/register", data)
    //   .then((result) => {
    //     console.log("success.... >>>" + result);
    //     dispatch(signupUserSuccess(result.data));
    //   })
    //   .catch((error) => {
    //     console.log("error.... >>>>" + error);
    //     dispatch(signupUserError(error));
    //   });
  };
};
export const signupUserStart = () => {
  return {
    type: "SIGNUP_USER_START",
  };
};
export const signupUserSuccess = (authData) => {
  return {
    type: "SIGNUP_USER_SUCCESS",
    authData,
  };
};
export const signupUserError = (error) => {
  return {
    type: "SIGNUP_USER_ERROR",
    error,
  };
};
export const logout = () => {
  localStorage.removeItem("userData");
  localStorage.removeItem("token");
  localStorage.removeItem("userId");
  return {
    type: "LOGOUT",
  };
};
