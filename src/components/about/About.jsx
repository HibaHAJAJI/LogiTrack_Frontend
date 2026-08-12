import Navbar from "../navbar/Navbar";
import Footer from "../footer/Footer";
import "./About.css";

const About = () => {
  return (
    <div className="about-page">
      <Navbar />

      <main className="about-main">

        <section className="about-hero">
          <div className="hero-content">

            <span className="hero-badge">
              SOLUTION DE GESTION LOGISTIQUE
            </span>

            <h1 className="hero-title">LogiTrack</h1>

            <p className="hero-subtitle">
              Gérez votre activité{" "}
              <span className="text-highlight">
                avec intelligence.
              </span>
            </p>

            <p className="hero-description">
              LogiTrack est une plateforme web moderne pensée pour
              simplifier la gestion quotidienne des entreprises. Elle
              centralise les clients, les produits et les commandes afin
              d'offrir une meilleure visibilité sur l'ensemble de
              l'activité logistique.
            </p>

            <p className="hero-description secondary">
              Notre objectif est de réduire les tâches répétitives,
              améliorer l'organisation des données et permettre aux
              utilisateurs de travailler plus rapidement depuis une
              seule interface.
            </p>

          </div>

          <div className="hero-side">

            <div className="hero-side-top">
              <div className="hero-side-logo">LT</div>

              <div>
                <strong>LogiTrack</strong>
                <span>Gestion logistique</span>
              </div>
            </div>

            <div className="hero-side-item">
              <span>01</span>
              <p>
                <strong>Clients</strong>
                Centralisation et gestion des informations
              </p>
            </div>

            <div className="hero-side-item">
              <span>02</span>
              <p>
                <strong>Produits</strong>
                Organisation et suivi des ressources
              </p>
            </div>

            <div className="hero-side-item">
              <span>03</span>
              <p>
                <strong>Commandes</strong>
                Suivi simple et efficace des opérations
              </p>
            </div>

          </div>
        </section>

        <section className="about-section presentation-section">

          <div className="section-heading">
            <span>À PROPOS</span>
            <h2>
              Une plateforme pensée pour simplifier la gestion.
            </h2>
          </div>

          <div className="section-text">
            <p>
              Dans un environnement où les opérations logistiques deviennent
              de plus en plus complexes, LogiTrack propose une approche
              simple et centralisée. La plateforme regroupe les informations
              essentielles dans un espace unique afin de faciliter le suivi
              et la gestion des opérations.
            </p>

            <p>
              Les utilisateurs peuvent consulter leurs données, suivre
              leurs activités et gérer leurs ressources sans avoir à
              utiliser plusieurs outils différents. Cette centralisation
              améliore la productivité et réduit les risques d'erreurs.
            </p>
          </div>

        </section>

        <section className="about-section">

          <div className="section-heading centered">
            <span>FONCTIONNALITÉS</span>
            <h2>Tout ce dont votre activité a besoin.</h2>
          </div>

          <div className="features-grid">

            <article className="feature-card">
              <div className="feature-number">01</div>
              <h3>Gestion des clients</h3>
              <p>
                Centralisez les informations de vos clients et accédez
                rapidement à leurs données pour faciliter le suivi
                commercial et administratif.
              </p>
            </article>

            <article className="feature-card">
              <div className="feature-number">02</div>
              <h3>Gestion des produits</h3>
              <p>
                Organisez votre catalogue, consultez les informations
                produits et gardez une meilleure visibilité sur les
                ressources disponibles.
              </p>
            </article>

            <article className="feature-card">
              <div className="feature-number">03</div>
              <h3>Gestion des commandes</h3>
              <p>
                Créez, consultez et suivez les commandes tout au long
                de leur cycle de traitement.
              </p>
            </article>

            <article className="feature-card">
              <div className="feature-number">04</div>
              <h3>Suivi et visibilité</h3>
              <p>
                Accédez aux informations importantes depuis un tableau
                de bord centralisé pour prendre de meilleures décisions.
              </p>
            </article>

            <article className="feature-card">
              <div className="feature-number">05</div>
              <h3>Accès sécurisé</h3>
              <p>
                Les accès sont protégés grâce à un système
                d'authentification et à une gestion adaptée des
                permissions utilisateurs.
              </p>
            </article>

            <article className="feature-card">
              <div className="feature-number">06</div>
              <h3>Interface intuitive</h3>
              <p>
                Une expérience claire et moderne permettant aux
                utilisateurs de retrouver rapidement les fonctionnalités
                dont ils ont besoin.
              </p>
            </article>

          </div>
        </section>

        <section className="mission-section">

          <div className="mission-content">
            <span>NOTRE MISSION</span>

            <h2>
              Transformer la complexité
              <br />
              en simplicité.
            </h2>

            <p>
              LogiTrack a été conçu avec une idée simple : permettre aux
              entreprises de consacrer moins de temps à la gestion
              administrative et davantage de temps à leur activité.
            </p>

            <p>
              Chaque fonctionnalité est pensée pour rendre les opérations
              plus fluides, les informations plus accessibles et le suivi
              plus efficace.
            </p>
          </div>

          <div className="mission-stats">
            <div className="mission-stat">
              <strong>01</strong>
              <span>Plateforme centralisée</span>
            </div>

            <div className="mission-stat">
              <strong>02</strong>
              <span>Gestion simplifiée</span>
            </div>

            <div className="mission-stat">
              <strong>03</strong>
              <span>Accès sécurisé</span>
            </div>
          </div>

        </section>

        <section className="about-section technology-section">

          <div className="section-heading">
            <span>TECHNOLOGIES</span>
            <h2>
              Une architecture basée sur des technologies modernes.
            </h2>
          </div>

          <p>
            LogiTrack s'appuie sur une architecture moderne permettant
            d'assurer une bonne organisation du projet, une communication
            fiable entre le frontend et le backend ainsi qu'une gestion
            sécurisée des données.
          </p>

          <div className="technology-list">
            <span>React.js</span>
            <span>Java</span>
            <span>Spring Boot</span>
            <span>Spring Security</span>
            <span>MySQL</span>
            <span>REST API</span>
            <span>Docker</span>
          </div>

        </section>

      </main>

      <Footer />
    </div>
  );
};

export default About;