import { NavLink } from "react-router-dom"

// Define isActive class to show active tab
const linkClass = ({isActive}) => {
    "nav-link" + (isActive  ? "fw-bold text-primary" : "")
}
export default function Navbar({ isAuth }){
    return (
        <nav className="navbar">
            <div className="container">
                <span className="navbar-brand fw-bold">
                    Simple Product Catalog 
                </span>
                <div className="navbar-nav">
                    <NavLink className={linkClass} to="/" > Home</NavLink>
                    <NavLink className={linkClass} to="/products" > Products</NavLink>
                    <NavLink className={linkClass} to="/login" > Login</NavLink>
                </div>
                <span className="badge text-bg-secondary">
                    {isAuth ? "Logged In" : "Logged out"}
                </span>
            </div>
        </nav>
    )
}