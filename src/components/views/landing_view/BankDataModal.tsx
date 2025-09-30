import React, { useState, useEffect } from "react";
import "./BankDataModal.css";

interface BankDataModalProps {
  isOpen: boolean;
  onClose: () => void;
  transferData: string;
}

const BankDataModal: React.FC<BankDataModalProps> = ({ isOpen, onClose, transferData }) => {
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (!isOpen) setCopied(false);
  }, [isOpen]);

  const transferInfo = `
    Camila Fernanda Aravena Gonzalez
    19.955.613-4
    Banco Santander
    Cuenta Vista
    7024363656
  `;

  if (!isOpen) return null;

  const handleCopy = () => {
    navigator.clipboard.writeText(transferInfo);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <h2>Datos de Transferencia</h2>
        <pre>{transferData}</pre>
        <div className="modal-buttons">
          <button className="close-btn" onClick={onClose}>
            Cerrar
          </button>
          <button
            className={`copy-btn ${copied ? "copied" : ""}`}
            onClick={handleCopy}
          >
            <span>{copied ? "¡Copiado!" : "Copiar"}</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default BankDataModal;
