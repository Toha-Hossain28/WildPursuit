import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

function AuthLayout() {
  return (
    <div>
      <section>
        <Navbar />
      </section>

      <section className="min-h-[calc(100vh-450px)]">
        <Outlet />
      </section>

      <section className="relative">
        <Footer />
      </section>
    </div>
  );
}

export default AuthLayout;