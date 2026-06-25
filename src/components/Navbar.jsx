import { NavLink } from "react-router-dom";
import { FaHome } from "react-icons/fa";
import { MdDashboard } from "react-icons/md";
import { FaMoneyBillWave } from "react-icons/fa";
import { FaChartBar } from "react-icons/fa";
import { GiReceiveMoney } from "react-icons/gi";

export const Navbar = () => {
  return (
    <div className="font-bold px-1 md:px-5 lg:px-7 py-5">
      <ul>
        <li className="pb-15 text-2xl">
          <div className="flex items-center- gap-2">
            <GiReceiveMoney className="text-3xl " />
            <h2 className="font-normal">
              Gas<span className="font-bold text-blue-500">Per</span>
            </h2>
          </div>
          <p className="text-xs font-normal">Control de finanzas</p>
        </li>
        <li className="py-5 ">
          <div className="flex gap-2 items-center">
            <FaHome className="text-2xl text-blue-400" />
            <NavLink
              className={({ isActive }) =>
                isActive ? "nav-link active" : "nav-link"
              }
              href="#"
              to="/home"
            >
              Home
            </NavLink>
          </div>
        </li>
        <li className="py-5">
          <div className="flex items-center gap-2">
            <MdDashboard className="text-2xl text-blue-400" />
            <NavLink
              className={({ isActive }) =>
                isActive ? "nav-link active" : "nav-link"
              }
              href="#"
              to="/dashboard"
            >
              Dashboard
            </NavLink>
          </div>
        </li>
        <li className="py-5">
          <div className="flex items-center gap-2">
            <FaMoneyBillWave className="text-2xl text-blue-400" />
            <NavLink
              className={({ isActive }) =>
                isActive ? "nav-link active" : "nav-link"
              }
              href="#"
              to="/movimientos"
            >
              Movimientos
            </NavLink>
          </div>
        </li>
        <li className="py-5">
          <div className="flex items-center gap-2">
            <FaChartBar className="text-2xl text-blue-400" />
            <NavLink
              className={({ isActive }) =>
                isActive ? "nav-link active" : "nav-link"
              }
              href="#"
              to="/reportes"
            >
              Reportes
            </NavLink>
          </div>
        </li>
      </ul>
    </div>
  );
};
