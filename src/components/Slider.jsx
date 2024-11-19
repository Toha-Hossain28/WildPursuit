function Slider({ data }) {
  // console.log(data[0]);
  const newData = data.slice(0, 4);
  return (
    <div className="grid grid-cols-12 border">
      <div className="col-span-4"></div>
      {/* slider */}
      <div className="carousel carousel-center bg-evergreen rounded-box max-w-7xl space-x-4 p-4 col-span-8 px-5">
        {newData.map((item, index) => (
          <div key={index} className="carousel-item w-3/4">
            <img
              src="https://plus.unsplash.com/premium_photo-1688645554172-d3aef5f837ce?q=80&w=2076&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt={`Slide ${index}`}
              className="rounded-box w-full"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Slider;
