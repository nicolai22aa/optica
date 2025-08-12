import React from 'react';
import './style.css';
import Navegacion from '../../Componentes/Navegacion';
import Footer from '../../Componentes/Footer';
import InfoPaciente from '../../Componentes/InfoPaciente';

const Pacientes = () => {
  const pacientes = [
    { nombre: 'Juan Pérez', edad: 35, examen: '10/08/2025' },
    { nombre: 'Ana López', edad: 28, examen: '05/08/2025' },
  ];

  return (
    <div>
      <Navegacion />
      <main className="pacientes">
        <h2>Lista de Pacientes</h2>
        {pacientes.map((p, index) => (
          <InfoPaciente key={index} {...p} />
        ))}
      </main>
      <Footer />
    </div>
  );
};

export default Pacientes;
