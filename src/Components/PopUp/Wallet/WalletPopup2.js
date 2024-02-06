import React, { useState } from 'react';
import { FaAngleLeft, FaTimes } from 'react-icons/fa';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import { CiCirclePlus, CiCircleMinus } from 'react-icons/ci';

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
  const [isAddMode, setIsAddMode] = useState(true);
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [cardNumber, setCardNumber] = useState('');
  const [expireDate, setExpireDate] = useState('');
  const [cardCVC, setCardCVC] = useState('');

  const handleButtonClick = () => {
    setIsAddMode((prevMode) => !prevMode);
    setIsPopupOpen((prevIsPopupOpen) => !prevIsPopupOpen);
  };

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
          <img src="images/Wallet/wallet-line.png" alt="" />
          <div className="wp-md-sc-row-body-sb-row-col">
            <h3 className='dark-a'>البطاقة الإئتمانية</h3>
            <p>
              أضِف جميع فروعك وأظهرها لعملائك عبر إضافة عدد غير محدود من فروع
              متجرك
            </p>
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
          <h3>البطاقة الإئتمانية</h3>
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
        <DialogContent dividers className="srcollstyle">
          <div className="p-5">
            <div className="mb-5">
              <div className="text-bold text-gray-700 text-lg">
                يتم استخدام البطاقة في عملية التجديد التلقائي للباقة دون الحاجة
                إلى شراء الباقة بشكل يدوي.
              </div>
            </div>
            <div className="mb-5">
              <ul className="pl-5">
                <li className="text-gray-600 text-sm mb-3">
                  سيتم استخدام البطاقة لتجديد الاشتراك في باقة المتجر وبقية
                  الاشتراكات المفعلة بشكل تلقائي في موعده، إلا إذا قمت بإلغاء
                  التجديد التلقائي.
                </li>
                <li className="text-gray-600 text-sm mb-3">
                  بإمكانك إضافة بطاقتين كحد أقصى، وتحديد بطاقة الدفع الأساسية
                  والبديلة.
                </li>
                <li className="text-gray-600 text-sm mb-3">
                  عند تعذّر تجديد الاشتراك تلقائيًا باستخدام طريقة الدفع
                  الأساسية، سيتم استخدام طريقة الدفع البديلة -إن وُجدت-.
                </li>
              </ul>
            </div>
            <div className="mb-5">
              <div className="text-bold text-gray-700 text-lg">
                البطاقات المضافة
              </div>
              <button
                className="text-blue-900 border border-teal-300 text-sm px-4 py-2 flex gap-2 items-center rounded-md bg-transparent mt-3"
                onClick={handleButtonClick}
              >
                {isAddMode ? (
                  <CiCirclePlus size={21} />
                ) : (
                  <CiCircleMinus size={21} />
                )}
                إضافة بطاقة جديدة
              </button>
            </div>
            <div>
              {isPopupOpen && (
                <div>
                  <form className="flex justify-between gap-3 w-full">
                    <label className="relative flex flex-col w-[60%]">
                      <input
                        className="rounded-md peer pl-12 pr-2 py-2 border-2 border-gray-200 placeholder-gray-300"
                        type="text"
                        name="card_number"
                        placeholder="0000 0000 0000"
                        value={cardNumber}
                        onChange={(e) => setCardNumber(e.target.value)}
                      />
                    </label>

                    <label className="relative  flex flex-col w-[20%]">
                      <input
                        className="rounded-md peer pl-12 pr-2 py-2 border-2 border-gray-200 placeholder-gray-300"
                        type="text"
                        name="expire_date"
                        placeholder="MM/YY"
                        value={expireDate}
                        onChange={(e) => setExpireDate(e.target.value)}
                      />
                    </label>

                    <label className="relative  flex flex-col w-[20%]">
                      <input
                        className="rounded-md peer pl-12 pr-2 py-2 border-2 border-gray-200 placeholder-gray-300"
                        type="text"
                        name="card_cvc"
                        placeholder="•••"
                        value={cardCVC}
                        onChange={(e) => setCardCVC(e.target.value)}
                      />
                    </label>
                  </form>
                  <form className="mt-4" action="">
                    <label className="chk-container text-gray-600 text-sm ">
                      <input type="checkbox" />
                      <span className="checkmark"></span>
                      أوافق على اتفاقية الاستخدام و سياسة الخصوصية
                    </label>
                    <button className=" hover:bg-[#76E8CD] px-3 py-2 mt-3 rounded-lg bg-[#BAF3E6] text-blue-900">
                      إضافة البطاقة
                    </button>
                  </form>
                </div>
              )}
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
