import React from "react";
import css from "./style.module.css";
// import Loading from "../../components/loading";
import GetStarted from "../getStarted";
import { connect } from "react-redux";
// import * as actions from "../../redux/action/loginActions";

const FirstPage = (props) => {
  return (
    <div className={css.all1}>
      <GetStarted />
    </div>
  );
};
const mapStateToProps = () => {
  return {};
};
const mapDispatchToProps = (dispatch) => {
  return {
    // autoLogin: (token, userId) =>
    //   dispatch(actions.loginUserSuccess(token, userId)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(FirstPage);
