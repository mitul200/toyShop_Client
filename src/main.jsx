import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.jsx";
import AllToy from "./component/AllToyShop/AllToy.jsx";
import Categories from "./component/Categorys/Categories.jsx";
import Layout from "./component/Layout/Layout.jsx";
import MyProducts from "./component/MyProducts/MyProducts.jsx";
import ToyDetails from "./component/ToyDetails/ToyDetails.jsx";
import "./index.css";
import AddItems from "./page/AddItems.jsx";
import Login from "./page/Login.jsx";
import Register from "./page/Register.jsx";
import AuthProvider from "./Provider/AuthProvider.jsx";
import EditData from "./component/EditData/EditData.jsx";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Categories />,
        children: [
          {
            path: "/",
            element: <AllToy />,
          },
        ],
      },
    ],
  },
  {
    path: "/toyDetails",
    element: <Layout />,
    children: [
      {
        path: ":id",
        element: <ToyDetails />,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/products/${params.id}`),
      },
    ],
  },
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "register",
        element: <Register />,
      },
      {
        path: "addItems",
        element: <AddItems />,
      },
      {
        path: "myProducts",
        element: <MyProducts />,
      },
      {
        path: "editFile/:id",
        element: <EditData />,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/products/${params.id}`),
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <AuthProvider>
    <React.StrictMode>
      <RouterProvider router={router} />
      <ToastContainer />
    </React.StrictMode>
  </AuthProvider>
);
