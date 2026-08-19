import { useState } from "react";
import { Link } from "react-router-dom";
import "./Login.css";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Connexion avec :", formData);
  };

  return (
    <main className="login-page">
      <div className="login-shell">
        <section className="login-visual">
          <Link to="/" className="login-logo">
            <span className="login-logo-mark">
              <span />
              <span />
            </span>
            <span className="login-logo-text">
              Logi<span>Track</span>
            </span>
          </Link>

          <div className="login-visual-caption">
            <h2>Gérez votre logistique en toute simplicité.</h2>
            <p>
              Clients, produits et commandes réunis dans un espace de travail
              centralisé, conçu pour les opérations modernes.
            </p>
          </div>

          <div className="login-stat-card">
            <div className="stat-card-top">
              <div className="stat-avatars">
                <span />
                <span />
                <span />
              </div>
              <span className="stat-percent">
                60% <i />
              </span>
            </div>

            <div className="stat-progress">
              <span />
            </div>

            <div className="stat-value">
              <span className="stat-check">✓</span>
              24.650 Units
            </div>

            <button type="button" className="stat-card-btn">
              Envoyer vers toutes les régions
            </button>
          </div>
        </section>

        <section className="login-form-side">
          <div className="login-form-inner">
            <div className="login-form-header">
              <h1>Connectez-vous</h1>
              <p>Entrez vos identifiants pour accéder à votre espace de travail.</p>
            </div>

            <form className="login-form" onSubmit={handleSubmit}>
              <div className="login-field">
                <label htmlFor="email">Adresse email</label>
                <div className="login-input-wrap">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="nom@entreprise.com"
                    autoComplete="email"
                    required
                  />
                  <svg
                    className="login-input-icon"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <rect x="3" y="5" width="18" height="14" rx="2" />
                    <path d="m3 7 9 6 9-6" />
                  </svg>
                </div>
              </div>

              <div className="login-field">
                <div className="login-field-header">
                  <label htmlFor="password">Mot de passe</label>
                  <button type="button" className="forgot-password">
                    Mot de passe oublié ?
                  </button>
                </div>

                <div className="login-input-wrap">
                  <input
                    id="password"
                    name="password"
                    type="password"
                    value={formData.password}
                    onChange={handleChange}
                    placeholder="Entrez votre mot de passe"
                    autoComplete="current-password"
                    required
                  />
                  <svg
                    className="login-input-icon"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <rect x="4" y="11" width="16" height="10" rx="2" />
                    <path d="M8 11V7a4 4 0 0 1 8 0v4" />
                  </svg>
                </div>
              </div>

              <button type="submit" className="login-submit">
                <span>Se connecter</span>
                <span className="login-submit-arrow">→</span>
              </button>
            </form>

            <p className="login-register">
              Vous n'avez pas de compte ?{" "}
              <Link to="/register">Créer un compte</Link>
            </p>
          </div>
        </section>
      </div>
    </main>
  );
};

export default Login;