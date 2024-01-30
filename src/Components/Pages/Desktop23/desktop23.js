import * as React from 'react';
import './desktop23.css';
import { IoCheckmarkOutline } from 'react-icons/io5';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

const StoreApproval = () => {
  const [age, setAge] = React.useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };
  const storesData = [
    { name: 'متجر 1', number: '70322877#' },
    { name: 'متجر 1', number: '70322877#' },
    { name: 'متجر 1', number: '70322877#' },
    { name: 'متجر 1', number: '70322877#' },
    { name: 'متجر 1', number: '70322877#' },
    { name: 'متجر 1', number: '70322877#' },
    { name: 'متجر 1', number: '70322877#' },
  ];
  const rowsData = [
    { title: 'مخازن مسجلة', subTitle: 'ستة وخمسون' },
    { title: 'تم التحقق من المخازن', subTitle: 'ستة وخمسون' },
  ];

  const renderRow = (row, index) => (
    <div key={index} className="dk-23-fst-row-col">
      <h2>{row.title}</h2>
      <div className="dk-23-fst-row-sub-col">
        <h3>{row.subTitle}</h3>
      </div>
    </div>
  );

  return (
    <div>
      <div className=" rightsixtyWidthStyle dk-23-fst-row grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 gap-9 w-full lg:w-2/3 md:w-3/4 mx-auto mt-5">
        {rowsData.map((row, index) => renderRow(row, index))}
      </div>
      <div className="rightfiftytwoWidthStyle dk-23-scnd-row">
        <h2>موافقة المخازن</h2>
        <div className="dk-23-scnd-sub-row ">
          {storesData.map((store, index) => (
            <div key={index} className="dk-23-cl-rows">
              <div className="dk-23-cl-sub-rows">
                <div className="dk-23-cl-sub-rows-col">
                  <div className="dk-23-cl-crcl">
                    <IoCheckmarkOutline />
                  </div>
                  <div className="dk-23-cl-txt">
                    <h4>{store.name}</h4>
                    <p>{store.number}</p>
                  </div>
                </div>
                <div className="dk-23-cl-sub-rows-col">
                  <button>يعتمد</button>
                  <button id="dk-23-cl-btn">يرفض</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="dk-23-thrd-row rightHalfWidthStyle">
        <div className="dk-23-thrd-row-sub">
          <Box className="mb-9" sx={{ minWidth: 120 }}>
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">اختر المتجر</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={age}
                label="اختر المتجر"
                onChange={handleChange}
              >
                <MenuItem value={10}>اختر المتجر</MenuItem>
                <MenuItem value={20}>اختر المتجر</MenuItem>
                <MenuItem value={30}>اختر المتجر</MenuItem>
              </Select>
            </FormControl>
          </Box>

          <h2>أدخل المبلغ لتحصيل المبلغ أو إصلاحه</h2>
          <input type="text" name="" placeholder="  يدخل  كمية/نسبة مئوية" />
          <button>تعيين</button>
        </div>
      </div>
    </div>
  );
};

export default StoreApproval;
