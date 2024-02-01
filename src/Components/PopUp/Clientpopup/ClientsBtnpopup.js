import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import * as React from 'react';
import { FaTimes } from 'react-icons/fa';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import { CiCirclePlus } from 'react-icons/ci';
import CountrySelect from './Countryinput';
import Datepickerpopup from '../../Pages/Ui-components/Datepickerpopup';
import './ClientBtnpopup.css';

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

  return (
    <React.Fragment>
      <Button onClick={handleClickOpen} className="btn-hover common-btn">
        <a className="flex gap-2 items-center" href="/#">
          <CiCirclePlus size={27} /> عميل جديد
        </a>
      </Button>
      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <div className="flex items-start items-center modal-header justify-between px-4 py-2 rounded-t">
          <h3>انشاء عميل جديد</h3>
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
        <DialogContent>
          <div className="wl-mdl-sub-body">
            <div className="wl-mdl-cntnt-form">
              <FormControl
                sx={{ minWidth: 120 }}
                size="small"
                className="w-full"
              >
                <InputLabel id="demo-select-small-label">
                  {' '}
                  نوع العميل
                </InputLabel>
                <Select
                  labelId="demo-select-small-label"
                  id="demo-select-small"
                  value={age}
                  label="Age"
                  onChange={handleChange}
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  <MenuItem value={10}>العملاء الاكثر شرائاً</MenuItem>
                  <MenuItem value={20}>عملاء اصحاب ولاء مرتفع</MenuItem>
                  <MenuItem value={30}>الفئة الماسية</MenuItem>
                </Select>
              </FormControl>
            </div>
            <div className="wl-mdl-row">
              <div className="wl-mdl-cntnt-form">
                <p>الاسم الأول</p>
                <div className="fm-sub-fields-lr">
                  <label></label>
                  <input
                    type="text"
                    name=""
                    dir="rtl"
                    placeholder="الاسم الأول"
                    className="border border-gray-300 rounded-md p-2 w-full"
                  />
                </div>
              </div>
            </div>
            <div className="wl-mdl-row">
              <div className="wl-mdl-cntnt-form">
                <p>اسم العائلة</p>
                <div className="fm-sub-fields-lr">
                  <label></label>
                  <input
                    type="text"
                    name=""
                    dir="rtl"
                    placeholder="اسم العائلة"
                    className="border border-gray-300 rounded-md p-2 w-full"
                  />
                </div>
              </div>
            </div>
            <div className="wl-mdl-row">
              <div className="wl-mdl-cntnt-form">
                <p>البريد الالكتروني</p>
                <div className="fm-sub-fields-lr">
                  <label></label>
                  <input
                    type="text"
                    name=""
                    dir="rtl"
                    placeholder="البريد الالكتروني"
                    className="border border-gray-300 rounded-md p-2 w-full"
                  />
                </div>
              </div>
            </div>
            <div className="wl-mdl-row">
              <label className="block text-sm font-medium text-gray-700">
                الدولة
              </label>
              <div className="flex gap-4">
                <div className="wl-mdl-cntnt-form wl-smm-field ">
                  <CountrySelect />
                </div>
                <div className="wl-mdl-cntnt-form wl-smm-field">
                  <input
                    type="text"
                    name=""
                    dir="rtl"
                    placeholder="54xxxxx"
                    className="border border-gray-300 rounded-md p-2 w-full"
                  />
                </div>
              </div>
            </div>
            <div className="wl-mdl-row">
              <div className="border border-gray-300 rounded-md">
                <Datepickerpopup />
              </div>
            </div>
            <div className="wl-mdl-row">
              <div className="wl-mdl-cntnt-form">
                <p>اسم العائلة</p>
                <div className="fm-sub-fields-lr">
                  <label></label>
                  <input
                    type="text"
                    name=""
                    dir="rtl"
                    placeholder="اسم العائلة"
                    className="border border-gray-300 rounded-md p-2 w-full"
                  />
                </div>
              </div>
            </div>
          </div>
        </DialogContent>
        <DialogActions
          style={{ justifyContent: 'right' }}
          className="flex items-center py-3 px-4 bg-gray-200 border-t py-2  rounded-b"
        >
          <button
            className="bg-[#baf3e6] text-[#004d5a] active:bg-emerald-600 uppercase text-sm px-6 py-2 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
            type="button"
            onClick={handleClose}
          >
            حفظ
          </button>
        </DialogActions>
      </BootstrapDialog>
    </React.Fragment>
  );
}
