import React, { useState } from "react";
import { Link } from "react-router-dom"; // 👈 importa Link
import "./style.css";

const Examenes = () => {
  const [busqueda, setBusqueda] = useState("");
  const [filtroDocumento, setFiltroDocumento] = useState("");
  const [filtroFecha, setFiltroFecha] = useState("");

  // Por ahora dejamos la tabla sin datos conectados
  const examenes = [
    { id: 1, documento: "123456", nombre: "Juan Pérez", fecha: "2025-09-01", examen: "Examen de visión", estado: "Pendiente" },
    { id: 2, documento: "987654", nombre: "Ana Gómez", fecha: "2025-09-05", examen: "Prueba motora", estado: "Aprobado" },
    { id: 3, documento: "456789", nombre: "Carlos Ruiz", fecha: "2025-09-07", examen: "Examen de coordinación", estado: "Reprobado" },
  ];

  const filtrados = examenes.filter((ex) => {
    return (
      (filtroDocumento === "" || ex.documento.includes(filtroDocumento)) &&
      (busqueda === "" || ex.nombre.toLowerCase().includes(busqueda.toLowerCase())) &&
      (filtroFecha === "" || ex.fecha === filtroFecha)
    );
  });

  return (
    <div className="examenes">
      <header className="content-header">
        <h1>Gestión de Exámenes</h1>
        <p>Administra, busca y filtra los exámenes clínicos</p>
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

        {/* 👇 Botón ahora navega a /nuevo-examen */}
        <Link to="/nuevo-examen" className="btn-nuevo">
          + Nuevo Examen
        </Link>
      </div>

      {/* Tabla de exámenes */}
      <table className="tabla-examenes">
        <thead>
          <tr>
            <th>Documento</th>
            <th>Nombre</th>
            <th>Fecha</th>
            <th>Examen</th>
            <th>Estado</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {filtrados.length > 0 ? (
            filtrados.map((ex) => (
              <tr key={ex.id}>
                <td>{ex.documento}</td>
                <td>{ex.nombre}</td>
                <td>{ex.fecha}</td>
                <td>{ex.examen}</td>
                <td>
                  <span className={`estado ${ex.estado.toLowerCase()}`}>
                    {ex.estado}
                  </span>
                </td>
                <td>
                  <button className="btn-ver">Ver</button>
                  <button className="btn-editar">Editar</button>
                  <button className="btn-eliminar">Eliminar</button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="6">No se encontraron exámenes</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Examenes;
