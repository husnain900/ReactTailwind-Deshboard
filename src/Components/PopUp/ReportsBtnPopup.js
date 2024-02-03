import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import { IoCheckmarkCircleOutline } from 'react-icons/io5';
import { IoArrowRedoOutline } from 'react-icons/io5';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function AlertDialogSlide() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <React.Fragment>
      <Button onClick={handleClickOpen} className="flex dark-border dark-a gap-2 items-center">
        <IoArrowRedoOutline />
        تاريخ التقرير
      </Button>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
        maxWidth={false}
        PaperProps={{
          style: {
            // width: '35%',
            margin: 'auto',
            textAlign: 'center',
          },
        }}
      >
        <DialogTitle className="text-center">
          <IoCheckmarkCircleOutline
            size={90}
            className="text-[#A5DC86] mx-auto"
          />
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
            سوف يتم ارسال التقرير علي بريدك الإلكتروني بعد قليل
          </DialogContentText>
        </DialogContent>
        <DialogActions style={{ justifyContent: 'center' }}>
          <button
            className="bg-[#baf3e6] text-[#004d5a] mb-2 active:bg-emerald-600 uppercase text-sm px-6 py-2 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
            onClick={handleClose}
          >
            موافق
          </button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}
