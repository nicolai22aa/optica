import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Navegacion from "./Componentes/Navegacion";
import Footer from "./Componentes/Footer";
import Home from "./paginas/Home";
import Pacientes from "./paginas/Pacientes";
import NuevoPaciente from "./paginas/Nuevopaciente";
import Examenes from "./paginas/Examenes";
import NuevoExamen from "./paginas/Nuevoexamen";
import Consultas from "./paginas/Consultas";
import NuevaConsulta from "./paginas/NuevaConsulta";
import Remisiones from "./paginas/Remisiones";
import NuevaRemision from "./paginas/NuevaRemision";
import Historial from "./paginas/Historial";
import NuevoHistorial from "./paginas/NuevoHistorial"
import Login from "./paginas/Login";
import Registro from "./paginas/Registro";

import "./App.css";

function Layout({ children }) {
  const location = useLocation();
  const hideLayout =
    location.pathname === "/login" || location.pathname === "/registro";

  return (
    <div className="App">
      {!hideLayout && <Navegacion />}
      <main>{children}</main>
      {!hideLayout && <Footer />}
    </div>
  );
}

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          {/* Inicio */}
          <Route path="/" element={<Home />} />

          {/* Pacientes */}
          <Route path="/pacientes" element={<Pacientes />} />
          <Route path="/nuevo-paciente" element={<NuevoPaciente />} />

          {/* Exámenes */}
          <Route path="/examenes" element={<Examenes />} />
          <Route path="/nuevo-examen" element={<NuevoExamen />} />

          {/* Consultas */}
          <Route path="/consultas" element={<Consultas />} />
          <Route path="/nueva-consulta" element={<NuevaConsulta />} />

          {/* Remisiones */}
          <Route path="/remisiones" element={<Remisiones />} />
          <Route path="/nueva-remision" element={<NuevaRemision />} />

          {/* Historial */}
          <Route path="/historial" element={<Historial />} />
          <Route path="/nuevo-historial" element={<NuevoHistorial/>}/>

          {/* Autenticación */}
          <Route path="/login" element={<Login />} />
          <Route path="/registro" element={<Registro />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
