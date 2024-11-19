import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import MainLayout from "./layout/MainLayout";
import ErrorPage from "./pages/ErrorPage";
import AuthLayout from "./layout/AuthLayout";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import AuthProvider from "./Context/AuthProvider";
import Adventures from "./pages/Adventures";
import AdventureLayout from "./layout/AdventureLayout";
import Adventure from "./pages/Adventure";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    loader: () => fetch("/Data.json"),
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Adventures />,
        loader: () => fetch("/Data.json"),
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
  {
    path: "adventures/",
    element: <AdventureLayout />,
    children: [
      {
        path: ":id",
        element: <Adventure />,
        loader: () => fetch("/Data.json"),
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>
);
