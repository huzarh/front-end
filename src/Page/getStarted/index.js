import React from "react";
import css from "./style.module.css";
import { Link } from "react-router-dom";

function GetStarted() {
  return (
    <section className={css.all}>
      {/* <img className={css.Logo} src={Image} /> */}
      <b className={css.text}>
        <h1>Elingo</h1>
        <p className={css.pa}>
          Learn languages whenever and
          <br />
          wherever you want. It's free and forever.
        </p>
      </b>

      <hr />
      <Link to="/research">
        <button type="button" className={css.button1}>
          GET STARTED
        </button>
      </Link>
      <br />
      <Link to="/login">
        <button className={css.button2}>I ALREADY HAVE AN ACCOUNT</button>
      </Link>
    </section>
  );
}
export default GetStarted;
