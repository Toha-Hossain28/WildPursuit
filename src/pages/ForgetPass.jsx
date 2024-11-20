import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../Context/AuthProvider";
import toast, { Toaster } from "react-hot-toast";

function ForgetPass() {
  const location = useLocation();
  const navigate = useNavigate();
  const { forgetPassword } = useContext(AuthContext);

  // Prefill email if passed via location.state
  const [email, setEmail] = useState(location.state || "");

  const handleResetPassword = (e) => {
    e.preventDefault();

    if (!email) {
      toast.error("Please provide a valid email address.");
      return;
    }

    forgetPassword(email)
      .then(() => {
        toast.success("Password reset email sent!");
        // Redirect to Gmail or any other action
        setTimeout(() => {
          window.open("https://mail.google.com", "_blank");
          navigate("/auth/signin");
        }, 2000);
      })
      .catch((error) => {
        console.error(error);
        toast.error("Failed to send password reset email.");
      });
  };

  return (
    <div className="min-h-fit py-36  flex items-center justify-center bg-gradient-to-r from-teal-600 via-cyan-800 to-blue-600">
      <div>
        <Toaster />
      </div>
      <div className="bg-white shadow-lg rounded-lg w-full max-w-md p-8">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-4">
          Forgot Password
        </h2>
        <p className="text-gray-600 text-center mb-6">
          Enter your email to reset your password
        </p>
        <form onSubmit={handleResetPassword}>
          {/* Email Input */}
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email Address
            </label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="input input-bordered input-md w-full"
              required
            />
          </div>
          {/* Reset Password Button */}
          <div className="mt-6">
            <button
              type="submit"
              className="w-full bg-evergreen hover:bg-deepOceanBlue text-white py-2 px-4 rounded-lg shadow btn "
            >
              Send Reset Link
            </button>
          </div>
        </form>
        {/* Back to Sign In */}
        <p className="text-center text-sm text-gray-500 mt-4">
          <button
            className="text-evergreen hover:underline"
            onClick={() => navigate("/auth/signin")}
          >
            Back to Sign In
          </button>
        </p>
      </div>
    </div>
  );
}

export default ForgetPass;
