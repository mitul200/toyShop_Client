import React, { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import register from "../assets/register.jpg";
import Navber from "../utils/Navber";

const Register = () => {
  const { creatUser } = useContext(AuthContext);
  const handelLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    creatUser(email, password)
      .then((result) => {
        const user = result.user;
      })
      .then((error) => {
        console.log(error);
      });
  };
  return (
    <>
      <Navber />
      <div>
        <div className=" flex p-8">
          <div className="">
            <img className="w-[800px]" src={register} alt="" />
          </div>

          <form className="card-body w-1/2">
            <h1 className="text-center text-red-700 text-4xl">Login now!!</h1>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                placeholder="password"
                className="input input-bordered"
                required
              />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Login</button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Register;
