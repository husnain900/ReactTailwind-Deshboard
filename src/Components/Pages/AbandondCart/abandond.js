import React, { useState } from 'react';
import './abandond.css';
import { CiCirclePlus } from 'react-icons/ci';
import { LuBell } from 'react-icons/lu';
import { shoppingCarts } from '../../DevData/DevData';
import BreadCrum from '../../Commons/BreadCrum/BreadCrum';
import { Button } from '@mui/material';

const Abandond = () => {
  const [selectAll, setSelectAll] = useState(false);
  const [checkboxStatus, setCheckboxStatus] = useState(
    Array(shoppingCarts.length).fill(false)
  );

  const handleSelectAll = () => {
    setSelectAll(!selectAll);
    setCheckboxStatus(Array(shoppingCarts.length).fill(!selectAll));
  };

  const handleCheckboxChange = (index) => {
    const newCheckboxStatus = [...checkboxStatus];
    newCheckboxStatus[index] = !newCheckboxStatus[index];
    setCheckboxStatus(newCheckboxStatus);
    setSelectAll(newCheckboxStatus.every((status) => status));
  };
  return (
    <div>
      <BreadCrum />
      <div className="top-title">
        <Button className="btn-hover common-btn">
          <a className="flex gap-2 items-center" href="#">
            <CiCirclePlus size={27} /> انشاء تذكير جديد
          </a>
        </Button>
      </div>
      <section className="alert-box-abandond dark-border py-3 px-4 lg:p-8 my-5">
        <div>
          <h3 className="mb-3 lg:mb-7 flex gap-2 items-center dark-a">
            <LuBell />
            تذكيرات السلات المتروكة
          </h3>
          <h4 className='dark-text'>لا توجد تذكيرات بعد.</h4>
        </div>
      </section>
      {/* table */}
      <section>
        <div className="ab-container dark-border mb-10">
          <div className="ab-row">
            <div className="ab-sub-row dark-border rounded-t">
              <div className="ab-row-col dark-a">
                <label
                  style={{ width: '30px', margin: 'auto' }}
                  className="chk-container"
                >
                  <input
                    type="checkbox"
                    checked={selectAll}
                    onChange={handleSelectAll}
                  />
                  <span className="checkmark"></span>
                </label>
                <img
                  src="images/Abandond/shopping-bag-2-line.png"
                  alt="Shopping Bag Icon"
                />
                <h1 className='dark-a'>السلاّت المتروكة</h1>
              </div>
              <div className="ab-row-col">
                <button className='dark-text-light'>
                  <img src="images/Abandond/timer-line.png" alt="Timer Icon" />{' '}
                  تفعيل خصم مؤقت
                </button>
              </div>
            </div>
          </div>
          <div className="abandondTable">
            <table cellPadding="0" cellSpacing="0">
              <thead className='bg-dark'>
                <tr>
                  <th>
                    <h3 className='dark-a'>اسم العميل </h3>
                  </th>
                  <th>
                    <h3 className='dark-a'>تاريخ إنشاء السلة </h3>
                  </th>
                  <th>
                    <h3 className='dark-a'>عدد المنتجات </h3>
                  </th>
                  <th>
                    <h3 className='dark-a'>إجمالي السلة </h3>
                  </th>
                  <th colSpan="2">
                    <h3 className='dark-a'>الحالة</h3>
                  </th>
                </tr>
              </thead>
              <tbody>
                {shoppingCarts.map((cart, index) => (
                  <tr key={index}>
                    <td>
                      <table cellPadding="0" cellSpacing="0">
                        <tr>
                          <td className="cm-rmv-els">
                            <label
                              style={{ width: '30px', margin: 'auto' }}
                              className="chk-container"
                            >
                              <input
                                type="checkbox"
                                checked={checkboxStatus[index]}
                                onChange={() => handleCheckboxChange(index)}
                              />
                              <span className="checkmark"></span>
                            </label>
                          </td>
                          <td className="cm-rmv-els">
                            <img
                              src="images/Abandond/User.png"
                              alt="User Icon"
                            />
                          </td>
                          <td className="cm-rmv-els">
                            <h4 className='dark-text-light'>{cart.userName}</h4>
                          </td>
                        </tr>
                      </table>
                    </td>
                    <td>
                      <p>{cart.timeAgo}</p>
                    </td>
                    <td>
                      <p>{cart.productCount}</p>
                    </td>
                    <td>
                      <p>{cart.totalPrice}</p>
                    </td>
                    <td>
                      <p className='dark-text-light'>--</p>
                    </td>
                    <td className="text-center">
                      <button className='dark-text-light'>إكمال الطلب</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Abandond;
