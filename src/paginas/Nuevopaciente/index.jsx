import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./style.css";

const NuevoPaciente = () => {
  const [documento, setDocumento] = useState("");
  const [nombre, setNombre] = useState("");
  const [edad, setEdad] = useState("");
  const [telefono, setTelefono] = useState("");
  const [email, setEmail] = useState("");
  const [direccion, setDireccion] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Nuevo paciente:", { documento, nombre, edad, telefono, email, direccion });
    // Aquí después conectamos con la base de datos
  };

  return (
    <div className="nuevo-paciente">
      <header className="content-header">
        <h1>Registrar Nuevo Paciente</h1>
        <p>Completa los datos para agregar un nuevo paciente</p>
      </header>

      <form className="form-paciente" onSubmit={handleSubmit}>
        <label>Documento</label>
        <input
          type="text"
          value={documento}
          onChange={(e) => setDocumento(e.target.value)}
          required
        />

        <label>Nombre completo</label>
        <input
          type="text"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
          required
        />

        <label>Edad</label>
        <input
          type="number"
          value={edad}
          onChange={(e) => setEdad(e.target.value)}
          required
        />

        <label>Teléfono</label>
        <input
          type="tel"
          value={telefono}
          onChange={(e) => setTelefono(e.target.value)}
        />

        <label>Correo electrónico</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <label>Dirección</label>
        <input
          type="text"
          value={direccion}
          onChange={(e) => setDireccion(e.target.value)}
        />

        <button type="submit" className="btn-nuevo">
          Guardar Paciente
        </button>
      </form>

      <div className="volver">
        <Link to="/pacientes" className="btn-secundario">
          ← Volver a Pacientes
        </Link>
      </div>
    </div>
  );
};

export default NuevoPaciente;
