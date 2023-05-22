import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App";
import Tests from "./pages/Tests";
import Login from "./pages/Login";
import Register from "./pages/Register";

import { ThemeProvider } from "./contexts/ThemeContext";

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
    {
        path: "/register",
        element: <Register/>,
    },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ThemeProvider>
        <RouterProvider router={router}/>
    </ThemeProvider>
  </React.StrictMode>
);
