import React from 'react';
import './storedesign.css';
import { Button } from '@material-tailwind/react';
import { MdOutlineRemoveRedEye } from 'react-icons/md';
import { FiShoppingCart } from 'react-icons/fi';
import BreadCrum from '../../Commons/BreadCrum/BreadCrum';

const storedesign = () => {
  const stylistsData = [
    { name: 'رفال', rating: '4.5', reviews: '405', themeRating: 'تقييم الثيم' },
    { name: 'رفال', rating: '4.5', reviews: '405', themeRating: 'تقييم الثيم' },
    { name: 'رفال', rating: '4.5', reviews: '405', themeRating: 'تقييم الثيم' },
    { name: 'رفال', rating: '4.5', reviews: '405', themeRating: 'تقييم الثيم' },
    { name: 'رفال', rating: '4.5', reviews: '405', themeRating: 'تقييم الثيم' },
    { name: 'رفال', rating: '4.5', reviews: '405', themeRating: 'تقييم الثيم' },
    { name: 'رفال', rating: '4.5', reviews: '405', themeRating: 'تقييم الثيم' },
    { name: 'رفال', rating: '4.5', reviews: '405', themeRating: 'تقييم الثيم' },
  ];
  const stylistsData2 = [
    { name: 'مُختلف', rating: '(2 تقييمات)', themeRating: '250ر.س' },
    { name: 'مُختلف', rating: '(2 تقييمات)', themeRating: '250ر.س' },
    { name: 'مُختلف', rating: '(2 تقييمات)', themeRating: '250ر.س' },
    { name: 'مُختلف', rating: '(2 تقييمات)', themeRating: '250ر.س' },
    { name: 'مُختلف', rating: '(2 تقييمات)', themeRating: '250ر.س' },
    { name: 'مُختلف', rating: '(2 تقييمات)', themeRating: '250ر.س' },
    { name: 'مُختلف', rating: '(2 تقييمات)', themeRating: '250ر.س' },
    { name: 'مُختلف', rating: '(2 تقييمات)', themeRating: '250ر.س' },
  ];

  return (
    <div>
      <BreadCrum />
      <section className="StoeBannar my-8">
        <div className="st-bnr-container">
          <div className="st-bnr-sub-container">
            <div className="st-bnr-col">
              <img src="images/StoreDesign/theme-banner-img 1.png" />
            </div>
            <div className="st-bnr-col">
              <h1>صمّمت لتبهر عملائك</h1>
              <p>
                متجر ثيمات سلة يساعدك على تحسين مظهر متجرك مع مجموعة متجددة من
                <br></br> الثيمات القابلة للتخصيص
              </p>
            </div>
          </div>
        </div>
      </section>
      <div className="storeBox mb-4">
        <h1>الثيمات المثبتة</h1>
        <div className="grid lg:grid-cols-4 md:grid-cols-2 sm:grid-col-1 gap-6">
          {stylistsData.map((stylist, index) => (
            <div key={index} className="st-bx-container">
              <div className="st-mn-img">
                <img src="images/StoreDesign/mn.png" alt="Stylist" />
              </div>
              <div className="st-mn-body">
                <div className="st-mn-heading">
                  <h2>{stylist.name}</h2>
                </div>
                <div className="st-txt-rtng-cntn flex justify-between my-4">
                  <div className="st-txt-rtng-cntn-col flex gap-1 items-center">
                    <img src="images/StoreDesign/Star.png" alt="Star" />
                    <h4>{stylist.rating}</h4>
                    <p>({stylist.reviews} تقييمات)</p>
                  </div>
                  <div className="st-txt-rtng-cntn-col">
                    <p>{stylist.themeRating}</p>
                  </div>
                </div>
              </div>
              <div className="st-mn-btm-btn">
                <button>
                  <img
                    src="images/StoreDesign/settings-3-line.png"
                    alt="Settings Icon"
                  />
                  تخصيص
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="storeBox">
        <div className="fm-fields">
          <h2>عبّر عن تميز متجرك</h2>
          <p>عن طريق مجموعة متنوعة من الثيمات المميزة</p>
          <form action="">
            <input
              type="text"
              name=""
              dir="rtl"
              placeholder="ابحث عن تصميم جديد.."
              class="no-border-input"
            />

            <img src="images/StoreDesign/search-line.png" />
          </form>
        </div>
        <div className="grid lg:grid-cols-4 md:grid-cols-2 sm:grid-col-1 gap-6">
          {stylistsData2.map((stylist, index) => (
            <div key={index} className="st-bx-container">
              <div className="st-mn-img">
                <img src="images/StoreDesign/mn.png" alt="Stylist" />
              </div>
              <div className="st-mn-body">
                <div className="st-mn-heading text-center">
                  <h2>{stylist.name}</h2>
                </div>
                <div>
                  <div className="st-txt-rtng-cntn-col flex gap-1 justify-center items-center my-4">
                    <img src="images/StoreDesign/Star.png" alt="Star" />
                    <img src="images/StoreDesign/Star.png" alt="Star" />
                    <img src="images/StoreDesign/Star.png" alt="Star" />
                    <img src="images/StoreDesign/Star.png" alt="Star" />
                    <img src="images/StoreDesign/Star.png" alt="Star" />
                    <p>{stylist.rating}</p>
                  </div>
                </div>
                <div className="st-txt-rtng-cntn-col text-center ">
                  <p>{stylist.themeRating}</p>
                </div>
              </div>
              <div className="st-mn-btm-btn border-t border-gray-300 flex ">
                <div className="border-l  w-full">
                  <Button className="border-0">
                    <FiShoppingCart />
                    شراء
                  </Button>
                </div>
                <div className="w-full">
                  <Button className="border-0 customEyebutton">
                    <MdOutlineRemoveRedEye />
                    معاينة
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="fm-fields text-center" style={{ marginTop: '50px' }}>
          <p>تبحث عن المزيد؟ تصفح متجر الثيمات لخيارات أكثر</p>
          <Button className="storebtn">الإنتقال لمتجر الثيمات</Button>
        </div>
      </div>
    </div>
  );
};

export default storedesign;
