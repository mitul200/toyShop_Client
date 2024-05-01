import React from "react";
import { Link } from "react-router-dom";

const Toy = ({ item, handelViewDetails }) => {
  console.log(item);
  return (
    <div>
      <div className="card w-96 bg-base-100 shadow-xl">
        <figure>
          <img src={item?.pictureURL} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">
            {item.name}
            <div className="badge badge-secondary"></div>
          </h2>

          <div className="card-actions ">
            <p> price : {item.price}</p>
            <p> Rating : {item.rating}</p>
          </div>
          <Link to={`/toyDetails/${item._id}`}>
            <button
              onClick={() => handelViewDetails(item._id)}
              className="btn btn-secondary"
            >
              View details
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Toy;
