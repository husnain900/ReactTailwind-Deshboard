import React from "react";
import { HiOutlineHome } from "react-icons/hi";
import Breadcrumb from "../../PopUp/BreadCrumpopup";

const BreadCrum = () => {
  return (
    <div>
      <header className="common-header mb-4 mt-6">
        <div>
          <a href="#">
            <p className="flex items-center gap-2">
              <span className="text-b flex dark-text-light items-center gap-2">
                <HiOutlineHome /> الرئيسية /
              </span>
              <span>المنتجات</span>
            </p>
          </a>
        </div>
        <Breadcrumb />
      </header>
    </div>
  );
};

export default BreadCrum;
