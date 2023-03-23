import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import {BiCommand,BiSpreadsheet} from "react-icons/bi";
import css from "./style.module.css";
import img from "../../assets/emoji7.png";
import TimeAgo from "react-timeago";


export default function ScrollDialog(props) {
  const [open, setOpen] = React.useState(false);
//   const [scroll, setScroll] = React.useState('paper');

  const handleClickOpen = () => () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const descriptionElementRef = React.useRef(null);
  React.useEffect(() => {
    if (open) {
      const { current: descriptionElement } = descriptionElementRef;
      if (descriptionElement !== null) {
        descriptionElement.focus();
      }
    }
  }, [open]);

  return (
    <div>
      <BiSpreadsheet style={{ fontSize: "20px"}}  onClick={handleClickOpen()}/>
      
      <Dialog
        open={open}
        onClose={handleClose}
        scroll={'paper'}
        aria-labelledby="scroll-dialog-title"
        aria-describedby="scroll-dialog-description"
      >
        
                    <>
                <div className={css.head2} style={{color:'black'}}>
              <div style={{ display: "flex" }}>
                <img src={img} alt="box" className={css.box} />
                <div className={css.headIteam}>
                  <h4>Amdin</h4>
                  <TimeAgo style={{ fontSize: 12 }} date={'2023-03-06T14:30:53.418+00:00'} />
                </div>
              </div>
              <div style={{ alignIteams: "start" }}><Button onClick={handleClose}>Kapat</Button>
              </div>
              
            </div>
        <DialogContent dividers={true} ref={descriptionElementRef}>
              {props.com === "" ? <><strong>Yenge</strong> = Senin amcanın karı <br />
              <strong>Baldız</strong> = Senin karının kız kardeşi <br />
              <strong>Torun</strong> = sen anneannenin torunusun
              </> : props.com}  
        </DialogContent>
        </>
      </Dialog>
    </div>
  );
}
