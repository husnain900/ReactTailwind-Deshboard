import React, { useState } from "react";
import "./header.css";
import Headerform from "./ui/headerform";
import Sidebar from "../SideBar/Sidebar";
import { FaBars, FaAngleDown, FaPenAlt, FaGift, FaPowerOff } from "react-icons/fa";
import { FaRegMoon , FaRegMoonV6 } from "react-icons/fa6";
import { CiUser } from "react-icons/ci";
import { PiNotificationBold } from "react-icons/pi";
import { LuPartyPopper } from "react-icons/lu";
import { Link } from "react-router-dom";


const MenuItem = ({ icon, label }) => (
  <li>
    <a href="#">
      {icon} {label}
    </a>
  </li>
);

const MobileHeader = () => {
  const menuItems = [
    {
      icon: <CiUser/>,
      label: "الملف الشخصي",
    },
    { icon: <PiNotificationBold/>, label: "التنبيهات" },
    {
      icon: <LuPartyPopper/>,
      label: "تحديثات المنصة",
    },
    { icon: <FaPenAlt/>, label: "الاقتراحات" },
    {
      icon:<FaGift/>,
      label: "نقاط الولاء",
    },
    {
      icon: <FaRegMoon/>,
      label: "الوضع الليلي",
    },
    {
      icon: <FaPowerOff/>,
      label: "تسجيل الخروج",
    },
  ];

  const [isMenuVisible, setMenuVisible] = useState(false);
  const [isUserMenuVisible, setUserMenuVisible] = useState(false);

  const toggleMenu = () => {
    setMenuVisible(!isMenuVisible);
  };

  const toggleUserMenu = () => {
    setUserMenuVisible(!isUserMenuVisible);
  };

  return (
    <div className="mobileHeader">
      <div className="nv-container">
        <div className="nv-sub-container">
          <div className="nv-container-col tec-nv-toggle" onClick={toggleMenu}>
            <FaBars size={25} className="text-white" />
          </div>
          <div className="nv-container-col">
            <Link to={"/"}>
              <img src="images/Navbar/mobile/logo-light-wide.png" alt="Logo" />
            </Link>
          </div>
          <div
            className="nv-container-col flex items-center gap-1"
            id="tec-nv-user"
            onClick={toggleUserMenu}
          >
            <img className="h-auto w-8" src="images/Navbar/mobile/Group 6.png" alt="User" />
            <FaAngleDown size={18} className="text-white" />
          </div>
        </div>
        <div className={`rtl-slide-menu ${isMenuVisible ? "show" : "hide"}`}>
          <Sidebar />
        </div>
        <div
        className={`ttb-slide-menu ${isUserMenuVisible ? "show" : "hide"}`}
        >
          <div className="ttb-slide-menu-sub">
            <ul>
              {menuItems.map((item, index) => (
                <MenuItem key={index} {...item} />
              ))}
            </ul>
          </div>
        </div>
      </div>
      <Headerform />
    </div>
  );
};

export default MobileHeader;
