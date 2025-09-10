import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./style.css";

const Remisiones = () => {
  const [busqueda, setBusqueda] = useState("");
  const [filtroDocumento, setFiltroDocumento] = useState("");
  const [filtroFecha, setFiltroFecha] = useState("");
  const navigate = useNavigate();

  // ⚠️ Sin datos aún, luego conectamos BD
  const remisiones = [];

  const filtradas = remisiones.filter((r) => {
    return (
      (filtroDocumento === "" || r.documento.includes(filtroDocumento)) &&
      (busqueda === "" || r.nombre.toLowerCase().includes(busqueda.toLowerCase())) &&
      (filtroFecha === "" || r.fecha === filtroFecha)
    );
  });

  return (
    <div className="remisiones">
      <header className="content-header">
        <h1>Gestión de Remisiones</h1>
        <p>Administra y busca las remisiones médicas</p>
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
          onClick={() => navigate("/nueva-remision")}
        >
          + Nueva Remisión
        </button>
      </div>

      {/* Tabla de remisiones */}
      <table className="tabla-remisiones">
        <thead>
          <tr>
            <th>Documento</th>
            <th>Nombre</th>
            <th>Fecha</th>
            <th>Especialidad</th>
            <th>Observaciones</th>
          </tr>
        </thead>
        <tbody>
          {filtradas.length > 0 ? (
            filtradas.map((r) => (
              <tr key={r.id}>
                <td>{r.documento}</td>
                <td>{r.nombre}</td>
                <td>{r.fecha}</td>
                <td>{r.especialidad}</td>
                <td>{r.observaciones}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="5">No se encontraron remisiones</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Remisiones;
