import React from "react";
import ReactDOM from "react-dom";

import App from "./App";
import Tests from "./pages/Tests";
import Login from "./pages/Login";

import "./index.sass";

import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App/>,
    },
    {
        path: "/blog",
        element: <Tests/>,
    },
    {
        path: "/login",
        element: <Login/>,
    },
]);

ReactDOM.render(
        <RouterProvider router={router}/>,
    document.getElementById('root'),
  );