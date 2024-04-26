import React from "react";
import { Link } from "react-router-dom";

const Category = ({ category }) => {
  console.log(category);
  const { img, name } = category;
  return (
    <div>
      <Link to={`/`}>
        <img
          className="hover:opacity-50 mx-auto hover:duration-500 h-[160px] w-[160px] rounded-full"
          src={img}
          alt=""
        />
        <h3 className=" uppercase mt-3 font-bold text-center">{name}</h3>
      </Link>
    </div>
  );
};

export default Category;
