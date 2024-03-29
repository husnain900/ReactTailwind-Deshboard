import React, { useState } from 'react';
import './product.css';
import '../Ui-components/style.css';
import Productmodal from '../../PopUp/Productpopup/productmodal';
import ProductPopup2 from '../../PopUp/Productpopup/productpopup2';
import { CiCirclePlus } from 'react-icons/ci';
import { IoIosArrowDown } from 'react-icons/io';
import { LuLayoutGrid } from 'react-icons/lu';
import { IoIosList } from 'react-icons/io';
import { data } from '../../DevData/DevData';
import Khidmatpopup from '../../PopUp/TopTitlepopup/Khidmatpopup';
import Filteringpopup from '../../PopUp/TopTitlepopup/Filteringpopup';
import BreadCrum from '../../Commons/BreadCrum/BreadCrum';
import Productpopup3 from '../../PopUp/Productpopup/productpopup3';
import ProductCardPopUps from '../../PopUp/Productpopup/ProductCardpopups';
import ProductSelect from './ProductSelect';
import { Button } from '@mui/material';
import { LuBox } from "react-icons/lu";
import { LuFrame } from "react-icons/lu";
import { MdOutlineCake } from "react-icons/md";
import { IoGameControllerOutline } from "react-icons/io5";
import { PiBarcode } from "react-icons/pi";
import { HiOutlineInboxStack } from "react-icons/hi2";







const colourOptions = [
  { value: 'red', label: 'قسم الملابس' },
  { value: 'green', label: 'ملابس رجالية (مخفي)' },
  { value: 'blue', label: 'ملابس نسائية (مخفي)' },
  { value: 'red', label: 'قسم العطور' },
  { value: 'green', label: 'عطور رجالية (مخفي)' },
  { value: 'blue', label: 'عطور نسائية (مخفي)' },
  { value: 'red', label: 'اجهزه منزليه' },
  { value: 'green', label: 'undefined (مخفي)' },
  { value: 'blue', label: 'عبدالله' },
  { value: 'blue', label: 'الأكسسوارات (مخفي)' },
  { value: 'blue', label: 'هدايا' },
];

const Product = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [iconDirection, setIconDirection] = useState('down');
  const [open, setOpen] = React.useState(false);
  const [image, setImage] = useState('');
  const [colorsOption, setColorsOption] = useState(colourOptions);

  const handleClickOpen = (imageUrl = '') => {
    setOpen(!open);
    setImage(imageUrl);
    console.log(imageUrl);
  };

  const togglePopup = () => {
    setIsPopupOpen(!isPopupOpen);
    toggleIconDirection();
  };

  const closePopup = () => {
    setIsPopupOpen(false);
  };

  const toggleIconDirection = () => {
    setIconDirection(iconDirection === 'down' ? 'up' : 'down');
  };

  const addDataToToggle = (latestOption) => {
    console.log('this function has been called');
    console.log(latestOption);
    setColorsOption([latestOption, ...colorsOption]);
  };

  const categories = [
    {
      title: 'منتج جاهز',
      description: 'المنتجات الملموسة والقابلة للشحن',
    icon: <LuBox />

    },
    {
      title: 'خدمة حسب الطلب',
      description: 'التصميم، الطباعة، البحوث، الكتابة',
      icon:<LuFrame />
    },
    {
      title: 'أكل',
      description: 'المأكولات والمشروبات التي تتطلب شحن خاص',
      icon: <MdOutlineCake  />
    },
    {
      title: 'منتج رقمي',
      description: 'الكتب الإلكترونية، الدورات، ملفات للتحميل',
      icon: <IoGameControllerOutline   />
    },
    {
      title: 'بطاقة رقمية',
      description: 'بطاقات شحن، حسابات للبيع',
      icon: <PiBarcode   />
    },
    {
      title: 'مجموعة منتجات',
      description: 'أكثر من منتج في منتج واحد',
      icon: <HiOutlineInboxStack   />
    },
    {
      title: 'استخدام نماذج جاهزة!',
      description: 'اضافة منتج بسرعه وسهولة',
      isNew: true,
      icon: <LuLayoutGrid   />
     
    },
  ];

  return (
    <>
      <div>
        <BreadCrum />
        <div>
          <div className="top-title relative">
            <div className="">
              <button className="btn-hover common-btn" onClick={togglePopup}>
                <a className="flex gap-2 items-center" href="#">
                  <CiCirclePlus size={27} /> إضافة منتج جديد{' '}
                  <span
                    className={`transition-transform duration-300 ${
                      iconDirection === 'down' ? 'rotate-0' : 'rotate-180'
                    }`}
                  >
                    {iconDirection === 'down' ? (
                      <IoIosArrowDown />
                    ) : (
                      <IoIosArrowDown style={{ transform: 'rotate(0deg)' }} />
                    )}
                  </span>
                </a>
              </button>

              {isPopupOpen && (
                <ul className="dark-ul popup-product shadow rounded-lg bg-white absolute z-10 w-64">
                  {categories.map((category, index) => (
                    <li
                      key={index}
                      className={`${
                        index === categories.length - 1
                          ? 'bg-gray-100 border-t border-gray-300 '
                          : ''
                      }hover:bg-gray-100 p-1 hover:rounded dark-li`}
                    >
                      <a
                        href="#"
                        className="dark-a text-gray-800 py-1 px-2 flex items-center gap-1"
                        onClick={closePopup}
                      >
                     <span className='ProductFirstdropIcon'>  {category.icon}</span>  <span>
                       
                          <h4 className="flex gap-2">
                            <b>{category.title}</b>
                            {category.isNew && (
                              <span className="rounded-3xl w-11 h-6 flex items-center justify-center bg-red-500 text-white">
                                جديد
                              </span>
                            )}
                          </h4>
                          <p>{category.description}</p>
                        </span>
                      </a>
                    </li>
                  ))}
                </ul>
              )}
            </div>
            <div className="flex relative items-center gap-4 lg:gap-7 sm:flex-row flex-col left-side">
              <div className="dark-a">
                <Filteringpopup />
              </div>
              <div className="dark-a">
                <Khidmatpopup />
              </div>
              <div className="hidden lg:block">
                <div className="flex gap-3 items-center">
                  <a className='dark-a' href="#">
                    <LuLayoutGrid />
                  </a>
                  <a className='dark-a' href="#">
                    <IoIosList />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-12 gap-7 lg:gap-2 my-10">
          {data.map((item) => (
            <div
              key={item.id}
              className="fm-box-container col-span-12 md:col-span-6 lg:col-span-3"
            >
              <div className="fm-box-row">
                <div className="fm-pr-img cursor-pointer ">
                  <img
                    src={item.imgSrc}
                    alt="Product"
                    onClick={() => handleClickOpen(item.imgSrc)}
                  />
                  {/* <h1>{item.imgSrc}</h1> */}
                </div>
                <div className="fm-head-pr-btn">
                  <ProductCardPopUps
                    key={item.id}
                    openpop={open}
                    handleOpenC={handleClickOpen}
                    imageSrc={item.imgSrc}
                    Productimg={image}
                  />
                </div>
              </div>
              <div className="fm-box-row">
                <div className="fm-fields-lr">
                  <div className="fm-sub-fields-lr">
                    <label className="fm-fields-lr-lab">
                      <img src={item.barcodeSrc} alt="Coins" />
                    </label>
                    <input
                      className="fm-fields-lr-in"
                      type="text"
                      name=""
                      dir="rtl"
                      placeholder="حساب نتفلیکس"
                    />
                  </div>
                </div>
                <div className="fm-fields-lr">
                  <div className="fm-sub-fields-lsm w-full">
                    <label className="fm-fields-lr-lab">
                      <img src={item.coinsSrc} alt="Coins" />
                    </label>
                    <input
                      className="fm-fields-lr-in"
                      type="text"
                      name=""
                      dir="rtl"
                      placeholder="11.00"
                    />
                  </div>
                  <div className="fm-sub-fields-btn-1">
                    <button>ر.س</button>
                  </div>
                </div>
                <div className="fm-fields-lr">
                  <div className="fm-sub-fields-lrm w-full">
                    <label className="fm-fields-lr-lab">
                      <img src={item.basketSrc} alt="Basket" />
                    </label>
                    <input
                      type="text"
                      name=""
                      className="fm-fields-lr-in"
                      dir="rtl"
                      placeholder="كمية غير محدودة"
                    />
                  </div>
                  <div className="fm-sub-fields-btn-2 ">
                    <button>
                      <ProductPopup2 />
                    </button>
                  </div>
                  <div className="fm-sub-fields-btn-2 round-btn">
                    <button>
                      <img src={item.groupSrc} alt="Group" />
                    </button>
                  </div>
                </div>
                <div
                  className="w-full flex my-[5px] "
                  style={{ maxWidth: '100%' }}
                >
                  <div
                    className="fm-sub-fields-slc h-10 w-full product-select"
                    // style={{ maxWidth: '70%' }}
                  >
                    <ProductSelect colorsOption={colorsOption} />
                  </div>
                  <div className="fm-sub-fields-btn-3">
                    <Button>
                      <Productmodal
                        colourOptions={colourOptions}
                        addDataToToggle={addDataToToggle}
                      />
                    </Button>
                  </div>
                </div>
              </div>
              <div className="fm-box-footer">
                <div className="flex justify-between items-center px-2">
                  <Productpopup3 />
                  <div className="fm-ft-col-2">
                    <select>
                      <option value={item.moreSrc}>المزيد</option>
                    </select>
                  </div>
                </div>
                <div className="fm-main-btn-block">
                  <Button className="btn-hover">حفظ</Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Product;
