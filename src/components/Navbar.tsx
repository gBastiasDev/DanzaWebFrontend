import React from "react";
import { Link } from "react-router-dom";
import "./styles/Navbar.css";

const Navbar: React.FC = () => {
  const token = localStorage.getItem("token");


  return (
    <nav className="navbar">

      <div className="navbar-left">
        <li>
          <Link to="/">
            <div className="logo-container">
              <img
                src="/LogoDanza.png"
                alt="Logo"
                className="logo"
              />
              <span className="app-name">DanzaUC</span>
            </div>
          </Link>
        </li>
      </div>
      
      
      <div className="navbar-right">
        {token && (
          <li>
            <Link to="/dashboard">Dashboard</Link>
          </li>
        )}

        <li>
          <Link to="/donations">Donaciones</Link>
        </li>

        <li>
          <Link to="/about-us">¡Conócenos!</Link>
        </li>

        <li>
          <Link to="/login">
            <img
              src="/LoginLogo.png"
              alt="User Icon"
              className="user-icon"
            />
          </Link>
        </li>
      </div>
        
    </nav>
  );
};

export default Navbar;
