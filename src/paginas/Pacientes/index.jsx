import React from 'react';
import './style.css';
import Navegacion from '../../Componentes/Navegacion';
import Footer from '../../Componentes/Footer';
import InfoPaciente from '../../Componentes/InfoPaciente';

const Pacientes = () => {
  const pacientes = [
    { nombre: 'carlo torres', edad: 35, examen: '10/08/2025' },
    { nombre: 'brayam santafe', edad: 28, examen: '05/08/2025' },
  ];

  return (
    <div>
      
      <main className="pacientes">
        <h2>Lista de Pacientes</h2>
        {pacientes.map((p, index) => (
          <InfoPaciente key={index} {...p} />
        ))}
      </main>
      
    </div>
  );
};

export default Pacientes;
