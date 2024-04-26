// eslint-disable-next-line no-unused-vars
import React from "react";
import { Outlet } from "react-router-dom";
import Banner from "./utils/Banner";

const App = () => {
  return (
    <div>
      <Banner />
      <Outlet />
    </div>
  );
};

export default App;
