import React, { Component } from "react";
import css from "./style.module.css";
import axios from "../../api/index";
import Loading from "../../components/loading";
import RouterPage from "../routerPage";

class FirstPage extends Component {
  state = {
    loading: false,
  };

  componentDidMount = () => {
    this.setState({ loading: true });
    axios
      .get("/api/v1/quiz")
      .then((response) => {
        const arr = Object.entries(response.data);
        arr.forEach((el) => {
          console.log("===>>" + el[1].question);
        });
        this.setState({ loading: false });
      })
      .catch((err) => {
        console.error("aldaa : " + err);
      });
  };

  render() {
    return (
      <div className={css.all1}>
        {this.state.loading && (
          <Loading className={css.loading} loading={this.state.loading} />
        )}
        <RouterPage />
      </div>
    );
  }
}

export default FirstPage;
