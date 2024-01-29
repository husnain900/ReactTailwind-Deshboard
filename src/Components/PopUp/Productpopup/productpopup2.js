import React, { useState } from "react";
import { FaTimes } from "react-icons/fa";
import { FaPercent } from "react-icons/fa";
import { FaLuggageCart } from "react-icons/fa";
import { BsMegaphone } from "react-icons/bs";
import { CiDiscount1 } from "react-icons/ci";

export default function Modal() {
  const [showModal, setShowModal] = React.useState(false);
  const [settings, setSettings] = useState([
    {
      title: "نبهني عند وصول كمية المنتج إلى",
      description: "سيتم إشعارك قبل انتهاء كمية المنتج",
      placeholder: "0",
      unit: "قطعة",
      imageSrc: <FaLuggageCart />,
    },
    {
      title:
        'تنبيه العملاء المشتركين في "أعلمني عند التوفر" عند توفر كمية للمنتج أكبر من',
      description:
        "لتجنب إرسال الإشعارات للعملاء عند توفر كمية بسيطة من المنتج، يمكنك تحديد الحد الأدنى المطلوب توفره للبدء في إرسال الإشعارات للعملاء، القيمة الافتراضية 15",
      placeholder: "0",
      unit: "قطعة",
      imageSrc: <BsMegaphone />,
    },
    {
      title: "نسبة العملاء المراد إشعارهم",
      description:
        "لسيتم إرسال إشعار توفر المنتج لنسبة من العملاء المشتركين في 'أعلمني عند التوفر'. عدد العملاء المشتركين الآن 0 عملاء.",
      placeholder: "0",
      unit: <FaPercent />,
      imageSrc: <CiDiscount1 />,
    },
  ]);

  const handleChange = (index, value) => {
    const newSettings = [...settings];
    newSettings[index].placeholder = value;
    setSettings(newSettings);
  };
  return (
    <>
      <img
        src="images/Product/bell.png"
        alt="Bell"
        onClick={() => setShowModal(true)}
      />
      {showModal ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-[1000] outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start items-center modal-header justify-between px-4 py-2 rounded-t">
                  <h3>تنبيهات المنتج - تيشرت قطن مستورد</h3>
                  <button
                    className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => setShowModal(false)}
                  >
                    <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none"></span>
                  </button>
                  <button
                    className="background-transparent font-bold uppercase text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    <FaTimes />
                  </button>
                </div>
                {/*body*/}
                <div className="relative p-6 flex-auto">
                  <div className="pr-pg-sub-modal-body">
                    {settings.map((setting, index) => (
                      <div key={index} className="pr-pg-mdl-cntnt-row">
                        <div className="pr-pg-mdl-txt-set">
                          <h3>{setting.title}</h3>
                          <p>{setting.description}</p>
                        </div>
                        <div className="pr-pg-mdl-fld-set">
                          <div className="pr-pg-mdl-sub-fld-set">
                            <label>{setting.imageSrc}</label>
                            <input
                              type="text"
                              name=""
                              dir="rtl"
                              placeholder={setting.placeholder}
                              onChange={(e) =>
                                handleChange(index, e.target.value)
                              }
                            />
                          </div>
                          <span>{setting.unit}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                {/*footer*/}
                <div className="px-6 pb-5 w-full">
                  <button
                    className="bg-[#BAF3E6] w-full text-blue-950 active:bg-emerald-600 hover:bg-emerald-300 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    حفظ
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-animation fixed inset-0 z-40"></div>
        </>
      ) : null}
    </>
  );
}
