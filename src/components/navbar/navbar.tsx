import { Link } from "react-router-dom";
import Logo from "../../assets/Logo-black-removebg.png";

export default function Navbar() {
  return (
    <nav className="absolute z-40 w-full top-0 ">
      <div className="flex  gap-6 items-center justify-between w-full px-10 py-2">
        <Link to="/">
          <img src={Logo} className="w-[70px] " />
        </Link>

        <Link to="/book">
          <span
            className={` backdrop-blur-lg bg-white/45 rounded-sm text-black font-semibold text-sm p-2`}
          >
            BOOK
          </span>
        </Link>
      </div>
    </nav>
  );
}
