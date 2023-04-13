import React, { useState } from "react";
import css from "./style.module.css";
// import Menu from "../../components/Menu";
import { BiExit } from "react-icons/bi";
// import * as actions from "../../redux/action/orderActions";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import * as actions2 from "../../redux/action/signupActions";
import * as actions3 from "../../redux/action/loginActions";
import image from "../../assets/animation_200_lfx5ocq6.gif";

const IndexPage = (props) => {
  // const [ask,setAsk]=useState('');
  const logout = () => {
    props.logout();
    props.navigate("/");
  };
  const handleClick = () => {
    props.setMess(true);
  };
  return (
    <div className={css.all}>
      <div className={css.top}>
        <div className={css.head}>
          <div>💟&nbsp;&nbsp;Dersler</div>

          <BiExit className={css.icon1} onClick={logout} />
        </div>
        {/* <div className={css.button}>
            <button className={css.button1}>Target</button>
            &nbsp;&nbsp;
            <button className={css.button2} onClick={handleClick}>
              Badges
            </button>
          </div> */}
      </div>
      <div className={css.row}>
      <Link to="/A1">
        <div className={css.active} style={{color:'white'}} >
        A1 
        <div className={css.clmn}>
            <p>Adı: Huzeyir</p>
            <p>Puan: 2000P</p>
            <p>Oknu: 4</p>
            <p>Sınav: 1  </p>
          </div>
        </div></Link>
        <div className={css.column}  >
        A2
        </div>
        <div className={css.column}  >
        B1
        </div>
        <div className={css.column}  >
        B2
        </div>
        <div className={css.column}  >
         C1 
        </div>
      </div>
      <h2>game</h2>
      <div className={css.active}  >
         C1 
        </div>
        <h3>..</h3>
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    loading: state.cloudReducer.loading,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    autoLogin: (token, userId) =>
      dispatch(actions3.loginUserSuccess(token, userId)),
    logout: () => dispatch(actions2.logout()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(IndexPage);
