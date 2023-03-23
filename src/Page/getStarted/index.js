import React from "react";
import css from "./style.module.css";
import { Link } from "react-router-dom";
import Image from "../../assets/bigLogo.png";

const GetStarted = () => {
  return (
    <section className={css.all}>
      <img className={css.Logo} src={Image} alt="logo" />
      <div className={css.gol}>
        <b className={css.text}>
          <h1 className={css.h1}>Yardımcı</h1>
          <p className={css.pa}>
            Learn languages whenever and wherever you want. It's free and
            forever.
          </p>
        </b>

        <hr className={css.hr} />
        <div className={css.buttons}>
          <Link to="/">
            <button type="button" className={css.button1}>
              GET STARTED
            </button>
          </Link>
          <br />
          <Link to="/login">
            <button className={css.button2}>I ALREADY HAVE AN ACCOUNT</button>
          </Link>
        </div>
      </div>
    </section>
  );
};
export default GetStarted;
