import React from "react";
import { useLoaderData } from "react-router-dom";

const ToyDetails = () => {
  const alldetails = useLoaderData();
  console.log(alldetails);
  const {
    availableQuantity,
    detailDescription,
    name,
    pictureURL,
    price,
    rating,
    subcategory,
  } = alldetails;
  return (
    <div className="card card-side bg-base-100 shadow-xl mx-auto  m-20 p-8">
      <figure className="w-1/2">
        <img className=" rounded-xl" src={pictureURL} alt="Movie" />
      </figure>
      <div className="card-body w-1/2 ">
        <div className="my-3">
          <h2 className="card-title">
            {" "}
            Products name :<span className="font-bold uppercase"> {name}</span>
          </h2>
          <p className="mt-3">
            {" "}
            Category : <span className="text-indigo-700">{subcategory}</span>
          </p>
          <p className="mt-3"> Rating : {rating}</p>
          <p className="mt-3"> Quentity: {availableQuantity}</p>
          <p className="mt-3"> Description : {detailDescription}</p>
        </div>
      </div>
    </div>
  );
};

export default ToyDetails;
