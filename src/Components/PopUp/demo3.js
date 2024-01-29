import React, { useState, useEffect } from "react";
import { FaTimes } from "react-icons/fa";

const HomePopup = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [isQAPopupOpen, setIsQAPopupOpen] = useState(false);
  const [isSijlPopupOpen, setIsSijlPopupOpen] = useState(false);

  const openPopup = () => {
    setIsPopupOpen(true);
  };

  const closePopup = () => {
    setIsPopupOpen(false);
    setIsQAPopupOpen(false);
    setIsSijlPopupOpen(false);
  };

  const openQAPopup = () => {
    closePopup();
    setIsQAPopupOpen(true);
  };

  const openSijlPopup = () => {
    closePopup();
    setIsSijlPopupOpen(true);
  };

  const copyCoupon = () => {
    const referalCodeText = document.getElementById("referalCode").innerText;
    navigator.clipboard.writeText(referalCodeText);

    const copyCodeDone = document.getElementById("copyCode_done");
    copyCodeDone.classList.add("doneCopyref");
    setTimeout(() => {
      copyCodeDone.classList.remove("doneCopyref");
    }, 1000);
  };

  return (
    <section className="tech-home-gift-main">
      <button id="open-popup" onClick={openPopup}>
        Open Popup
      </button>

      {isPopupOpen && (
        <div className="tech-home-gift-popup-main">
          <div className="tech-home-gift-bg"></div>
          <div className="tech-home-gift-row">
            <div className="tech-home-gift-popup-box" id="gift-popup">
              <div className="tech-home-gift-popup-box-title">
                <h6>نقاط الولاء</h6>
                <button className="giftClose" onClick={closePopup}>
                  <FaTimes />
                </button>
              </div>

              <div className="tech-home-gift-popup-box-content">
                {/* ... (your existing HTML content) ... */}
              </div>

              <div className="tech-home-gift-popup-footer">
                <button className="giftClose" onClick={closePopup}>
                  إغلاق
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Q&A Popup */}
      {isQAPopupOpen && (
        <div className="tech-home-gift-inner-popup-main" id="qaPopup">
          {/* ... (your Q&A Popup content) ... */}
        </div>
      )}

      {/* Sijil Popup */}
      {isSijlPopupOpen && (
        <div className="tech-home-gift-inner-popup-main" id="sijlPopup">
          {/* ... (your Sijil Popup content) ... */}
        </div>
      )}

      {/* Loader */}
      <div className="tech-home-gift-loader-bg" id="loader">
        <div className="tech-home-gift-loader"></div>
      </div>
    </section>
  );
};

export default HomePopup;
