import React from "react";
import Slider from "./Slider";

function Banner({ data }) {
  return (
    <section className="lg:grid lg:grid-cols-12 bg-icyBlue rounded-2xl flex flex-col pt-5 lg:pt-0">
      <div className="col-span-5 flex flex-col justify-center items-center pl-10">
        <h1 className="lora font-bold lg:text-6xl text-3xl text-center lg:text-left text-evergreen">
          Explore the Untamed Beauty of Nature
        </h1>
        <p className="raleway mt-5 font-normal text-sm lg:text-base text-gray-600">
          Embark on eco-friendly adventures that take you beyond the
          ordinary—trek, dive, and wander sustainably through the world&apos;s
          most stunning landscapes.
        </p>
      </div>
      <div className="col-span-7 p-10 lg:w-auto w-full">
        <Slider data={data} />
      </div>
    </section>
  );
}

export default Banner;