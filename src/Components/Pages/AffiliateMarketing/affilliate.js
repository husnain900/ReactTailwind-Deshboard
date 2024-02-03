import React, { useState } from "react";
import "./affiliate.css";
import { CiCirclePlus } from "react-icons/ci";
import CommonCheckbox from "../Ui-components/SwitchBtn";
import BreadCrum from "../../Commons/BreadCrum/BreadCrum";
import { FaRegCopy } from "react-icons/fa6";
import Khidmatpopup from "../../PopUp/TopTitlepopup/Khidmatpopup";
import { Button } from "@mui/material";
import { BsThreeDots } from "react-icons/bs";

const Affilliate = () => {
  const [activePopup, setActivePopup] = useState(null);

  const handlePopupClick = (index) => {
    setActivePopup(index === activePopup ? null : index);
  };

  const staticPages = [
    { title: "سداح", link: "#", moreLink: "نسخ الرابط" },
    { title: "دليل المقاسات", link: "#", moreLink: "نسخ الرابط" },
  ];

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
        <div className="tech-static-p-title flex gap-3 items-center">
          <img src="images/static/file-list-3-line.png" alt="File List Icon" />
          <h6>
            التسويق بالعمولة
            <span className="ps-3">((رابط واحد))</span>
          </h6>
        </div>
        <div className="tech-static-p-table">
          <table>
            <tbody>
              {staticPages.map((page, index) => (
                <tr key={index}>
                  <td className="tech-static-p-table-td-title">
                    <a href={page.link}>{page.title}</a>
                  </td>
                  <td colSpan="2">
                    <div className="tech-static-p-buttons">
                      <CommonCheckbox />
                      <div className="tech-static-p-more-btn-main">
                        <button
                          className={`tech-static-more-btn-open ${
                            index === activePopup ? "tech-active-popup" : ""
                          }`}
                          onClick={() => handlePopupClick(index)}
                        >
                        <BsThreeDots />
                          <div className="tech-static-p-more-popup">
                            <ul>
                              <li>
                                <a href="#">
                                  <span className="flex items-center gap-2">
                                    <FaRegCopy />
                                    {page.moreLink}
                                  </span>
                                </a>
                              </li>
                            </ul>
                          </div>
                        </button>
                      </div>
                    </div>
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

export default Affilliate;
