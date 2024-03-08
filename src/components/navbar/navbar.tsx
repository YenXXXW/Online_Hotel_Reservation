import { Link, useLocation } from "react-router-dom";
import Logo from "../../assets/LogoColorInvert-removebg-preview.png";

export default function Navbar() {
  const location = useLocation();

  return (
    <nav className="flex justify-between pr-16 pl-10 py-5 bg-black/80 w-full">
      <div className="flex  gap-6 items-center justify-between w-full">
        <Link to="/">
          <span
            className={`navlinks ${location.pathname === "/" && "underline"}`}
          >
            HOME
          </span>
        </Link>

        <Link to="/book">
          <span
            className={`navlinks ${
              location.pathname === "/book" && "underline"
            }`}
          >
            BOOK
          </span>
        </Link>
        <span className={` mx-[300px]`}>
          <img src={Logo} className="w-[70px]" />
        </span>
        <Link to="/ask">
          <span
            className={`navlinks ${
              location.pathname === "/ask" && "underline"
            }`}
          >
            ASK
          </span>
        </Link>
        <Link to="/aboutus">
          <span
            className={`navlinks ${
              location.pathname === "/aboutus" && "underline"
            }`}
          >
            ABOUT US
          </span>
        </Link>
      </div>
    </nav>
  );
}
