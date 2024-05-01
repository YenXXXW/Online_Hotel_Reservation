import { Link } from "react-router-dom";
import Logo from "../assets/lexe_text_transparent.png";
import { useEffect } from "react";

export default function Navbar({ toTop }: { toTop: boolean }) {
  useEffect(() => {
    console.log(toTop);
  }, [toTop]);

  return (
    <nav className="absolute z-40 w-full top-0 h-[200px] ">
      <div className="flex  gap-6 items-center justify-between w-full  h-[100px] px-10 py-2">
        <Link to="/">
          <img src={Logo} className="w-[90px]" />
        </Link>

        <Link to="/book">
          <span
            className={` backdrop-blur-lg bg-white/45 rounded-sm text-white font-semibold text-sm px-5 py-2 tracking-widest`}
          >
            BOOK
          </span>
        </Link>
      </div>
      <div
        className={`bg-white/30 backdrop-blur-sm py-3 font-Siliguri tracking-wider uppercase text-white ${
          toTop &&
          "trasform duration-300 bg-red-500 text-gray-900 backdrop-blur-none fixed top-0 w-full"
        }`}
      >
        <ul className="w-[70%] mx-auto flex justify-between">
          <li>Accomodations</li>
          <li>Gallary</li>
          <li>Dining</li>
          <li>Services</li>
          <li>Spa</li>
          <li>Meetings and Celebrations</li>
        </ul>
      </div>
    </nav>
  );
}
