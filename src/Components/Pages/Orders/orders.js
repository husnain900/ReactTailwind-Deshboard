import React from "react";
import "./orders.css";
import "../Ui-components/style.css";
import { CiCirclePlus } from "react-icons/ci";
import Khidmatpopup from "../../PopUp/TopTitlepopup/Khidmatpopup";
import Filteringpopup from "../../PopUp/TopTitlepopup/Filteringpopup";
import TechOrderTopBoxes from "./orderslide";
import BreadCrum from "../../Commons/BreadCrum/BreadCrum";
import { Button } from "@mui/material";

function Orders() {
  return (
    <div>
      <BreadCrum />
      <div>
        <div>
          <div className="top-title">
            <Button className="btn-hover common-btn">
              <a className="flex gap-2 items-center" href="/#">
                <CiCirclePlus size={27} /> طلب جديد
              </a>
            </Button>
            <div className="flex relative items-center gap-4 lg:gap-7 sm:flex-row flex-col left-side">
              <div>
                <Filteringpopup />
              </div>
              <div>
                <Khidmatpopup />
              </div>
            </div>
          </div>
        </div>
        <section className="orderslide my-6">
          <TechOrderTopBoxes />
        </section>
      </div>
    </div>
  );
}

export default Orders;
