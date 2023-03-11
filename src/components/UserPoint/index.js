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

const Point = (props) => {
  // const navigate = useNavigate();
  // console.log(props.BooksData.data[4]);
  const [showAboutMenu, setshowAboutMenu] = useState(false);

  const handleHover = () => {
    setshowAboutMenu(true);
  };

  const handleLeave = () => {
    setshowAboutMenu(false);
  };

  const minAgo = null;

  useEffect(() => {
    props.saveData();
    props.cloudDataBooks();
  }, []);

  var add11 = [];

  props.BooksData &&
    props.BooksData.data.map((e) => {
      add11.push(e);
      // elment.push(e.content);
    });

  const add1 = add11.reverse();
  // var aaaa3 = add1[12].content.join(" ");
  // var words = text.split(" ");
  // var a = [];

  // var add = [];

  // props.BackData && props.BackData.data.map((user) => add.push(user));
  // add.sort((a, b) => b.userPoint - a.userPoint);
  const userId = localStorage.getItem("userId");

  return (
    <div className={css.body}>
      {props.error && <h5>Alldaaa : {props.error}</h5>}

      {props.loading && <Loading />}
      <div className={css.head}>
        <div>
          <Link to="">
            <BiArrowBack />
          </Link>
          &nbsp;&nbsp;Okul dersler
        </div>
        <BiSearch />
      </div>

      <div className={css.container}>
        {add1.map((e, i) => (
          <div className={css.card} key={i}>
            <div className={css.head2}>
              <div style={{ display: "flex" }}>
                <img
                  src={
                    "https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
                  }
                  alt="box"
                  className={css.box}
                />

                <div className={css.headIteam}>
                  <h4>{e.author}</h4>
                  <TimeAgo style={{ fontSize: 12 }} date={e.createdAt} />
                </div>
              </div>
              <div style={{ alignIteams: "start" }}>
                <BiDotsVerticalRounded style={{ fontSize: "25px" }} />
              </div>
            </div>

            {e.name === "jhg" || "neghoyr" ? (
              <h5 className={css.content}>{e.content.join(" ")}</h5>
            ) : (
              <h5 className={css.content}>{e.content}</h5>
            )}
            {e.author === "Hüzeyir" && <img src={img} alt="box" />}
            {/* <h5 className={css.content}>{e.content}</h5> */}
            <div className={css.head22}>
              <div className={css.head3}>
                {/* <VariableWidth text={e.name} title={e.content} /> */}
                <h5>{e.name}</h5>
              </div>

              {e.comment ? (
                <ScrollDialog />
              ) : (
                <ScrollDialog
                  com={
                    e.author === "Hüzeyir"
                      ? ""
                      : "comment yok çalışıyor !!!!!!!!!"
                  }
                  author={e.author}
                />
              )}
            </div>
          </div>
        ))}
        {/* {props.BooksData &&
          props.BooksData.data.map((post, i) => (
            <h5 key={i}>{(minAgo = new Date(post.createdAt))}</h5>
          ))} */}
      </div>

      {/* <div className={css.container}>
    <article className={css.cardShadow}>
      <div>
          {/* <img src={img} alt="" /> 
      </div>

      <div>
        <p><strong>Lorem ipsum dolor sit dolor sit amet, conse ctetur adipis icing elit...</strong></p>
        <span>
          {/* <i class="fab fa-instagram"></i> 
           Instagram - <time>10 min ago</time>
         </span>
      </div>
    </article> 
  </div> */}
    </div>
  );
};

const getaction = (state) => {
  return {
    loading: state.cloudReducer.loading,
    error: state.cloudReducer.error,
    BackData: state.cloudReducer.BackData,
    BooksData: state.cloudReducer.BooksData,
  };
};
const actionTsatsruulagch = (dispatch) => {
  return {
    saveData: () => dispatch(cloudData()),

    cloudDataBooks: () => dispatch(cloudDataBooks()),

    cloudSave: (point, userId) => dispatch(cloudSave(point, userId)),
  };
};
export default connect(getaction, actionTsatsruulagch)(Point);

// const Submenu = (props) => {
//   return (
//     <h4 className="nav__submenu">
//       <div className={css.hovers}>
//         <p>{props.parametr}</p>
//       </div>
//     </h4>
//   );
// };
