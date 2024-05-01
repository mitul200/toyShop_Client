import React, { useContext } from "react";
import { useForm } from "react-hook-form";
// import { Link } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";

const AddItems = () => {
  const { user } = useContext(AuthContext);
  console.log(user?.email);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    fetch(`http://localhost:5000/postProducts`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => console.log(result));
    console.log(data);
  };

  //   console.log(watch("example"));
  return (
    <div className=" h-screen w-screen mt-20 flex justify-around">
      <div className="w-1/2">
        <h1 className="text-center font-semibold text-indigo-700">
          Add your products
        </h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          {/* register your input into the hook by invoking the "register" function */}
          <input
            className="border border-black p-3 w-1/3 m-4"
            placeholder="ToyName"
            {...register("name")}
          />
          <input
            className="border border-black p-3  m-4"
            placeholder="price"
            {...register("price")}
          />
          <br />
          <input
            className="border border-black p-3 w-1/3 m-4"
            placeholder="please Enter your email"
            defaultValue={user?.email}
            {...register("email")}
          />
          <input
            className="border border-black p-3 w-1/3 m-4"
            defaultValue="Deseription"
            {...register("detailDescription")}
          />
          <br />
          <input
            className="border border-black p-3 w-1/3 m-4"
            name="rating"
            placeholder="rating"
            {...register("rating")}
          />
          <input
            className="border border-black p-3 w-1/3 m-4"
            name="availableQuantity"
            placeholder="Available Quentity"
            {...register("availableQuantity")}
          />
          <select {...register("subcategory")} className="p-3">
            <option value="cartoy">CarToy</option>
            <option value="shiptoy">ShipToy</option>
            <option value="planetoy">PlaneToy</option>
          </select>
          <input
            className="border border-black p-3 w-3/4 m-4"
            name="pictureURL"
            placeholder="https://example.com/products.jpg"
            {...register("pictureURL")}
          />

          {/* include validation with required or other standard HTML validation rules */}
          {/* <input {...register("exampleRequired", { required: true })} /> */}
          {/* errors will return when field validation fails  */}
          {/* {errors.exampleRequired && <span>This field is required</span>} */}
          <input className="bg-blue-700 p-4 rounded-2xl" type="submit" />
        </form>
      </div>
      <div>
        <h1>hellow </h1>
      </div>
    </div>
  );
};

export default AddItems;
