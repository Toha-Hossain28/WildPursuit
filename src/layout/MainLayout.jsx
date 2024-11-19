import { Outlet, useLoaderData } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Banner from "../components/Banner";

function MainLayout() {
  const data = useLoaderData();
  // console.log(data);

  return (
    <div>
      {/* navbar */}
      <section className="">
        <Navbar />
      </section>
      {/* banner */}
      <section className="">
        <Banner data={data} />
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
