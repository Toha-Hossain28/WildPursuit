import { useContext } from "react";
import { AuthContext } from "../Context/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";

function PrivateRoute({ children }) {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();
  if (loading) {
    return (
      <div className="w-full h-screen flex justify-center items-center">
        <span className="loading loading-spinner loading-lg"></span>;
      </div>
    );
  }
  if (user && user?.email) {
    return children;
  }
  return <Navigate state={location.pathname} to="/auth/signin" />;
}

export default PrivateRoute;
