import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./style.css";

const NuevaConsulta = () => {
  const [documento, setDocumento] = useState("");
  const [nombre, setNombre] = useState("");
  const [fecha, setFecha] = useState("");
  const [motivo, setMotivo] = useState("");
  const [diagnostico, setDiagnostico] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Nueva consulta:", { documento, nombre, fecha, motivo, diagnostico });
    // Luego conectamos con la base de datos
  };

  return (
    <div className="nueva-consulta">
      <header className="content-header">
        <h1>Registrar Nueva Consulta</h1>
        <p>Completa los datos de la consulta médica</p>
      </header>

      <form className="form-consulta" onSubmit={handleSubmit}>
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

        <label>Motivo de consulta</label>
        <input
          type="text"
          value={motivo}
          onChange={(e) => setMotivo(e.target.value)}
          required
        />

        <label>Diagnóstico</label>
        <textarea
          rows="4"
          value={diagnostico}
          onChange={(e) => setDiagnostico(e.target.value)}
          required
        ></textarea>

        <button type="submit" className="btn-nuevo">
          Guardar Consulta
        </button>
      </form>

      <div className="volver">
        <Link to="/consultas" className="btn-secundario">
          ← Volver a Consultas
        </Link>
      </div>
    </div>
  );
};

export default NuevaConsulta;
