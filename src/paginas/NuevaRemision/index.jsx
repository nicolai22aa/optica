import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./style.css";

const NuevaRemision = () => {
  const [documento, setDocumento] = useState("");
  const [nombre, setNombre] = useState("");
  const [fecha, setFecha] = useState("");
  const [especialidad, setEspecialidad] = useState("");
  const [observaciones, setObservaciones] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Nueva remisión:", { documento, nombre, fecha, especialidad, observaciones });
    // Luego conectamos con BD
  };

  return (
    <div className="nueva-remision">
      <header className="content-header">
        <h1>Registrar Nueva Remisión</h1>
        <p>Completa los datos para agregar una nueva remisión</p>
      </header>

      <form className="form-remision" onSubmit={handleSubmit}>
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

        <label>Especialidad</label>
        <input
          type="text"
          value={especialidad}
          onChange={(e) => setEspecialidad(e.target.value)}
          required
        />

        <label>Observaciones</label>
        <textarea
          rows="4"
          value={observaciones}
          onChange={(e) => setObservaciones(e.target.value)}
          required
        ></textarea>

        <button type="submit" className="btn-nuevo">
          Guardar Remisión
        </button>
      </form>

      <div className="volver">
        <Link to="/remisiones" className="btn-secundario">
          ← Volver a Remisiones
        </Link>
      </div>
    </div>
  );
};

export default NuevaRemision;
