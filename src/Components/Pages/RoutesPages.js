import React from "react";
import Header from "../Commons/Header/Header";
import MobileHeader from "../Commons/Header/MobileHeader";
import Sidebar from "../Commons/SideBar/Sidebar";
import Clients from "./Clients/clients";
import Home from "./Home/home";
import Product from "./Product/product";
import Orders from "./Orders/orders";
import Reports from "./Reports/reports";
import QA from "./Q&A/Q&A";
import PageStatic from "./Static/pageStatic";
import Coupons from "./Coupons/coupon";
import Commision from "./Commision/commision";
import Abandond from "./AbandondCart/abandond";
import Loyalty from "./loyalty/loyalty";
import Mahally from "./Mahally/mahally";
import StorePackege from "./StorePackege/store";
import SettingsPage from "./SettingScreen/screen";
import Wallet from "./Wallet/wallet";
import Storedesign from "./StoreDesign/storedesign";
import Maker from "./AppMaker/maker";
import Appmaker from "./AppMaker2/appmaker";
import Affiliate from "./AffiliateMarketing/affilliate";
import Affiliate2 from "./AffiliateMarketing2/affiliate2";
import Desktop23 from "./Desktop23/desktop23";
import HomePopup from "../PopUp/homepopup";
import Footer from "../Commons/Footer/footer";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function Routespages() {
  return (
    <Router>
      <div className="flex">
        <div className="lg:w-[24%] xl:w-[20%] relative p-0 hidden lg:block">
          <Sidebar />
        </div>
        <div className="w-full lg:w-[76%] xl:w-[80%]">
          <div className="hidden lg:block">
            <Header />
          </div>
          <div className="block lg:hidden">
            <MobileHeader />
          </div>
          <div className="container mx-auto px-5 lg:px-7">
            <Routes>
              <Route exact path="/" element={<Home />} />
              <Route path="/product" element={<Product />} />
              <Route path="/orders" element={<Orders />} />
              <Route path="/clients" element={<Clients />} />
              <Route path="/Reports" element={<Reports />} />
              <Route path="/Q&A" element={<QA />} />
              <Route path="/static" element={<PageStatic />} />
              <Route path="/coupons" element={<Coupons />} />
              <Route path="/Commision" element={<Commision />} />
              <Route path="/abandondcart" element={<Abandond />} />
              <Route path="/Loyalty" element={<Loyalty />} />
              <Route path="/mahally" element={<Mahally />} />
              <Route path="/storepackage" element={<StorePackege />} />
              <Route path="/SettingsPage" element={<SettingsPage />} />
              <Route path="/Wallet" element={<Wallet />} />
              <Route path="/Storedesign" element={<Storedesign />} />
              <Route path="/Maker" element={<Maker />} />
              <Route path="/Appmaker" element={<Appmaker />} />
              <Route path="/Affiliate" element={<Affiliate />} />
              <Route path="/Affiliate2" element={<Affiliate2 />} />
              <Route path="/Desktop23" element={<Desktop23 />} />
              <Route path="/popup" element={<HomePopup />} />
            </Routes>
          </div>
          <Footer />
        </div>
      </div>
    </Router>
  );
}

export default Routespages;
