import React, { useState } from 'react';
import './Sidebar.css';
import { FaAngleLeft } from 'react-icons/fa6';
import { menuItems } from '../../DevData/DevData';
import { NavLink } from 'react-router-dom';
import { FaRegCopy } from 'react-icons/fa6';
import { MdOutlineWhatsapp } from 'react-icons/md';

import { Link } from 'react-router-dom';

const Sidebar = () => {
  const [isPopupVisible, setPopupVisible] = useState(false);

  const togglePopup = () => {
    setPopupVisible(!isPopupVisible);
  };

  return (
    <aside className="fixed">
      <div className="">
        <div className="py-3 hidden lg:block">
          <Link to={'/'}>
            <img
              className="w-auto h-10 px-3 my-2"
              src="images/sidebar/logo-light-wide.svg"
              alt=""
            />
          </Link>
        </div>
        <nav>
          <div className="flex gap-3 items-center mb-4 px-3 pt-7 relative">
            <img src="images/sidebar/Rectangle 9.png" alt="" />
            <div>
              <h2 className="text-2xl font-bold">متجر موضة</h2>
              <div className="share flex gap-1 h-8">
                <h5 className="flex items-center gap-1">
                  {' '}
                  متجر موضة <FaAngleLeft />
                </h5>
                <button
                  className="share-icon flex justify-center items-center p-2"
                  onClick={togglePopup}
                >
                  <a href="/#">
                    <img src="images/sidebar/Vector.png" alt="" />
                  </a>
                </button>
              </div>
            </div>
            {isPopupVisible && (
              <ul className="dark-ul tech-user-menu-drop-popup absolute left-6 top-[105px] rounded bg-white popup ">
                <li className="hover:bg-gray-100 dark-li p-1 hover:rounded ">
                  <a
                    href="/#"
                    className="text-gray-800 p-2 flex dark-a items-center gap-1 ShareD"
                    onClick={togglePopup}
                  >
                    <FaRegCopy size={15} />
                    نسخ رابط المتجر
                  </a>
                </li>
                <li className="hover:bg-gray-100 dark-li p-1 hover:rounded">
                  <a
                    href="/#"
                    className="text-gray-800 dark-a flex items-center gap-1 ShareD"
                    onClick={togglePopup}
                  >
                    <MdOutlineWhatsapp size={15} />
                    واتساب
                  </a>
                </li>
              </ul>
            )}
          </div>
          <ul className="navUl">
            {menuItems.map((item, index) => (
              <li className={` ${item.isTitle ? 'sidetitle' : ''}`} key={index}>
                <NavLink
                  to={item.link}
                  className="py-3 ps-4 hover:text-gray-300 flex items-center gap-2"
                >
                  {item.icon}
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>
          <p className="title mb-5 mt-14 ps-4 text-[#BBF3E5]">تطبيق التاجر</p>
          <div className="stores flex gap-4 mx-4 mb-9">
            <a href="https://apps.apple.com/sa/app/%D8%B3%D9%84%D8%A9-%D8%AA%D8%AC%D8%A7%D8%B1%D8%A9-%D8%A5%D9%84%D9%83%D8%AA%D8%B1%D9%88%D9%86%D9%8A%D8%A9-%D8%B3%D9%87%D9%84%D8%A9/id1148458340">
              <img src="images/sidebar/appstore.png" alt="" />
            </a>
            <a href="https://play.google.com/store/apps/details?id=com.emoney.sallacp">
              <img src="images/sidebar/googleplay.png" alt="" />
            </a>
          </div>
        </nav>
      </div>
    </aside>
  );
};

export default Sidebar;
