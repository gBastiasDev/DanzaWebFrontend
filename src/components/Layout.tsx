import React from "react";
import type { ReactNode } from "react";
import { Link } from "react-router-dom";

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div style={{ display: "flex", minHeight: "100vh" }}>
      <aside>
        <nav>
          <ul style={{ listStyle: "none", padding: 0 }}>
            <li>
              <Link to="/dashboard">Dashboard</Link>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
            <li>
              <Link to="/">Inicio</Link>
            </li>
          </ul>
        </nav>
      </aside>

      <main style={{ flex: 1, padding: "2rem" }}>{children}</main>
    </div>
  );
};

export default Layout;
