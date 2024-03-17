import { Link, useLocation } from "react-router-dom";
import Logo from "../../assets/LogoColorInvert-removebg-preview.png";

export default function Navbar() {
  const location = useLocation();

  return (
    <nav className="absolute z-40 w-full top-0 ">
      <div></div>
      <div className="h-auto flex justify-between md:pr-16 px-2 md:px-none md:pl-10 py-5 bg-transparent w-full">
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
          <span className={` lg:mx-[300px]`}>
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
      </div>
    </nav>
  );
}
