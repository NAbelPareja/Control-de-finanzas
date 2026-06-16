import { Navigate, Route, Routes } from "react-router-dom"
import { Navbar } from "../components/Navbar"
import { Dashboard } from "../pages/Dashboard"
import { Movimientos } from "../pages/Movimientos"
import { Reportes } from "../pages/Reportes"
import { Home } from "../pages/Home"
import { useLocation } from "react-router-dom"

export const AppRouter = () => {
    const location = useLocation();
    const isHome = location.pathname === '/home';
  return (
  <div className={isHome ? 'app-container-home' : 'app-container-global'}>
    <div >
        <Navbar></Navbar>
    </div>
    <Routes>
            <Route path="/home" element= {<Home></Home>}>    </Route>
            <Route path="/dashboard" element= {<Dashboard></Dashboard>}>    </Route>
            <Route path ="/movimientos" element ={<Movimientos></Movimientos>}> </Route>
            <Route path="/reportes" element ={<Reportes></Reportes>}>   </Route>
            <Route path="/*"  element = {<Navigate to="/home"></Navigate>}> </Route>
    </Routes>
  </div>
  )
}
