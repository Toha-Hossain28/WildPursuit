import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Outlet } from "react-router-dom";

function AdventureLayout() {
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
