import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { createBrowserRouter, RouterProvider, Routes } from "react-router-dom";
import "./index.css";
import Main from "./Layout/Main";
import Home from "./Home/Home";
import TShirts from "./TShirts/TShirts";
import OrderReview from "./OrderReview/OrderReview";
import About from "./About/About";
import Contact from "./Contact/Contact";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: ()=> fetch('tshirts.json')
      },
      {
        path: "/review",
        element: <OrderReview></OrderReview>,
      },
      {
        path: "/about",
        element: <About></About>,
      },
      {
        path: "/contact",
        element: <Contact></Contact>,
      },
    ]
  }
])
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
