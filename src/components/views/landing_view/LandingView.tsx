import React, { useState, useEffect } from "react";
import donationService from "../../../services/donationService";
import BankDataModal from "./BankDataModal";
import BankSelectionModal from "./BankSelectionModal";
import FileUploadModal from "./FileUploadModal";
import "./LandingView.css";


const LandingPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState<"tarjeta" | "transferencia">("transferencia");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [amount, setAmount] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSelectorModalOpen, setIsSelectorModalOpen] = useState(false);
  const [isFileUploadModalOpen, setIsFileUploadModalOpen] = useState(false);
  const [currentBgIndex, setCurrentBgIndex] = useState(0);
  const [donated, setDonated] = useState(false);

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

  const transferInfo = `
    Nombre:         ISIDORA PAZ SEPULVEDA
    Rut:            21.198.266-7
    Banco:          Tenpo prepago
    Cuenta:         Vista
    Número Cuenta:  111121198266
    Email:          isidorasepulvedaa@gmail.com
  `;

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBgIndex((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [images.length]);

  const handleDonate = async (mode: "tarjeta" | "transferencia", file?: string) => {
    try {

      if (mode === "transferencia") {
        const donation = {
          name,
          email,
          amount: Number(amount),
          donation_date: new Date(),
          state: "Pagado",
          method: "Transferencia",
          photo: file,
        };

        await donationService.createDonation(donation);
        setDonated(true);
        setTimeout(() => setDonated(false), 1500);

      } else {

        const donation = {
          name,
          email,
          amount: Number(amount),
          donation_date: new Date(),
          state: "Pendiente",
          method: "Tarjeta",
        };

        // Llamada al backend para crear la donación y obtener URL de Flow
        const { flowUrl } = await donationService.createFlowDonation(donation);

        // Redirigir al checkout de Flow
        window.location.href = flowUrl;

      }

      setName("");
      setEmail("");
      setAmount("");
    } catch (error) {
      console.error(error);
      alert("Error al crear donación");
    }
  };

  const isFormValid = name.trim() !== "" && email.trim() !== "" && amount.trim() !== "";
  

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
        <div className="tabs-container">
          <button
            className={activeTab === "transferencia" ? "tab-folder active" : "tab-folder"}
            onClick={() => setActiveTab("transferencia")}
          >
            Transferencia
          </button>

          <button
            className={activeTab === "tarjeta" ? "tab-folder active" : "tab-folder"}
            onClick={() => setActiveTab("tarjeta")}
          >
            Tarjeta
          </button>
        </div>

        <div className="landing-card">

          <h1>{activeTab === "tarjeta" ? "Tarjeta" : "Transferencia"}</h1>

          <input
            type="text"
            placeholder="Nombre*"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <input
            type="email"
            placeholder="Correo*"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            type="number"
            placeholder="Monto*"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />

          <div className="button-group">
            {activeTab === "transferencia" ? (
              <button className="show-transfer-btn" onClick={() => setIsModalOpen(true)}>
                Mostrar Datos de Transferencia
              </button>
            ) : <div />}

            <button 
              className={`donate-btn ${donated ? "donated" : ""}`} 
              onClick={() => {
                if (activeTab === "transferencia") setIsSelectorModalOpen(true);
                else handleDonate("tarjeta");
              }}
              disabled={!isFormValid}
            >
              <span>{donated ? "¡Gracias!" : "Donar"}</span>
            </button>
          </div>
        </div>
      </div>

      <BankDataModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        transferData={transferInfo}
      />

      <BankSelectionModal
        isOpen={isSelectorModalOpen}
        onClose={(nextStep: boolean) => {
          setIsSelectorModalOpen(false);
          if (nextStep) setIsFileUploadModalOpen(true);
        }}
      />

      <FileUploadModal
        isOpen={isFileUploadModalOpen}
        onClose={(file?: File | null) => {
          setIsFileUploadModalOpen(false);
          if (file) handleDonate("transferencia", file.name);
        }}
      />

    </div>
  );
};

export default LandingPage;
