import React from 'react';
import './appmaker.css';
import Khidmatpopup from '../../PopUp/TopTitlepopup/Khidmatpopup';
import Filteringpopup from '../../PopUp/TopTitlepopup/Filteringpopup';
import AppMakerSlide from './AppMakerSlide';
import BreadCrum from '../../Commons/BreadCrum/BreadCrum';
import { Button } from '@mui/material';

const AppMaker = () => {
  return (
    <div>
      <BreadCrum />
      <div className="bannar-1 h-[218.563px] bg-[#004D5A] rounded-xl p-5 flex items-center justify-between recommendedApps">
        <div className="flex items-center gap-5 flex-wrap">
          <div className="bn-icon">
            <img src="images/AppMaker/banner-Icon.png" />
          </div>
          <div className="bn-content">
            <h2>
              تصفح أكثر من 388 تطبيق بكل سهولة وعزز متجرك بأحدث وافضل التطبيقات
            </h2>
            <h3>
              مع متجر تطبيقات سلة, بأمكانك تنصيب تطبيقات على متجرك لإضافة تجربة
              استخدام لامثيل لها لعملائك. تصفح متجر تطبيقات سلة
            </h3>
          </div>
        </div>
        <button className="btn-hover p-2 bannar-btn">
          تصفح متجر تطبيقات سلة
        </button>
      </div>
      <div className="bannar-2 flex justify-between items-center rounded-xl border border-[#BDBDBD] p-5 h-[150px] my-5 recommendedApps2">
        <div className="flex flex-wrap gap-5">
          <div className="bn-icon">
            <img src="images/AppMaker/img.png" />
          </div>
          <div className="bn-content">
            <h2>التطبيقات الموصى بها لك</h2>
            <h3>
              نرشح لك بعض التطبيقات التي ستساعدك على إدارة متجرك وزيادة مبيعاتك
              بشكل أف ضل.
              <span className="underline">مشاهدة جميع التطبيقات</span>
            </h3>
          </div>
        </div>
        <button className="btn-hover bannar-btn p-2">
          مشاهدة جميع التطبيقات
        </button>
      </div>
      <div className="top-title">
        <Button className="btn-hover common-btn">
          <a className="flex gap-2 items-center" href="#">
            جميع التطبيقات (37)
          </a>
        </Button>
        <div className="flex relative items-center gap-4 lg:gap-7 sm:flex-row flex-col left-side">
          <div className="">
            <Filteringpopup />
          </div>
          <div className="">
            <Khidmatpopup />
          </div>
        </div>
      </div>
      <div className="">
        <AppMakerSlide />
      </div>
    </div>
  );
};

export default AppMaker;
