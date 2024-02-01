import React, { useState } from 'react';
import './affiliate2.css';
import { CiCirclePlus } from 'react-icons/ci';
import BreadCrum from '../../Commons/BreadCrum/BreadCrum';
import Khidmatpopup from '../../PopUp/TopTitlepopup/Khidmatpopup';
import { Button } from '@mui/material';
import { SlCursor } from 'react-icons/sl';

const Affiliate2 = () => {
  const [activePopup, setActivePopup] = useState(null);

  const handlePopupClick = (index) => {
    setActivePopup(index === activePopup ? null : index);
  };

  const staticPages = [
    { title: 'لا توجد حملات بعد', link: '#', moreLink: 'نسخ الرابط' },
  ];
  const [currentCounts, setCurrentCounts] = useState({
    'سنتين 7176 ر.س 5980 ر.س': -600,
  });

  const handleAddCount = (optionLabel, event) => {
    event.preventDefault(); // Prevent the default form submission

    setCurrentCounts((prevCounts) => ({
      ...prevCounts,
      [optionLabel]: (prevCounts[optionLabel] || 0) - 600,
    }));
  };

  return (
    <div>
      <BreadCrum />
      <div className="top-title">
        <Button className="btn-hover common-btn">
          <a className="flex gap-2 items-center" href="#">
            <CiCirclePlus size={27} /> إضافة رابط
          </a>
        </Button>
        <div className="left-side relative">
          <Khidmatpopup />
        </div>
      </div>
      <section className="tech-static-p-main my-5">
        <div className="tech-static-p-title justify-between">
          <div className="flex gap-1 lg:gap-3 items-center">
            {/* <img
              src="images/static/file-list-3-line.png"
              alt="File List Icon"
            /> */}
            <SlCursor />

            <h6>
              التسويق بالعمولة
              <span className="ps-3">((رابط واحد))</span>
            </h6>
          </div>
          <div className="d13-btm-col h-10">
            <div className="d13-btm-form">
              <form className="p-1">
                <input
                  type="text"
                  name=""
                  className="w-15 lg:w-32"
                  placeholder={`العدد الحالي ${
                    currentCounts['سنتين 7176 ر.س 5980 ر.س'] || 0
                  }`}
                />
                <button
                  onClick={(event) =>
                    handleAddCount('سنتين 7176 ر.س 5980 ر.س', event)
                  }
                >
                  <img src="images/StorePackages/add-line.png" alt="" />
                </button>
              </form>
            </div>
          </div>
        </div>
        <div className="tech-static-p-table">
          <table>
            <tbody>
              {staticPages.map((page, index) => (
                <tr key={index}>
                  <td className="tech-static-p-table-td-title">
                    <a href={page.link}>{page.title}</a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
};

export default Affiliate2;
