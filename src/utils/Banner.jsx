import React from "react";
import Navber from "./Navber";

const Banner = () => {
  return (
    <div className=" relative">
      <img
        className="h-screen w-screen"
        src="https://plus.unsplash.com/premium_photo-1661591614198-b99e04b39703?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt=""
      />
      <div className=" absolute top-0 w-screen opacity-70">
        <Navber />
      </div>

      <div className="absolute top-1/3 left-14  ">
        <h1 className="sm:text-3xl lg:text-5xl font-semibold  ">
          This is our brand new Toy shop .
        </h1>
        <p className="text-gray-600 w-1/2 text-xl mt-4">
          "Spark Joy with Our Toy Wonderland! Discover endless fun for your
          little ones. From cuddly plushies to educational games, find the
          perfect gift that ignites imagination and smiles."
        </p>

        <button className="btn btn-active bg-red-800 font-semibold text-white rounded-xl hover: duration-700 mt-2 ">
          Shop now !
        </button>
      </div>
    </div>
  );
};

export default Banner;
