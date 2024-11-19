import { useLoaderData } from "react-router-dom";
import Card from "../components/Card";

function Adventures() {
  const data = useLoaderData();
  // console.log(data);
  return (
    <div className="my-10 flex flex-col justify-center items-center mx-5">
      <h1 className="text-4xl font-bold text-evergreen mb-7 mt-7">
        Explore Eco-Friendly Adventures
      </h1>
      <p className="text-lg text-gray-600 mb-10">
        Discover unforgettable journeys that protect and celebrate nature.
        Choose your next adventure!
      </p>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-10">
        {data.map((item) => (
          <Card item={item} key={item.id} />
        ))}
      </div>
    </div>
  );
}

export default Adventures;
