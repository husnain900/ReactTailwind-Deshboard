import React, { useState, useEffect } from 'react';
import { BsArrowsAngleExpand } from 'react-icons/bs';
import { IoIosArrowDown } from 'react-icons/io';
import { CiMinimize1 } from 'react-icons/ci';
import AccordionUsage from '../Pages/Ui-components/Accourdian';
import { Button } from '@mui/material';
import './BreadCrumpopup.css';

const TecAccordion = () => {
  const [panelVisible, setPanelVisible] = useState(false);
  const [iconDirection, setIconDirection] = useState('down');
  const [isExpanded, setIsExpanded] = useState(false);

  useEffect(() => {
    const helpPanelContainer = document.querySelector(
      '.tc-helppanelcontainer-sub'
    );
    helpPanelContainer.style.width = isExpanded ? '600px' : '400px';
  }, []);

  const toggleHelpPanel = () => {
    const helpPanelContainer = document.getElementById('tc-helppanelcontainer');
    if (
      helpPanelContainer.style.display === 'none' ||
      helpPanelContainer.style.display === ''
    ) {
      helpPanelContainer.classList.add('slideTop');
      helpPanelContainer.classList.remove('slideBottom');
    } else {
      helpPanelContainer.classList.add('slideBottom');
      helpPanelContainer.classList.remove('slideTop');
    }
    helpPanelContainer.style.display =
      helpPanelContainer.style.display === 'none' ||
      helpPanelContainer.style.display === ''
        ? 'block'
        : 'none';
  };

  const toggleIconDirection = () => {
    setIconDirection(iconDirection === 'down' ? 'up' : 'down');
  };

  const toggleWidth = () => {
    const helpPanelContainer = document.querySelector(
      '.tc-helppanelcontainer-sub'
    );
    helpPanelContainer.style.width = isExpanded ? '400px' : '600px';
    setIsExpanded(!isExpanded);
  };

  return (
    <div dir="rtl">
      <Button
        id="tc-nv-btn-fr-hlppanl"
        className="btn-hover common-btn hover:bg-[#76e8cd] cursor-pointer p-1 px-3"
        onClick={() => {
          toggleHelpPanel();
          toggleIconDirection();
        }}
      >
        <a className="flex items-center gap-1" href="#">
          مساعدة ؟{' '}
          <span
            className={`transition-transform duration-300 ${
              iconDirection === 'down' ? 'rotate-0' : 'rotate-180'
            }`}
          >
            {iconDirection === 'down' ? <IoIosArrowDown /> : <IoIosArrowDown />}
          </span>
        </a>
      </Button>
      <div
        className="tc-helppanelcontainer absolute left-[26px] z-50"
        style={{ zIndex: '1000' }}
        id="tc-helppanelcontainer"
      >
        <div className="tc-helppanelcontainer-sub bg-white">
          <div className="tc-helppanel-head">
            <div className="tc-helppanel-head-sub">
              <h2 id="tc-head-text">المقالات</h2>
              <button
                className="tc-help-panel-wdh flex gap-3 ExpendedQ&A "
                onClick={toggleWidth}
              >
                {isExpanded ? (
                  <>
                    <CiMinimize1 size={20} />
                    تصغير
                  </>
                ) : (
                  <>
                    <BsArrowsAngleExpand size={17} />
                    تكبير
                  </>
                )}
              </button>
            </div>
          </div>
          <div className="tc-helppanel-search">
            <div className="tc-helppanel-search-sub">
              <input type="text" name="" placeholder="ابحث عن ما تريد..." />
              <button className="cursor-pointer">
                <img src="images/PopUp/breadcrum/Vector.png" alt="Search" />
              </button>
            </div>
          </div>
          <section className="accordian-body px-4 overflow-y-scroll scrollstyle max-h-96">
            <AccordionUsage />
          </section>
        </div>
      </div>
    </div>
  );
};

export default TecAccordion;
