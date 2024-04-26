import React, { useEffect, useState } from "react";
import Toy from "./Toy";

const AllToy = () => {
  const [allToy, setAllToy] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/allToy`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setAllToy(data);
      });
  }, []);
  return (
    <div>
      <h2 className=" text-4xl font-bold text-red-700 text-center mt-5">
        Our Products !!!
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mx-8 mt-20">
        {allToy.map((item) => (
          <Toy key={item.id} item={item}></Toy>
        ))}
      </div>
    </div>
  );
};

export default AllToy;
