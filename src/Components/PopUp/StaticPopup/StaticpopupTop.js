import React, { useState } from "react";
import Box from "@mui/material/Box";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { FaTimes } from "react-icons/fa";
import TextEditor from "../../Pages/Ui-components/TextEditor";
import { CiCirclePlus } from "react-icons/ci";
import "./StaticpopupTop.css";

export default function Modal() {
  const [showModal, setShowModal] = useState(false);
  const [age, setAge] = React.useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <>
      <button
        className="btn-hover common-btn"
        onClick={() => setShowModal(true)}
      >
        <a className="flex gap-2 items-center" href="#">
          <CiCirclePlus size={27} /> طلب جديد
        </a>
      </button>
      {showModal && (
        <>
          <div
            className="justify-center text-right items-center  flex overflow-x-hidden slideIn overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
            style={{ zIndex: "1000" }}
          >
            <div className="relative  ProductNewStaticOrder my-6 mx-auto w-3/5 md:w-4/5">
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                <div className="flex items-start modal-header justify-between px-4 py-2 rounded-t">
                  <h3>إنشاء صفحة</h3>
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
                <div className="relative p-6 flex-auto overflow-y-scroll scrollstyle h-[80vh]  scrollable-content">
                  <div className="tech-prooptionspopup-box-content">
                    <div className="tech-productoption-row">
                      <div className="tech-productoption-col-1">
                        <div className="tech-productoption-input-group">
                          <img src="images/PopUp/truck.png" alt="truck" />
                          <input
                            type="text"
                            name=""
                            placeholder="عنوان الصفحة"
                          />
                        </div>
                      </div>
                    </div>

                    <div className="tech-productoption-row">
                      <div className="tech-productoption-col-1">
                        <div className="tech-productoption-input-group">
                          <img src="images/PopUp/weight.png" alt="" />
                          <Box sx={{ minWidth: 120 }}>
                            <FormControl
                              sx={{ m: 1, minWidth: 120, font: 14 }}
                              size="small"
                            >
                              <Select
                                labelId="demo-simple-select-helper-label"
                                id="demo-simple-select-helper"
                                value={age}
                                label="عامة"
                                onChange={handleChange}
                              >
                                <MenuItem value="">عامة</MenuItem>
                                <MenuItem value={10}>
                                  سياسة الاستخدام والخصوصية
                                </MenuItem>
                                <MenuItem value={20}>
                                  سياسة الاستبدال والإسترجاع
                                </MenuItem>
                              </Select>
                            </FormControl>
                          </Box>
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
                          عرض رابط الصفحة في أسفل الموقع
                        </label>
                        <p className="text-gray-400 text-[11px]">
                          سيتم اخفاء رابط الصفحة من أسفل الموقع عند تعطيل هذا
                          الخيار
                        </p>
                      </div>
                    </div>

                    <div className="tech-productoption-seo-panel">
                      <h6>تحسينات SEO</h6>
                      <div className="tech-productoption-row">
                        <div className="tech-productoption-col-1">
                          <label>عنوان صفحة المنتج (Page Title)</label>
                          <div className="tech-productoption-input-group product-tag">
                            <img src="images/PopUp/truck.png" alt="" />
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
                            <img src="images/PopUp/truck.png" alt="" />
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
                            <img src="images/PopUp/truck.png" alt="" />
                            <textarea
                              id="get_pro_seo_desc"
                              placeholder="وصف صفحة المنتج (Page Description)"
                            ></textarea>
                          </div>
                        </div>
                      </div>
                      <div className="tech-product-seo-preview">
                        <a href="#" id="put_seo_title">
                          عغلق
                        </a>
                        <a href="#">
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
                  </div>
                </div>
                <div className="flex items-center justify-between py-3 px-4 bg-gray-200 border-t py-2 border-solid border-blueGray-200 rounded-b">
                  <button
                    className="bg-[#baf3e6] text-[#004d5a] active:bg-emerald-600 uppercase text-sm px-6 py-2 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    اضافة المنتج{" "}
                  </button>
                  <button
                    className="text-gray-500 bg-gray-300 hover:shadow-md px-6 py-2 rounded-md text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    إغلاق
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
