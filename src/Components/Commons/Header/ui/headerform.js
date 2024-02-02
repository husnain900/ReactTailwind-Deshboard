import React from 'react';
import { CiSearch } from 'react-icons/ci';

const headerform = () => {
  return (

    <div>
        <style>
        {`
          @media (min-width: 1024px) and (max-width: 1200px) {
            .search-input::placeholder {
              font-size: 13px;
            }
            .tech-topbar-form-fields select {
            
              font-size: 14px;
              background-size: 12px;
          }
          }
        `}
      </style>
      <div className="tech-topbar-search-form">
        <form className="h-full" method="POST" action="#">
          <div className="tech-topbar-form-fields flex items-center h-full">
            <input
              type="text"
              name="searchbox"
              className="search-input"
              placeholder="ابحث برقم الطلب ، اسم العميل ، رقم الشحنة"
            />
            <select className="bg-white " name="">
              <option>الطلبات</option>
              <option>المنتجات</option>
              <option>العملاء</option>
            </select>
            <button type="submit">
              <CiSearch size={25} />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default headerform;
