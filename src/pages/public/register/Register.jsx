import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

import { useAuth } from "../../../contexts/AuthContext";
import { registerSchema } from "../../../validation/registerSchema";
import "./Register.css";

const Register = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const navigate = useNavigate();
  const { register: registerUser } = useAuth();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(registerSchema),
    defaultValues: {
      nom: "",
      prenom: "",
      email: "",
      password: "",
      role: "AGENT", 
    },
  });

  const onSubmit = async (data) => {
    setLoading(true);
    setError("");
    setSuccess("");

    try {
      const response = await registerUser(data);
      console.log("Register response :", response);

      setSuccess("Inscription réussie ! Redirection...");

      setTimeout(() => {
        navigate("/login");
      }, 1500);
    } catch (err) {
      console.error("Register error :", err);
      setError(
        err.response?.data?.message ||
          "Une erreur est survenue lors de l'inscription."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="register-page">
      <div className="register-shell">
        <section className="register-visual">
          <Link to="/" className="register-logo">
            <span className="register-logo-mark">
              <span />
              <span />
            </span>
            <span className="register-logo-text">
              Logi<span>Track</span>
            </span>
          </Link>

          <div className="register-visual-caption">
            <h2>Gérez votre logistique en toute simplicité.</h2>
            <p>
              Clients, produits et commandes réunis dans un espace de travail
              centralisé, conçu pour les opérations modernes.
            </p>
          </div>

          <div className="register-stat-card">
            <div className="stat-card-top">
              <span className="register-badge">NOUVEAU COMPTE</span>
              <span className="stat-percent">100% Accessible</span>
            </div>
            <div className="stat-value">
              <span className="stat-check">✓</span>
              Accès immédiat à la plateforme
            </div>
            <p className="register-card-desc">
              Déploiement rapide, gestion simplifiée des accès.
            </p>
          </div>
        </section>

        <section className="register-form-side">
          <div className="register-form-inner">
            <div className="register-form-header">
              <h1>Créer un compte</h1>
              <p>Entrez vos informations pour accéder à votre espace.</p>
            </div>

            {error && <div className="register-alert error">{error}</div>}
            {success && <div className="register-alert success">{success}</div>}

            <form className="register-form" onSubmit={handleSubmit(onSubmit)}>
              <div className="register-row">
                <div className="register-field">
                  <label htmlFor="nom">Nom</label>
                  <div className="register-input-wrap">
                    <input
                      id="nom"
                      type="text"
                      placeholder="Nom"
                      {...register("nom")}
                      className={errors.nom ? "input-error" : ""}
                    />
                  </div>
                  {errors.nom && (
                    <span className="field-error">{errors.nom.message}</span>
                  )}
                </div>

                <div className="register-field">
                  <label htmlFor="prenom">Prénom</label>
                  <div className="register-input-wrap">
                    <input
                      id="prenom"
                      type="text"
                      placeholder="Prénom"
                      {...register("prenom")}
                      className={errors.prenom ? "input-error" : ""}
                    />
                  </div>
                  {errors.prenom && (
                    <span className="field-error">{errors.prenom.message}</span>
                  )}
                </div>
              </div>

              <div className="register-field">
                <label htmlFor="email">Adresse email</label>
                <div className="register-input-wrap">
                  <input
                    id="email"
                    type="email"
                    placeholder="nom@entreprise.com"
                    autoComplete="email"
                    {...register("email")}
                    className={errors.email ? "input-error" : ""}
                  />
                  <svg
                    className="register-input-icon"
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
                {errors.email && (
                  <span className="field-error">{errors.email.message}</span>
                )}
              </div>

              <div className="register-field">
                <label htmlFor="password">Mot de passe</label>
                <div className="register-input-wrap">
                  <input
                    id="password"
                    type="password"
                    placeholder="Entrez votre mot de passe"
                    autoComplete="new-password"
                    {...register("password")}
                    className={errors.password ? "input-error" : ""}
                  />
                  <svg
                    className="register-input-icon"
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
                {errors.password && (
                  <span className="field-error">{errors.password.message}</span>
                )}
              </div>

              <input type="hidden" value="USER" {...register("role")} />

              <button
                type="submit"
                className="register-submit"
                disabled={loading || !!success}
              >
                <span>{loading ? "Inscription..." : "S'inscrire"}</span>
                <span className="register-submit-arrow">→</span>
              </button>
            </form>

            <p className="register-login">
              Vous avez déjà un compte ?{" "}
              <Link to="/login">Se connecter</Link>
            </p>
          </div>
        </section>
      </div>
    </main>
  );
};

export default Register;