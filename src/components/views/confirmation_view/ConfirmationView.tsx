import React, { useState, useEffect } from "react";
import donationService from "../../../services/donationService";
import "./ConfirmationView.css";



const ConfirmationView: React.FC = () => {
  const [message, setMessage] = useState<string>("¡Gracias por tu donación!");
  const [subMessage, setSubMessage] = useState<string>("El pago se efectuó correctamente");
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

  useEffect(() => {
    const confirmDonation = async () => {
      const state = new URLSearchParams(window.location.search).get("state");

      if (state !== "Pagado") {
        setMessage("Pago fallido.");
        setSubMessage("Hubo un problema al procesar tu donación. Por favor, intenta nuevamente.");
      } else {
        console.log("Donation confirmed:", state);
      }
    };

    confirmDonation();
  }, []);
  

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
            <h1>{message}</h1>
            <h5>{subMessage}</h5>
        </div>
      </div>

    </div>
  );
};

export default ConfirmationView;
