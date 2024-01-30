// SideAccordion.js
import React, { useState } from "react";
import { CiFilter } from "react-icons/ci";
import { IoIosCloseCircleOutline } from "react-icons/io";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { Button } from "@mui/material";

const checkboxItems = [
  { label: "الكل" },
  { label: "منتجات غير مسعرة" },
  { label: "منتجات مثبتة" },
  { label: "ممنتجات مخفية" },
  { label: "ممنتجات مخفية من تطبيق المتجر" },
  { label: "ممنتجات مخفضة" },
  { label: "ممنتجات نفدت" },
  { label: "ممنتجات للبيع" },
  { label: "ممنتجات غير مصنفة" },
  { label: "ممنتجات خاضعة للضريبة" },
  { label: "ممنتجات تتطلب شحن" },
  { label: "ممنتجات قاربت على النفاد" },
  { label: "ممنتجات بدون وصف" },
];

const checkboxItems2 = [
  { label: "الكل" },
  { label: "منتج جاهز" },
  { label: "خدمة حسب الطلب" },
  { label: "أكل" },
  { label: "منتج رقمي" },
  { label: "بطاقة رقمية" },
  { label: "مجموعة منتجات" },
  { label: "استخدام نماذج جاهزة!" },
];

const SideAccordion = () => {
  const [isSideContainerClosed, setSideContainerClosed] = useState(false);
  const [openAccordions, setOpenAccordions] = useState([1]);
  const [selectedOptions, setSelectedOptions] = useState([]);

  const toggleAccordion = (index) => {
    if (openAccordions.includes(index)) {
      setOpenAccordions(openAccordions.filter((item) => item !== index));
    } else {
      setOpenAccordions([...openAccordions, index]);
    }
  };

  const toggleSideContainer = () => {
    setSideContainerClosed(!isSideContainerClosed);
  };

  const handleSelectChange = (event) => {
    setSelectedOptions(event.target.value);
  };

  return (
    <>
      <a
        onClick={toggleSideContainer}
        className="flex gap-1 items-center"
        href="#"
      >
        <CiFilter />
        <p>تصفية</p>
      </a>
      {isSideContainerClosed && (
        <>
          <div
            className="pr-side-acordin-container fixed top-0 left-0 z-50"
            style={{ zIndex: "1000" }}
          >
            <div
              className="pr-side-acordin-sub-container bg-dark pb-16"
              style={{ zIndex: "1" }}
            >
              <div className="pr-side-head">
                <div className="pr-side-head-col gap-2">
                  <CiFilter className="dark-icon" />
                  <h2> فرز المنتجات حسب</h2>
                </div>
                <div className="pr-side-head-col">
                  <button className="" onClick={toggleSideContainer}>
                    <IoIosCloseCircleOutline
                      size={27}
                      className="text-red-500"
                    />
                  </button>
                </div>
              </div>
              <div className="pr-side-body">
                <div className="pr-side-body-rows">
                  <div
                    className="pr-side-rows-acc-btns"
                    onClick={() => toggleAccordion(1)}
                  >
                    <h3>حالة المنتج</h3>
                    <div className="pr-acc-divider"></div>
                    <span className="accordion-icon">
                      {openAccordions.includes(1) ? "-" : "+"}
                    </span>
                  </div>
                  <div
                    className={`pr-side-rows-acc-content ${
                      openAccordions.includes(1) ? "open" : ""
                    }`}
                  >
                    {checkboxItems.map((item, index) => (
                      <label key={index} className="chk-container">
                        <input type="checkbox" />
                        <span className="checkmark"></span>
                        {item.label}
                      </label>
                    ))}
                  </div>
                </div>
                <div className="pr-side-body-rows">
                  <div
                    className="pr-side-rows-acc-btns"
                    onClick={() => toggleAccordion(2)}
                  >
                    <h3>ماركة المنتج</h3>
                    <div className="pr-acc-divider"></div>
                    <span className="accordion-icon">
                      {openAccordions.includes(2) ? "-" : "+"}
                    </span>
                  </div>
                  <div
                    className={`pr-side-rows-acc-content ${
                      openAccordions.includes(2) ? "open" : ""
                    }`}
                  >
                    <FormControl
                      sx={{ minWidth: 120 }}
                      size="small"
                      className="w-full"
                    >
                      <InputLabel id="brand-select-label">الماركة</InputLabel>
                      <Select
                        labelId="brand-select-label"
                        id="brand-select"
                        multiple
                        value={selectedOptions}
                        onChange={handleSelectChange}
                        label="الماركة"
                      >
                        {/* Adjust the options based on your needs */}
                        <MenuItem value={10}>ماركة 1</MenuItem>
                        <MenuItem value={20}>ماركة 2</MenuItem>
                        <MenuItem value={30}>ماركة 3</MenuItem>
                      </Select>
                    </FormControl>
                  </div>
                </div>
                <div className="pr-side-body-rows">
                  <div
                    className="pr-side-rows-acc-btns"
                    onClick={() => toggleAccordion(3)}
                  >
                    <h3>نوع المنتج</h3>
                    <div className="pr-acc-divider"></div>
                    <span className="accordion-icon">
                      {openAccordions.includes(3) ? "-" : "+"}
                    </span>
                  </div>
                  <div
                    className={`pr-side-rows-acc-content ${
                      openAccordions.includes(3) ? "open" : ""
                    }`}
                  >
                    {checkboxItems2.map((item, index) => (
                      <label key={index} className="chk-container">
                        <input type="checkbox" />
                        <span className="checkmark"></span>
                        {item.label}
                      </label>
                    ))}
                  </div>
                </div>
                <div className="pr-side-body-rows">
                  <div
                    className="pr-side-rows-acc-btns"
                    onClick={() => toggleAccordion(4)}
                  >
                    <h3>تصنيف المنتج</h3>
                    <div className="pr-acc-divider"></div>
                    <span className="accordion-icon">
                      {openAccordions.includes(4) ? "-" : "+"}
                    </span>
                  </div>
                  <div
                    className={`pr-side-rows-acc-content ${
                      openAccordions.includes(4) ? "open" : ""
                    }`}
                  >
                    <FormControl
                      sx={{ minWidth: 120 }}
                      size="small"
                      className="w-full"
                    >
                      <InputLabel id="category-select-label">
                        التصنيف
                      </InputLabel>
                      <Select
                        labelId="category-select-label"
                        id="category-select"
                        multiple
                        value={selectedOptions}
                        onChange={handleSelectChange}
                        label="التصنيف"
                      >
                        {/* Adjust the options based on your needs */}
                        <MenuItem value={10}>تصنيف 1</MenuItem>
                        <MenuItem value={20}>تصنيف 2</MenuItem>
                        <MenuItem value={30}>تصنيف 3</MenuItem>
                      </Select>
                    </FormControl>
                  </div>
                </div>

                <FormControl
                  sx={{ minWidth: 120 }}
                  size="small"
                  className="w-full"
                >
                  <InputLabel id="demo-select-small-label">خيار</InputLabel>
                  <Select
                    labelId="demo-select-small-label"
                    id="demo-select-small"
                    multiple
                    value={selectedOptions}
                    onChange={handleSelectChange}
                    label="إضافة خيار"
                  >
                    <MenuItem value={10}>إضافة خيار 1</MenuItem>
                    <MenuItem value={20}>إضافة خيار 2</MenuItem>
                    <MenuItem value={30}>إضافة خيار 3</MenuItem>
                  </Select>
                </FormControl>
                <div className="prside-body-lst-btns">
                  <Button>عرض النتائج</Button>
                  <Button>إعادة تعيين</Button>
                </div>
                <div className="prside-body-lst-fl-btns mt-3">
                  <Button>
                    <img
                      src="./images/download.png"
                      style={{ width: "11px", marginLeft: "5px" }}
                    />
                    تصدير النتائج
                  </Button>
                </div>
              </div>
            </div>
          </div>
          <div
            onClick={toggleSideContainer}
            className="bg-animation fixed inset-0 z-40"
          ></div>
        </>
      )}
    </>
  );
};

export default SideAccordion;
