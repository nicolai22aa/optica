import React, { useState } from "react";
import "./style.css";

const Dashboard = () => {
  const [open, setOpen] = useState(true);

  return (
    <div className="dashboard">
      {/* Sidebar lateral */}
      <aside className={`sidebar ${open ? "open" : "closed"}`}>
        <div className="sidebar-header">
          <h2 className="logo">🏥 Salud+</h2>
          <button className="toggle-btn" onClick={() => setOpen(!open)}>
            {open ? "◀" : "▶"}
          </button>
        </div>
        <ul>
          <li className="active">🏠 Inicio</li>
          <li>👤 Pacientes</li>
          <li>📝 Consultas</li>
          <li>↔ Remisiones</li>
          <li>📂 Historial</li>
          <li>⚙ Configuración</li>
        </ul>
      </aside>

      {/* Contenido principal */}
      <main className="content">
        <header className="content-header">
          <h1>Panel de Control</h1>
          <p>Bienvenido a tu área de gestión</p>
        </header>

        <div className="cards">
          <div className="card">🩺 Nueva consulta</div>
          <div className="card">👥 Ver pacientes</div>
          <div className="card">📄 Generar remisión</div>
          <div className="card">📊 Indicadores</div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
