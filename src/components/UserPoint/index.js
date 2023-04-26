import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { BiSearch } from "react-icons/bi";
import Loading from "../loading/index";
import css from "./style.module.css";
import Chat from "../chat";

const Point = (props) => {
  return (
    <div className={css.body}>
      {props.error && <h5>Alldaaa : {props.error}</h5>}

      {props.loading && <Loading />}
      <div className={css.head}>
        <div>🧠&nbsp;&nbsp;Türkçe Öğretimi</div>
        <BiSearch />
      </div>
      <Chat />
    </div>
  );
};

export default Point;
