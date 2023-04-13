import React, { useState } from "react";
import css from "./style.module.css";
import { connect } from "react-redux";
import { cloudSaveBooks } from "../../redux/action/cloudSelect";

function Post(props) {
  const [title, setTitle] = useState("");
  // const [author, setAuthor] = useState("");
  const [description, setDescription] = useState("");
  const userData = JSON.parse(localStorage.getItem("userData"));
  const { name } = userData.user;

  const a1 = {
    name: title,
    photo: "uzrg",
    author: name,
    rating: 5,
    price: 2470,
    balance: 3,
    content: description,
    bestseller: true,
    available: ["old"],
    category: "5e90434cd433fa11b078ed8a",
  };

  const post = () => {
    props.button();
    props.cloudSaveBooks(
      a1.name,
      a1.photo,
      a1.author,
      a1.rating,
      a1.price,
      a1.balance,
      a1.content,
      a1.bestseller,
      a1.available,
      a1.category
    );
  };
  return (
    <div>
      <div className={css.createPost}>
        {/* <button onClick={props.button}>X</button> */}
        <div className={css.container}>
          <h1>Create a Post</h1>
          <hr />
          <label>
            <b className={css.b}>Title:</b>
          </label>
          <input
            onChange={(e) => setTitle(e.target.value)}
            className={css.text}
            type="text"
            placeholder="Enter Title"
          />

          <label>
            <b className={css.b}>Description:</b>
          </label>
          <input
            onChange={(e) => setDescription(e.target.value)}
            className={css.text}
            type="text"
            placeholder="Enter Description"
          />

          {/* <label for="file-upload">
            <b>Choose a file:</b>
          </label>
          <label className={css.file}>
            <input type="file" id="file" aria-label="File browser example" />
            <span className={css.fileCustom}></span>
          </label> */}
          <div style={{ display: "flex" }}>
            <button
              style={{ background: "darkgreen" }}
              type="submit"
              className={css.submitbtn}
              onClick={post}
            >
              SUBMIT
            </button>
            &nbsp;&nbsp;&nbsp;&nbsp;
            <button
              style={{ background: "darkred" }}
              className={css.submitbtn}
              onClick={props.button}
            >
              CLOUSE POST
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
// const getaction = (state) => {
//   return {
//     loading: state.cloudReducer.loading,
//     error: state.cloudReducer.error,
//     BackData: state.cloudReducer.BackData,
//   };
// };
const actionTsatsruulagch = (dispatch) => {
  return {
    cloudSaveBooks: (
      name,
      photo,
      author,
      rating,
      price,
      balance,
      content,
      bestseller,
      available,
      category
    ) =>
      dispatch(
        cloudSaveBooks(
          name,
          photo,
          author,
          rating,
          price,
          balance,
          content,
          bestseller,
          available,
          category
        )
      ),
  };
};
export default connect(null, actionTsatsruulagch)(Post);
