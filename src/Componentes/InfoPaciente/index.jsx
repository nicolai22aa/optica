import React from 'react';
import './style.css';

const PacienteCard = ({ nombre, edad, examen }) => {
  return (
    <div className="paciente-card">
      <h3>{nombre}</h3>
      <p>Edad: {edad}</p>
      <p>Último examen: {examen}</p>
    </div>
  );
};

export default PacienteCard;
