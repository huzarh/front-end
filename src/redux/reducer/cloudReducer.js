const actionObject = {
  loading: false,
  error: null,
  BackData: null,
  BooksData: null,
};

const reducer = (state = actionObject, action) => {
  switch (action.type) {
    case "LOAD_ORDERS_START":
      return {
        ...state,
        loading: true,
      };
    case "LOAD_ORDERS_SUCCESS":
      return { ...state, loading: false, BackData: action.orders };
    case "LOAD_ORDERS_ERROR":
      return {
        loading: false,
        error: action.error,
      };

    case "ClOUD_SAVE_DATA_START":
      return {
        ...state,
        loading: true,
      };
    case "ClOUD_SAVE_DATA_SUCCESS":
      return { ...state, loading: false };
    case "ClOUD_SAVE_DATA_ERROR":
      return {
        loading: false,
        error: action.error,
      };

    case "CLOUD_SELECT_START":
      return {
        ...state,
        loading: true,
      };
    case "CLOUD_SELECT_SUCCESS":
      return { ...state, loading: false, BooksData: action.booksData };
    case "CLOUD_SELECT_ERROR":
      return {
        loading: false,
        error: action.error,
      };

    default:
      return state;
  }
};
export default reducer;
