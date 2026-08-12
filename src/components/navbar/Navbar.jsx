import { Link} from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {

  return (
    <header className="navbar">
      <div className="navbar-container">
        
        <Link to="/" className="navbar-logo">
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

        <div className="nav-auth">
          <Link to="/login" className="btn-login">
            Connexion
          </Link>
          <Link to="/register" className="btn-register">
            Inscription
          </Link>
        </div>

      </div>
    </header>
  );
};

export default Navbar;