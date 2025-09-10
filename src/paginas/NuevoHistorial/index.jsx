import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./style.css";

const NuevoHistorial = () => {
  const [documento, setDocumento] = useState("");
  const [nombre, setNombre] = useState("");
  const [fecha, setFecha] = useState("");
  const [detalle, setDetalle] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Nuevo historial:", { documento, nombre, fecha, detalle });
    // Luego conectamos con BD
  };

  return (
    <div className="nuevo-historial">
      <header className="content-header">
        <h1>Registrar Nuevo Historial</h1>
        <p>Agrega una entrada al historial clínico del paciente</p>
      </header>

      <form className="form-historial" onSubmit={handleSubmit}>
        <label>Documento del paciente</label>
        <input
          type="text"
          value={documento}
          onChange={(e) => setDocumento(e.target.value)}
          required
        />

        <label>Nombre del paciente</label>
        <input
          type="text"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
          required
        />

        <label>Fecha</label>
        <input
          type="date"
          value={fecha}
          onChange={(e) => setFecha(e.target.value)}
          required
        />

        <label>Detalle</label>
        <textarea
          rows="4"
          value={detalle}
          onChange={(e) => setDetalle(e.target.value)}
          required
        ></textarea>

        <button type="submit" className="btn-nuevo">
          Guardar Registro
        </button>
      </form>

      <div className="volver">
        <Link to="/historial" className="btn-secundario">
          ← Volver al Historial
        </Link>
      </div>
    </div>
  );
};

export default NuevoHistorial;
