import Slider from "./Slider";
import "animate.css";

function Banner({ data }) {
  return (
    <section className="lg:grid lg:grid-cols-12 bg-icyBlue rounded-2xl flex flex-col pt-5 lg:pt-0">
      <div className="col-span-5 flex flex-col justify-center items-center md:pl-10 pl-0  text-left">
        <div className="lora font-bold xl:text-6xl lg:text-4xl md:text-4xl  text-3xl text-center lg:text-left text-evergreen">
          Explore the Untamed
          <div className="animate__animated animate__bounce animate__infinite">
            Beauty of Nature
          </div>
        </div>
        <p className="raleway mt-5 font-normal text-sm xl:text-base text-gray-600 text-center lg:text-left">
          Embark on eco-friendly adventures that take you beyond the
          ordinary—trek, dive,
          <br /> and wander sustainably through the world&apos;s most stunning
          landscapes.
        </p>
      </div>
      <div className="col-span-7 p-10 lg:w-auto w-full">
        <Slider data={data} />
      </div>
    </section>
  );
}

export default Banner;
