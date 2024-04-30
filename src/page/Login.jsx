import React, { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import login from "../assets/login.jpg";

const Login = () => {
  const { singIn } = useContext(AuthContext);
  const handelLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);
    singIn(email, password)
      .then((result) => {
        const User = result.user;
        console.log(User);
      })
      .catch((error) => console.error(error));
  };
  return (
    <>
      <div>
        <div className=" flex p-8">
          <div className="">
            <img className="w-[800px]" src={login} alt="" />
          </div>

          <form onSubmit={handelLogin} className="card-body w-1/2">
            <h1 className="text-center text-red-700 text-4xl">Login now!!</h1>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name="email"
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
                name="password"
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

export default Login;
