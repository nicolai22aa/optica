import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./style.css";

const Pacientes = () => {
  const [busqueda, setBusqueda] = useState("");
  const [filtroDocumento, setFiltroDocumento] = useState("");
  const navigate = useNavigate();

  // ⚠️ Por ahora sin datos, se llenará con la BD después
  const pacientes = [];

  const filtrados = pacientes.filter((p) => {
    return (
      (filtroDocumento === "" || p.documento.includes(filtroDocumento)) &&
      (busqueda === "" || p.nombre.toLowerCase().includes(busqueda.toLowerCase()))
    );
  });

  return (
    <div className="pacientes">
      <header className="content-header">
        <h1>Gestión de Pacientes</h1>
        <p>Administra y busca los pacientes registrados</p>
      </header>

      {/* Filtros */}
      <div className="filtros">
        <input
          type="text"
          placeholder="Buscar por nombre"
          value={busqueda}
          onChange={(e) => setBusqueda(e.target.value)}
        />
        <input
          type="text"
          placeholder="Filtrar por documento"
          value={filtroDocumento}
          onChange={(e) => setFiltroDocumento(e.target.value)}
        />
        <button
          className="btn-nuevo"
          onClick={() => navigate("/nuevo-paciente")}
        >
          + Nuevo Paciente
        </button>
      </div>

      {/* Tabla de pacientes */}
      <table className="tabla-pacientes">
        <thead>
          <tr>
            <th>Documento</th>
            <th>Nombre</th>
            <th>Edad</th>
            <th>Teléfono</th>
            <th>Email</th>
            <th>Dirección</th>
          </tr>
        </thead>
        <tbody>
          {filtrados.length > 0 ? (
            filtrados.map((p) => (
              <tr key={p.id}>
                <td>{p.documento}</td>
                <td>{p.nombre}</td>
                <td>{p.edad}</td>
                <td>{p.telefono}</td>
                <td>{p.email}</td>
                <td>{p.direccion}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="6">No se encontraron pacientes</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Pacientes;
