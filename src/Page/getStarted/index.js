import React from "react";
import css from "./style.module.css";
import { Link } from "react-router-dom";
import Image from "../../assets/logoYa.png";

const GetStarted = () => {
  return (
    <section className={css.all}>
      <img className={css.Logo} src={Image} alt="logo" />
      <div className={css.gol}>
        <b className={css.text}>
          <h1 className={css.h1}>Türkçe Öğretimi</h1>
          <p className={css.pa}>
            İstediğiniz zaman ve istediğiniz yerde dil öğrenin. Ücretsiz ve
            sonsuza kadar.
          </p>
        </b>

        <hr className={css.hr} />
        <div className={css.buttons}>
          <Link to="/">
            <button type="button" className={css.button1}>
              BAŞLAMAK
            </button>
          </Link>
          <br />
          <Link to="/login">
            <button className={css.button2}>ZATEN HESABIM VAR</button>
          </Link>
        </div>
      </div>
    </section>
  );
};
export default GetStarted;
