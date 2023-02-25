const initialState = {
  loading: false,
  authSuccess: false,
  userName: null,
  error: null,
  token: null,
  userId: null,
  userPoint: 0,
  createdAt: 0,
};
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "SIGNUP_USER_START":
      return {
        ...state,
        loading: true,
      };
    case "SIGNUP_USER_SUCCESS":
      return {
        ...state,
        loading: false,
        authSuccess: action.authData.success,
        userName: action.authData.user.name,
        token: action.authData.token,
        userId: action.authData.user._id,
      };
    case "SIGNUP_USER_ERROR":
      return {
        ...state,
        loading: false,
        error: action.error,
      };

    case "LOGIN_USER_START":
      return {
        ...state,
        error: null,
        loading: true,
      };
    case "LOGIN_USER_SUCCESS":
      return {
        ...state,
        loading: false,
        error: null,
        authSuccess: action.authData.success,
        token: action.authData.token,
        userId: action.authData.user._id,
        userName: action.authData.user.name,
        userPoint: action.authData.user.userPoint,
        createdAt: action.authData.user.createdAt,
      };
    case "LOGIN_USER_ERROR":
      return {
        ...state,
        loading: false,
        error: action.error,
      };
    case "LOGOUT":
      return {
        ...state,
        loading: false,
        authSuccess: false,
        userName: null,
        error: null,
        token: null,
        userId: null,
      };

    default:
      return state;
  }
};
export default reducer;
