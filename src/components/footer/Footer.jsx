import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-left">
        <div className="footer-logo">LT</div>

        <div>
          <strong>LogiTrack</strong>
          <span>Gestion logistique</span>
        </div>
      </div>

      <div className="footer-center">
        © 2026 LogiTrack. Tous droits réservés.
      </div>

      <div className="footer-right">
        <span>Simple</span>
        <span>•</span>
        <span>Rapide</span>
        <span>•</span>
        <span>Sécurisé</span>
      </div>
    </footer>
  );
};

export default Footer;