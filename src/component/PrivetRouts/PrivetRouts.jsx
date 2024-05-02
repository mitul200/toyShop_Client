import React, { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";

const PrivetRouts = ({ children }) => {
  const { user, loding } = useContext(AuthContext);
  const location = useLocation();
  console.log(location);

  if (loding) {
    return <p>loding.........</p>;
  }
  if (user) {
    return children;
  }
  return <Navigate state={{from:location}} to="/login" replace={true}></Navigate>;
};

export default PrivetRouts;
