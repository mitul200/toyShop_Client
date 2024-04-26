import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.jsx";
import AllToy from "./component/AllToyShop/AllToy.jsx";
import Categories from "./component/Categorys/Categories.jsx";
import "./index.css";
import Login from "./page/Login.jsx";
import Register from "./page/Register.jsx";
import AuthProvider from "./Provider/AuthProvider.jsx";

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
    path: "login",
    element: <Login />,
  },
  {
    path: "register",
    element: <Register />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <AuthProvider>
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  </AuthProvider>
);
