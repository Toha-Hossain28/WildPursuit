import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import MainLayout from "./layout/MainLayout";
import ErrorPage from "./pages/ErrorPage";
import AuthLayout from "./layout/AuthLayout";
import Login from "./pages/SignUp";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <h1>Home</h1>,
      },
      {
        path: "profile",
        element: <h1>profile</h1>,
      },
      {
        path: "update",
        element: <h1>update</h1>,
      },
    ],
  },
  {
    path: "auth",
    element: <AuthLayout />,
    children: [
      {
        path: "signin",
        element: <SignIn />,
      },
      {
        path: "signup",
        element: <SignUp />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
