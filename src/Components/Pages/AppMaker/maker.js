import React, { useState, useEffect } from "react";
import "./maker.css";
import { featuresData } from "../../DevData/DevData";
import BreadCrum from "../../Commons/BreadCrum/BreadCrum";
import Makerpopup from "../../PopUp/Makerpopup";
const products = [
  {
    title: "بطاقة رقمية",
    description: "بطاقات شحن، حسابات للبيع",
  },
  {
    title: "مجموعة منتجات",
    description: "أكثر من منتج في منتج واحد",
  },
  {
    title: "استخدام نماذج جاهزة!",
    description: "اضافة منتج بسرعه وسهولة",
    special: true,
  },
];
const tabsData = [
  {
    imageSrc: "images/Maker/smartphone-line.png",
    alt: "Home",
    label: "الصفحة الرئيسية",
    content: <p>Content for Home Tab</p>,
  },
  {
    imageSrc: "images/Maker/dashboard-line.png",
    alt: "Categories",
    label: "التصنيفات",
    content: <p>Content for Categories Tab</p>,
  },

  {
    imageSrc: "images/Maker/smartphone-line.png",
    alt: "Top Bar & Tabs",
    label: "الشريط العلوي والتبويبات",
    content: <p>Content for Top Bar & Tabs Tab</p>,
  },
  {
    imageSrc: "images/Maker/smartphone-line.png",
    alt: "Home Screens",
    label: "شاشات البداية",
    content: <p>Content for Home Screens Tab</p>,
  },
  {
    imageSrc: "images/Maker/switch-line.png",
    alt: "General Settings",
    label: "إعدادات عامة",
    content: <p>Content for General Settings Tab</p>,
  },
];

const AppBuilder = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [isPopupOpen, setPopupOpen] = useState(false);
  const [activeButton, setActiveButton] = useState("شهر");
  const [text, setText] = useState("");

  const handleButtonClick = (value) => {
    setText(value);
    setActiveButton(value);
  };

  const handleTabClick = (index) => {
    setActiveTab(index);
  };

  const togglePopup = () => {
    setPopupOpen(!isPopupOpen);
  };

  useEffect(() => {
    setText("250ر.س");
  }, []);

  return (
    <div>
      <BreadCrum />
      <div className="ds-17-container">
        <div className="ds-17-sub-container dark-border">
          <div className="ds-17-sub-innr-container">
            <div className="ds-17-cntr-frst-rw ">
              <h2 className="dark-a">صانع التطبيقات</h2>
              <h4 className="dark-text3">
                اصنع لمتجرك تطبيق إحترافي خلال 72 ساعة وبدون مبرمج!
              </h4>
              <p className="dark-a">
                في حالة تم انشاء حساب المطورين في متاجر التطبيقات (App Store,
                Google Play)
              </p>
            </div>
            <div className="ds-17-cntr-snd-rw">
              <div className="ds-17-cntr-snd-rw-bx">
                <p>{text}</p>
                <div className=" p-1 border border-black bg-white">
                  <button
                    className={` ${
                      activeButton === "250ر.س" ? "active" : "dark-border"
                    }`}
                    onClick={() => handleButtonClick("250ر.س")}
                  >
                    شهر
                  </button>
                  <button
                    className={` ${
                      activeButton === "2550ر.س" ? "active" : "dark-border"
                    }`}
                    onClick={() => handleButtonClick("2550ر.س")}
                  >
                    يسنوي
                  </button>
                </div>
              </div>
            </div>
            <div className="ds-17-cntr-trd-rw">
              <div className="ds-17-cntr-trd-rw-col">
                <h5 className="dark-a">
                  يمنحك إنشاء تطبيق لمتجرك فرصة كبيرة لتقوية علاقتك مع العملاء
                  وزيادة تفاعلهم ، وأيضًا وسيلة فعالة لتقديم قيمة لعملائك
                  .وزيادة ولائهم, وبالتالي زيادة المبيعات ونمو متجرك
                </h5>
                <div className="ds-17-cntr-trd-rw-col-btn">
                  <button
                    className=""
                    style={{ backgroundColor: "#BBF3E5", border: "none" }}
                  >
                    اشترك
                  </button>
                  <button className="dark-text-light">جرب الآن</button>
                </div>
              </div>
              <div className="ds-17-cntr-trd-rw-col">
                <img
                  style={{ width: "1000px" }}
                  src="images/Maker/app-builder-marketing 1.png"
                />
              </div>
            </div>
            <div className="ds-17-cntr-ftr-rw overflow-x-auto">
              <div className="flex gap-2 py-4  min-w-max dark-ul">
                {featuresData.map((feature, index) => (
                  <div
                    key={index}
                    className="ds-17-cntr-ftr-rw-col dark-ul dark-border"
                  >
                    <img src={feature.icon} alt={feature.title} />
                    <div className="ds-17-cntr-ftr-rw-txt-col">
                      <h4 className="dark-text">{feature.title}</h4>
                      <p className="dark-text">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="ds-17-sub-container-2 dark-border">
          <div className="ds-17-cntnr-2-rw-frst bg-dark-head">
            <div className="ds-17-cntnr-2-sub-rw-frst">
              <h1 className="dark-a">تصميم التطبيق</h1>
              <button className="dark-ul dark-text">
                بيانات قابلة للتعديل
              </button>
            </div>
          </div>
          <div className="ds-17-cntnr-2-rw-scnd">
            <div className="ds-17-cntnr-2-sub-rw-scnd">
              <p className="dark-text">
                القالب المستخدم:<span> الافتراضي </span>
              </p>
              <Makerpopup />
            </div>
          </div>
          <div className="ds-17-cntnr-2-rw-thrd-btn">
            <div className="ds-17-cntnr-2-rw-sub-thrd-btn">
              {/* {tabsData.map((tab, index) => (
                <button
                  id="apllicationDesignBtn"
                  key={index}
                  className={`cursor-pointer ${
                    activeTab === index ? 'active' : ''
                  }`}
                  onClick={() => handleTabClick(index)}
                >
                  <img src={tab.imageSrc} alt={tab.alt} />
                  {tab.label}
                </button>
              ))} */}
              {tabsData.map((tab, index) => (
                <button
                  id="apllicationDesignBtn"
                  key={index}
                  className={`cursor-pointer ${
                    activeTab === index ? "active" : "dark-ul dark-text"
                  }`}
                  onClick={() => handleTabClick(index)}
                >
                  <img src={tab.imageSrc} alt={tab.alt} />
                  {tab.label}
                </button>
              ))}
            </div>
          </div>
          <div className="ds-17-cntnr-2-rw-frth-btn">
            <div className="ds-17-cntnr-2-rw-frth-btn-sub">
              <div className="ds-frth-swith-btn dark-border">
                <button
                  className={`switch-button ${
                    activeButton === "محاكي تطبيقات سلة"
                      ? "active"
                      : "dark-ul dark-text dark-border"
                  }`}
                  onClick={() => handleButtonClick("محاكي تطبيقات سلة")}
                >
                  محاكي تطبيقات سلة
                </button>
                <button
                  style={{ marginRight: "10px" }}
                  className={`switch-button ${
                    activeButton === "معاينة التطبيق"
                      ? "active"
                      : "dark-ul dark-text dark-border"
                  }`}
                  onClick={() => handleButtonClick("معاينة التطبيق")}
                >
                  معاينة التطبيق
                </button>
              </div>
            </div>
          </div>
          {/* <div className="tab-content">{tabsData[activeTab].content}</div> */}
          <div className="ds-17-cntnr-2-rw-fth">
            <div className="ds-17-cntnr-2-rw-fth-sub">
              <div
                className="ds-17-cntnr-2-rw-fth-sub-col"
                id="appMakerHomeData"
              >
                <img src="images/Maker/image 2.png" />
                <p
                  className="icon-text-button dark-text"
                  style={{ textAlign: "center", marginBottom: "30px" }}
                >
                  قم بتخصيص واجهة التطبيق الخاص بك من خلال اضافة عناصر متعددة و
                  متميزة <br></br>انقر على عنصر جديد للبدأ
                </p>
                <div className="ds-17-cntnr-2-rw-fth-sub-col-btn relative">
                  <div>
                    <button
                      onClick={togglePopup}
                      class="icon-text-button dark-text-light"
                    >
                      <img src="images/Maker/Vector.png" alt="New Element" />
                      عنصر جديد
                    </button>

                    {isPopupOpen && (
                      <ul className="popup-product shadow rounded-md dark-ul bg-white absolute bottom-19 z-10">
                        {products.map((product, index) => (
                          <li
                            key={index}
                            className="hover:bg-gray-100 dark-li p-1 hover:rounded"
                          >
                            <a
                              href="#"
                              className="text-gray-800 py-1 dark-a px-2 flex items-center gap-1"
                            >
                              <span>
                                {product.special ? (
                                  <h4 className="text-red-500">
                                    <b>{product.title}</b>
                                  </h4>
                                ) : (
                                  <b>{product.title}</b>
                                )}
                                <p style={{ margin: "0" }}>
                                  {product.description}
                                </p>
                              </span>
                            </a>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                  <button classNamr="icon-text-button">
                    <img src="images/Maker/chat-download-line.png" alt="Icon" />
                    <span className="dark-text-light">عناصر تصميم المتجر</span>
                  </button>
                </div>
              </div>
              <div className="ds-17-cntnr-2-rw-fth-sub-col">
                <img src="images/Maker/image 1.png" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppBuilder;
