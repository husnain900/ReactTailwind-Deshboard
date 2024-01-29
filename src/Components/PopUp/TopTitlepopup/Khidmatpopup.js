import React, { useState } from "react";
import { RiShoppingBagLine } from "react-icons/ri";
import { RiMedalLine } from "react-icons/ri";
import { LuListRestart } from "react-icons/lu";
import { FiEdit } from "react-icons/fi";
import { BsBox2 } from "react-icons/bs";
import { SlCloudUpload } from "react-icons/sl";
import { FiDelete } from "react-icons/fi";
import { BsInboxes } from "react-icons/bs";
import { CiFilter } from "react-icons/ci";
import { IoIosArrowBack } from "react-icons/io";
import { FaCloudArrowUp } from "react-icons/fa6";

const ullist = [
  { icon: <BsInboxes />, text: "تصنيفات المنتجات" },
  { icon: <CiFilter />, text: "إدارة الفلاتر (تجريبي)" },
  { icon: <RiMedalLine />, text: "الماركات التجارية" },
  { icon: <LuListRestart />, text: "إرتيب المنتجات" },
  { icon: <FiEdit />, text: "تعديل المنتجات" },
  {
    icon: <BsInboxes />,
    text: "تعديل الكميات",
    arrow: <IoIosArrowBack size={15} />,
    popup: "استيراد المنتجات",
  },
  {
    icon: <BsBox2 />,
    text: "تعديل الأسعار",
    arrow: <IoIosArrowBack size={15} />,
    popup: "استيراد المنتجات",
  },
  { icon: <SlCloudUpload />, text: "جرد المنتجات" },
  { icon: <FiDelete />, text: "سجل الكميات" },
];

const PopupContent = ({ items }) => (
  <ul className="popup-product shadow rounded-lg right-[-142px] top-2 bg-white absolute z-10 ">
    {items.map((item, index) => (
      <li key={index} className="hover:bg-gray-100 p-1 hover:rounded relative">
        <a
          className="text-gray-800 p-2 flex items-center gap-2 text-sm"
          href="#" 
        >
          {item.icon && <span>{item.icon}</span>}
          {item.text}
        </a>
      </li>
    ))}
  </ul>
);

const Khidmatpopup = () => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [activePopupIndex, setActivePopupIndex] = useState(null);

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  const toggleDropdownClose = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  const handleMouseEnter = (index) => {
    setActivePopupIndex(index);
  };

  const handleMouseLeave = () => {
    setActivePopupIndex(null);
  };
  const popupData = [
    { icon: <FaCloudArrowUp />, text: "استيراد المنتجات" },
    { icon: <RiMedalLine />, text: "استيراد المنتجات" },
    { icon: <FaCloudArrowUp />, text: "استيراد المنتجات" },
    { icon: <RiMedalLine />, text: "استيراد المنتجات" },
    { icon: <FaCloudArrowUp />, text: "استيراد المنتجات" },
    { icon: <RiMedalLine />, text: "استيراد المنتجات" },
  ];
  return (
    <>
      <div
        className="flex gap-2 items-center cursor-pointer"
        onClick={toggleDropdown}
      >
        <RiShoppingBagLine />
        <p>خدمات</p>
      </div>
      {isDropdownOpen && (
        <ul className="popup-product shadow rounded-lg right-0 top-9 bg-white absolute z-10">
          {ullist.map((item, index) => (
            <li
              className="hover:bg-gray-100 p-1 hover:rounded relative"
              key={index}
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={handleMouseLeave}
            >
              <a
                className="text-gray-800 p-2 flex items-center justify-between"
                href="#"
                onClick={toggleDropdownClose}
              >
                <span className="flex items-center gap-2 text-sm">
                  {item.icon && <span>{item.icon}</span>}
                  {item.text}
                </span>
                {item.arrow}
              </a>
              {activePopupIndex === index && item.popup && (
                <PopupContent items={popupData} />
              )}
            </li>
          ))}
        </ul>
      )}
    </>
  );
};

export default Khidmatpopup;
