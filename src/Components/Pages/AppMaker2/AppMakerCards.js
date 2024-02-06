import React, { useState } from 'react';
import { appData } from '../../DevData/DevData';
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';
import Tooltip from '@mui/material/Tooltip';
import { CiCircleAlert } from 'react-icons/ci';
import { IoSettingsOutline } from 'react-icons/io5';
import { FaRegTrashAlt } from 'react-icons/fa';
import { MdHeadsetMic } from "react-icons/md";

const productList = [
  {
    icon: <CiCircleAlert style={{ width: '20px', height: 20, marginLeft: '10px', color: '#bbb' }} />,
    title: 'بطاقة رقمية',
    description: 'بطاقات شحن، حسابات للبيع',
  },
  {
    icon: <IoSettingsOutline style={{ width: '20px', height: 20, marginLeft: '10px', color: '#bbb' }} />,
    title: 'مجموعة منتجات',
    description: 'أكثر من منتج في منتج واحد',
  },
  {
    icon: <FaRegTrashAlt style={{ width: '20px', height: 20, marginLeft: '10px', color: '#f55157' }} />,
    title: 'استخدام نماذج جاهزة!',
    description: 'اضافة منتج بسرعه وسهولة',
  },
];
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
          <div className="heap-box py-1 px-2 dark-border" key={index}>
            <div key={index} className="flex items-center gap-3 mb-5">
              <img src={app.imageSrc} alt="" />
              <div className="flex justify-between w-full">
                <div>
                  <h3 className='dark-text-light'>{app.name}</h3>
                  <div className="flex gap-1 items-center">
                    <img src="images/AppMaker/Star.png" alt="" />
                    <h5 className='dark-a'>{app.rating}</h5>
                    <p>({app.numberOfRatings} تقييمات)</p>
                  </div>
                  <h4 className="flex gap-1 items-center dark-text-light">
                    <img src="images/AppMaker/user.png" alt="" />
                    {app.category}
                  </h4>
                </div>
                <img className="h-7 w-7" src={app.optionsIconSrc} alt="" />
              </div>
            </div>
            <div className="flex items-center justify-between relative border-t dark-border-t border-gray-300 py-2">
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
                  <ul className="popup-product shadow rounded-lg dark-ul bg-white absolute top-[60px] z-10 w-64">
                  {productList.map((item, index) => (
                    <li key={index} className="hover:bg-gray-100 dark-li p-1 hover:rounded">
                      <a href="#" className="text-gray-800 py-1 dark-a px-2 flex items-center gap-1" style={{ display: 'flex' }}>
                        {item.icon}
                        <span>
                          <b>{item.title}</b>
                          <p>{item.description}</p>
                        </span>
                      </a>
                    </li>
                  ))}
                </ul>
                )}
              </div>
              <button className="mute p-2 dark-text-light">
                <Tooltip title="الدعم الفني" placement="top">
                  <MdHeadsetMic/>
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
