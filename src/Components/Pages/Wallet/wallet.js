import React, { useState } from "react";
import "./wallet.css";
import { billingSettingsData } from "../../DevData/DevData";
import { FaRegCopy } from "react-icons/fa6";
import { CiCircleCheck } from "react-icons/ci";
import { RiMenu2Line } from "react-icons/ri";
import BreadCrum from "../../Commons/BreadCrum/BreadCrum";
import { Button } from "@mui/material";
import { FaRegFileLines } from "react-icons/fa6";
import PopUp1 from "../../PopUp/Wallet/Walletpopup";
import PopUp2 from "../../PopUp/Wallet/WalletPopup2";
import PopUp3 from "../../PopUp/Wallet/WalletPopUp3";
import PopUp4 from "../../PopUp/Wallet/WalletPopUp4";
import { FaAngleLeft } from "react-icons/fa";

const Wallet = () => {
  // const [activePopup, setActivePopup] = useState(null);
  const [activePopupGroup1, setActivePopupGroup1] = useState(null);
  const [activePopupGroup2, setActivePopupGroup2] = useState(null);

  // const handlePopupClick = (index) => {
  //   setActivePopup(index === activePopup ? null : index);
  // };

  const staticPages = [
    {
      title: "الاستبدال والاسترجاع",
      link: "#",
      moreLink: "   ترقية الباقة ",
      moreLink2: "    إلغاء التجديد التلقائي",
    },
  ];
  const handlePopupClick = (index, group) => {
    if (group === "group1") {
      setActivePopupGroup1(activePopupGroup1 === index ? null : index);
    } else if (group === "group2") {
      setActivePopupGroup2(activePopupGroup2 === index ? null : index);
    }
  };

  // const handlePopupClick = (index) => {
  //   setActivePopup(activePopup === index ? null : index);
  // };

  return (
    <div>
      <BreadCrum />
      <div className="wp-tp-row dark-border">
        <a href="#">
          <div className="wp-tp-sub-row">
            <div className="wp-tp-row-col">
              <div className="wp-tp-row-inr-col">
                <span className="wp-tp-img-spn">
                  <img src="images/Wallet/Vector.png" />
                </span>
                <div className="wp-tp-txt-col">
                  <p className="dark-a">
                    توثيق المتجر <span>(غير مكتمل)</span>
                  </p>
                  <p className="dark-text-light">
                    يتطلب توثيق بيانات مالك المتجر والحساب البنكي لإستقبال
                    المبالغ والمدفوعات الإلكترونية وسحب رصيد المتجر
                  </p>
                  <p>
                    <span>فقط مالك المتجر يستطيع الدخول لتوثيق المتجر.</span>
                  </p>
                </div>
              </div>
            </div>
            <div className="wp-tp-row-col">
              <img
                src="images/Wallet/arrow-left-s-line.png"
                id="wp-tp-arw-img"
              />
            </div>
          </div>
        </a>
      </div>
      <div className="grid lg:grid-cols-2 md:grid-cols-2 sm:grid-col-1 gap-9 my-11">
        <div className="wp-md-row-col dark-border">
          <div className="wp-md-row-sub-col ">
            <div className="wp-md-roe-col-fst-rw dark-text">
              <img src="images/Wallet/wallet-line.png" />
              <p className="dark-text">Store credit</p>
            </div>
            <div className="wp-md-roe-col-body">
              <img src="images/Wallet/wallet-line.png" />
              <h2 className="dark-a">You currently have no balance</h2>
              <h4 className="dark-text" style={{ paddingBottom: "50px" }}>
                Add credit by adding credit
              </h4>
              <div className="">
                <button className="addCreditBtn">Add Credit</button>
                <button className="balanceWithdrawBtn dark-text">
                  Balance withdrawl
                </button>
              </div>

              <p className="dark-text" style={{ marginTop: "20px" }}>
                Operational Log
              </p>
            </div>
          </div>
        </div>
        <div className="wp-md-row-col dark-border">
          <div className="wp-md-row-sub-col ">
            <div className="dark-text wp-md-roe-col-fst-rw">
              <img src="images/Wallet/logo-white 1.png" />
              <p className="dark-text">Electronic payments balance</p>
            </div>
            <div className="wp-md-roe-col-body">
              <img src="images/Wallet/wallet-line.png" />
              <h2 className="dark-a">
                110.76<span className="dark-a">SAR</span>
              </h2>
              <div className="wp-md-col-btm">
                <button className="dark-text-light">Balance Details</button>
              </div>
              <p className="dark-text">Operational Log</p>
            </div>
          </div>
        </div>
      </div>
      <div className="wp-md-sc-row dark-border">
        <div className="wp-md-sc-row-head bg-dark-head">
          <div className="wp-md-sc-row-sub-head dark-a">
            <img src="images/Wallet/sound-module-line.png" alt="Sound Module" />
            <h2 className="dark-a">إعدادات الفوترة</h2>
          </div>
        </div>
        <div className="wp-md-sc-row-body">
          {billingSettingsData.map((item, index) => (
            <div className="wp-md-sc-row-body-sb-row" key={index}>
              <PopUp1 />
              <PopUp2 />
              <div className="wp-md-sc-row-body-sb-row-sub cursor-pointer justify-between items-center">
                <div className="flex gap-4 items-center">
                  <img src={item.icon} alt={`Icon ${index + 1}`} />
                  <div className="wp-md-sc-row-body-sb-row-col">
                    <h3 className='dark-a'>{item.title}</h3>
                    <p>{item.description}</p>
                  </div>
                </div>
                <h4 className="text-[#80E9D1] text-sm font-semibold">
                  إضافة حساب بنكي
                </h4>
              </div>
              <PopUp3 />
              <PopUp4 />
            </div>
          ))}
        </div>
      </div>
      {/*  */}
      <section className="tech-static-p-main my-5 dark-border">
        <div className="tech-static-p-title flex justify-between items-center bg-dark-head">
          <div className="dark-a flex gap-3 items-center">
            <RiMenu2Line size={28} />
            <h6 className="dark-a">مبيعات المنتجات</h6>
          </div>
          <Button style={{ color: "#003C47" }}>
            <p className="underline dark-a">تصدير</p>
          </Button>
        </div>
        <div
          className="tech-static-p-table overflow-x-auto "
          style={{ overflow: "visible" }}
        >
          <div className="walletTable">
            <table className="min-w-full">
              <thead>
                <tr>
                  <td className="dark-a">تفاصيل الإشتراك</td>
                  <td className="dark-a" style={{ textAlign: "right" }}>
                    مدة الإشتراك
                  </td>
                  <td className="dark-a">تاريخ الإشتراك</td>
                  <td className="dark-a">تاريخ التجديد القادم</td>
                  <td className="dark-a">رسوم الإشتراك</td>
                  <td className="dark-a">التجديد التلقائي</td>
                </tr>
              </thead>
              <tbody>
                {staticPages.map((page, index) => (
                  <tr key={index}>
                    <td className="dark-text">سلة برو</td>
                    <td className="dark-text" style={{ textAlign: "right" }}>
                      مفتوح
                    </td>
                    <td className="dark-text">2023-04-06</td>
                    <td className="dark-text">2025-04-06</td>
                    <td className="dark-text">0.00 ر.س</td>
                    <td>
                      <CiCircleCheck />
                    </td>
                    <td>
                      <div className="tech-static-p-buttons">
                        <div className="tech-static-p-more-btn-main">
                          {/* <button
                          className={`tech-static-more-btn-open ${
                            index === activePopup ? 'tech-active-popup' : ''
                          }`}
                          onClick={() => handlePopupClick(index)}
                        > */}
                          <button
                            className={`tech-static-more-btn-open ${
                              index === activePopupGroup1
                                ? "tech-active-popup"
                                : ""
                            }`}
                            onClick={() => handlePopupClick(index, "group1")}
                          >
                            <div
                              className="tech-static-p-more-popup"
                              style={{
                                position: "absolute",
                                zIndex: 1000,
                                top: "100%",
                              }}
                            >
                              <ul>
                                <li className="hover:bg-gray-200 hover:rounded">
                                  <a href="#">
                                    <span
                                      className="flex items-center gap-2"
                                      style={{ color: "#003c47" }}
                                    >
                                      {/* <FaRegCopy /> */}
                                      {page.moreLink}
                                    </span>
                                  </a>
                                </li>
                                <li className="hover:bg-gray-200 hover:rounded">
                                  <a href="#">
                                    <span
                                      className="flex items-center gap-2"
                                      style={{ color: "#003c47" }}
                                    >
                                      {/* <FaRegCopy /> */}
                                      {page.moreLink2}
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
        </div>
      </section>
      <section className="tech-static-p-main my-5 dark-border">
        <div className="tech-static-p-title flex bg-dark-head justify-between items-center">
          <div className="flex dark-a gap-3 items-center">
            <FaRegFileLines size={28} />
            <h6 className="dark-a">فواتير المشتريات</h6>
          </div>
          <Button
            className="dark-border dark-text-light"
            style={{
              color: "#003C47",
              border: "1px solid #D9D9D9",
              borderRadius: "4px",
            }}
          >
            <p>الفواتير السابقة</p>
          </Button>
        </div>
        <div className="tech-static-p-table overflow-x-auto">
          <table className="min-w-full">
            <thead>
              <tr>
                <td className="dark-a">رقم الفاتورة</td>
                <td className="dark-a" style={{ textAlign: "right" }}>
                  المجموع
                </td>
                <td className="dark-a">تاريخ الفاتورة</td>
              </tr>
            </thead>
            <tbody>
              {staticPages.map((page, index) => (
                <React.Fragment key={index}>
                  <tr>
                    <td className="dark-text">
                      <a href="https://demo.salla.sa/payment/invoices/168477819">
                        # 644064
                      </a>
                    </td>
                    <td className="dark-text" style={{ textAlign: "right" }}>
                      196.94 ر.س
                    </td>
                    <td className="dark-text">الجمعة 31 مارس 2023</td>
                    <td>
                      <div className="tech-static-p-buttons">
                        <div className="tech-static-p-more-btn-main">
                          {/* <button
                            className={`tech-static-more-btn-open ${
                              index === activePopup ? 'tech-active-popup' : ''
                            }`}
                            onClick={() => handlePopupClick(index)}
                          > */}
                          <button
                            className={`tech-static-more-btn-open ${
                              index === activePopupGroup2
                                ? "tech-active-popup"
                                : ""
                            }`}
                            onClick={() => handlePopupClick(index, "group2")}
                          >
                            <div className="tech-static-p-more-popup">
                              <ul>
                                <li className="hover:bg-gray-200 hover:rounded">
                                  <a className="dark-a" href="#">
                                    <span
                                      className="flex items-center gap-2"
                                      style={{ color: "#003c47" }}
                                    >
                                      {/* <FaRegCopy /> */}
                                      {page.moreLink}
                                    </span>
                                  </a>
                                </li>
                                <li>
                                  <a className="dark-a" href="#">
                                    <span
                                      className="flex items-center gap-2"
                                      style={{ color: "#003c47" }}
                                    >
                                      {/* <FaRegCopy /> */}

                                      {page.moreLink2}
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
                  <tr>
                    <td colSpan={4} style={{ textAlign: "left" }}>
                      <Button style={{ color: "#003C47" }}>
                        <p className="underline dark-a">طباعة</p>
                      </Button>
                    </td>
                  </tr>
                </React.Fragment>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
};

export default Wallet;
