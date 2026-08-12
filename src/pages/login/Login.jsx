import { useState } from "react";
import authService from "../../services/authService";
import { useNavigate } from "react-router-dom";
import "./Login.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);
    setError("");

    try {
      const response = await authService.login(email, password);

      if (response?.token) {
        navigate("/dashboard");
      } else {
        setError("Email ou mot de passe incorrect.");
      }
    } catch (err) {
      setError(
        err.response?.data?.message ||
          "Une erreur est survenue lors de la connexion."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="login-page">
      <div className="login-card">

        <div className="login-header">

          <h1>
            Logi<span>Track</span>
          </h1>

          <p>Connectez-vous à votre espace</p>
        </div>

        {error && (
          <div className="login-error-alert">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="login-form">

          <div className="form-group">
            <label htmlFor="email">
              Adresse email
            </label>

            <input
              id="email"
              type="email"
              required
              autoComplete="email"
              placeholder="nom@entreprise.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="form-group">
            <label htmlFor="password">
              Mot de passe
            </label>

            <input
              id="password"
              type="password"
              required
              autoComplete="current-password"
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <button
            type="submit"
            className="login-submit-btn"
            disabled={loading}
          >
            {loading
              ? "Connexion en cours..."
              : "Se connecter"}
          </button>

        </form>

        <div className="login-security">
          Vos données sont protégées et sécurisées.
        </div>

      </div>
    </div>
  );
};

export default Login;