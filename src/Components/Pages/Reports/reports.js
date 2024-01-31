import React, { useState } from 'react';
import { reportTypesbox } from '../../DevData/DevData';
import './reports.css';
import BreadCrum from '../../Commons/BreadCrum/BreadCrum';
import DatePicker from '../Ui-components/DatePicker';
import { Button } from '@mui/material';
import { SlPrinter } from 'react-icons/sl';
import ReportsBtnPopup from '../../PopUp/ReportsBtnPopup';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import ReportsTable from './ReportsTable';
const Reports = () => {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = (index) => {
    setActiveTab(index);
  };
  const reportTypes = [
    {
      id: 1,
      label: 'Tab 1',
      content: <ReportsTable />,
    },
    {
      id: 2,
      label: 'Tab 2',
      content: <ReportsTable />,
    },
    {
      id: 3,
      label: 'Tab 3',
      content: <ReportsTable />,
    },
    {
      id: 4,
      label: 'Tab 4',
      content: <ReportsTable />,
    },
    {
      id: 5,
      label: 'Tab 5',
      content: <ReportsTable />,
    },
    {
      id: 6,
      label: 'Tab 6',
      content: <ReportsTable />,
    },
    {
      id: 7,
      label: 'Tab 7',
      content: <ReportsTable />,
    },
  ];
  const sliderSettings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 768, // Width less than 768px
        settings: {
          slidesToShow: 2, // Show 2 slides
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div>
      <BreadCrum />
      <section className="departure flex justify-between items-center">
        <div className="border border-gray-300 rounded-md DatePickerFIeld">
          <DatePicker />
        </div>
        <div className="flex gap-2 departure-btn">
        <div className='ReportPopupBtn'>   <ReportsBtnPopup /></div>
          <Button className="flex gap-2 items-center ReportStudentButton ">
            <SlPrinter />
            طباعة
          </Button>
        </div>
      </section>
      <section className="tech-report-p-type-main my-8">
        <div className="tech-report-p-type-items">
          <h2>نوع التقرير</h2>
          <div className="mt-4">
            <Slider className="slider-width" {...sliderSettings}>
              {reportTypesbox.map((type, index) => (
                <div key={type.id} className="tech-report-p-type-item">
                  <button
                    className={`tab-button ${
                      activeTab === index ? 'active-tab' : ''
                    }`}
                    onClick={() => handleTabClick(index)}
                  >
                    <img
                      className="reportImageIcon"
                      src={type.icon}
                      alt={type.label}
                    />
                    <span className="reportsTexticon"> {type.label}</span>
                  </button>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </section>
      <section>
        <div className="tab-content">
          {reportTypes[activeTab] && (
            <div>
              {/* <h3>{reportTypes[activeTab].label} Report Tabs Content</h3>  */}
              {Array.isArray(reportTypes[activeTab].content) ? (
                reportTypes[activeTab].content.map((item, index) => (
                  <div key={index}>{item}</div>
                ))
              ) : (
                <div>{reportTypes[activeTab].content}</div>
              )}
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Reports;
