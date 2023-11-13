import { BsGithub } from "react-icons/bs";
import { NavLink } from "react-router-dom";
const Navbar = () => {
  return (
    <>
      <nav>
        <i className="fa-solid fa-bars" id="bars"></i>
        <i className="fa-solid fa-bars-staggered" id="x-bars"></i>
        <ul className="flex gap-1 justify-end">
          <li>
            <NavLink
              to="/"
              className="py-1 px-4 inline-block hover:bg-slate-300 hover:text-slate-900 rounded-sm"
            >
              Home
            </NavLink>
          </li>

          <li>
            <NavLink
              to="./projects"
              className="py-1 px-4 inline-block hover:bg-slate-300 hover:text-slate-900 rounded-sm"
            >
              Projects
            </NavLink>
          </li>

          <li>
            <NavLink
              to="https://github.com/mahbubhasantamim"
              target="_blank"
              className="flex gap-1 items-center py-1 px-4 bg-white text-slate-900 rounded-sm hover:bg-slate-200"
            >
              GitHub <BsGithub />
            </NavLink>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
