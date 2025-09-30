import React from "react";
import { Navigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode";

interface Props {
  children: React.ReactNode;
}

interface DecodedToken {
  exp: number;
  [key: string]: any;
}

const PrivateRoute: React.FC<Props> = ({ children }) => {
  const token = localStorage.getItem("token");

  if (!token) return <Navigate to="/login" />;

  try {
    const decoded: DecodedToken = jwtDecode(token);
    const isExpired = decoded.exp * 1000 < Date.now(); // exp está en segundos
    if (isExpired) {
      localStorage.removeItem("token"); // opcional: limpiar token expirado
      return <Navigate to="/login" />;
    }
    return children;
  } catch (error) {
    localStorage.removeItem("token"); // token inválido
    return <Navigate to="/login" />;
  }
};

export default PrivateRoute;
