import React, { useState } from 'react';
import { FaTimes } from 'react-icons/fa';
import TextEditor from '../../Pages/Ui-components/TextEditor';
import Datepickerpopup from '../../Pages/Ui-components/Datepickerpopup';
import { CiCircleList } from 'react-icons/ci';
import { RiFileList2Line } from 'react-icons/ri';
import './productpopup3.css';
import { CiCirclePlus } from 'react-icons/ci';
import { FaAngleDown, FaAngleUp } from 'react-icons/fa6';
import Button from '@mui/material/Button';

export default function Modal() {
  const [showModal, setShowModal] = useState(false);
  const [hideAndDisplay, sethideAndDisplay] = useState(true);
  const percent = '{present}';
  const discount = '{discount}';

  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };
  const changeHideAndDisplay = () => {
    sethideAndDisplay(true);
  };

  const changeHide = () => {
    sethideAndDisplay(false);
  };

  return (
    <>
      <div
        className="fm-ft-col-1 cursor-pointer"
        onClick={() => setShowModal(true)}
      >
        <img src="images/Product/group-54.png" alt="Group 54" />

        <p>بيانات المنتج</p>
      </div>
      {showModal && (
        <>
          <div className="justify-center text-right items-center  flex overflow-x-hidden slideIn overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-1/2 my-6 mx-auto">
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                <div className="flex items-start items-center modal-header justify-between px-4 py-2 rounded-t">
                  <h3>بيانات المنتج (عغلق)</h3>
                  <button
                    className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => setShowModal(false)}
                  >
                    {/* <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none"></span> */}
                  </button>
                  <button
                    className="background-transparent font-bold uppercase text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    <FaTimes />
                  </button>
                </div>
                <div className="relative p-6 flex-auto overflow-y-scroll scrollstyle h-[80vh]">
                  <div className="tech-prooptionspopup-box-content">
                    <div
                      style={{
                        display: 'flex',
                        border: '2px solid #76E8CD ',
                        marginBottom: '10px',
                      }}
                    >
                      <div
                        className="ProductdataButton"
                        style={{ width: '50%' }}
                      >
                        <button
                          className="productOrderButton"
                          onClick={changeHideAndDisplay}
                        >
                          <RiFileList2Line
                            style={{ marginLeft: '5px', width: '17px' }}
                          />
                          بيانات المنتج
                        </button>
                      </div>
                      <div style={{ width: '50%' }}>
                        <button
                          className="productOrderButton"
                          onClick={changeHide}
                        >
                          <CiCircleList
                            style={{ marginLeft: '5px', width: '17px' }}
                          />
                          نموذج الطلب
                        </button>
                      </div>
                    </div>
                    {hideAndDisplay ? (
                      <>
                        <div className="tech-productoption-row">
                          <div className="tech-productoption-col-1">
                            <label>يتطلب شحن / توصيل ؟</label>
                            <div className="tech-productoption-input-group">
                              <img src="images/PopUp/truck.png" alt="truck" />
                              <select>
                                <option>نعم، يتطلب شحن</option>
                                <option>لا يتطلب شحن</option>
                              </select>
                            </div>
                          </div>
                        </div>
                        <div className="tech-productoption-row">
                          <div className="tech-productoption-col-1">
                            <label>وزن المنتج</label>
                            <small>
                              أدخل الوزن الفعلي للمنتج ليتم معالجته بشكل صحيح من
                              قبل شركة الشحن، وفي حال كانت منتجاتك ذات حجم كبير
                              الرجاء الانتباه للوزن الحجمي
                              <a href="#" target="_blank">
                                تفاصيل أكثر
                              </a>
                            </small>

                            <div className="tech-productoption-input-group weight-field">
                              <img src="images/PopUp/weight.png" alt="weight" />
                              <input
                                type="text"
                                name=""
                                placeholder="وزن المنتج"
                              />
                              <select>
                                <option>كجم</option>
                                <option>جم</option>
                                <option>أوقية</option>
                                <option>رطل</option>
                              </select>
                            </div>
                            <small
                              id="weight_error_message"
                              style={{
                                display: 'block',
                                fontSize: '12px',
                                marginTop: '7px',
                              }}
                            >
                              قيمة الوزن غير صحيحة
                            </small>
                          </div>
                        </div>
                        <div className="tech-productoption-row">
                          <div className="tech-productoption-col-1">
                            <label>سعر التكلفة</label>

                            <div className="tech-productoption-input-group">
                              <img src="images/PopUp/weight.png" alt="cost" />
                              <input
                                type="text"
                                name=""
                                placeholder="سعر التكلفة"
                              />
                            </div>
                          </div>
                        </div>

                        {/* Continue the remaining HTML structure... */}

                        <div className="tech-productoption-row column-design">
                          <div className="tech-productoption-col-2">
                            <label>السعر المخفض</label>

                            <div className="tech-productoption-input-group">
                              <img src="images/PopUp/weight.png" />
                              <input
                                type="text"
                                name=""
                                placeholder="السعر المخفض"
                              />
                            </div>
                          </div>
                          <div className="tech-productoption-col-2 column-design">
                            <label>نهاية التخفيض (اختياري) </label>

                            <div className="tech-productoption-input-group">
                              <Datepickerpopup />
                            </div>
                          </div>
                        </div>

                        <div className="tech-productoption-row column-design">
                          <div className="tech-productoption-col-3">
                            <label>رمز التخزين</label>

                            <div className="tech-productoption-input-group">
                              <img src="images/PopUp/weight.png" />
                              <input
                                type="text"
                                name=""
                                placeholder="رمز التخزين SKU"
                              />
                            </div>
                          </div>
                          <div className="tech-productoption-col-3 column-design">
                            <label>MPN</label>

                            <div className="tech-productoption-input-group">
                              <img src="images/PopUp/weight.png" />
                              <input type="text" name="" placeholder="MPN" />
                            </div>
                          </div>
                          <div className="tech-productoption-col-3 column-design">
                            <label>GTIN</label>

                            <div className="tech-productoption-input-group">
                              <img src="images/PopUp/weight.png" />
                              <input type="text" name="" placeholder="GTIN" />
                            </div>
                          </div>
                        </div>

                        <div className="tech-productoption-row">
                          <div className="tech-productoption-col-1 column-design">
                            <label>أقصى كمية لكل عميل</label>
                            <div className="tech-productoption-input-group">
                              <img src="images/PopUp/truck.png" />
                              <input
                                type="text"
                                name=""
                                placeholder="أقصى كمية لكل عميل"
                              />
                            </div>
                          </div>
                        </div>
                        <div className="tech-productoption-row">
                          <div className="tech-productoption-col-1 readonly-main">
                            <label>العنوان الفرعي</label>
                            <div className="tech-productoption-input-group readonly">
                              <img src="images/PopUp/truck.png" />
                              <input
                                type="text"
                                id="get_subtitle_val"
                                name=""
                                placeholder="العنوان الفرعي"
                                value=""
                              />

                              <input
                                type="text"
                                id="put_subtitle_val"
                                name=""
                                placeholder="العنوان الفرعي"
                                className="readonly"
                                disabled="disabled"
                                value="العنوان الفرعي"
                              />
                            </div>
                            <p className="mt-2">
                              <span className="">
                                العنوان الفرعي يظهر تحت اسم المنتج في المتجر،
                                بحد اقصى 35 حرف. نسبة الخصم:
                                <button>{percent}</button>
                              </span>
                              <span>
                                مبلغ الخصم:
                                <button>{discount}</button>
                              </span>
                            </p>
                          </div>
                        </div>
                        <div className="tech-productoption-row">
                          <div className="tech-productoption-col-1 readonly-main">
                            <label>العنوان الترويجي</label>
                            <div className="tech-productoption-input-group readonly">
                              <img src="images/PopUp/truck.png" />
                              <input
                                type="text"
                                id="get_promotion_val"
                                name=""
                                placeholder="العنوان الترويجي"
                                value=""
                              />

                              <input
                                type="text"
                                id="put_promotion_val"
                                name=""
                                placeholder="العنوان الترويجي"
                                className="readonly"
                                disabled="disabled"
                                value="العنوان الترويجي"
                              />
                            </div>
                            <p className="mt-2">
                              <span className="">
                                العنوان الترويجي يظهر على صورة المنتج في المتجر،
                                بحد أقصى 25 حرف. نسبة الخصم:
                                <button>{percent}</button>
                              </span>
                              <span>
                                مبلغ الخصم:
                                <button>{discount}</button>
                              </span>
                            </p>
                          </div>
                        </div>

                        <div className="tech-productoption-row">
                          <div className="tech-productoption-col-1">
                            <label>تحديد كمية المنتج</label>
                            <div className="tech-productoption-input-group">
                              <img src="images/PopUp/truck.png" />
                              <select>
                                <option>تحديد كمية المنتج</option>
                                <option>تفعيل خيار تحديد الكمية</option>
                                <option>تعطيل خيار تحديد الكمية</option>
                              </select>
                            </div>
                          </div>
                        </div>
                        <div className="tech-productoption-row">
                          <div className="tech-productoption-col-1">
                            <label>
                              قنوات عرض المنتج <br />
                              <small>قم بتحديد قنوات عرض المنتج</small>
                            </label>
                            <div className="tech-productoption-input-group">
                              <img src="images/PopUp/truck.png" />
                              <select>
                                <option>اظهار في موقع المتجر</option>
                                <option>قم بتحديد قنوات عرض المنتج</option>
                              </select>
                            </div>
                          </div>
                        </div>
                        <div className="tech-productoption-row">
                          <div className="tech-productoption-col-1">
                            <div className="tech-productoption-input-group-checkbox">
                              <label>
                                <input
                                  className="tech-pro-op-custom-checkbox-btn"
                                  type="checkbox"
                                  name=""
                                />
                                <div className="tech-pro-op-custom-checkbox">
                                  <div className="tech-pro-op-check-icon">
                                    &#10003;
                                  </div>
                                </div>
                                ارفاق ملف عند الطلب
                              </label>
                              <label>
                                <input
                                  className="tech-pro-op-custom-checkbox-btn"
                                  type="checkbox"
                                  name=""
                                />
                                <div className="tech-pro-op-custom-checkbox">
                                  <div className="tech-pro-op-check-icon">
                                    &#10003;
                                  </div>
                                </div>
                                امكانية كتابة ملاحظة
                              </label>
                              <label>
                                <input
                                  className="tech-pro-op-custom-checkbox-btn"
                                  type="checkbox"
                                  name=""
                                />
                                <div className="tech-pro-op-custom-checkbox">
                                  <div className="tech-pro-op-check-icon">
                                    &#10003;
                                  </div>
                                </div>
                                المنتج خاضع لضريبة
                              </label>
                            </div>
                          </div>
                        </div>
                        <div className="tech-productoption-row">
                          <div className="tech-productoption-col-1">
                            <div className="tech-productoption-input-group-editor">
                              <div id="editor">
                                <TextEditor />
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="tech-productoption-row">
                          <div className="tech-productoption-col-1">
                            <label>ادخل الوسوم هنا</label>
                            <div className="tech-productoption-input-group product-tag">
                              <img src="images/PopUp/truck.png" />
                              <input
                                type="text"
                                id="product_tag"
                                placeholder="ادخل الوسم هنا، ثم اضغط زر اضافة أو اضغط Enter"
                              />
                              <button>إضافة</button>
                            </div>

                            <ul className="tech-pr-op-tagList">
                              <li className="placeholder">
                                لا توجد وسوم لهذا المنتج...
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div className="tech-productoption-seo-panel">
                          <h6>تحسينات SEO</h6>
                          <div className="tech-productoption-row">
                            <div className="tech-productoption-col-1">
                              <label>عنوان صفحة المنتج (Page Title)</label>
                              <div className="tech-productoption-input-group product-tag">
                                <img src="images/PopUp/truck.png" />
                                <input
                                  type="text"
                                  id="get_pro_seo_title"
                                  placeholder="عنوان صفحة المنتج (Page Title)"
                                />
                              </div>
                            </div>
                          </div>
                          <div className="tech-productoption-row">
                            <div className="tech-productoption-col-1">
                              <label>رابط صفحة المنتج (SEO Page URL)</label>
                              <div className="tech-productoption-input-group product-tag">
                                <img src="images/PopUp/truck.png" />
                                <input
                                  type="text"
                                  id="get_pro_seo_url"
                                  placeholder="رابط صفحة المنتج (SEO Page URL)"
                                />
                              </div>
                            </div>
                          </div>
                          <div className="tech-productoption-row">
                            <div className="tech-productoption-col-1">
                              <label>وصف صفحة المنتج (Page Description)</label>
                              <div className="tech-productoption-input-group product-tag">
                                <img src="images/PopUp/truck.png" />
                                <textarea
                                  id="get_pro_seo_desc"
                                  placeholder="وصف صفحة المنتج (Page Description)"
                                ></textarea>
                              </div>
                            </div>
                          </div>
                          <div className="tech-product-seo-preview">
                            <a href="#" id="put_seo_title" target="_blank">
                              عغلق
                            </a>
                            <a href="#" target="_blank">
                              https://salla.sa/sau57/
                              <span id="put_seo_link" dir="rtl">
                                عغلق
                              </span>
                              /p1773267894
                            </a>
                            <p id="put_seo_description">
                              متجر متخصص في أحدث منتجات الملابس والموضة
                            </p>
                          </div>
                        </div>
                      </>
                    ) : (
                      <>
                        <div>
                          <Button
                            className="btn-hover common-btn"
                            onClick={toggleDropdown}
                          >
                            <div className="flex gap-2 items-center">
                              <CiCirclePlus size={27} />
                              أضافة جمل جديدة{' '}
                              {dropdownOpen ? <FaAngleUp /> : <FaAngleDown />}
                            </div>
                          </Button>
                          {dropdownOpen && (
                            <div className="dropdown-content">
                              {/* Dropdown menu items go here */}
                              {/* <ul>
                                {' '}
                                <li href="#">Menu Item 1</li>
                                <li href="#">Menu Item 2</li>
                                <li href="#">Menu Item 3</li>
                              </ul> */}
                            </div>
                          )}
                        </div>
                      </>
                    )}
                  </div>
                </div>
                <div className="flex items-center justify-between py-3 px-4 bg-gray-200 border-t py-2 border-solid border-blueGray-200 rounded-b">
                  <button
                    className="bg-[#baf3e6] text-[#004d5a] active:bg-emerald-600 uppercase text-sm px-6 py-2 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    اضافة المنتج{' '}
                  </button>
                  <button
                    className="text-gray-500 bg-gray-300 hover:shadow-md px-6 py-2 rounded-md text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    إلغاء
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-animation fixed inset-0 z-40"></div>
        </>
      )}
    </>
  );
}
