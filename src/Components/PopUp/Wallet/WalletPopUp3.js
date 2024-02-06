import * as React from 'react';
import { FaAngleLeft, FaTimes } from 'react-icons/fa';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(2),
  },
  '& .MuiDialogActions-root': {
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
      <div
        onClick={handleClickOpen}
        className="wp-md-sc-row-body-sb-row-sub cursor-pointer justify-between items-center"
      >
        <div className="flex items-center gap-4">
          <img src="images/Wallet/discuss-line.png" alt="" />
          <div className="wp-md-sc-row-body-sb-row-col">
            <h3 className='dark-a'>البريد الإلكتروني لاستلام الفواتير</h3>
            <p>demo@salla.sa</p>
          </div>
        </div><FaAngleLeft  className="dark-a" />
      </div>
      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
        maxWidth={false}
        PaperProps={{ style: { width: '60%', margin: 'auto' } }}
      >
        {' '}
        <div className="flex items-start items-center modal-header justify-between px-4 py-2 rounded-t">
          <h3>البريد الإلكتروني لاستلام الفواتير</h3>
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
          <div className="p-5">
            <div className="mb-5">
              <div className="text-bold text-lg">
                <h3>إضافة البريد الإلكتروني الرسمي لاستلام الفواتير</h3>
              </div>
              <p className="text-gray-600">
                سيتم إرسال الفواتير الشهريه وفواتير المدفوعات الإلكترونية إلى
                هذا البريد الإلكتروني
              </p>
            </div>
            <div className="mb-5">
              <div>
                <div className="relative">
                  <label>البريد الإلكتروني</label>
                  <img
                    src="./images/envlop.png"
                    className="absolute top-9 right-2"
                    alt="Icon"
                    style={{
                      width: '20px',
                      marginTop: '-3px',
                    }}
                  />
                  <input
                    type="text"
                    name=""
                    dir="rtl"
                    placeholder="demo@salla.sa"
                    className="border border-gray-300 rounded px-8 py-2 w-full"
                  />
                </div>
              </div>
            </div>
          </div>
        </DialogContent>
        <DialogActions
          style={{ justifyContent: 'space-between' }}
          className="py-3 px-4 bg-gray-200 border-t py-2 rounded-b"
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
