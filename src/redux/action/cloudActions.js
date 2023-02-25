import axios from "../../api/index";
export const cloudData = () => {
  return async function (dispatch, getState) {
    dispatch(loadOrdersStart());
    try {
      axios.defaults.headers.common[
        "Authorization"
      ] = `Bearer ${localStorage.getItem("token")}`;
      const response = await axios.get("/users");

      console.log("getUsers success ===>" + response.data);

      dispatch(loadOrdersSuccess(response.data));
    } catch (error) {
      console.error("getUsers errCatch ===>" + error);
      dispatch(loadOrdersError(error));
    }
  };
};

export const loadOrdersStart = () => {
  return {
    type: "LOAD_ORDERS_START",
  };
};

export const loadOrdersSuccess = (loadedOrders) => {
  return {
    type: "LOAD_ORDERS_SUCCESS",
    orders: loadedOrders,
  };
};

export const loadOrdersError = (error) => {
  return {
    type: "LOAD_ORDERS_ERROR",
    error,
  };
};

export const cloudDataBooks = () => {
  return async function (dispatch) {
    dispatch(cloudSelectStart());
    try {
      axios.defaults.headers.common[
        "Authorization"
      ] = `Bearer ${localStorage.getItem("token")}`;
      const response = await axios.get("/books?limit=50");

      console.log("cloudDataBooks success ===>", response.data);

      dispatch(cloudSelectSuccess(response.data));
    } catch (error) {
      console.error("cloudDataBooks errCatch ===>", error);
      dispatch(cloudSelectError(error));
    }
  };
};

export const cloudSelectStart = () => {
  return {
    type: "CLOUD_SELECT_START",
  };
};

export const cloudSelectSuccess = (booksData) => {
  return {
    type: "CLOUD_SELECT_SUCCESS",
    booksData: booksData,
  };
};

export const cloudSelectError = (error) => {
  return {
    type: "CLOUD_SELECT_ERROR",
    error,
  };
};
