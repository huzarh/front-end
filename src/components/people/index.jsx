import React from "react";
import css from "./style.module.css"
import { BiArrowBack ,BiSearch} from "react-icons/bi";
import { Link } from "react-router-dom";


const Peaple=()=>{
    return(
        <div className={css.all}>
            <div className={css.head}>
              <div className={css.head1}><Link to="/profile"><BiArrowBack className={css.icon1}/></Link>&nbsp;&nbsp;Users</div>
               <BiSearch />
               
            </div>
            <div className={css.userbox}><p>HUAsa</p> </div>
        </div>
    )
}
export default Peaple;