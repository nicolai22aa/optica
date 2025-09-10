import React, { useState } from "react";
import "./style.css";

function Registro() {
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Registrando:", nombre, email, password);
    // Aquí después conectamos con Supabase
  };

  return (
    <div className="container">
      {/* Botón Inicio arriba derecha */}
      <div className="top-right">
        <a href="/">Inicio</a>
      </div>

      <div className="form-box">
        <h1>Crear cuenta</h1>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Nombre completo"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            required
          />
          <input
            type="email"
            placeholder="Correo electrónico"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Contraseña"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button type="submit">Registrarse</button>
        </form>

        <div className="extra-links">
          <p>¿Ya tienes cuenta?</p>
          <a href="/login">Ingresar</a>
        </div>
      </div>
    </div>
  );
}

export default Registro;
