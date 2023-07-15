import React from "react";
import css from "./style.module.css";
import { BiExit } from "react-icons/bi";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import * as actions2 from "../../redux/action/signupActions";
import * as actions3 from "../../redux/action/loginActions";
import Box from '@mui/material/Box';
import AppBar from '@mui/material/AppBar';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import PropTypes from 'prop-types';
import SwipeableViews from 'react-swipeable-views';
import { useTheme } from '@mui/material/styles';
function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`action-tabpanel-${index}`}
      aria-labelledby={`action-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ pt: 3 }}>{children}</Box>}
    </Typography>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `action-tab-${index}`,
    'aria-controls': `action-tabpanel-${index}`,
  };
}



const IndexPage = (props) => {

  const theme = useTheme();
  const [value, setValue] = React.useState(0);
  // const [activeBtn, setActiveBtn] = React.useState(1);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };
  
  const logout = () => {
    props.logout();
    props.navigate("/");
  };
  const ders = [
    {
      bgColor: 'darkorange',
      buttonValue:'Sınava girmek',
      name: 'A1',
      url:"/A1",
      text:'şu an yok',
      bonus:Number(localStorage.getItem("konu"))+0.1,
      bonusValue:(p)=>{
        const bonusV = p*100/11
        return Math.floor(bonusV);
      },
    },{
      bgColor: 'darkorchid',
      buttonValue:'Sınava girmek',
      name: 'A2',
      url:"/A2",
      text:'2000P kazanın ve konulardan özel bir bonus alın!',
      bonus:0,
      bonusValue:(p)=>{
        const bonusV = p*100/2000
        return bonusV;
      },
    },{
      bgColor: 'darkturquoise',
      buttonValue:'Sınava girmek',
      name: 'B1',
      url:"/B1",
      text:'2000P kazanın ve konulardan özel bir bonus alın!',
      bonus:0,
      bonusValue:(p)=>{
        const bonusV = p*100/2000
        return bonusV;
      },
    },{
      bgColor: 'darkorange',
      buttonValue:'Sınava girmek',
      name: 'B2',
      url:"/B2",
      text:'2000P kazanın ve konulardan özel bir bonus alın!',
      bonus:0,
      bonusValue:(p)=>{
        const bonusV = p*100/2000
        return bonusV;
      },
    },{
      bgColor: 'darkorange',
      buttonValue:'Sınava girmek',
      name: 'C1',
      url:"/C1",
      text:'2000P kazanın ve konulardan özel bir bonus alın!',
      bonus:0,
      bonusValue:(p)=>{
        const bonusV = p*100/2000
        return bonusV;
      },
    }]
  const level = ['a','b','c','d','e']
    // transparent
  return (
    <Box>
      <div className={css.top}>
        <div className={css.head}>
          <div>📚&nbsp;&nbsp;Seviyeler</div>

          <BiExit className={css.icon1} onClick={logout} />
        </div>
      </div>
      <AppBar sx={{bgcolor:'transparent'}} position="static" color="default">
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          variant="fullWidth"
          aria-label="action tabs example"
        >
          <Tab sx={{p:'0 8px 0 0',outline:'none'}}label={<div className={value !== 0 ? css.button1 : css.button2}>PRATIK</div>} {...a11yProps(0)} />&nbsp;&nbsp;
          <Tab sx={{p:'0 0 0 8px'}} label={<div className={value !== 0 ? css.button2 : css.button1}>EZBERLE</div>} {...a11yProps(1)} />
        </Tabs>
      </AppBar>
      <SwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={value}
        onChangeIndex={handleChangeIndex}
      >
        <TabPanel sx={{padding:'0',margin:'0'}} value={value} index={0} dir={theme.direction}>
        <div className={css.row}>
          
          {ders.map((e,i) => (
          <div className={css.column} key={i}>
          <Link to={e.bonus && e.url}><div className={css.card} style={e.bonus === 0 ? {opacity:'0.3'} : {opacity:'1'}}>
            <div style={{background: e.bgColor}} className={css.cardTop1}>
            <div>
             <div className={css.cardButton}>Ders</div>
                <h3 className={css.h3}>{e.name} Konuları</h3>
                <p className={css.p}>{e.text}</p>
            </div>
            <div>
              <img className={css.bg} src={`https://api.dicebear.com/6.x/initials/svg?seed=${e.name}`} alt="emoji" />
            </div>
            </div>
            <div className={css.cardBottom}>
              <div className={css.container}>
                <div style={{width:`${e.bonusValue(e.bonus)}%`}} className={css.bonus}></div>
              </div>
              <div className={css.cardItem1}><h4 className={css.cardItemH3}>{e.bonusValue(e.bonus)*10}/1000</h4><p>0 min</p></div>
              {/* <div className={css.hr} /> */}
              {/* <div className={css.cardItem1}><h4>Başla !</h4><p>〉</p></div> */}
            </div>
          </div></Link>
          </div>
          ))}

  </div>
        </TabPanel>
        <TabPanel value={value} index={1} dir={theme.direction}>
        <section style={{width:'100%',height:'auto',display:'flex',borderRadius:'10px',flexDirection:'column',background:'#262731'}}>
          <div className={css.unite}  >
            <div>
            <h2>1. Ünite</h2>
            <p>Kişileri betimle, yiyecekleri adlandır</p>
            </div>
            <BiExit className={css.uniteIcon}/>
          </div>
          <div style={{width:'100%',height:'100%',display:'flex',flexDirection:'column',padding:"10px"}}> 
               
                <img className={css.imgI} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEzfBQAxZkt9VsnjPQ4jjESDDM0PYItqPVUQ&usqp=CAU" alt="3D" />
              
              {level.map((e,i)=><button className={css.uniteBox} key={i}><span >{e}</span></button>)}
          </div>
          
        </section>
        </TabPanel>
      </SwipeableViews>
    </Box>
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
