import React from "react";
import { Link } from "react-router-dom";
import Snowfall from "react-snowfall";

const ErrorPage = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-slate-900 to-slate-100 text-white relative">
      {/* Snowfall effect */}
      <Snowfall color="white" snowflakeCount={100} />

      <div className="relative z-10 flex flex-col items-center p-8 bg-slate-300 bg-opacity-40 border border-white border-opacity-20 rounded-lg shadow-lg backdrop-blur-md">
        <h1 className="text-7xl font-extrabold mb-4 text-slate-700 tracking-wide lora">
          404
        </h1>
        <h2 className="text-3xl font-semibold mb-6 text-slate-700 lora">
          Lost in the Snow?
        </h2>
        <p className="mb-8 text-lg text-center max-w-lg text-slate-700 raleway">
          It seems like you have wandered off the trail! The page you are
          looking for might be buried in snow, or it does not exist.
        </p>
        <Link
          to="/"
          className="px-6 py-3 text-lg font-semibold bg-slate-700 text-white rounded-full hover:bg-slate-500 transition duration-200 raleway"
        >
          Go Back to Warmer Places
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;
