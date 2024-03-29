import React from "react";
import "./mahally.css";
import { boxesData } from "../../DevData/DevData";
import BreadCrum from "../../Commons/BreadCrum/BreadCrum";
import MahallyPopUp from "../../PopUp/Mahally/MahallyPopUp";
import { Button } from "@mui/material";

const mahally = () => {
  return (
    <>
      <BreadCrum />
      <section className="mahally-logo text-center">
        <img
          className="mx-auto"
          src="images/Mohally/logo-wide%201.svg"
          alt=""
        />
        <h3 className="dark-a">انطلق بتجارتك لأبعد من حدود متجرك</h3>
        <p>
          محلي من سلة هي قناة بيع متكاملة تُمكِّن تجار سلة من عرض وتسويق
          منتجاتهم مجانًا لآلاف العملاء الجدد في مكان واحد.<u> اعرف المزيد</u>{" "}
        </p>
      </section>
      <section className="MainSectionMahally ">
        <div className="lg:col-span-7 md:col-span-7 col-span-12 MahalySectionDiv">
          <div className="grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-2 col-span-6 gap-4 mahalyFourTabs">
            {boxesData.map((box, index) => (
              <div key={index} className="mahally-box dark-border">
                <div>
                  <img className="mx-auto mb-1" src={box.imageSrc} alt="" />
                  <h4 className="dark-a" style={{ fontWeight: "700" }}>{box.title}</h4>
                  <p style={{ fontWeight: "300" }}>{box.description}</p>
                  {box.appLinks && (
                    <div className="stores flex gap-2 " >
                      {box.appLinks.map((appLink, appIndex) => (
                        <a key={appIndex} href={appLink.href}>
                          <img src={appLink.imageSrc} alt={appLink.alt} />
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="box-2 lg:col-span-5 md:col-span-5 col-span-12">
          <div className="mahally-box2 h-full dark-border" id="mahallyBoxImg">
            <div>
              <img
                className="mx-auto mb-1"
                src="images/Mohally/mahally_app_showcase%201.png"
                alt=""
              />
              <h4 className="dark-a">خذ نظرة على منتجاتك</h4>
              <p>سجِّل في تطبيق محلي وعيش تجربة عملاءك..</p>
              <div className="stores flex gap-2">
                <a href="https://apps.apple.com/sa/app/%D8%B3%D9%84%D8%A9-%D8%AA%D8%AC%D8%A7%D8%B1%D8%A9-%D8%A5%D9%84%D9%83%D8%AA%D8%B1%D9%88%D9%86%D9%8A%D8%A9-%D8%B3%D9%87%D9%84%D8%A9/id1148458340">
                  <img src="images/sidebar/appstore.png" alt="" />
                </a>
                <a href="https://play.google.com/store/apps/details?id=com.emoney.sallacp">
                  <img src="images/sidebar/googleplay.png" alt="" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="text-center mahally-btn mb-11">
        <Button>
          <MahallyPopUp />
        </Button>
      </div>
    </>
  );
};

export default mahally;
