import React, { useState } from "react";
import { RiShoppingBagLine } from "react-icons/ri";
import { CiFilter } from "react-icons/ci";
import { BsInboxes } from "react-icons/bs";
import { IoIosArrowBack } from "react-icons/io";
import { FaCloudArrowUp } from "react-icons/fa6";

const ullist = [
  { icon: <BsInboxes />, text: "أضف المحتوى الخاص بك" },
  { icon: <CiFilter />, text: "أضف المحتوى الخاص بك" },
  {
    icon: <BsInboxes />,
    text: "أضف المحتوى الخاص بك",
    arrow: <IoIosArrowBack size={15} />,
    popup: [
      { icon: <FaCloudArrowUp />, text: "استيراد المنتجات" },
      { icon: <RiShoppingBagLine />, text: "استيراد المنتجات" },
    ],
  },
  { icon: <BsInboxes />, text: "أضف المحتوى الخاص بك" },
];

const PopupContent = ({ items }) => (
  <ul className="popup-product dark-ul shadow rounded-lg right-[-140px] top-0 bg-white absolute z-10">
    {items.map((item, index) => (
      <li
        key={index}
        className="hover:bg-gray-100 dark-li p-1 hover:rounded relative"
      >
        <a
          className="text-gray-800 p-1 flex items-center dark-a gap-2"
          href="#"
        >
          {item.text}
          {item.icon && <span>{item.icon}</span>}
        </a>
      </li>
    ))}
  </ul>
);

const TableHead = () => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [activePopupIndex, setActivePopupIndex] = useState(null);

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  const handleMouseEnter = (index) => {
    setActivePopupIndex(index);
  };

  const handleMouseLeave = () => {
    setActivePopupIndex(null);
  };

  return (
    <div className="relative">
      <button className="dark-text-light" onClick={toggleDropdown}>
        {" "}
        حرير سريع <img src="images/Orders/magic_broom.png" alt="Magic Broom" />
      </button>
      {isDropdownOpen && (
        <ul className="popup-product dark-ul shadow rounded-lg left-0 top-10  bg-white absolute z-10">
          {ullist.map((item, index) => (
            <li
              className="hover:bg-gray-100 dark-li p-1 hover:rounded relative"
              key={index}
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={handleMouseLeave}
            >
              <a
                className="text-gray-800 dark-a text-sm font-light p-1 flex items-center justify-end gap-2"
                href="#"
                onClick={toggleDropdown}
              >
                {item.arrow}
                <span className="flex items-center gap-2">
                  {item.text}
                  {item.icon && <span>{item.icon}</span>}
                </span>
              </a>
              {activePopupIndex === index && item.popup && (
                <PopupContent items={item.popup} />
              )}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default TableHead;
