import React, { useState } from "react";
import logo from "../assets/brave stntax (2) (1).png";
import Header from "./Header";
import Hero from "./Hero";
import Features from "./Features";
import PortfolioSlider from "./PortfolioSlider";
import Resume from "./Resume";
import Clients from "./Clients";
import ContactUs from "./ContactUs";
import { IoIosArrowForward } from "react-icons/io";
import Footer from "./Footer";

const MainLayout = () => {
  const [hideMenu, setHideMenu] = useState("translate-x-[100%]");

  return (
    <div className="main_layout relative">
      <div
        className={`fixed sm:top-[50%]  sm:right-0 sm:-translate-y-[50%] sm:z-10 sm:translate-x-[7rem] w-full h-full items-center sm:w-auto sm:h-auto  text-center sm:hover:translate-x-[0rem] z-20 transition-all bg-white sm:bg-transparent sm:backdrop-blur-sm ${hideMenu}`}>
        <div>
          <img src={logo} alt="Logo" width={200} className="p-3 sm:hidden" />
          <IoIosArrowForward
            className="text-3xl float-right absolute top-8 right-5   sm:hidden"
            onClick={() => setHideMenu("translate-x-[100%]")}
          />
        </div>
        <Header setHideMenu={setHideMenu} />
      </div>
      <div className="relative ">
        <Hero setHideMenu={setHideMenu} />
        <Features />
        <Resume />
        <PortfolioSlider />
        <Clients />
        <ContactUs />
        <Footer />
      </div>
    </div>
  );
};

export default MainLayout;
