import React from "react";
import "./style.css";

const Dashboard = () => {
  return (
    <div className="dashboard">
      {/* Sidebar */}
      <aside className="sidebar">
        <ul>
          <li>🏠 Inicio</li>
          <li>👤 Pacientes</li>
          <li>📝 Consultas</li>
          <li>↔ Remisiones</li>
          <li>📂 Historial</li>
          <li>⚙ Configuración</li>
        </ul>
      </aside>

      {/* Contenido principal */}
      <main className="content">
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
