import * as React from 'react';
import Demo from './demo.jsx';
import game from './style.module.css';

const Game1 = ()=> {
  const [val, setVal] = React.useState(false);

  return (
    <div v className={game.body} >
      <div style={{color:'white',justifyContent:'flex-end',border:'1px solid grey',borderRadius:'3px',padding:'5px',width:'90%',marginBottom:'10px'}}>Merhab benim admin hvzeyir.Senin adin ne?</div>
      <div style={{justifyContent:'flex-start',width:'90%',marginLeft:'10%',marginBottom:'10px'}}><Demo val={setVal}/></div>
      {val && <div className={game.mes} style={{color:'white',justifyContent:'flex-end',width: '90%',border:'1px solid grey',borderRadius:'3px',marginBottom:'10px'}}>Merhab benim admin hvzeyir.Senin adin ne?</div>}
    </div>
  );
}

export default Game1;