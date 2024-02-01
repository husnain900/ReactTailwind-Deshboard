import React, { useState } from 'react';
import { appData } from '../../DevData/DevData';
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';
import Tooltip from '@mui/material/Tooltip';
import { CiCircleAlert } from 'react-icons/ci';
import { IoSettingsOutline } from 'react-icons/io5';
import { FaRegTrashAlt } from 'react-icons/fa';

const AppMakerCards = ({ count }) => {
  const [openPopupIndex, setOpenPopupIndex] = useState(null);
  const [iconDirection, setIconDirection] = useState('down');

  const togglePopup = (index) => {
    setOpenPopupIndex(openPopupIndex === index ? null : index);
    toggleIconDirection();
  };

  const toggleIconDirection = () => {
    setIconDirection(iconDirection === 'down' ? 'up' : 'down');
  };
  return (
    <div>
      {' '}
      <section className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-col-1 gap-5">
        {appData.slice(0, count).map((app, index) => (
          <div className="heap-box py-1 px-2" key={index}>
            <div key={index} className="flex items-center gap-3 mb-5">
              <img src={app.imageSrc} alt="" />
              <div className="flex justify-between w-full">
                <div>
                  <h3>{app.name}</h3>
                  <div className="flex gap-1 items-center">
                    <img src="images/AppMaker/Star.png" alt="" />
                    <h5>{app.rating}</h5>
                    <p>({app.numberOfRatings} تقييمات)</p>
                  </div>
                  <h4 className="flex gap-1 items-center">
                    <img src="images/AppMaker/user.png" alt="" />
                    {app.category}
                  </h4>
                </div>
                <img className="h-7 w-7" src={app.optionsIconSrc} alt="" />
              </div>
            </div>
            <div className="flex items-center justify-between relative border-t border-gray-300 py-2">
              <div>
                <button
                  className="down btn-hover"
                  onClick={() => togglePopup(index)}
                >
                  خيارات التطبيق
                  <span
                    className={`transition-transform duration-300 ${
                      iconDirection === 'down' ? 'rotate-0' : 'rotate-180'
                    }`}
                  >
                    {iconDirection === 'down' ? (
                      <IoIosArrowDown />
                    ) : (
                      <IoIosArrowUp style={{ transform: 'rotate(180deg)' }} />
                    )}
                  </span>
                </button>

                {openPopupIndex === index && (
                  <ul className="popup-product shadow rounded-lg  bg-white absolute top-[60px] z-10 w-64">
                    <li className="hover:bg-gray-100 p-1 hover:rounded">
                      <a
                        href="/#"
                        className="text-gray-800 py-1 px-2 flex items-center gap-1"
                        style={{ display: 'flex' }}
                      >
                        <CiCircleAlert
                          style={{
                            width: '20px',
                            height: 20,
                            marginLeft: '10px',
                            color: '#bbb',
                          }}
                        />
                        <span>
                          <b>بطاقة رقمية</b>
                          <p>بطاقات شحن، حسابات للبيع</p>
                        </span>
                      </a>
                    </li>
                    <li className="hover:bg-gray-100 p-1 hover:rounded">
                      <a
                        href="/#"
                        className="text-gray-800 py-1 px-2 flex items-center gap-1"
                      >
                        {' '}
                        <IoSettingsOutline
                          style={{
                            width: '20px',
                            height: 20,
                            marginLeft: '10px',
                            color: '#bbb',
                          }}
                        />{' '}
                        <span>
                          <b> مجموعة منتجات</b>
                          <p>أكثر من منتج في منتج واحد</p>
                        </span>
                      </a>
                    </li>
                    <li className="hover:bg-gray-100 p-1 hover:rounded">
                      <a
                        href="/#"
                        className="text-gray-800 py-1 px-2 flex items-center gap-1"
                      >
                        {' '}
                        <FaRegTrashAlt
                          style={{
                            width: '20px',
                            height: 20,
                            marginLeft: '10px',
                            color: '#f55157',
                          }}
                        />
                        <span>
                          <h4 className="text-red-500">
                            <b>استخدام نماذج جاهزة!</b>
                          </h4>
                          <p>اضافة منتج بسرعه وسهولة </p>
                        </span>
                      </a>
                    </li>
                  </ul>
                )}
              </div>
              <button className="mute p-2">
                <Tooltip title="الدعم الفني" placement="top-start">
                  <img src="images/AppMaker/Vector-1.png" alt="" />
                </Tooltip>
              </button>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
};

export default AppMakerCards;
