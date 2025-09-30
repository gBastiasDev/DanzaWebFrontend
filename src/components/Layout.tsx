import React from "react";
import type { ReactNode } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import "./styles/Layout.css";




interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const token = localStorage.getItem("token");

  return (
    <div>
      <Navbar />

      <main style={{ minHeight: "calc(100vh - 130px)" }}>{children}</main>

      {!token && <Footer />}
    </div>
  );
};

export default Layout;
