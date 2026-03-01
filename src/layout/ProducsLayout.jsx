import Navbar from "../components/Navbar"
import { Outlet } from "react-router-dom"

export default function Layout({ isAuth }){
    return (
        <div>
            <Navbar isAuth={isAuth}></Navbar>
            <div className="container">
                <Outlet />
            </div>
        </div>
    )
}