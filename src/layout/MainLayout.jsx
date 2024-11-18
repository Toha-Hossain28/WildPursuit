import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function MainLayout() {
  return (
    <div>
      {/* navbar */}
      <section className="">
        <Navbar />
      </section>
      <section className="min-h-[calc(100vh-360px)]">
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
