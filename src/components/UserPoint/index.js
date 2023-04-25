import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  BiArrowBack,
  BiSearch,
  BiDotsVerticalRounded,
  BiCommentDetail,
} from "react-icons/bi";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { cloudData, cloudDataBooks } from "../../redux/action/cloudActions";
import { cloudSave } from "../../redux/action/cloudSelect";
import Loading from "../loading/index";
import css from "./style.module.css";
import TimeAgo from "react-timeago";
// import VariableWidth from "../../components/hoverText";
import img from "../../assets/photo1678109528.jpeg";
import ScrollDialog from "./com";
import Chat from "../chat";

const Point = (props) => {
  // const navigate = useNavigate();
  // console.log(props.BooksData.data[4]);
  // const [showAboutMenu, setshowAboutMenu] = useState(false);

  // const handleHover = () => {
  //   setshowAboutMenu(true);
  // };

  // const handleLeave = () => {
  //   setshowAboutMenu(false);
  // };

  // const minAgo = null;

  // useEffect(() => {
  //   props.saveData();
  //   props.cloudDataBooks();
  // }, []);

  // var add11 = [];

  // props.BooksData &&
  //   props.BooksData.data.map((e) => {
  //     add11.push(e);
  //     // elment.push(e.content);
  //   });

  // const add1 = add11.reverse();
  // var aaaa3 = add1[12].content.join(" ");
  // var words = text.split(" ");
  // var a = [];

  // var add = [];

  // props.BackData && props.BackData.data.map((user) => add.push(user));
  // add.sort((a, b) => b.userPoint - a.userPoint);
  // const userId = localStorage.getItem("userId");

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

// const getaction = (state) => {
//   return {
//     loading: state.cloudReducer.loading,
//     error: state.cloudReducer.error,
//     BackData: state.cloudReducer.BackData,
//     BooksData: state.cloudReducer.BooksData,
//   };
// };
// const actionTsatsruulagch = (dispatch) => {
//   return {
//     saveData: () => dispatch(cloudData()),

//     cloudDataBooks: () => dispatch(cloudDataBooks()),

//     cloudSave: (point, userId) => dispatch(cloudSave(point, userId)),
//   };
// };
export default Point;

// const Submenu = (props) => {
//   return (
//     <h4 className="nav__submenu">
//       <div className={css.hovers}>
//         <p>{props.parametr}</p>
//       </div>
//     </h4>
//   );
// };
