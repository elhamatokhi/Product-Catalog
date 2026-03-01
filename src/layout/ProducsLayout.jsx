import Navbar from "../components/Navbar"
import { Outlet } from "react-router-dom"
import Footer from "../components/Footer"

export default function Layout({ isAuth , onLogout}){
    return (
        <div className="d-flex flex-column min-vh-100">
            <Navbar isAuth={isAuth} onLogout={onLogout}></Navbar>
              <main className="flex-grow-1">
                <Outlet />
              </main>
            <Footer />
        </div>
    )
}