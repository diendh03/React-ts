import React from "react";
import { Outlet } from "react-router-dom";
import HeaderLayout from "../components/Header";
import FooterLayout from "../components/Footer";
import Slider from "../components/Slider";
const ClientLayout = () => {
  return (
    <div>
      <HeaderLayout />
      <Slider />
      <main>
        <Outlet />
      </main>
      <FooterLayout />
    </div>
  );
};

export default ClientLayout;
