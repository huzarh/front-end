import React from "react";
import css from "./style.module.css";
import { Link } from "react-router-dom";
import { BiArrowBack } from "react-icons/bi";

function Login() {
  return (
    <div className={css.all}>
      <h3 className={css.h3}>
        <BiArrowBack className={css.icon1} />
      </h3>
      <h2 className={css.h2}>Hello there 👋</h2>
      <form>
        <label>
          <p className={css.p}>Email</p>
          <input className={css.input1} type="text" required name="name" />
        </label>
        <br />
        <br />
        <br />
        <label>
          <p className={css.p}>Password</p>
          <input className={css.input2} type="password" required name="name" />
        </label>
        <label>
          <p>
            <input className={css.check} type="checkbox" />
            Remember me
          </p>
        </label>
        <hr />
        <Link to="/forgot-password">
          <h4 className={css.h4}>Forgot Password?</h4>
        </Link>
        <hr />
        <Link to="/index-page">
          <input className={css.button} type="submit" value="SIGN IN" />
        </Link>
      </form>
    </div>
  );
}

export default Login;
