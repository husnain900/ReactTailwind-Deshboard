import React, { useState } from 'react';
import './coupon.css';
import { couponsData } from '../../DevData/DevData';
import Commoncheckbox from '../Ui-components/SwitchBtn';
import { FaChartBar } from 'react-icons/fa';
import BreadCrum from '../../Commons/BreadCrum/BreadCrum';
import { CiCirclePlus } from 'react-icons/ci';
import Filteringpopup from '../../PopUp/TopTitlepopup/Filteringpopup';
import { Button } from '@mui/material';
import CoupansPopup from '../../PopUp/CoupansPopup/CoupansPopup';

const Coupon = () => {
  const [isPopupOpen, setPopupOpen] = useState(false);

  const handleButtonClick = () => {
    setPopupOpen(!isPopupOpen);
  };
  return (
    <div>
      <BreadCrum />
      <div className="top-title mb-6 relative">
        <div>
          <Button className="btn-hover common-btn" onClick={handleButtonClick}>
            <a className="flex gap-2 items-center" href="#">
              <CiCirclePlus size={27} /> طلب جديد
            </a>
          </Button>

          {isPopupOpen && <CoupansPopup onClose={() => setPopupOpen(false)} />}
        </div>

        <div className="left-side">
          <Filteringpopup />
        </div>
      </div>
      <section>
        <div className="coupons-tbl-container">
          <div className="coupons-row">
            <div className="coupons-row-col">
              <img src="images/Coupons/coupon-3-line.png" alt="Coupon Icon" />
            </div>
            <div className="coupons-row-col">
              <h1>كوبونات التخفيض</h1>
              <div className="cpns-sub-col">
                <img src="images/Coupons/Vector-236.png" alt="Activated Icon" />
                <p>مفعل</p>
                <img src="images/Coupons/Vector-235.png" alt="Expired Icon" />
                <p>منتهي الصلاحية</p>
                <img src="images/Coupons/Vector-234.png" alt="Closed Icon" />
                <p>مغلق</p>
              </div>
            </div>
          </div>
          <table cellPadding="0" cellSpacing="0">
            <thead>
              <tr>
                <th>
                  <h1>عنوان الكوبون</h1>
                </th>
                <th style={{ textAlign: 'center' }}>
                  <h1>تاريخ بداية الكوبون</h1>
                </th>
                <th colSpan="3">
                  <h1>تاريخ انتهاء الكوبون</h1>
                </th>
              </tr>
            </thead>
            <tbody>
              {couponsData.map((coupon) => (
                <tr key={coupon.id}>
                  <td>
                    <table>
                      <tr>
                        <td className="tbl-scg-rmv">
                          <div className="flex gap-2 items-center">
                            <div
                              className={`PopBoxCoupans ${
                                coupon.status === 'active'
                                  ? 'PopBoxCoupansActive'
                                  : 'PopBoxCoupansInactive'
                              }`}
                            ></div>
                            <p>{coupon.name}</p>
                          </div>
                        </td>
                      </tr>
                    </table>
                  </td>
                  <td style={{ textAlign: 'center' }}>-</td>
                  <td>
                    <p style={{ marginTop: '10px' }}>{coupon.date}</p>
                  </td>
                  <td>
                    <table>
                      <tr>
                        <td className="tbl-scg-rmv">
                          <div className="flex items-center gap-3">
                            {/* <FaChartBar /> */}
                            <img src="images/bar.png" alt="bar" />
                            <p>احصائيات</p>
                          </div>
                        </td>
                      </tr>
                    </table>
                  </td>
                  <td>
                    <Commoncheckbox />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
};

export default Coupon;
