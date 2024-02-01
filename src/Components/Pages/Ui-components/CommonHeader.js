import React from 'react';
import './style.css';
import { CiCirclePlus } from 'react-icons/ci';
import { FaAngleDown } from 'react-icons/fa6';
import { LuLayoutGrid } from 'react-icons/lu';
import { IoIosList } from 'react-icons/io';
import { RiShoppingBagLine } from 'react-icons/ri';
import { CiFilter } from 'react-icons/ci';
import { Button } from '@mui/material';

const product = () => {
  return (
    <div>
      <div className="top-title">
        <Button className="btn-hover common-btn">
          <a className="flex gap-2 items-center" href="#">
            <CiCirclePlus size={27} /> إضافة منتج جديد <FaAngleDown />
          </a>
        </Button>
        <div className="flex items-center gap-4 lg:gap-7 sm:flex-row flex-col left-side">
          <div className="flex gap-1 items-center">
            <a href="#">
              <CiFilter />
              <p>تصفية</p>
            </a>
          </div>
          <div className="flex gap-2 items-center">
            <a href="#"></a>
            <RiShoppingBagLine />
            <p>خدمات</p>
          </div>

          <div className="flex gap-3 items-center">
            <a href="#">
              <LuLayoutGrid />
            </a>
            <a href="#">
              <IoIosList />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default product;
