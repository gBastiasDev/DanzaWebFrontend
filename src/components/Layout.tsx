import React from "react";
import type { ReactNode } from "react";
import Navbar from "./Navbar";
import "./styles/Layout.css";

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div>
      <Navbar />

      <main>{children}</main>
    </div>
  );
};

export default Layout;
