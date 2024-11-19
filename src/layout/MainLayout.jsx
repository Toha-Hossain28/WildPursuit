import { Outlet, useLoaderData } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Banner from "../components/Banner";
import useDynamicTitle from "../useDynamicTitle";
import Testimonials from "../components/Testimonials";
import WhyUs from "../components/WhyUs";

function MainLayout() {
  const data = useLoaderData();
  useDynamicTitle();
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
      <section>
        <Testimonials />
      </section>
      <section>
        <WhyUs />
      </section>
      {/* footer */}
      <section>
        <Footer />
      </section>
    </div>
  );
}

export default MainLayout;
