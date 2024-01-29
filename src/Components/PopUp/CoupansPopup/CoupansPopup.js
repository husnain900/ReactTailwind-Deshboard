import * as React from "react";
import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import Typography from "@mui/material/Typography";
import { FaTimes } from "react-icons/fa";
import { BiSolidCoupon } from "react-icons/bi";

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
  },
}));

export default function CustomizedDialogs() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <React.Fragment>
      <ul className="top-11 right-0 absolute bg-white rounded-lg shadow-lg p-1 w-44">
        <li className="hover:bg-gray-200 border-b border-gray-300 Hover:rounded-lg ">
          <a
            onClick={handleClickOpen}
            className="Hover:text-[#78E8CE] text-[#004956] p-2 flex gap-2 items-center "
            href="#"
          >
            <BiSolidCoupon size={12} />
            كوبون جديد
          </a>
        </li>
        <li className="hover:bg-gray-200  Hover:rounded-lg ">
          <a
            onClick={handleClickOpen}
            className="Hover:text-[#78E8CE] text-[#004956] p-2 flex gap-2 items-center "
            href="#"
          >
            <BiSolidCoupon size={12} />
            مجموعة كوبونات
          </a>
        </li>
      </ul>
      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <div className="flex items-start items-center modal-header justify-between px-4 py-2 rounded-t">
          <h3>جميع العملاء</h3>
          <button
            className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
            onClick={handleClose}
          >
            <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none"></span>
          </button>
          <button
            className="background-transparent font-bold uppercase text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
            type="button"
            onClick={handleClose}
          >
            <FaTimes />
          </button>
        </div>
        <DialogContent dividers>
          <Typography gutterBottom>
            Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
            dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta
            ac consectetur ac, vestibulum at eros.
          </Typography>
          <Typography gutterBottom>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur et.
            Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor
            auctor.
          </Typography>
          <Typography gutterBottom>
            Aenean lacinia bibendum nulla sed consectetur. Praesent commodo
            cursus magna, vel scelerisque nisl consectetur et. Donec sed odio
            dui. Donec ullamcorper nulla non metus auctor fringilla.
          </Typography>
        </DialogContent>
        <DialogActions
          style={{ justifyContent: "space-between" }}
          className="flex items-center py-3 px-4 bg-gray-200 border-t py-2  rounded-b"
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
            إغلاق
          </button>
        </DialogActions>
      </BootstrapDialog>
    </React.Fragment>
  );
}
