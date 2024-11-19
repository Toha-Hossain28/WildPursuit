/* eslint-disable no-unused-vars */
import { useContext } from "react";
import { Link } from "react-router-dom";
import Snowfall from "react-snowfall";
import { AuthContext } from "../Context/AuthProvider";
import toast, { Toaster } from "react-hot-toast";

function SignUp() {
  const { user, setUser, userSignUp } = useContext(AuthContext);
  const handleSignUp = (e) => {
    e.preventDefault();
    const form = new FormData(e.target);
    const name = form.get("name");
    const photoURL = form.get("photoURL");
    const email = form.get("email");
    const password = form.get("password");
    // console.log({ name, photoURL, email, password });

    userSignUp(email, password)
      .then((result) => {
        setUser(result.user);
        // console.log(user);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        toast.error("Sign Up failed! Please Try again.");
      });
  };

  return (
    <div className="flex flex-col  justify-center items-center bg-evergreen pt-[45px] pb-28 lg:px-0 px-4  rounded-3xl">
      <div>
        <Toaster />
      </div>
      <Snowfall color="white" snowflakeCount={100} />

      <h3 className="lora text-3xl font-bold  mb-10 text-white">Sign Up</h3>
      <div className="card bg-base-100 w-full max-w-md shrink-0 shadow-2xl raleway shadow-icyBlue">
        <form className="card-body" onSubmit={handleSignUp}>
          {/* name */}
          <div className="form-control">
            <label className="label ">
              <span className="label-text">Email</span>
            </label>
            <input
              name="name"
              type="text"
              placeholder="name"
              className="input input-bordered"
              required
            />
          </div>
          {/* photo */}
          <div className="form-control">
            <label className="label ">
              <span className="label-text">Email</span>
            </label>
            <input
              name="photoURL"
              type="text"
              placeholder="Photo URL"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label ">
              <span className="label-text">Email</span>
            </label>
            <input
              name="email"
              type="email"
              placeholder="email"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              name="password"
              type="password"
              placeholder="password"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control mt-6">
            <button className="btn bg-icyBlue hover:bg-deepOceanBlue text-black hover:text-white">
              Register
            </button>
          </div>
          <div className="text-center text-sm mt-2">
            Don&apos;t have an account?{" "}
            <Link to={"/auth/signin"} className="text-evergreen font-bold">
              {" "}
              Sign In
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}

export default SignUp;
