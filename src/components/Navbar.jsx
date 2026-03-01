import { NavLink } from "react-router-dom"

// Active link styling
const linkClass = ({ isActive }) =>
  "nav-link" + (isActive ? " fw-bold text-primary" : "");

export default function Navbar({ isAuth, onLogout }){

  function handleLogout() {
    onLogout();
  }

    return (
        <nav className="navbar">
            <div className="container">
                <span className="navbar-brand fw-bold">
                    Simple Product Catalog 
                </span>
                <div className="navbar-nav">
                    <NavLink className={linkClass} to="/" > Home</NavLink>
                    <NavLink className={linkClass} to="/products" > Products</NavLink>
                    <NavLink className={linkClass} to="/dashboard"> Dashboard</NavLink>
                    <NavLink className={linkClass} to="/login" > Login</NavLink>
                </div>
                <span className="badge text-bg-secondary">
                    {isAuth ? "Logged In" : "Logged out"}
                </span>

                {isAuth && (
              <button
                className="btn btn-outline-danger btn-sm"
                onClick={handleLogout}
              >
                Logout
              </button>
            )}
            </div>
        </nav>
    )
}