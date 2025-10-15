import React, { useState, useEffect } from "react";
import "./ConfirmationView.css";



const ConfirmationView: React.FC = () => {
  const [currentBgIndex, setCurrentBgIndex] = useState(0);
  const images = [
    "/Foto2.jpg",
    "/Foto1.jpeg",
    "/Foto3.JPG",
    "/Foto4.jpeg",
    "/Foto5.jpg",
    "/Foto6.jpg",
    "/Foto7.jpg",
    "/Foto8.jpeg",
  ];
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBgIndex((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="landing-container">
      {images.map((img, index) => (
        <div
          key={index}
          className={`background-image ${index === currentBgIndex ? "visible" : ""}`}
          style={{ backgroundImage: `url(${img})` }}
        />
      ))}


      <div className="card-wrapper">
        <div className="landing-card-success">
            <h1>¡Gracias por tu donación!</h1>
            <h5>El pago se efectuó correctamente</h5>
        </div>
      </div>

    </div>
  );
};

export default ConfirmationView;
