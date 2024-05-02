import React from "react";
import { Link, useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const { error, status } = useRouteError();
  return (
    <div className=" h-screen mx-auto flex justify-center mt-40">
      <div>
        <h2 className="mb-8 font-semibold text-9xl text-yellow-500">
          <span className="sr-only">Error</span>
          {status || 404}
        </h2>
        <p className="text-2xl font-semibold text-red-700 mt-20">
          {error?.message}
        </p>
        <Link to="/">
          <button className="btn btn-primary bg-red-800">Back Home</button>
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;
