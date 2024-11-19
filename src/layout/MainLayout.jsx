import { Outlet, useLoaderData } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Slider from "../components/Slider";

function MainLayout() {
  const data = useLoaderData();
  // console.log(data);

  return (
    <div>
      {/* navbar */}
      <section className="">
        <Navbar />
      </section>
      <section className="my-10 bg-icyBlue">
        <Slider data={data} />
      </section>
      <section className="min-h-[calc(100vh-380px)]">
        <Outlet />
      </section>
      {/* footer */}
      <section>
        <Footer />
      </section>
    </div>
  );
}

export default MainLayout;
