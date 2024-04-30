import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../../page/Footer";
import Navber from "../../utils/Navber";

const Layout = () => {
  return (
    <div>
      <Navber />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Layout;
