import { useLoaderData, useNavigate, useParams } from "react-router-dom";

// const obj = {
//   id: 1,
//   adventureTitle: "Mountain Trekking in the Alps",
//   image:
//     "https://plus.unsplash.com/premium_photo-1672115680958-54438df0ab82?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bW91bnRhaW5zfGVufDB8fDB8fHww",
//   categoryName: "Mountain Treks",
//   shortDescription:
//     "A thrilling adventure to the peaks of the Alps, where the crisp air and stunning views await. Experience the breathtaking beauty of snow-capped mountains, crystal-clear lakes, and alpine meadows. This trek offers not only stunning views but also an opportunity to immerse yourself in the region's rich culture and history, with visits to charming mountain villages.",
//   adventureCost: 1200,
//   bookingAvailability: "Available",
//   location: "Alps, Switzerland",
//   duration: "7 days",
//   adventureLevel: "Intermediate",
//   includedItems: ["Guided Tour", "Meals", "Camping Gear"],
//   ecoFriendlyFeatures: ["Carbon offset", "Eco gear", "Local food"],
//   maxGroupSize: 12,
//   specialInstructions: ["Bring warm clothing", "Physical fitness required"],
// };

function Adventure() {
  const { id } = useParams();
  const data = useLoaderData();
  const reqData = data.find((item) => item.id == id);
  const navigate = useNavigate();
  const {
    adventureTitle,
    image,
    categoryName,
    shortDescription,
    location,
    duration,
    adventureLevel,
    includedItems,
    ecoFriendlyFeatures,
    maxGroupSize,
    specialInstructions,
  } = reqData;
  return (
    <div className="mx-5 my-10">
      <div className="flex flex-col gap-10">
        <img
          src="https://plus.unsplash.com/premium_photo-1688645554172-d3aef5f837ce?q=80&w=2076&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          className="rounded-lg shadow-2xl lg:w-3/4 md:w-10/12 mx-auto"
        />
        <div className="space-y-4 lg:w-3/4 md:w-10/12 mx-auto">
          <h1 className="lg:text-4xl text-3xl  font-bold text-evergreen mb-7 md:mt-7 mt-2">
            {adventureTitle}
          </h1>
          <p className="text-base text-gray-600  ">{shortDescription}</p>
          <p className="text-base text-gray-600  ">
            <span className="font-bold">Location:</span> {location}
          </p>
          <p className="text-base text-gray-600  ">
            <span className="font-bold">Duration:</span> {duration}
          </p>
          <p className="text-base text-gray-600  ">
            <span className="font-bold">Adventure Level:</span> {adventureLevel}
          </p>
          <p className="text-base text-gray-600  ">
            <span className="font-bold">Included Items:</span>{" "}
            {includedItems.join(", ")}
          </p>
          <p className="text-base text-gray-600  ">
            <span className="font-bold">Eco-Friendly Features:</span>{" "}
            {ecoFriendlyFeatures.join(", ")}
          </p>
          <p className="text-base text-gray-600  ">
            <span className="font-bold">Max Group Size:</span> {maxGroupSize}
          </p>
          <p className="text-base text-gray-600  ">
            <span className="font-bold">Special Instructions:</span>{" "}
            {specialInstructions.join(", ")}
          </p>
          <p className="text-base text-gray-600  ">
            <span className="font-bold">Category:</span> {categoryName}
          </p>
          <button
            className="bg-evergreen text-white py-2 px-4 rounded-lg hover:bg-icyBlue transition duration-300 ease-in-out"
            onClick={() => {
              navigate(-1);
            }}
          >
            Go Back
          </button>
        </div>
      </div>
    </div>
  );
}

export default Adventure;
