import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import {BiCommand,BiCommentDetail} from "react-icons/bi";
import css from "./style.module.css";
import img from "../../assets/emoji4.png";
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
      <BiCommentDetail style={{ fontSize: "20px" }}  onClick={handleClickOpen()}>scroll=paper</BiCommentDetail>
      
      <Dialog
        open={open}
        onClose={handleClose}
        scroll={'paper'}
        aria-labelledby="scroll-dialog-title"
        aria-describedby="scroll-dialog-description"
      >
        {/* <DialogTitle id="scroll-dialog-title">Subscribe</DialogTitle> */}
        {/* {[...new Array(1)]
              .map(
                () =>{ */}
                    <>
                <div className={css.head2}>
              <div style={{ display: "flex" }}>
                <img src={img} alt="box" className={css.box} />
                <div className={css.headIteam}>
                  <h4>{props.author}</h4>
                  <TimeAgo style={{ fontSize: 12 }} date={'2023-02-27T21:54:52.355+00:00'} />
                </div>
              </div>
              <div style={{ alignIteams: "start" }}>
                <BiCommand style={{ fontSize: "20px" }} />
              </div>
              
            </div>
        <DialogContent dividers={true}>
          <DialogContentText
            id="scroll-dialog-description"
            ref={descriptionElementRef}
            tabIndex={-1}
          >
              {props.com}  <strong>ha</strong>
            {/* {[...new Array(1)]
              .map(
                () => `Cras mattis consectetur purus sit amet fermentum.
Cras justo odio, dapibus ac facilisis in, egestas eget quam.
Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
Praesent commodo cursus magna, vel scelerisque nisl consectetur et.`,
              )
              .join('\n')} */}
              
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          {/* <Button onClick={handleClose}>Subscribe</Button> */}
        </DialogActions>
        </>
      </Dialog>
    </div>
  );
}
