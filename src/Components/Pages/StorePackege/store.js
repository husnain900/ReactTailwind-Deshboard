import React, { useState } from "react";
import "./store.css";
import { plans } from "../../DevData/DevData";
import { addons } from "../../DevData/DevData";
import { Radio } from "@material-tailwind/react";
import { Button } from "@material-tailwind/react";
import BreadCrum from "../../Commons/BreadCrum/BreadCrum";
import StorePackagePopup from "../../PopUp/StorePackagePopup/StorePackagePopup";

const Store = () => {
  const [currentCounts, setCurrentCounts] = useState({
    "سنتين 7176 ر.س 5980 ر.س": -600,
  });

  const handleAddCount = (addon, event) => {
    event.preventDefault();

    setCurrentCounts((prevCounts) => ({
      ...prevCounts,
      [addon.title]: (prevCounts[addon.title] || 0) - 600,
    }));
  };

  return (
    <div>
      <BreadCrum />
      <div className="d13-container">
        <div className="d13-tp-section">
          <div className="d13-tp-sub-section grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 gap-9">
            {plans.map((plan, index) => (
              <div key={index} className="d13-top-sec-col tp-col-br">
                <div className="d13-top-sec-sub-col">
                  <img
                    src="images/StorePackages/xeJklDBbhGaXTyC43Gpe3z0K22oYQHODhtVT8XZL 1.png"
                    alt=""
                  />
                  <h2>{plan.title}</h2>
                  <p>{plan.description}</p>
                  <StorePackagePopup />
                </div>
              </div>
            ))}
            <div className="d13-top-sec-col rmv-spc">
              {plans.map((plan, index) => (
                <div key={index} className="d13-top-col-lf-bx">
                  <h4>تاريخ التجديد: {plan.renewalDate}</h4>
                  <h1>{plan.remainingDays}يوم</h1>
                  <p>الايام المتبقية</p>
                </div>
              ))}
              <h5>اختر المدة</h5>
              {plans.map((plan, index) => (
                <div key={index} className="flex gap-2 items-center">
                  <Radio name="color" color="amber" />
                  <label>{plan.options[0].label}</label>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="d13-btm-section">
          <div className="d13-btm-to-cntnt">
            <img src="images/StorePackages/puzzle.png" alt="" />
            <h3>رالإضافات</h3>
          </div>
          {addons.map((addon, index) => (
            <div key={index} className="d13-btm-section-rows" id>
              <div className="d13-btm-col">
                <div className="d13-btm-sub-col">
                  <div className="d13-btm-col-img">
                    <img src={addon.icon} alt="" />
                  </div>
                  <div className="d13-btm-col-text ">
                    <h3>{addon.title}</h3>
                    <p className="text-wrap">{addon.description}</p>
                  </div>
                </div>
              </div>
              <div className="d13-btm-form">
                <form>
                  <input
                    type="text"
                    name=""
                    placeholder={`العدد الحالي ${
                      currentCounts[addon.title] || 0
                    }`}
                  />
                  <button onClick={(event) => handleAddCount(addon, event)}>
                    <img src="images/StorePackages/add-line.png" alt="" />
                  </button>
                </form>
              </div>
            </div>
          ))}
          <div className="d13-btm-section-rows mb-7 lg:mb-52">
            <div className="d13-btm-col">
              <div className="d13-btm-sub-col">
                <div className="d13-btm-col-img">
                  <img src="images/StorePackages/call.png" alt="" />
                </div>
                <div className="d13-btm-col-text">
                  <h3>رصيد واتساب</h3>
                  <p>
                    انطلق لتنشيط مبيعاتك عبر إرسال الحملات التسويقية والعروض إلى
                    عملائك
                  </p>
                </div>
              </div>
            </div>
            <div className="d13-btm-col">
              <div className="h-10 w-full text-center">
                <Button
                  style={{
                    borderRadius: "8px",
                    background: "#C8F6EB",
                    padding: "3px 14px",
                    border: "none",
                    height: "100%",
                    cursor: "pointer",
                  }}
                  className="px-2 text-black"
                  variant="filled"
                >
                  تثبيت التطبيق
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Store;
