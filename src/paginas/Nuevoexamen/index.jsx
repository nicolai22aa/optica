import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./style.css";

const NuevoExamen = () => {
  const [documento, setDocumento] = useState("");
  const [nombre, setNombre] = useState("");
  const [tipoExamen, setTipoExamen] = useState("");
  const [fecha, setFecha] = useState("");
  const [resultados, setResultados] = useState("");
  const [archivo, setArchivo] = useState(null); // 👈 nuevo estado para el archivo

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Nuevo examen:", { documento, nombre, tipoExamen, fecha, resultados, archivo });

    // Aquí luego conectas con la base de datos o un servicio de almacenamiento (ej. Supabase o Firebase)
  };

  const handleFileChange = (e) => {
    setArchivo(e.target.files[0]);
  };

  return (
    <div className="nuevo-examen">
      <header className="content-header">
        <h1>Registrar Nuevo Examen</h1>
        <p>Completa los datos para agregar un nuevo examen</p>
      </header>

      <form className="form-examen" onSubmit={handleSubmit}>
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

        <label>Tipo de examen</label>
        <input
          type="text"
          value={tipoExamen}
          onChange={(e) => setTipoExamen(e.target.value)}
          required
        />

        <label>Fecha</label>
        <input
          type="date"
          value={fecha}
          onChange={(e) => setFecha(e.target.value)}
          required
        />

        <label>Resultados</label>
        <textarea
          rows="4"
          value={resultados}
          onChange={(e) => setResultados(e.target.value)}
          required
        ></textarea>

        {/* 👇 Campo para subir archivos */}
        <label>Adjuntar archivo (PDF, imagen, etc.)</label>
        <input
          type="file"
          accept=".pdf,.jpg,.png,.jpeg"
          onChange={handleFileChange}
        />
        {archivo && <p>Archivo seleccionado: {archivo.name}</p>}

        <button type="submit" className="btn-nuevo">
          Guardar Examen
        </button>
      </form>

      <div className="volver">
        <Link to="/examenes" className="btn-secundario">
          ← Volver a Exámenes
        </Link>
      </div>
    </div>
  );
};

export default NuevoExamen;
