import React, { useState, useRef, useEffect } from 'react';
import './header.css';
import { IoMoonOutline } from 'react-icons/io5';
import { FaChevronDown } from 'react-icons/fa';
import { headerItems } from '../../DevData/DevData';
import Headerform from './ui/headerform';
import Giftpopup from '../../PopUp/Giftpopup';

const Header = () => {
  const [isPopupOpen, setPopupOpen] = useState(false);
  const dropOpenRef = useRef(null);
  const dropPopupRef = useRef(null);
  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (
        dropPopupRef.current &&
        !dropPopupRef.current.contains(event.target) &&
        dropOpenRef.current &&
        !dropOpenRef.current.contains(event.target)
      ) {
        setPopupOpen(false);
      }
    };

    document.addEventListener('click', handleOutsideClick);

    return () => {
      document.removeEventListener('click', handleOutsideClick);
    };
  }, []);
  const togglePopup = () => {
    setPopupOpen((prevState) => !prevState);
  };
  const [darkMode, setDarkMode] = useState(false);

  const handleDarkModeToggle = () => {
    setDarkMode(!darkMode);
    document.body.classList.toggle('darkmode', !darkMode);
  };

  return (
    <div className="bg-color">
      <div className="container mx-auto px-5">
        <section className="tech-topbar-main flex justify-between items-center w-full">
          <Headerform />
          <div className="tech-topbar-menu">
            <div className="tech-topbar-menu-buttons">
              <ul>
                {[
                  {
                    type: 'gif',
                    component: <Giftpopup />,
                    className: 'gif-btn headbtn',
                  },
                  {
                    type: 'darkmode',
                    component: <IoMoonOutline />,
                    className: 'darkmode headbtn',
                    onClick: handleDarkModeToggle,
                  },
                  {
                    type: 'link',
                    component: (
                      <img src="images/Navbar/profile.png" alt="User Icon" />
                    ),
                    href: '#',
                  },
                ].map((item, index) => (
                  <li key={index}>
                    {item.type === 'link' ? (
                      <a href={item.href}>{item.component}</a>
                    ) : (
                      <button className={item.className} onClick={item.onClick}>
                        {item.component}
                      </button>
                    )}
                  </li>
                ))}
              </ul>
            </div>
            <div className="tech-topbar-menu-items">
              <div className="tech-topbar-headsup">
                <a href="#">تحديثات المنصة</a>
              </div>
            </div>
            <div className="tech-topbar-user-menu tech-topbar-menu-items ">
              <ul className=''>
                <li className=''>
                  <a
                    href="#"
                    className="tech-user-menu-drop-open dark-a"
                    ref={dropOpenRef}
                    onClick={(e) => {
                      e.preventDefault();
                      togglePopup();
                    }}
                  >
                    متجر موضة
                    <FaChevronDown className="ps-2" />
                  </a>
                  <ul
                    className="dark-ul tech-user-menu-drop-popup bg-white p-2"
                    style={{ display: isPopupOpen ? 'block' : 'none' }}
                    ref={dropPopupRef}
                  >
                    {headerItems.map((item, index) => (
                      <li className='dark-li' key={index}>
                        <a className='dark-a' href="#" onClick={togglePopup}>
                          {item.icon}
                          {item.text}
                        </a>
                      </li>
                    ))}
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Header;
