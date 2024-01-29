import React from 'react'
import { CiSearch } from "react-icons/ci";

const headerform = () => {
  return (
    <div>
    <div className="tech-topbar-search-form">
    <form className="h-full" method="POST" action="#">
      <div className="tech-topbar-form-fields flex items-center h-full">
        <input
          type="text"
          name="searchbox"
          placeholder="ابحث برقم الطلب ، اسم العميل ، رقم الشحنة"
        />
        <select className='bg-white' name="">
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
  )
}

export default headerform
