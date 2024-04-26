import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import Category from "./Category";

const Categories = () => {
  const [categoris, setCategoris] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/categoris`)
      .then((res) => res.json())
      .then((data) => {
        setCategoris(data);
      });
  }, []);
  return (
    <div>
      <h2 className="text-center text-3xl font-semibold text-red-600 mx-auto my-16">
        This is our category .If you need someting related toy like <br />
        this to press this demo !!!
      </h2>
      <div className=" grid gap-5 md:grid-cols-2 lg:grid-cols-3 mx-8 my-10">
        {categoris.map((category) => (
          <Category key={category.id} category={category}></Category>
        ))}
      </div>
      <div>
        <Outlet />
      </div>
    </div>
  );
};

export default Categories;
