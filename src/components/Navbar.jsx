import { NavLink } from "react-router-dom";
import { FaHome } from "react-icons/fa";
import { MdDashboard } from "react-icons/md";
import { FaMoneyBillWave } from "react-icons/fa";
import { FaChartBar } from "react-icons/fa";
import { GiReceiveMoney } from "react-icons/gi";

export const Navbar = () => {
  return (
    //"fixed bottom-0 left-0 w-full bg-zinc-900 border-t border-zinc-700 flex justify-around py-3 md:hidden z-50"
    <div className="z-1 font-bold px-1 bg-zinc-800 md:bg-transparent  md:py-5 flex flex-row justify-between md:justify-start md:flex-col fixed bottom-0 left-0 w-full md:left-0 md:top-0 md:px-5 lg:px-7 ">
        <div className="pt-3 md:pb-15 text-2xl">
          <div className="flex items-center- gap-2">
            <GiReceiveMoney className="text-1xl md:text-3xl"/>
            <h2 className="font-normal">
              Gas<span className="font-bold text-blue-500">Per</span>
            </h2>
          </div>
          <p className="text-xs font-normal">Control de finanzas</p>
        </div>
        <div className=" py-5 flex flex-col md:flex-row gap-2 items-center">
            <FaHome className="text-xl sm:text-2xl text-blue-400" />
            <NavLink
              className={({ isActive }) =>
                isActive ? "nav-link active text-xs sm:text-xl" : "nav-link text-xs sm:text-xl"
              }
              href="#"
              to="/home"
            >
              Home
            </NavLink>
        </div>
        <div className="py-5 flex flex-col md:flex-row items-center gap-2">
            <MdDashboard className="text-xl sm:text-2xl text-blue-400" />
            <NavLink
              className={({ isActive }) =>
                isActive ? "nav-link active text-xs sm:text-xl" : "nav-link text-xs sm:text-xl"
              }
              href="#"
              to="/dashboard"
            >
              Dashboard
            </NavLink>
        </div>
        <div className="py-5 flex flex-col md:flex-row items-center gap-2">
            <FaMoneyBillWave className="text-xl sm:text-2xl text-blue-400" />
            <NavLink
              className={({ isActive }) =>
                isActive ? "nav-link active text-xs sm:text-xl" : "nav-link text-xs sm:text-xl"
              }
              href="#"
              to="/movimientos"
            >
              Movimientos
            </NavLink>
        </div>
        <div className="py-5 flex flex-col md:flex-row items-center gap-2">
            <FaChartBar className="text-xl sm:text-2xl text-blue-400" />
            <NavLink
              className={({ isActive }) =>
                isActive ? "nav-link active text-xs sm:text-xl" : "nav-link text-xs sm:text-xl"
              }
              href="#"
              to="/reportes"
            >
              Reportes
            </NavLink>
        </div>
    </div>
  );
};
