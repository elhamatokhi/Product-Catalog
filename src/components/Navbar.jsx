import { NavLink } from "react-router-dom";

// Active link styling
const linkClass = ({ isActive }) =>
  "nav-link" + (isActive ? " fw-bold text-primary" : "");

export default function Navbar({ isAuth, onLogout }) {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light border-bottom">
      <div className="container">
        <span className="navbar-brand fw-bold">Simple Product Catalog</span>

        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <NavLink className={linkClass} to="/">
              Home
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className={linkClass} to="/products">
              Products
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className={linkClass} to="/dashboard">
              Dashboard
            </NavLink>
          </li>
           <li className="nav-item">
            <NavLink className={linkClass} to="/login">
              Login
            </NavLink>
          </li>
        </ul>
        <span className="badge text-bg-secondary">
          {isAuth ? "Logged In" : "Logged out"}
        </span>

        {isAuth && (
          <button className="btn btn-outline-danger btn-sm" onClick={onLogout}>
            Logout
          </button>
        )}
      </div>
    </nav>
  );
}
