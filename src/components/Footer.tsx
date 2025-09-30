import React from "react";
import "./styles/Footer.css";

const Footer: React.FC = () => {

  return (
    <footer className="footer">
      {/* Columna izquierda */}
      <div className="footer-column footer-left">
        <div className="logo-container">
          <img src="/LogoDanza.png" alt="Logo" className="logo" />
          <span className="app-name">DanzaUC</span>
        </div>
        <p>© 2024 Danza UC. Todos los derechos reservados.</p>
      </div>

      {/* Columna de navegación */}
      <div className="footer-column footer-right">
        <a href="/about-us" className="footer-link">¡Conócenos!</a>
        <a href="/donations" className="footer-link">Donaciones</a>
        <a href="/login" className="footer-link">Log in</a>
      </div>

      {/* Columna de contacto */}
      <div className="footer-column footer-contact">
        <div className="contact-item-footer">
          <img src="/MailIcon.png" alt="Mail" className="img-logo" />
          <a href="mailto:danzaucoficial@gmail.com" target="_blank" rel="noreferrer">
            danzaucoficial@gmail.com
          </a>
        </div>

        <div className="contact-item-footer">
          <img src="/IgIcon.png" alt="Instagram" className="img-logo" />
          <a href="https://www.instagram.com/uc_danza" target="_blank" rel="noreferrer">
            @uc_danza
          </a>
        </div>

        <div className="contact-item-footer">
          <img src="/YoutubeIcon.png" alt="Youtube" className="img-logo" />
          <a href="https://www.youtube.com/@danzauc" target="_blank" rel="noreferrer">
            @danzauc
          </a>
        </div>

        <div className="contact-item-footer">
          <img src="/TiktokIcon.png" alt="Tiktok" className="img-logo" />
          <a href="https://www.tiktok.com/@uc_danza" target="_blank" rel="noreferrer">
            @uc_danza
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
