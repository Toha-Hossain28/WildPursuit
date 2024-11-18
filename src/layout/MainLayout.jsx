import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

function MainLayout() {
  return (
    <div>
      {/* navbar */}
      <section className="">
        <Navbar />
      </section>
      <section>
        <Outlet />
      </section>
      {/* footer */}
    </div>
  );
}

export default MainLayout;
