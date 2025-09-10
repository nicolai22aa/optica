import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./style.css";

const Navegacion = () => {
  const [open, setOpen] = useState(true);

  return (
    <div className={`sidebar ${open ? "open" : "closed"}`}>
      <button className="toggle-btn" onClick={() => setOpen(!open)}>
        {open ? "←" : "☰"}
      </button>

      <div className="logo">{open ? "JBSoptics" : "JBS"}</div>
      <ul>
        <li><Link to="/">🏠 {open && "Inicio"}</Link></li>
        <li><Link to="/pacientes">👤 {open && "Pacientes"}</Link></li>
        <li><Link to="/examenes">📝 {open && "Exámenes"}</Link></li>
        <li><Link to="/consultas">📋 {open && "Consultas"}</Link></li>
        <li><Link to="/remisiones">↔ {open && "Remisiones"}</Link></li> {/* ✅ Nueva opción */}
        <li><Link to="/Historial">📝 {open && "Historial"}</Link></li>
        <li><Link to="/login">🔑 {open && "Login"}</Link></li>
        
      </ul>
    </div>
  );
};

export default Navegacion;
