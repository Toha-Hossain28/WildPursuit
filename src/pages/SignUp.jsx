import { Link } from "react-router-dom";
import Snowfall from "react-snowfall";

function SignUp() {
  return (
    <div className="flex flex-col  justify-center items-center bg-evergreen pt-[45px] pb-28  rounded-3xl">
      <Snowfall color="white" snowflakeCount={100} />

      <h3 className="lora text-3xl font-bold  mb-10 text-white">Sign Up</h3>
      <div className="card bg-base-100 w-full max-w-md shrink-0 shadow-2xl raleway shadow-icyBlue">
        <form className="card-body">
          {/* name */}
          <div className="form-control">
            <label className="label ">
              <span className="label-text">Email</span>
            </label>
            <input
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
              type="password"
              placeholder="password"
              className="input input-bordered"
              required
            />
            <label className="label">
              <a href="#" className="label-text-alt link link-hover">
                Forgot password?
              </a>
            </label>
          </div>
          <div className="form-control mt-6">
            <button className="btn bg-icyBlue hover:bg-deepOceanBlue text-black hover:text-white">
              Login
            </button>
          </div>
          <div className="text-center text-sm mt-2">
            Don&apos;t have an account?{" "}
            <Link to={"/auth/signup"} className="text-evergreen font-bold">
              {" "}
              Sign Up
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}

export default SignUp;
