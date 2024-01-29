import * as React from 'react';
import { CiCircleAlert } from 'react-icons/ci';

import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import CircularProgress from '@mui/material/CircularProgress';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function AlertDialogSlide() {
  const [open, setOpen] = React.useState(false);
  const [loading, setLoading] = React.useState(false);

  const handleClickOpen = () => {
    setLoading(true);
    setTimeout(() => {
      setOpen(true);
      setLoading(false);
    }, 1000); // Open the dialog after 1 second
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <React.Fragment>
      <span onClick={handleClickOpen}>
        {loading ? <CircularProgress size={18} /> : null} اربط منتجاتك بمحلي
      </span>

      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
        className="p-5"
        maxWidth={false}
        PaperProps={{ style: { width: '40%', margin: 'auto' } }}
      >
        <DialogTitle className="text-center">
          <CiCircleAlert className="text-[#FACEA8] mx-auto" size={90} />
        </DialogTitle>
        <DialogContent>
          <DialogContentText
            id="alert-dialog-slide-description"
            className="text-center"
          >
            <h3 className="text-gray-500 text-2xl">تعذّر ربط متجرك بمحلي</h3>
            <h4 className="text-gray-400 font-light text-sm">
              لا يمكن ربط المتاجر التجريبية بمحلي
            </h4>
          </DialogContentText>
        </DialogContent>
        <DialogActions style={{ justifyContent: 'center' }}>
          <button
            className=" hover:shadow-md px-6 py-2 rounded-md text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
            type="button"
            onClick={handleClose}
            style={{
              backgroundColor: '#999999',
              color: 'white',
              marginBottom: '20px',
            }}
          >
            العودة
          </button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}
