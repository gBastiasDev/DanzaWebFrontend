import React, { useState } from "react";
import "./FileUploadModal.css";

interface FileUploadModalProps {
  isOpen: boolean;
  onClose: (file?: File | null) => void;
}

const FileUploadModal: React.FC<FileUploadModalProps> = ({ isOpen, onClose }) => {

  const [file, setFile] = useState<File | null>(null);
  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={() => onClose()}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        
        <h2>Sube tu comprobante</h2>


        <div className="file-upload">
          <label htmlFor="file">Seleccionar archivo</label>
          <input
            id="file"
            type="file"
            onChange={(e) => setFile(e.target.files?.[0] || null)}
          />
          {file && <span className="file-name">{file.name}</span>}
        </div>

        <div className="button-group">
          <button className="close-btn" onClick={() => onClose()}>Cerrar</button>
          <button 
            className="close-btn" 
            onClick={() => {
              onClose(file);
              setFile(null);
            }}
            disabled={!file}
          >
            Subir
          </button>
        </div>

      </div>
    </div>
  );
};

export default FileUploadModal;
