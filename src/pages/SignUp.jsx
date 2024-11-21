/* eslint-disable no-unused-vars */
import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Snowfall from "react-snowfall";
import { auth, AuthContext } from "../Context/AuthProvider";
import toast, { Toaster } from "react-hot-toast";
import { FaGoogle } from "react-icons/fa";
import { updateProfile } from "firebase/auth";

function SignUp() {
  const { user, setUser, userSignUp, googleLogin, loading } =
    useContext(AuthContext);
  const [passwordError, setPasswordError] = useState("");
  const navigate = useNavigate();

  const handleSignUp = (e) => {
    e.preventDefault();
    const form = new FormData(e.target);
    const name = form.get("name");
    const photoURL = form.get("photoURL");
    const email = form.get("email");
    const password = form.get("password");

    // Password validation logic
    if (!/[A-Z]/.test(password)) {
      setPasswordError("Password must contain at least one uppercase letter.");
      return;
    }
    if (!/[a-z]/.test(password)) {
      setPasswordError("Password must contain at least one lowercase letter.");
      return;
    }
    if (password.length < 6) {
      setPasswordError("Password must be at least 6 characters long.");
      return;
    }

    setPasswordError("");

    userSignUp(email, password)
      .then((result) => {
        setUser(result.user);

        updateProfile(auth.currentUser, {
          displayName: name,
          photoURL: photoURL,
        })
          .then(() => {
            toast.success("Profile updated successfully!");
            navigate("/");
          })
          .catch((error) => {
            // toast.error("Profile update failed!");
            console.error("Error updating profile:", error);
          });
      })
      .catch((error) => {
        toast.error("Sign Up failed! Please try again.");
        console.error("Error during sign-up:", error);
      });
  };

  const handleGoogle = () => {
    googleLogin().then((result) => {
      setUser(result.user);
      navigate("/");
    });
  };

  return (
    <div className="flex flex-col justify-center items-center bg-evergreen pt-[45px] pb-28 lg:px-0 px-4 rounded-3xl">
      <div>
        <Toaster />
      </div>
      <Snowfall color="white" snowflakeCount={100} />

      <h3 className="lora text-3xl font-bold mb-10 text-white">Sign Up</h3>
      <div className="card bg-base-100 w-full max-w-md shrink-0 shadow-2xl raleway shadow-icyBlue">
        <form className="card-body" onSubmit={handleSignUp}>
          {/* name */}
          <div className="form-control">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              name="name"
              type="text"
              placeholder="Name"
              className="input input-bordered"
              required
            />
          </div>
          {/* photo */}
          <div className="form-control">
            <label className="label">
              <span className="label-text">Photo URL</span>
            </label>
            <input
              name="photoURL"
              type="text"
              placeholder="Photo URL"
              className="input input-bordered"
              required
            />
          </div>
          {/* email */}
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              name="email"
              type="email"
              placeholder="Email"
              className="input input-bordered"
              required
            />
          </div>
          {/* password */}
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              name="password"
              type="password"
              placeholder="Password"
              className="input input-bordered"
              required
            />
            {passwordError && (
              <p className="text-red-500 text-sm mt-2">{passwordError}</p>
            )}
          </div>
          <div className="form-control mt-6">
            <button className="btn bg-icyBlue hover:bg-deepOceanBlue text-black hover:text-white">
              Register
            </button>
          </div>
          <button onClick={handleGoogle} className="btn">
            Sign in using <FaGoogle />
          </button>
          <div className="text-center text-sm mt-2">
            Don&apos;t have an account?{" "}
            <Link to={"/auth/signin"} className="text-evergreen font-bold">
              Sign In
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}

export default SignUp;
