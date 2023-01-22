
import React,{Component} from "react";
import { BiBarChartAlt2,BiCategory ,BiBadgeCheck,BiHomeAlt,BiUserCircle} from 'react-icons/bi';
import { Link } from "react-router-dom";
import css from "./style.module.css"

class Menu extends Component {
    render(){
        return(
            <div className={css.all}>
                <div className={css.icons}>
                <BiHomeAlt className={css.icon1}/>
                <BiBarChartAlt2 className={css.icon2}/>
                <BiCategory  className={css.icon3}/>
                <BiBadgeCheck className={css.icon4}/>
                <Link to="/profile">
                <BiUserCircle className={css.icon5}/></Link>
                </div>
            </div>
        );
    }
}

export default Menu;