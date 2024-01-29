import React from 'react';
import './commision.css';
import { CiCirclePlus } from 'react-icons/ci';
import { commisionData } from '../../DevData/DevData';
import Commoncheckbox from '../Ui-components/SwitchBtn';
import { FaChartBar } from 'react-icons/fa';
import BreadCrum from '../../Commons/BreadCrum/BreadCrum';
import Filteringpopup from '../../PopUp/TopTitlepopup/Filteringpopup';
import { Button } from '@mui/material';

const commision = () => {
  return (
    <div>
      <BreadCrum />
      <div className="top-title">
        <Button className="btn-hover common-btn">
          <a className="flex gap-2 items-center" href="#">
            <CiCirclePlus size={27} /> إنشاء عرض جديد
          </a>
        </Button>

        <div className="left-side">
          <Filteringpopup />
        </div>
      </div>
      <section className="my-5">
        <div className="coupons-tbl-container">
          <div className="coupons-row">
            <div className="coupons-row-col">
              <img
                src="images/commision/water-percent-line.png"
                alt="Coupon Icon"
              />
            </div>
            <div className="coupons-row-col">
              <h1>
                العروض الخاصة
                <span className="ps-2 pb-1">(عرض واحد)</span>
              </h1>
            </div>
          </div>
          <table cellPadding="0" cellSpacing="0">
            <thead>
              <tr>
                <th colSpan={5}>
                  <h1>عنوان الكوبون</h1>
                </th>
              </tr>
            </thead>
            <tbody>
              {commisionData.map((coupon) => (
                <tr key={coupon.id}>
                  <td>
                    <table>
                      <tr>
                        <td className="tbl-scg-rmv">
                          <div className="flex gap-3 items-center w-72">
                            <p>
                              <span className="underline">
                                عبائة عليك وعبائة علينا
                              </span>
                              ,{' '}
                              {coupon.name.substring(
                                'عبائة عليك وعبائة علينا'.length
                              )}
                            </p>
                          </div>
                        </td>
                      </tr>
                    </table>
                  </td>
                  <td>
                    <table>
                      <tr>
                        <td className="tbl-scg-rmv text-left">
                          <div className="flex items-center justify-end gap-3">
                            {/* <FaChartBar /> */}
                            <img src="images/bar.png" alt="bar" />
                            <p>احصائيات</p>
                          </div>
                        </td>
                      </tr>
                    </table>
                  </td>
                  <td>
                    <div className="text-center">
                      <Commoncheckbox />
                    </div>
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

export default commision;
