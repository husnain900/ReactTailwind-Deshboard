import React from 'react';
import './loyalty.css';
import { loyaltyCards } from '../../DevData/DevData';
import BreadCrum from '../../Commons/BreadCrum/BreadCrum';
const loyalty = () => {
  return (
    <div>
      <BreadCrum />
      <div className="lp-container">
        <div className="lp-top-section grid grid-cols-12 gap-3 lg:gap-9">
          <div className="lp-top-col lg:col-span-8 col-span-12 ">
            <div className="lp-top-col-row">
              <h1>نظام الولاء</h1>
              <h3>روُج لمتجرك بطريقة يحبها عملاءك</h3>
            </div>
            <p>
              نظام ولاء متكامل خاص بمتجرك يقدم لعملائك نقاط يمكنهم استبدالها
              بمكافآت محددة من قبلك، مقابل عمليات الشراء وتقييم المتجر وإكمال
              الملف الشخصي ومشاركة رابط متجرك لأهلهم وأصدقائهم.يمكن للعملاء
              استبدال النقاط بمنتج من منتجاتك أو كوبونات خصم أو الحصول على شحن
              مجاني، بتحكم كامل منك في عدد النقاط المطلوبة لكل مكافأة وكيفية
              تحصيلها ومدة صلاحيتها، مع تقارير تفصيلية توضح كيفية استثمار عملائك
              لنقاط الولاء وأكثرهم جمعًا للنقاط وغيرها.
            </p>
            <button className="lp-top-col-btn-rt">اشترك</button>
          </div>
          <div className="lp-top-col lg:col-span-4 col-span-12 pt-3">
            <button className="lp-top-col-btn-lf">299 ر.س/شهریا</button>
            <div className="lp-top-lf-img">
              <img src="images/loyalty/Group.png" alt="" />
            </div>
          </div>
        </div>
        <div className="lp-btm-section grid lg:grid-cols-4 md:grid-cols-2 sm:grid-col-1 gap-5">
          {loyaltyCards.map((card, index) => (
            <div className="lp-btm-sec-cards" key={index}>
              <div className="lf-btm-cr-col">
                <img src={card.icon} alt="" />
              </div>
              <div className="lf-btm-cr-col">
                <h5 style={{ fontWeight: 700 }}>{card.title}</h5>
                <p style={{ fontWeight: 300 }}>{card.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default loyalty;
