import { Link } from "react-router-dom";

function Slider({ data }) {
  // console.log(data[0]);
  const newData = data.slice(0, 4);
  return (
    <div className="">
      {/* slider */}
      <div className="carousel carousel-center bg-icyBlue border-none outline-none rounded-box max-w-7xl space-x-4 p-4  px-5 lg:h-auto h-50">
        {newData.map((item, index) => (
          <div
            key={index}
            className="carousel-item md:w-3/4 w-11/12  relative  hover:brightness-110 border-deepOceanBlue border-[10px] rounded-3xl"
          >
            <img
              src="https://plus.unsplash.com/premium_photo-1688645554172-d3aef5f837ce?q=80&w=2076&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt={`Slide ${index}`}
              className="rounded-xl  w-full"
            />
            <div className="absolute lg:bottom-10 bottom-5 ml-5  text-white space-y-2">
              <p className="lora xl:text-3xl lg:text-2xl  xl:font-semibold lg:font-bold  text-lg font-medium">
                {item.adventureTitle}
              </p>
              <p className="raleway xl:text-xl lg:text-base  xl:font-medium text-sm font-normal">
                {item.location}
              </p>
              <Link
                to={`/adventures/${item.id}`}
                className="md:btn xl:btn lg:btn-sm  hidden"
              >
                See Details
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Slider;
