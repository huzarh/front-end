import React, { useState } from "react";
import css from "./style.module.css";
// import Menu from "../../components/Menu";
import { BiExit } from "react-icons/bi";
// import * as actions from "../../redux/action/orderActions";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import * as actions2 from "../../redux/action/signupActions";
import * as actions3 from "../../redux/action/loginActions";
import axios from "../../api/index";

const IndexPage = (props) => {
  // const [ask,setAsk]=useState('');
  const logout = () => {
    props.logout();
    props.navigate("/");
  };
  const handleClick = () => {
    props.setMess(true);
  };
  return (
    <div className={css.all}>
      <div className={css.top}>
        <div className={css.head}>
          <div>💟&nbsp;&nbsp;Challenge</div>

          <BiExit className={css.icon1} onClick={logout} />
        </div>
        {/* <div className={css.button}>
            <button className={css.button1}>Target</button>
            &nbsp;&nbsp;
            <button className={css.button2} onClick={handleClick}>
              Badges
            </button>
          </div> */}
      </div>
      <div className={css.sections}>
        <section className={css.section}>
          <div className={css.head1}>
            <div>This Year</div> <h5 className={css.p}>6 badges</h5>
          </div>
          <div className={css.hr} />
          <div>
            <label>
              <Link to="/A1">
                <div className={css.lesson}>
                  <div className={css.d1}>
                    <div className={css.box1} />
                    <div className={css.lessonname}>
                      <h2>A1</h2>
                      <p className={css.p}>November&nbsp; ○ &nbsp;2000 XP</p>
                    </div>
                  </div>
                  <p>〉</p>
                </div>
              </Link>
            </label>
            <div className={css.hr} />
          </div>
          <div>
            <div className={css.lesson}>
              <div className={css.d1}>
                <div className={css.box2} />
                <div className={css.lessonname}>
                  <h2>A2</h2>
                  <p className={css.p}>July&nbsp; ○ &nbsp;1500 XP</p>
                </div>
              </div>
              <p>〉</p>
            </div>
            <div className={css.hr} />
          </div>
          <div>
            <div className={css.lesson}>
              <div className={css.d1}>
                <div className={css.box3} />
                <div className={css.lessonname}>
                  <h2>B1</h2>
                  <p className={css.p}>March&nbsp; ○ &nbsp;2500 XP</p>
                </div>
              </div>
              <p>〉</p>
            </div>
            <div className={css.hr} />
          </div>
          <div>
            <div className={css.lesson}>
              <div className={css.d1}>
                <div className={css.box1} />
                <div className={css.lessonname}>
                  <h2>B2</h2>
                  <p className={css.p}>November&nbsp; ○ &nbsp;2000 XP</p>
                </div>
              </div>
              <p>〉</p>
            </div>
            <div className={css.hr} />
          </div>
          <div>
            <div className={css.lesson}>
              <div className={css.d1}>
                <div className={css.box2} />
                <div className={css.lessonname}>
                  <h2>C1</h2>
                  <p className={css.p}>July&nbsp; ○ &nbsp;1500 XP</p>
                </div>
              </div>
              <p>〉</p>
            </div>
            <div className={css.hr} />
          </div>
          <div>
            <div className={css.lesson}>
              <div className={css.d1}>
                <div className={css.box3} />
                <div className={css.lessonname}>
                  <h2>C2</h2>
                  <p className={css.p}>March&nbsp; ○ &nbsp;2500 XP</p>
                </div>
              </div>
              <p>〉</p>
            </div>
          </div>
        </section>
        {/* / */}
        <section className={css.section}>
          <div className={css.head1}>
            <div>2022</div> <h5 className={css.p}>6 badges</h5>
          </div>
          <div className={css.hr} />
          {/* ======== */}

          <div>
            <label>
              <div className={css.lesson}>
                <div className={css.d1}>
                  <div className={css.box1} />
                  <div className={css.lessonname}>
                    <h2>A1</h2>
                    <p className={css.p}>November&nbsp; ○ &nbsp;2000 XP</p>
                  </div>
                </div>

                <p>〉</p>
              </div>
            </label>
            <div className={css.hr} />
          </div>
          <div>
            <div className={css.lesson}>
              <div className={css.d1}>
                <div className={css.box2} />
                <div className={css.lessonname}>
                  <h2>A2</h2>
                  <p className={css.p}>July&nbsp; ○ &nbsp;1500 XP</p>
                </div>
              </div>
              <p>〉</p>
            </div>
            <div className={css.hr} />
          </div>
          <div>
            <div className={css.lesson}>
              <div className={css.d1}>
                <div className={css.box3} />
                <div className={css.lessonname}>
                  <h2>B1</h2>
                  <p className={css.p}>March&nbsp; ○ &nbsp;2500 XP</p>
                </div>
              </div>
              <p>〉</p>
            </div>
            <div className={css.hr} />
          </div>

          {/* ======= */}
          <div>
            <div className={css.lesson}>
              <div className={css.d1}>
                <div className={css.box1} />
                <div className={css.lessonname}>
                  <h2>B2</h2>
                  <p className={css.p}>November&nbsp; ○ &nbsp;2000 XP</p>
                </div>
              </div>
              <p>〉</p>
            </div>
            <div className={css.hr} />
          </div>
          <div>
            <div className={css.lesson}>
              <div className={css.d1}>
                <div className={css.box2} />
                <div className={css.lessonname}>
                  <h2>C1</h2>
                  <p className={css.p}>July&nbsp; ○ &nbsp;1500 XP</p>
                </div>
              </div>
              <p>〉</p>
            </div>
            <div className={css.hr} />
          </div>
          <div>
            <div className={css.lesson}>
              <div className={css.d1}>
                <div className={css.box3} />
                <div className={css.lessonname}>
                  <h2>C2</h2>
                  <p className={css.p}>March&nbsp; ○ &nbsp;2500 XP</p>
                </div>
              </div>
              <p>〉</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    loading: state.cloudReducer.loading,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    autoLogin: (token, userId) =>
      dispatch(actions3.loginUserSuccess(token, userId)),
    logout: () => dispatch(actions2.logout()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(IndexPage);
