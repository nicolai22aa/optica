import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./Componentes/Navegacion";
import Footer from "./Componentes/Footer";
import Home from "./paginas/Home";
import Pacientes from "./paginas/Pacientes";
import Examenes from "./paginas/Examenes";
import NuevoPaciente from "./paginas/Nuevopaciente";
import NuevoExamen from "./paginas/Nuevoexamen";
import Login from "./paginas/Login";
import Registro from "./paginas/Registro";

import "./App.css";

function Layout({ children }) {
  const location = useLocation();
  const hideLayout = location.pathname === "/login" || location.pathname === "/registro";

  return (
    <div className="App">
      {!hideLayout && <Navbar />}
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
          <Route path="/" element={<Home />} />
          <Route path="/pacientes" element={<Pacientes />} />
          <Route path="/nuevo-paciente" element={<NuevoPaciente />} />
          <Route path="/examenes" element={<Examenes />} />
          <Route path="/nuevo-examen" element={<NuevoExamen />} />
          <Route path="/login" element={<Login />} />
          <Route path="/registro" element={<Registro />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
