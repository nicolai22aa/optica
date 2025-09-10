import React from "react";
import { Link } from "react-router-dom";
import "./style.css"; // 👈 asegúrate de que este sea el CSS que te pasé

const Home = () => {
  return (
    <div className="home">
      {/* Hero */}
      <section className="hero">
        <h1>
          Bienvenido a <span>JB Optics</span>
        </h1>
        <p>Gestión moderna y eficiente de pacientes y exámenes clínicos.</p>
        <div>
          <Link to="/login" className="btn btn-primary">
            Ingresar
          </Link>
          <Link to="/registro" className="btn btn-secondary">
            Registrarse
          </Link>
        </div>
      </section>

      {/* Servicios */}
      <section className="servicios">
        <h2>Nuestros Servicios</h2>
        <div className="grid">
          <div className="card">
            <span>👤</span>
            <h3>Gestión de Pacientes</h3>
            <p>
              Registra y administra tus pacientes de forma rápida y organizada.
            </p>
          </div>
          <div className="card">
            <span>🩺</span>
            <h3>Exámenes Clínicos</h3>
            <p>
              Crea, consulta y guarda los resultados de exámenes con facilidad.
            </p>
          </div>
          <div className="card">
            <span>📊</span>
            <h3>Reportes</h3>
            <p>
              Obtén reportes clínicos claros y exportables para tus pacientes.
            </p>
          </div>
        </div>
      </section>

      {/* Ventajas */}
      <section className="ventajas">
        <h2>¿Por qué elegirnos?</h2>
        <div className="grid">
          <div className="item">
            <h4>🔒 Seguridad</h4>
            <p>
              Tu información está protegida con altos estándares de seguridad.
            </p>
          </div>
          <div className="item">
            <h4>⚡ Rapidez</h4>
            <p>
              Gestiona consultas y exámenes de manera ágil e intuitiva.
            </p>
          </div>
          <div className="item">
            <h4>📱 Accesibilidad</h4>
            <p>
              Accede desde cualquier dispositivo y facilita la atención al
              paciente.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta">
        <h2>Comienza a usar JB Optics</h2>
        <p>La mejor herramienta para la gestión clínica</p>
        <Link to="/registro" className="btn btn-primary">
          Crear cuenta
        </Link>
      </section>
    </div>
  );
};

export default Home;
