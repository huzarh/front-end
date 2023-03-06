
import React from "react";
import { BiCategory ,BiHomeAlt,BiUserCircle} from 'react-icons/bi';
import {useNavigate} from "react-router-dom";
import css from "./style.module.css"

const Menu =(props)=> {
    const navigate = useNavigate();
        
    // useEffect(() => {
    //   navigate("/index-page");
    // }, []);

    const Active = () => {
      navigate("/index-page");
    };
    const Active1 = () => {
      navigate("/posts");
      };
      const Active2 = () => {
        navigate("/profile");
      };
            // if (props.showSidebar) {
            //     classes = [css.Sidebar, css.Open];
            // }
    // }.join(" ")BiBadgeCheck,BiBarChartAlt2, research
        return(
            <div className={css.menu}>
                <div className={css.icons}>
                 <BiHomeAlt className={ window.location.pathname === '/index-page' ? css.active : css.icon} onClick={Active}/>
                {/* <BiBarChartAlt2 className={css.icon2}/> */}
                 <BiCategory  className={window.location.pathname === '/posts' ? css.active : css.icon} onClick={Active1}/>
                {/* <BiBadgeCheck className={css.icon4}/> */}
                 
                <BiUserCircle className={window.location.pathname === '/profile' ? css.active : css.icon} onClick={Active2}/>
                </div>
            </div>
        );
}

export default Menu;