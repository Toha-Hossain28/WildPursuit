import { useContext, useState } from "react";
import { auth, AuthContext } from "../Context/AuthProvider";
import { useNavigate } from "react-router-dom";
import { updateProfile } from "firebase/auth";
import toast, { Toaster } from "react-hot-toast";

function UpdateProfile() {
  const { user, updateUserProfile } = useContext(AuthContext);
  const [name, setName] = useState(user?.displayName || "");
  const [photoURL, setPhotoURL] = useState(user?.photoURL || "");
  const navigate = useNavigate();

  const handleUpdate = (e) => {
    e.preventDefault();
    updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: photoURL,
    })
      .then(() => {
        toast.success("Profile updated successfully!");
        navigate("/profile");
      })
      .catch((error) => {
        toast.error("Profile update failed!");
        console.error("Error updating profile:", error);
      });
  };

  return (
    <div className="flex justify-center items-center">
      <div>
        <Toaster />
      </div>
      <div className="w-full max-w-md bg-white rounded-lg shadow-xl p-6 my-10">
        <h1 className="text-2xl font-bold text-center text-gray-800">
          Update Profile
        </h1>
        <form onSubmit={handleUpdate} className="mt-6">
          {/* Name Input */}
          <div className="form-control mb-4">
            <label className="label">
              <span className="label-text font-medium">Name</span>
            </label>
            <input
              type="text"
              className="input input-bordered w-full"
              placeholder="Enter your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>

          {/* Photo URL Input */}
          <div className="form-control mb-4">
            <label className="label">
              <span className="label-text font-medium">Photo URL</span>
            </label>
            <input
              type="text"
              className="input input-bordered w-full"
              placeholder="Enter photo URL"
              value={photoURL}
              onChange={(e) => setPhotoURL(e.target.value)}
              required
            />
          </div>

          {/* Buttons */}
          <div className="mt-6 flex justify-between">
            <button
              type="submit"
              className="btn w-full bg-evergreen text-white"
            >
              Update Profile
            </button>
          </div>
        </form>
        <div className="mt-4 text-center">
          <button
            onClick={() => navigate("/profile")}
            className="text-gray-500 hover:text-evergreen underline"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}

export default UpdateProfile;
