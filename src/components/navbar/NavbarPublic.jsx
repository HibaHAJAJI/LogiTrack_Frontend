import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import "./NavbarPublic.css";

const NavbarPublic = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const handleScrollToSection = (e, sectionId) => {
    e.preventDefault();
    setIsMenuOpen(false);

    if (location.pathname === "/" || location.pathname === "/about") {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      navigate("/about");
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 150);
    }
  };

  return (
    <header className="public-navbar">
      <div className="public-navbar-glow" />

      <div className="public-navbar-inner">
        <Link to="/" className="public-navbar-logo">
          <div className="logo-mark">
            <span className="logo-line logo-line-one"></span>
            <span className="logo-line logo-line-two"></span>
          </div>
          <div className="logo-wordmark">
            <span className="logo-light">LOGI</span>
            <span className="logo-accent">TRACK</span>
          </div>
        </Link>

        <nav className={`public-nav ${isMenuOpen ? "open" : ""}`}>
          <a
            href="#hero"
            className="nav-link"
            onClick={(e) => handleScrollToSection(e, "hero")}
          >
            <span>01</span> Accueil
          </a>

          <a
            href="#about"
            className="nav-link"
            onClick={(e) => handleScrollToSection(e, "about")}
          >
            <span>02</span> À propos
          </a>

          <a
            href="#features"
            className="nav-link"
            onClick={(e) => handleScrollToSection(e, "features")}
          >
            <span>03</span> Fonctionnalités
          </a>

          <div className="mobile-auth">
            <Link
              to="/login"
              className="mobile-login"
              onClick={() => setIsMenuOpen(false)}
            >
              Connexion
            </Link>
            <Link
              to="/register"
              className="mobile-register"
              onClick={() => setIsMenuOpen(false)}
            >
              Inscription ↗
            </Link>
          </div>
        </nav>

        <div className="public-navbar-actions">
          <Link to="/login" className="btn-login">
            Connexion
          </Link>
          <Link to="/register" className="btn-register">
            Inscription ↗
          </Link>
        </div>

        <button
          className={`menu-toggle ${isMenuOpen ? "active" : ""}`}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </header>
  );
};

export default NavbarPublic;