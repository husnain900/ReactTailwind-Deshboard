import * as React from 'react';
import { FaAngleLeft, FaTimes } from 'react-icons/fa';
import { GoAlert } from 'react-icons/go';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

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
  const [age, setAge] = React.useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };
  const BootstrapDialog = styled(Dialog)(({ theme }) => ({
    '& .MuiDialogContent-root': {
      padding: theme.spacing(2),
    },
    '& .MuiDialogActions-root': {
      padding: theme.spacing(1),
    },
    width: '80%', // Set the width to 70%
    margin: 'auto', // Center the dialog
  }));

  return (
    <React.Fragment>
      <div
        onClick={handleClickOpen}
        className="wp-md-sc-row-body-sb-row-sub cursor-pointer justify-between items-center"
      >
        <div className="flex items-center gap-4">
          <img src="images/Wallet/sound-module-line.png" alt="" />
          <div className="wp-md-sc-row-body-sb-row-col">
            <h3>طريقة الدفع الإفتراضية</h3>
            <p>البطاقة الإئتمانية</p>
          </div>
        </div>
        <FaAngleLeft />
      </div>
      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
        maxWidth={false}
        PaperProps={{ style: { width: '70%', margin: 'auto' } }}
      >
        {' '}
        <div className="flex items-start items-center modal-header justify-between px-4 py-2 rounded-t">
          <h3>طريقة الدفع الإفتراضية</h3>
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
          <div className="wl-mdl-row">
            <div className="wl-mdl-alert">
              <GoAlert size={20} className="text-[#AA6100]" />
              <h3>
                إذا كان الرصيد غير كافٍ في طريقة الدفع الأساسية، ستتم معالجة
                عملية الدفع عبر طريقة الدفع البديلة.
              </h3>
            </div>
          </div>
          <div className="wl-mdl-row">
            <div className="wl-mdl-cntnt">
              <p>اختر طريقة الدفع الأساسية</p>
              <FormControl sx={{ width: '100%' }} size="small">
                <InputLabel id="demo-simple-select-label">
                  لبطاقة الإئتمانية
                </InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={age}
                  label="لبطاقة الإئتمانية"
                  onChange={handleChange}
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  <MenuItem value={10}>Option 1</MenuItem>
                  <MenuItem value={20}>Option 2</MenuItem>
                  <MenuItem value={30}>Option 3</MenuItem>
                </Select>
              </FormControl>
            </div>
          </div>
          <div className="wl-mdl-row">
            <div className="wl-mdl-cntnt">
              <p>اختر طريقة الدفع البديلة</p>
              <FormControl sx={{ width: '100%' }} size="small">
                <InputLabel id="demo-simple-select-label">المحفظة</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={age}
                  label="المحفظة"
                  onChange={handleChange}
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  <MenuItem value={10}>
                    المحفظة ( رصيد المتجر والمدفوعات الإلكترونية )
                  </MenuItem>
                  <MenuItem value={20}>Option 2</MenuItem>
                  <MenuItem value={30}>Option 3</MenuItem>
                </Select>
              </FormControl>
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
