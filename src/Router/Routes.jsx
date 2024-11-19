import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import ErrorPage from "../pages/ErrorPage";
import Adventures from "../pages/Adventures";
import AuthLayout from "../layout/AuthLayout";
import SignIn from "../pages/SignIn";
import SignUp from "../pages/SignUp";
import AdventureLayout from "../layout/AdventureLayout";
import Adventure from "../pages/Adventure";
import PrivateRoute from "./PrivateRoute";
import Profile from "../pages/Profile";
import UpdateProfile from "../pages/UpdateProfile";

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
      {
        path: "profile",
        element: (
          <PrivateRoute>
            <Profile />,
          </PrivateRoute>
        ),
      },
    ],
  },
  {
    path: "/profile",
    element: <AuthLayout />,
    children: [
      {
        path: "",
        element: (
          <PrivateRoute>
            <Profile />,
          </PrivateRoute>
        ),
      },
      {
        path: "update",
        element: (
          <PrivateRoute>
            <UpdateProfile />,
          </PrivateRoute>
        ),
      },
    ],
  },
  {
    path: "adventures/",
    element: <AdventureLayout />,
    children: [
      {
        path: ":id",
        element: (
          <PrivateRoute>
            <Adventure />
          </PrivateRoute>
        ),
        loader: () => fetch("/Data.json"),
      },
    ],
  },
]);

export default router;
