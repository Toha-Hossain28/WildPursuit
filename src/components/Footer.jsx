import { FaFacebook, FaGithub, FaLinkedinIn } from "react-icons/fa";
import { Link } from "react-router-dom";
import logo from "../assets/footer-logo.png";

function Footer() {
  return (
    <footer className="footer footer-center bg-white pt-0 relative text-black">
      <aside>
        <div>
          <img src={logo} alt="" className="w-48" />
        </div>
        <div className="font-bold text-lg absolute top-32 lora">
          WildPursuit Adventures Ltd.
          <br />
          <p className="font-normal text-base raleway">
            Inspiring sustainable journeys for nature lovers everywhere.
          </p>
        </div>
        <p className="raleway">Copyright © 2024- All right reserved</p>
      </aside>
      <div className="grid grid-flow-col gap-4">
        <Link to="https://www.facebook.com/itstohahossain/">
          <div>
            <FaFacebook className="w-6 h-6" />
          </div>
        </Link>
        <Link to="https://github.com/Toha-Hossain28">
          <div>
            <FaGithub className="w-6 h-6" />
          </div>
        </Link>
        <Link to="https://www.linkedin.com/in/toha-hossain-43575b264/">
          <div>
            <FaLinkedinIn className="w-6 h-6" />
          </div>
        </Link>
      </div>
    </footer>
  );
}

export default Footer;
