import React, { useState } from "react";
import "./style.css";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Iniciando sesión con:", email, password);
    // Aquí después conectamos con Supabase
  };

  return (
    <div className="container">
      {/* Botón Inicio arriba derecha */}
      <div className="top-right">
        <a href="/">Inicio</a>
      </div>

      <div className="form-box">
        <h1>Iniciar Sesión</h1>
        <form onSubmit={handleSubmit}>
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
          <button type="submit">Ingresar</button>
        </form>

        <div className="extra-links">
          <p>¿No tienes cuenta?</p>
          <a href="/registro">Regístrate aquí</a>
        </div>
      </div>
    </div>
  );
}

export default Login;
