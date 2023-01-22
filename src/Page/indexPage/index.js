import React, { Component } from "react";
import css from "./style.module.css";
import Menu from "../../components/Menu";
import { BiExit } from "react-icons/bi";
import { Link } from "react-router-dom";

class IndexPage extends Component {
  state = {};

  render() {
    return (
      <>
        <div className={css.all}>
          <div className={css.top}>
            <div className={css.head}>
              <div>💟&nbsp;&nbsp;Challenge</div>
              <Link to="/login">
                <BiExit className={css.icon1} />
              </Link>
            </div>
            <div className={css.button}>
              <button className={css.button1}>Target</button>
              &nbsp;&nbsp;
              <button className={css.button2}>Badges</button>
            </div>
          </div>
          <section className={css.section}>
            <div className={css.head1}>
              <div>This Year</div> <h5 className={css.p}>3 badges</h5>
            </div>
            <div className={css.hr} />
            <div>
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
            </div>
          </section>
          {/* / */}
          <section className={css.section}>
            <div className={css.head1}>
              <div>2022</div> <h5 className={css.p}>3 badges</h5>
            </div>
            <div className={css.hr} />
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
        <Menu />
      </>
    );
  }
}

export default IndexPage;
