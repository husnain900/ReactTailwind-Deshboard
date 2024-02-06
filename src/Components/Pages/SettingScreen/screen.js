import React from "react";
import "./screen.css";
import { sections } from "../../DevData/DevData";
import BreadCrum from "../../Commons/BreadCrum/BreadCrum";
import { Link } from "react-router-dom";

const SettingsSection = ({ title, items }) => (
  <div className="ss-tp-box">
    {sections.map((section, index) => (
      <div key={index}>
        <h1 className="dark-text">{section.title}</h1>
        <div className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-5">
          {section.items.map((item, itemIndex) => (
            <Link
              key={itemIndex}
              to={item.link}
              className="ss-box py-6 px-3 lg:px-12 dark-border"
            >
              {item.icons}
              <h3 className="dark-text-light">{item.heading}</h3>
              <p>{item.description}</p>
            </Link>
          ))}
        </div>
      </div>
    ))}
  </div>
);

const SettingsPage = () => {
  return (
    <div>
      <BreadCrum />
      <div className="ss-container">
        {sections.map((section, index) => (
          <SettingsSection
            key={index}
            title={section.title}
            items={section.items}
          />
        ))}
      </div>
    </div>
  );
};

export default SettingsPage;
