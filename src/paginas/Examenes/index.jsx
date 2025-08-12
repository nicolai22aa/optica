import React from 'react';
import './style.css';
import Navegacion from '../../Componentes/Navegacion';
import Footer from '../../Componentes/Footer';

const Examenes = () => {
  return (
    <div>
      <Navbar />
      <main className="examenes">
        <h2>Registro de Exámenes</h2>
        <p>Aquí podrás gestionar y registrar exámenes realizados.</p>
      </main>
      <Footer />
    </div>
  );
};

export default Examenes;
