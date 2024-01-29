import React, { useState } from 'react';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import Button from '@mui/material/Button';

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(2),
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(1),
  },
  '& .MuiPaper-root': {
    maxWidth: '80%',
    width: '80%',
  },
}));

export default function CustomizedDialogs() {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <React.Fragment>
      <Button variant="outlined" onClick={handleOpen}>
        Open dialog
      </Button>
      <BootstrapDialog onClose={handleClose} open={open}>
        <div className="h-5 modal-header rounded-t"></div>
        <DialogContent dividers className="srcollstyle py-3">
          <h4 className="text-19 font-semibold">
            حدد الهدف الذي تطمح لتحقيقه في المبيعات 💵
          </h4>
          <form className="my-5">
            <input
              className="w-full px-4 text-sm border border-gray-300 rounded h-9"
              type="text"
              name=""
              id="jscvalue"
              placeholder="0"
              value=""
            />
          </form>
        </DialogContent>
        <DialogActions
          style={{ justifyContent: 'space-between' }}
          className="py-2 px-4 bg-gray-200 border-t rounded-b"
        >
          <button
            className="bg-[#baf3e6] text-[#004d5a] active:bg-emerald-600 uppercase text-sm px-6 py-2 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
            type="button"
            onClick={handleClose}
          >
            حفظ
          </button>
          <button
            className="text-gray-500 bg-gray-300 hover:shadow-md px-6 py-2 rounded-md text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
            type="button"
            onClick={handleClose}
          >
            تراجع
          </button>
        </DialogActions>
      </BootstrapDialog>
    </React.Fragment>
  );
}
