import { useContext } from "react";
import { AuthContext } from "../Context/AuthProvider";
import { Link } from "react-router-dom";
import "animate.css";

function Profile() {
  const { user, userSignOut } = useContext(AuthContext);
  return (
    <div className="mx-5">
      <h1 className="text-3xl font-bold text-center mt-16 animate__bounceIn animate__animated animate__repeat-3">
        Welcome, {user?.displayName} 😄
      </h1>
      <div className="max-w-md mx-auto mt-10 bg-white shadow-lg rounded-lg overflow-hidden">
        <div className="text-center p-6 bg-gradient-to-r from-evergreen to-deepOceanBlue text-white">
          <img
            src={
              user?.photoURL ||
              "https://i.seadn.io/gcs/files/3085b3fc65f00b28699b43efb4434eec.png?auto=format&dpr=1&w=1000"
            }
            alt="User Avatar"
            className="w-32 h-32 rounded-full mx-auto border-4 border-white shadow-md"
          />
          <h1 className="text-2xl font-bold mt-4">
            {user?.displayName || "Guest"}
          </h1>
          <p className="text-sm mt-2">{user?.email || "No Email Available"}</p>
        </div>
        <div className="p-6">
          <div className="mt-4 flex justify-center">
            <Link
              to="/profile/update"
              className="btn bg-evergreen text-white mr-2"
            >
              Edit Profile
            </Link>
            <button className="btn bg-icyBlue" onClick={userSignOut}>
              Sign Out
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
