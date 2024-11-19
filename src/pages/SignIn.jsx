import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../Context/AuthProvider";

function SignIn() {
  const { user, setUser, userSignIn } = useContext(AuthContext);
  const handleSignIn = (e) => {
    e.preventDefault();
    const form = new FormData(e.target);
    const email = form.get("email");
    const password = form.get("password");
    // console.log({ email, password });

    userSignIn(email, password)
      .then((result) => {
        setUser(result.user);
        // console.log(user);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorMessage);
      });
  };

  return (
    <div className="flex flex-col  justify-center items-center bg-evergreen pt-[45px] pb-28 lg:px-0 px-4  rounded-xl">
      <h3 className="lora text-3xl font-bold  mb-10 text-white">Sign In</h3>
      <div className="card bg-base-100 w-full max-w-md shrink-0 shadow-2xl raleway shadow-icyBlue ">
        <form className="card-body" onSubmit={handleSignIn}>
          {/* email */}
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
          {/* password */}
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
            <label className="label">
              <a href="#" className="label-text-alt link link-hover">
                Forgot password?
              </a>
            </label>
          </div>
          <div className="form-control mt-6">
            <button className="btn bg-icyBlue hover:bg-deepOceanBlue text-black hover:text-white">
              Sign In
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

export default SignIn;
