import React, { useState } from "react";
import { BsThreeDots } from "react-icons/bs";
import "./static.css";
import { FaRegCopy } from "react-icons/fa6";
import Commoncheckbox from "../Ui-components/SwitchBtn";
import BreadCrum from "../../Commons/BreadCrum/BreadCrum";
import StaticPopup from "../../PopUp/StaticPopup/StaticpopupTop";
import Khidmatpopup from "../../PopUp/TopTitlepopup/Khidmatpopup";
import Staticpopup1 from "../../PopUp/StaticPopup/Staticpopup1";
import Staticpopup2 from "../../PopUp/StaticPopup/Staticpopup2";

const PageStatic = () => {
  const [activePopup, setActivePopup] = useState(null);

  const handlePopupClick = (index) => {
    setActivePopup(index === activePopup ? null : index);
  };

  const staticPages = [
    { title: <Staticpopup1 />, link: "#", moreLink: "نسخ الرابط" },
    { title: <Staticpopup2 />, link: "#", moreLink: "نسخ الرابط" },
  ];

  return (
    <div>
      <BreadCrum />
      <div className="top-title staticPage relative">
        <StaticPopup />
        <div className="left-side ">
          <Khidmatpopup />
        </div>
      </div>
      <section className="tech-static-p-main my-5 dark-border">
        <div className="tech-static-p-title flex gap-3 bg-dark-head">
          <img src="images/static/file-list-3-line.png" alt="File List Icon" />
          <h6 className="dark-a">
            الصفحات التعريفية
            <span className="ps-2 text-dark">(صفحتان)</span>
          </h6>
        </div>
        <div className="tech-static-p-table">
          <table>
            <tbody>
              {staticPages.map((page, index) => (
                <tr key={index}>
                  <td className="tech-static-p-table-td-title">
                    <a className="dark-text-light" href={page.link}>{page.title}</a>
                  </td>
                  <td colSpan="2">
                    <div className="tech-static-p-buttons">
                      <Commoncheckbox />
                      <div className="tech-static-p-more-btn-main">
                        <button
                          className={`tech-static-more-btn-open ${
                            index === activePopup ? "tech-active-popup" : "dark-a"
                          }`}
                          onClick={() => handlePopupClick(index)}
                        >
                          <BsThreeDots size={27} />

                          <div className="tech-static-p-more-popup">
                            <ul className="dark-ul">
                              <li className="dark-li">
                                <a href="#" className="dark-a">
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

export default PageStatic;
