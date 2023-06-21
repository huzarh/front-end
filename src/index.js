import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./Page/App";
import reportWebVitals from "./reportWebVitals";
import {
  legacy_createStore as createStore,
  applyMiddleware,
  combineReducers,
  compose,
} from "redux";
import thunk from "redux-thunk";
import { Provider } from "react-redux";
import cloudReducer from "./redux/reducer/cloudReducer";
import { BrowserRouter } from "react-router-dom";
import authReducer from "./redux/reducer/authReducer";

const logger = (store) => {
  return (next) => {
    return (action) => {
      console.log("log ==>", action);
      console.log("store ==>", store.getState());
      const result = next(action);
      console.log("all Store ===>", store.getState());
      return result;
    };
  };
};

const reducers = combineReducers({logger,
  cloudReducer,
  authReducer,
});

const middlewares = [thunk];

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  reducers,
  composeEnhancers(applyMiddleware(...middlewares))
);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <React.StrictMode>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </React.StrictMode>
  </Provider>
);
reportWebVitals();
