import { Link } from "react-router-dom";
import "./NavbarPrivate.css";

const Navbar = ({ userRole = "Admin", userName = "Hiba" }) => {

  const avatarInitials = userRole.substring(0, 2).toUpperCase();

  return (
    <header className="navbar">
      <div className="navbar-container">


        <Link to="/products" className="navbar-logo">
          <svg
            className="logo-icon"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx="6" cy="19" r="3" />
            <path d="M9 19h8.5a3.5 3.5 0 0 0 0-7h-11a3.5 3.5 0 0 1 0-7H15" />
            <circle cx="18" cy="5" r="3" />
          </svg>
          <span className="logo-text">
            Logi<span className="logo-dark">Track</span>
          </span>
        </Link>

        <div className="nav-user-profile">
          <div className="user-avatar">{avatarInitials}</div>
          <div className="user-details">
            <span className="user-name">{userName}</span>
            <span className={`user-role-badge ${userRole.toLowerCase()}`}>
              {userRole}
            </span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;