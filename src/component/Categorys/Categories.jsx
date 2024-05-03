import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import Category from "./Category";

const Categories = () => {
  const [categoris, setCategoris] = useState([]);

  useEffect(() => {
    fetch(`https://toy-shop-server-sable.vercel.app/categoris`)
      .then((res) => res.json())
      .then((data) => {
        setCategoris(data);
      });
  }, []);
  return (
    <div>
      <h2 className="text-center text-3xl font-semibold text-red-600 mx-auto my-16">
        This is our category . there are 3 type of toys we provide <br />
        toys demo !!!
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
