import Navbar from "../components/Navbar"
import { Outlet } from "react-router-dom"

export default function Layout({ isAuth , onLogout}){
    return (
        <div>
            <Navbar isAuth={isAuth} onLogout={onLogout}></Navbar>
            <div className="container py-4">
                <Outlet />
            </div>
        </div>
    )
}