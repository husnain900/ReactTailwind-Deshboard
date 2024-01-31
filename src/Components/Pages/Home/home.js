import React, { useState } from 'react';
import { FaChevronLeft } from 'react-icons/fa';
import { FaAngleLeft } from 'react-icons/fa6';
import ChartsBars from '../Ui-components/Charts';
import {
  chartsData,
  ordersData,
  notificationsData,
  expiredProductsData,
} from '../../DevData/DevData';
import './home.css';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import { Link } from 'react-router-dom';
import { Button } from '@mui/material';
const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(2),
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(1),
  },
  '& .MuiPaper-root': {
    maxWidth: '45%',
    width: '45%',
  },
}));

const Home = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState(5000);

  const handleOpen = () => {
    setIsPopupOpen(true);
  };

  const handleClose = () => {
    setIsPopupOpen(false);
  };

  const handleBoxClick = (index) => {
    // setSelectedValue(chartsData[index].value);
    if (index === 3) {
      handleOpen();
    }
  };

  return (
    <div>
      <div className="alert-msg my-3">
        <a href="#" className="alert-box alert-box--linked alert-box--danger">
          <span className="notification-label">1</span>
          <article className="flex justify-between items-center w-full">
            <p>
              <b>شكاوي العملاء: </b>
              الرجاء الاطلاع والمتابعة لتجنب خصم المبالغ أو إيقاف الخدمة
            </p>
            <FaChevronLeft />
          </article>
        </a>
      </div>
      <div className="grid grid-cols-12 gap-5 sm:gap-7">
        <div className="col-span-12 md:col-span-12 lg:col-span-8">
          <div className="col-span-12 md:col-span-6 lg:col-span-8">
            <div className="chart flex flex-wrap">
              <div className="flex flex-col justify-between w-full lg:w-[55%]">
                <div className="chart-box-head py-2 px-5 flex justify-between items-center border-b border-gray-300">
                  <p>ملخص الشهر</p>
                  <p>مايو 2023</p>
                </div>
                <div className="chart-box-circles grid grid-cols-2 gap-7 lg:gap-4 p-4">
                  {chartsData.map((item, index) => (
                    <div
                      key={index}
                      className={`flex items-center gap-3 ${
                        index === 3 ? 'cursor-pointer' : ''
                      }`}
                      onClick={() => handleBoxClick(index)}
                    >
                      <div className="chart-box-circle">
                        <img src={item.icon} alt="" />
                      </div>
                      <div className="">
                        <h5 className="dark-text-light">
                          {item.id === 4 ? selectedValue : item.value}
                        </h5>
                        <h5 className="flex dark-text items-center gap-1">
                          {item.label} <span>{item.arrow}</span>{' '}
                        </h5>
                      </div>
                    </div>
                  ))}

                  {isPopupOpen && (
                    <BootstrapDialog onClose={handleClose} open={isPopupOpen}>
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
                            value={selectedValue}
                            onChange={(e) => setSelectedValue(e.target.value)}
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
                  )}
                </div>
                <div className="chart-footer h-12 flex justify-center items-center">
                  <Link to={'/reports'}>
                    <h5 className="flex items-center dark-text-light gap-3 hover:text-green-700">
                      المزيد من التقارير <FaAngleLeft size={12} />
                    </h5>
                  </Link>
                </div>
              </div>
              <div className="chartbox w-full lg:w-[45%] ">
                <ChartsBars />
              </div>
            </div>
          </div>
        </div>
        <div className="ALertTable col-span-12 md:col-span-12 lg:col-span-4">
          <div className="side-bx-container">
            <div className=" bx-sub-head tb-head-dark">
              <img src="images/Home/group_20.png" alt="" />
              <h2 className="dark-text ">التنبيهات</h2>
            </div>
            <div className="overflow-y-scroll table-scrol scrollstyle">
              {notificationsData.map((notification, index) => (
                <div
                  key={notification.id}
                  className={`bx-container-body ${
                    index === notificationsData.length - 1
                      ? ''
                      : 'border-b border-gray-300'
                  }`}
                >
                  <div className="bx-sub-body">
                    <div className="bx-cntn-item">
                      <img src={notification.userImageSrc} alt="" />
                    </div>
                    <div className="bx-cntn-text">
                      <h1>{notification.itemName}</h1>
                      <p>{notification.timeElapsed}</p>
                    </div>
                    <div className="bx-cntn-user">
                      <img src={notification.imageSrc} alt="" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        {/*  */}
        <div className="col-span-12 md:col-span-12 lg:col-span-8">
          <div className="panel">
            <div className="panel-head tb-head-dark px-8">
              <div className="flex items-center gap-4">
                <img src="images/Home/box.svg" alt="" srcset="" />
                <h5 className="dark-text">أحدث الطلبات</h5>
              </div>
            </div>
            <div className="table-container overflow-y-auto scrollstyle">
              <table className="table-auto w-full">
                <tbody>
                  {ordersData.map((order) => (
                    <tr key={order.id} className="border-b">
                      <td>
                        <img src="images/Home/User.svg" alt="" />
                      </td>
                      <td>
                        <p className="c-para pb-1">{order.name}</p>
                        <p>{order.orderNumber}</p>
                      </td>
                      <td>
                        <p>
                          {order.status === 'تم الشحن' && (
                            <span className="status-icon"></span>
                          )}
                          {order.status}
                        </p>
                      </td>
                      <td>
                        <p className="b-para">{order.amount}</p>
                      </td>
                      <td>
                        <p>{order.timeElapsed}</p>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <div className="flex justify-center items-center w-full my-3">
                <Button>
                  <Link className="flex gap-2 items-center" to={'/orders'}>
                    المزيد من الطلبات <FaAngleLeft size={12} />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>

        <div className="outOfstockProducts col-span-12 md:col-span-12 lg:col-span-4">
          <div className="side-bx-container">
            <div className="bx-container-head">
              <div className="bx-sub-head tb-head-dark">
                <img src="images/Home/Error.png" alt="" />
                <h2 className="dark-text"> منتجات نفدت</h2>
              </div>
            </div>
            <div className="scrollstyle side-table overflow-y-scroll">
              {expiredProductsData.map((product, index) => (
                <div
                  key={product.id}
                  className={`bx-container-body ${
                    index === expiredProductsData.length - 1
                      ? ''
                      : 'border-b border-gray-300'
                  }`}
                >
                  <div className="flex gap-4 py-1 px-5 w-full">
                    <div className="bx-cntn-product">
                      <img src={product.productImageSrc} alt="" />
                    </div>
                    <div className="bx-cntn-text text-red">
                      <h1>{product.itemName}</h1>
                      <p>{product.price}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
