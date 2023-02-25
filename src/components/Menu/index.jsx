
import React ,{useState,useEffect}from "react";
import { BiCategory ,BiHomeAlt,BiUserCircle} from 'react-icons/bi';
import {useNavigate} from "react-router-dom";
import css from "./style.module.css"

const Menu =(props)=> {
    const navigate = useNavigate();
        
    const [isClicked, setIsClicked] = useState([false]);
    const [isClicked1, setIsClicked1] = useState(false);
    const [isClicked2, setIsClicked2] = useState(false);
    useEffect(() => {
      navigate("/index-page");
    }, []);

    const Active = () => {
      navigate("/index-page");
      setIsClicked(true);
      setIsClicked1(false);
      setIsClicked2(false);
    };
    const Active1 = () => {
      navigate("/point");
        setIsClicked(false);
        setIsClicked1(true);
        setIsClicked2(false);
      };
      const Active2 = () => {
        navigate("/profile");
        setIsClicked(false);
        setIsClicked1(false);
        setIsClicked2(true);
      };
            // if (props.showSidebar) {
            //     classes = [css.Sidebar, css.Open];
            // }
    // }.join(" ")BiBadgeCheck,BiBarChartAlt2, research
        return(
            <div className={css.menu}>
                <div className={css.icons}>
                 <BiHomeAlt className={isClicked ? css.active : css.icon} onClick={Active}/>
                {/* <BiBarChartAlt2 className={css.icon2}/> */}
                 <BiCategory  className={isClicked1 ? css.active : css.icon} onClick={Active1}/>
                {/* <BiBadgeCheck className={css.icon4}/> */}
                 
                <BiUserCircle className={isClicked2 ? css.active : css.icon} onClick={Active2}/>
                </div>
            </div>
        );
}

export default Menu;