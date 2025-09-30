import React from "react";
import "./BankSelectionModal.css";

interface BankDataModalProps {
  isOpen: boolean;
  onClose: (nextStep: boolean) => void;
}

const Banks = [
  {
    name: "Santander",
    logo: "/Santander.png",
    url: "https://banco.santander.cl/personas"
  },
  {
    name: "Banco de Chile",
    logo: "/Chile.png",
    url: "https://login.portales.bancochile.cl/login"
  },
  {
    name: "Banco Estado",
    logo: "/Estado.png",
    url: "https://www.bancoestado.cl/content/bancoestado-public/cl/es/home/home.html#/login"
  },
  {
    name: "BCI",
    logo: "/BCI.png",
    url: "https://www.bci.cl/corporativo/banco-en-linea/personas"
  },
]

const BankSelectionModal: React.FC<BankDataModalProps> = ({ isOpen, onClose }) => {

  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={() => onClose(false)}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        
        <h2>Selecciona tu banco</h2>
        <h5>Se te pedirá foto del comprobante</h5>


        {Banks.map((bank) => (
          <div className="bank-option" key={bank.name} onClick={() => onClose(true)}>
            <a href={bank.url} target="_blank" rel="noopener noreferrer">
              <img src={bank.logo} alt={bank.name} />
              <p>{bank.name}</p>
            </a>
          </div>
        ))}

        <div className="bank-option" onClick={() => onClose(true)}>
          <img src="/OtrosBancos.png" alt="Otros Bancos" />
          <p>Otros Bancos</p>
        </div>


        <div className="button-group">
          <button className="close-btn" onClick={() => onClose(false)}>Cerrar</button>
        </div>
        
      </div>
    </div>
  );
};

export default BankSelectionModal;
