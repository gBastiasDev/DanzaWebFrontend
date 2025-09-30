import React, { useState, useEffect } from "react";
import { login } from "../../../services/auth";
import { useNavigate } from "react-router-dom";
import "./Login.css";


const LoginView: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [currentBgIndex, setCurrentBgIndex] = useState(0);
  const navigate = useNavigate();
  
  
  const images = [
    "/Foto1.jpeg",
    "/Foto2.jpg",
    "/Foto3.JPG",
    "/Foto4.jpeg",
    "/Foto5.jpg",
    "/Foto6.jpg",
    "/Foto7.jpg",
    "/Foto8.jpeg",
  ];



  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBgIndex(prev => (prev + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const handleLogin = async () => {
    try {
      await login({ email, password });

      // Limpiar inputs
      setEmail("");
      setPassword("");

      // Redirigir al dashboard
      navigate("/dashboard");
    } catch (error: any) {
      console.error(error);
      alert(error?.response?.data?.message || "Error al ingresar");
    }
  };

  return (
    <div className="login-container">

      {images.map((img, index) => (
        <div
          key={index}
          className={`background-image ${index === currentBgIndex ? "visible" : ""}`}
          style={{ backgroundImage: `url(${img})` }}
        />
      ))}

      <div className="login-card">
        <h1>Ingresar</h1>

        <input
          type="email"
          placeholder="Correo"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Clave"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button onClick={handleLogin}>Ingresar</button>
      </div>
    </div>
  );
};

export default LoginView;
