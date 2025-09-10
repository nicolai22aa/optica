import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./style.css";

const Consultas = () => {
  const [busqueda, setBusqueda] = useState("");
  const [filtroDocumento, setFiltroDocumento] = useState("");
  const [filtroFecha, setFiltroFecha] = useState("");
  const navigate = useNavigate();

  // ⚠️ Sin datos simulados, luego conectamos con BD
  const consultas = [];

  const filtradas = consultas.filter((c) => {
    return (
      (filtroDocumento === "" || c.documento.includes(filtroDocumento)) &&
      (busqueda === "" || c.nombre.toLowerCase().includes(busqueda.toLowerCase())) &&
      (filtroFecha === "" || c.fecha === filtroFecha)
    );
  });

  return (
    <div className="consultas">
      <header className="content-header">
        <h1>Gestión de Consultas</h1>
        <p>Administra y busca las consultas médicas realizadas</p>
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
        <input
          type="date"
          value={filtroFecha}
          onChange={(e) => setFiltroFecha(e.target.value)}
        />
        <button
          className="btn-nuevo"
          onClick={() => navigate("/nueva-consulta")}
        >
          + Nueva Consulta
        </button>
      </div>

      {/* Tabla de consultas */}
      <table className="tabla-consultas">
        <thead>
          <tr>
            <th>Documento</th>
            <th>Nombre</th>
            <th>Fecha</th>
            <th>Motivo</th>
            <th>Diagnóstico</th>
          </tr>
        </thead>
        <tbody>
          {filtradas.length > 0 ? (
            filtradas.map((c) => (
              <tr key={c.id}>
                <td>{c.documento}</td>
                <td>{c.nombre}</td>
                <td>{c.fecha}</td>
                <td>{c.motivo}</td>
                <td>{c.diagnostico}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="5">No se encontraron consultas</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Consultas;
