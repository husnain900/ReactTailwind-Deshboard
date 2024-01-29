import * as React from 'react';
import { RxCrossCircled } from 'react-icons/rx';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import { Button } from '@mui/material';

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
      <Button onClick={handleClickOpen} className="red-border">
        <img src="images/Q&A/Vector.png" alt="" style={{ margin: 0 }} />
      </Button>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
        className="p-5"
      >
        <DialogTitle className="text-center">
          <RxCrossCircled className="text-[#F27474] mx-auto" size={90} />
        </DialogTitle>
        <DialogContent>
          <DialogContentText
            id="alert-dialog-slide-description"
            className="text-center"
          >
            <h3 className="text-gray-500 text-2xl">تنبيـــــه</h3>
            هل أنت متأكد من أنك تريد حذف المنشور؟
          </DialogContentText>
        </DialogContent>
        <DialogActions style={{ justifyContent: 'center' }}>
          <button
            className="bg-[#baf3e6] text-[#004d5a] active:bg-emerald-600 uppercase text-sm px-6 py-2 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
            type="button"
            onClick={handleClose}
          >
            حذف{' '}
          </button>
          <button
            className="text-gray-500 bg-gray-300 hover:shadow-md px-6 py-2 rounded-md text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
            type="button"
            onClick={handleClose}
          >
            إغلاق
          </button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}
