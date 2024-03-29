import React, { useState } from "react";
import "./Q&A.css";
import { QaData } from "../../DevData/DevData";
import BreadCrum from "../../Commons/BreadCrum/BreadCrum";
import Filteringpopup from "../../PopUp/TopTitlepopup/Filteringpopup";
import DeletePopup from "../../PopUp/Q&ADeletePopup";
import { RxCrossCircled } from "react-icons/rx";
import { BsCheckCircle } from "react-icons/bs";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";

const QA = () => {
  const [isPopupOpen, setPopupOpen] = useState(false);
  const [isButton3Visible, setButton3Visibility] = useState(true);

  const handleButtonClick = (index) => {
    if (index === 2) {
      setPopupOpen(true);
      setButton3Visibility(false);
    }
  };
  const handleToggleButtonClick = () => {
    setButton3Visibility(!isButton3Visible);
  };

  return (
    <div>
      <BreadCrum />
      <div className="top-title-clients flex justify-between items-center my-4">
        <div>
          <h4 className="dark-a">الاسئلة والتقييمات (195)</h4>
        </div>
        <div>
          <Filteringpopup />
        </div>
      </div>
      <section>
        <div className="qa-box-container">
          {QaData.map((question) => (
            <div key={question.id} className="qa-box mb-6 mt-1 dark-border">
              <div className="qa-box-head bg-dark-head">
                <div className="qa-box-sub-head">
                  <div className="qa-head-col-1">
                    <img src="images/Q&A/bag.png" alt="Category Image" />
                    <button className="dark-text-light">
                      <Link to="/static">{question.category}</Link>
                    </button>
                  </div>
                  <div className="qa-head-col-2">
                    <h2 className="dark-text3">{question.timeAgo}</h2>
                    <div className="qa-head-icon-bx bg-dark4">
                      <img
                        src="images/Q&A/question mark.png"
                        alt="Question Icon"
                      />
                      <p className="dark-a">سؤال</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="qa-box-body">
                <div className="qa-box-sub-body">
                  <div className="qa-bx-row">
                    <div className="qa-user-info">
                      <img src={question.user.userImage} alt="User Image" />
                      <div className="qa-user-info-cntn">
                        <p className="dark-text">{question.user.userType}</p>
                        <p className="dark-text">{question.user.userName}</p>
                      </div>
                    </div>
                  </div>
                  <div className="qa-bx-row">
                    <div className="qa-box-btm-col">
                      {question.statusButtons.map(
                        (button, index) =>
                          (isButton3Visible || index !== 2) && (
                            <Button
                              key={index}
                              className={
                                index === 1 ? "clickRed" : "GreyButton"
                              }
                              onClick={() => handleButtonClick(index)}
                            >
                              <span className="Q&A-Data"> {button.icon}</span>
                              {button.label}
                            </Button>
                          )
                      )}
                    </div>
                    <div className="qa-box-btm-col">
                      <DeletePopup />
                    </div>
                  </div>
                </div>
              </div>
              {isPopupOpen && (
                <div className="px-5 my-3">
                  <textarea
                    name=""
                    id=""
                    className="h-14 over p-3 outline-none w-full border border-[#eee] rounded-md bg-dark-head dark-border dark-a"
                    placeholder="الرد على العميل .."
                    cols="30"
                    rows="10"
                  ></textarea>
                  <div className="flex gap-5 qa-texarea-btn">
                    <Button
                      style={{
                        background: "#baf3e6",
                        color: "#004d5a",
                      }}
                      onClick={() => {
                        setPopupOpen(false);
                        handleToggleButtonClick(); // Call handleToggleButtonClick here
                      }}
                    >
                      <BsCheckCircle />
                      إرسال
                    </Button>
                    <Button
                      style={{
                        background: "#F55157",
                        color: "white",
                      }}
                      onClick={() => {
                        setPopupOpen(false);
                        handleToggleButtonClick(); // Call handleToggleButtonClick here
                      }}
                    >
                      <RxCrossCircled />
                      إلغاء
                    </Button>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default QA;
