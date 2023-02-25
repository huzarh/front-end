import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { BiArrowBack, BiSearch, BiCommand } from "react-icons/bi";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { cloudData, cloudDataBooks } from "../../redux/action/cloudActions";
import { cloudSave } from "../../redux/action/cloudSelect";
import Loading from "../loading/index";
import css from "./style.module.css";
import TimeAgo from "react-timeago";
// import VariableWidth from "../../components/hoverText";
import img from "../../assets/emoji4.png";

const Point = (props) => {
  // const navigate = useNavigate();

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

  var add1 = [];
  props.BooksData &&
    props.BooksData.data.map((e) => {
      add1.push(e);
      // elment.push(e.content);
    });
  // var aaaa3 = add1[12].content.join(" ");
  // var words = text.split(" ");
  // var a = [];

  var add = [];

  props.BackData && props.BackData.data.map((user) => add.push(user));
  add.sort((a, b) => b.userPoint - a.userPoint);
  const userId = localStorage.getItem("userId");

  return (
    <div>
      {/* {add1[12].content.map((e) => (
        <p className={css.nav__menu} onMouseLeave={handleLeave}>
          <a onMouseEnter={handleHover}>{e}</a>
          {showAboutMenu && <Submenu parametr={e} />}
        </p>
      ))} */}
      {props.error && <h5>Alldaaa : {props.error}</h5>}

      {props.loading && <Loading />}
      <div className={css.head}>
        <div>
          <Link to="/index-page">
            <BiArrowBack />
          </Link>
          &nbsp;&nbsp;Ders
        </div>
        <BiSearch />
      </div>

      <div>
        {/* <button onClick={Point}>point</button> */}

        {/* <section className={css.section}>
            {add.map((e,i)=>(
                
                <div className={(i === 0) ? css.active1 :  (i === 1) ? css.active2 : (i === 2) ? css.active3 : css.active} key={i}>
                
                <div className={css.hr}/>

                { (i === 0) 
                ?
                <div key={i} className={css.users}>
                <div style={{display:'flex'}}>1&nbsp;&nbsp;<p>{e.name}&nbsp;&nbsp;&nbsp;&nbsp;</p></div><p>{e.userPoint} XP</p>
                </div> 
                : (i === 1) ?
                <div key={i} className={css.users}>
                <div style={{display:'flex'}}>2&nbsp;&nbsp;<p>{e.name}</p></div><p>{e.userPoint} XP</p>
                </div>
                : (i === 2) ?
                <div key={i} className={css.users}>
                <div style={{display:'flex'}}>3&nbsp;&nbsp;<p>{e.name}</p></div><p>{e.userPoint} XP</p>
                </div>
                :
                <div key={i} className={css.users}>
                <p>{e.name}</p><p>{e.userPoint} XP</p>
                </div>
                }
                
                <div className={css.hr}/>
                </div>
                
            ))}
            
            </section> */}
      </div>
      <div className={css.container}>
        {add1.map((e, i) => (
          <div className={css.card} key={i}>
            <div className={css.head2}>
              <div style={{ display: "flex" }}>
                <img src={img} alt="box" className={css.box} />
                <div className={css.headIteam}>
                  <h4>{e.author}</h4>
                  <TimeAgo style={{ fontSize: 12 }} date={e.createdAt} />
                </div>
              </div>
              <div style={{ alignIteams: "start" }}>
                <BiCommand style={{ fontSize: "20px" }} />
              </div>
            </div>
            {/* <img
              src={
                "https://template.canva.com/EAFNd1JnDes/4/0/400w-RFC4kVyOJUU.jpg"
              }
              alt="box"
            /> */}

            {e.name === "jhg" || "neghoyr" ? (
              <h5 className={css.content}>{e.content.join(" ")}</h5>
            ) : (
              <h5 className={css.content}>{e.content}</h5>
            )}
            {/* <h5 className={css.content}>{e.content}</h5> */}

            <div className={css.head3}>
              {/* <VariableWidth text={e.name} title={e.content} /> */}
              <h5>{e.name}</h5>
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

const Submenu = (props) => {
  return (
    <h4 className="nav__submenu">
      <div className={css.hovers}>
        <p>{props.parametr}</p>
      </div>
    </h4>
  );
};
