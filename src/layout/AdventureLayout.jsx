import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Outlet } from "react-router-dom";
import useDynamicTitle from "../useDynamicTitle";

function AdventureLayout() {
  useDynamicTitle();

  return (
    <div>
      <Navbar />
      <section>
        <Outlet />
      </section>
      <Footer />
    </div>
  );
}

export default AdventureLayout;
