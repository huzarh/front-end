import * as React from 'react';
import Dialog from '@mui/material/Dialog';
import Research1 from './index1';
import css from "./style.module.css";


export default function Research(props) {
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
      <button style={{ fontSize: "20px" }} className={css.cardButton}  onClick={handleClickOpen()}>Sinav</button>
      
      <Dialog
        open={open}
        // onClose={handleClose}
        scroll={'body'}
        aria-labelledby="scroll-dialog-title"
        aria-describedby="scroll-dialog-description"
      >
        <Research1 button={handleClose}/>
      </Dialog>
    </div>
  );
}
