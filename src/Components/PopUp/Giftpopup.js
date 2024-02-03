import React, { useEffect, useState } from 'react';
import { CiGift } from 'react-icons/ci';
import { FaTimes } from 'react-icons/fa';
import { IoIosCopy } from 'react-icons/io';
import {
  FaTelegramPlane,
  FaFacebookF,
  FaTwitter,
  FaWhatsapp,
} from 'react-icons/fa';
import { BiSolidDiscount } from 'react-icons/bi';
import "./Giftpopup1.css"

const Giftpopup = () => {
  const [isPopupOpen, setPopupOpen] = useState(false);
  const [isQAPopupOpen, setQAPopupOpen] = useState(false);
  const [isSijlPopupOpen, setSijlPopupOpen] = useState(false);

  const openPopup = () => {
    setPopupOpen(true);
  };

  const closePopup = () => {
    setPopupOpen(false);
    setQAPopupOpen(false);
    setSijlPopupOpen(false);
  };

  const openQAPopup = () => {
    closePopup();
    setQAPopupOpen(true);
  };

  const openSijlPopup = () => {
    closePopup();
    setSijlPopupOpen(true);
  };

  const copyCoupon = () => {
    const referalCodeElement = document.getElementById('referalCode');
    const range = document.createRange();
    range.selectNode(referalCodeElement);
    const selection = window.getSelection();
    selection.removeAllRanges();
    selection.addRange(range);
    document.execCommand('copy');
    selection.removeAllRanges();
    const doneCopyRefElement = document.getElementById('copyCode_done');
    doneCopyRefElement.classList.add('doneCopyref');
    setTimeout(() => {
      doneCopyRefElement.classList.remove('doneCopyref');
    }, 1000);
    console.log('Coupon code copied!');
  };

  const copyNumber = () => {};

  const openPopupByType = (popupType) => {
    closePopup();

    switch (popupType) {
      case 'qa':
        setQAPopupOpen(true);
        break;
      case 'sijl':
        setSijlPopupOpen(true);
        break;
      // Add more cases if needed
      default:
        break;
    }
  };

  const sijlData = [
    {
      link: 'https://salla.sa/factorygamessa',
      image: 'images/PopUp/download2.png',
      name: 'FactoryGamesSA / فاكتوري قيمز',
      total: '9.9',
      time: 'منذ 4 سنوات',
    },
    {
      link: 'https://salla.sa/factorygamessa',
      image: 'images/PopUp/download1.png',
      name: 'شهرة',
      total: '9.9',
      time: 'منذ 4 سنوات',
    },
  ];

  const handleClickOutside = (event) => {
    const popupElement = document.getElementById('gift-popup');
    if (popupElement && !popupElement.contains(event.target)) {
      closePopup();
    }
  };

  // Adding event listener when the popup is open
  useEffect(() => {
    if (isPopupOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    // Cleanup function to remove the event listener
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isPopupOpen]);


  

  return (
    <section className="tech-home-gift-main">
      
      <CiGift id="open-popup" onClick={openPopup} />

      {isPopupOpen && (
        
        <div className="tech-home-gift-popup-main absolute ">
          <div className="tech-home-gift-bg" style={{ zIndex: '1000' }}></div>
          <div className="tech-home-gift-row">
            <div className="tech-home-gift-popup-box slideIn" id="gift-popup">
              <div className="tech-home-gift-popup-box-title">
                <h6>نقاط الولاء</h6>
                <button className="giftClose" onClick={closePopup}>
                  <FaTimes />
                </button>
              </div>

              <div className="tech-home-gift-popup-box-content">
                <div id="copyCode_done" onClick={copyNumber}>
                  تم نسخ الكوبون
                </div>
                <div className="tech-home-gift-popup-box-pro-cop">
                  <p>اكسب نقاط عن كل دعوة لانشاء متجر جديد</p>
                  <div className="tech-home-gift-pro-coupon">
                    <span>
                      <BiSolidDiscount size={25} />
                    </span>
                    <h1 id="referalCode">S42KJEN</h1>
                    <button
                      id="copy-coupon"
                      className="p-1"
                      onClick={copyCoupon}
                    >
                      <IoIosCopy size={18} />
                    </button>
                  </div>
                </div>
                <div className="tech-home-gift-popup-box-social">
                  <ul>
                    <li>
                      <a href="#">
                        <FaWhatsapp />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <FaTwitter />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <FaFacebookF />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <FaTelegramPlane />
                      </a>
                    </li>
                    <li>
                      <a href="#">@</a>
                    </li>
                  </ul>
                  <p>نقاط الولاء الحالية</p>
                  <span>1049.23</span>
                </div>
                <div className="tech-home-gift-inner-popup-buttons">
                  <a onClick={() => openPopupByType('qa')}>اسئلة واجوبة</a>
                  <span></span>
                  <a onClick={() => openPopupByType('sijl')}>سجل النقاط</a>
                </div>
              </div>
              <div className="tech-home-gift-popup-footer">
                <button className="giftClose " onClick={closePopup}>
                  إغلاق
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {isQAPopupOpen && (
        <>
          <div className="tech-home-gift-inner-popup-main slideIn" id="qaPopup">
            <div className="tech-home-gift-inner-popup text-right">
              <div className="tech-home-gift-popup-box-title">
                <h6>تفاصيل كوبون الدعوة</h6>
                <button className="giftClose" onClick={closePopup}>
                  <FaTimes />
                </button>
              </div>
              <div className="tech-home-gift-inner-popup-body overflow-y-scroll scrollstyle h-[70vh]">
                <h4>كيفية الاستفادة من كوبون الدعوة ؟</h4>
                <ol>
                  <li>
                    <span className="">1.</span>.{'  '}
                    انسخ الكوبون وارسله للشخص الذي ترغب بدعوته
                  </li>
                  <li>
                    <span className="">2.</span>
                    يقوم الشخص بإستخدام كوبون التخفيض عند الاشتراك لأول مرة
                    <span className="text-red-600">*</span>
                    في إحدى الباقات.
                  </li>
                  <li>
                    <span className="">3.</span>
                    يحصل هو على خصم 10% وتكسب أنت قيمة 10% من اشتراكه في رصيد
                    متجرك في حال الاشتراك بالباقة الشهرية.
                  </li>
                  <li>
                    <span className="">4.</span>
                    يحصل هو على خصم 20% وتكسب أنت قيمة 20% من اشتراكه في رصيد
                    متجرك في حال الاشتراك بالباقة السنوية.
                  </li>
                </ol>
                <p
                  style={{
                    color: '#ef5350',
                    fontWeight: 400,
                    marginBottom: 10,
                  }}
                >
                  <strong>
                    <span className="text-red-600">*</span>
                    ينطبق الكوبون على المتاجر الجديدة فقط
                  </strong>
                </p>
                <p style={{ marginTop: 20 }}>
                  <strong>مثال توضيحي/</strong>
                  عند اشتراك اي متجر جديد لأول مرة بواسطة كوبون الدعوة الخاصة
                  بك، بباقة سلة بلس لمدة سنة سيحصل هو على 20% خصم أي بقيمة (172
                  ريال)، وأنت ايضا ستحصل على نفس القيمة تضاف إلى رصيد نقاطك, أي
                  ستحصل تقريبا على شهرين مجاناً من نفس الباقة عن كل متجر جديد
                  اشترك من طرفك!
                </p>
                <h4 style={{ marginTop: 40 }}>أسئلة وأجوبة</h4>
                <p style={{ marginBottom: 10 }}>
                  <strong>
                    ماهي المتاجر التي ممكن أن تستفيد من كوبون الدعوة؟
                  </strong>
                  <br />
                  المتاجر الجديدة التي لم يسبق لها الاشتراك في إحدى الباقات
                  المدفوعة.
                </p>
                <p style={{ marginTop: 20, marginBottom: 10 }}>
                  <strong>
                    هل يمكن استخدام الكوبون أكثر من مرة للمتجر الواحد؟
                  </strong>
                  <br />
                  لا يمكن ذلك.
                </p>
                <p style={{ marginTop: 20, marginBottom: 10 }}>
                  <strong>هل يوجد حد لعدد المتاجر التي يمكن دعوتها؟</strong>
                  <br />
                  لا يوجد حد لعدد المتاجر المدعوة.
                </p>
                <p style={{ marginTop: 20, marginBottom: 10 }}>
                  <strong>كيف يمكنني استبدال الرصيد الذي حصلت عليه؟</strong>
                  <br />
                  يمكن الاستفادة منه عند تجديد أو ترقية الباقة الخاصة بك وذلك
                  عند إتمام الطلب من متجر سلة.
                </p>
                <p style={{ marginTop: 20, marginBottom: 10 }}>
                  <strong>
                    هل يمكنني الحصول على بوليصات شحن من خلال رصيد المتجر؟
                  </strong>
                  <br />
                  لا يمكن ذلك.
                </p>
                <p style={{ marginTop: 20, marginBottom: 10 }}>
                  <strong>
                    متى احصل على الرصيد المجاني عند استخدام الكوبون؟
                  </strong>
                  <br />
                  ستحصل على الرصيد بشكل تلقائي عند قيام المتجر بدفع قيمة
                  الاشتراك بواسطة البطاقة الائتمانية أو مدى، أما عند التحويل
                  البنكي فستتم مراجعة الحوالة أولا.
                </p>
                <p style={{ marginTop: 20, marginBottom: 10 }}>
                  <strong>
                    كيف اعرف أن الشخص المدعو قام بإستخدام الكوبون؟
                  </strong>
                  <br />
                  سوف يصلك ايميل فور تأكيد اشتراك المتجر الجديد، كما يمكن معرفة
                  تفاصيل أكثر من خلال زر الاحصائيات.
                </p>
                <p style={{ marginTop: 20, marginBottom: 10 }}>
                  <strong>
                    هل استطيع استخدام كوبون الدعوة الخاص بي على متجري؟
                  </strong>
                  <br />
                  لا يمكن ذلك.
                </p>
              </div>
              <div className="tech-home-gift-popup-footer">
                <button className="giftClose " onClick={closePopup}>
                  إغلاق
                </button>
              </div>
            </div>
          </div>
          <div className="bg-animation fixed inset-0 z-40"></div>
        </>
      )}

      {isSijlPopupOpen && (
        <>
          <div
            className="tech-home-gift-inner-popup-main slideIn "
            id="sijlPopup"
          >
            <div className="tech-home-gift-inner-popup">
              <div className="tech-home-gift-popup-box-title">
                <h6>سجل النقاط</h6>
                <button className="giftClose" onClick={closePopup}>
                  <FaTimes />
                </button>
              </div>
              <div className="tech-home-gift-inner-popup-body">
                <h3 className="text-right text-2xl">المتاجر</h3>
                <div className="tech-home-gift-inner-popup-sijl">
                  <table>
                    <tbody>
                      {sijlData.map((item, index) => (
                        <tr key={index} className="">
                          <td
                            className="order-customer customer-td"
                            style={{ paddingRight: 0 }}
                          >
                            <div className="media-left media-middle">
                              <a href={item.link} target="_blank">
                                <img
                                  src={item.image}
                                  className="img-circle"
                                  alt=""
                                />
                              </a>
                            </div>
                            <div className="media-left">
                              <div className="order-customer-name">
                                <a href="#" target="_blank">
                                  {item.name}
                                </a>
                              </div>
                            </div>
                          </td>

                          <td className="order-total">
                            <h6 className="text-semibold text-price">
                              {item.total}
                            </h6>
                          </td>

                          <td className="order-time" style={{ paddingLeft: 0 }}>
                            {item.time}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
              <div className="tech-home-gift-popup-footer">
                <button className="giftClose " onClick={closePopup}>
                  إغلاق
                </button>
              </div>
            </div>
          </div>
          <div className="bg-animation fixed inset-0 z-40"></div>
        </>
      )}

      {/* Loader */}
      <div className="tech-home-gift-loader-bg" id="loader">
        <div className="tech-home-gift-loader"></div>
      </div>
    </section>
  );
};

export default Giftpopup;
