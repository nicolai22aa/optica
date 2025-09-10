import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./style.css";

const Historial = () => {
  const [busqueda, setBusqueda] = useState("");
  const [filtroDocumento, setFiltroDocumento] = useState("");
  const [filtroFecha, setFiltroFecha] = useState("");
  const navigate = useNavigate();

  // ⚠️ Sin datos aún, luego conectamos con BD
  const historial = [];

  const filtrados = historial.filter((h) => {
    return (
      (filtroDocumento === "" || h.documento.includes(filtroDocumento)) &&
      (busqueda === "" || h.nombre.toLowerCase().includes(busqueda.toLowerCase())) &&
      (filtroFecha === "" || h.fecha === filtroFecha)
    );
  });

  return (
    <div className="historial">
      <header className="content-header">
        <h1>Historial Clínico</h1>
        <p>Consulta y administra el historial de pacientes</p>
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
          onClick={() => navigate("/nuevo-historial")}
        >
          + Nuevo Registro
        </button>
      </div>

      {/* Tabla de historial */}
      <table className="tabla-historial">
        <thead>
          <tr>
            <th>Documento</th>
            <th>Nombre</th>
            <th>Fecha</th>
            <th>Detalle</th>
          </tr>
        </thead>
        <tbody>
          {filtrados.length > 0 ? (
            filtrados.map((h) => (
              <tr key={h.id}>
                <td>{h.documento}</td>
                <td>{h.nombre}</td>
                <td>{h.fecha}</td>
                <td>{h.detalle}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="4">No se encontraron registros</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Historial;
