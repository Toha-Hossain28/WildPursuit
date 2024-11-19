import { Link } from "react-router-dom";

function Card({ item }) {
  const { adventureTitle, ecoFriendlyFeatures, image, id } = item;
  return (
    <div className="card card-compact bg-base-100 shadow-xl flex flex-col justify-between p-4 border rounded-box">
      <figure>
        <img
          src="https://plus.unsplash.com/premium_photo-1688645554172-d3aef5f837ce?q=80&w=2076&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Shoes"
          className="rounded-box"
        />
      </figure>
      <div className="card-body flex flex-col justify-between">
        <h2 className="card-title">{adventureTitle}</h2>
        <div className="card-actions flex gap-2">
          {ecoFriendlyFeatures.map((feature, index) => (
            <div key={index} className="">
              ✅ {feature}
            </div>
          ))}
        </div>
        <div className="">
          <Link
            to={`/adventures/${id}`}
            className="btn bg-evergreen text-white hover:text-black"
          >
            Explore Now
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Card;
