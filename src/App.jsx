import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navegacion from "./Componentes/Navegacion";
import Footer from "./Componentes/Footer";
import Home from "./paginas/Home";
import Pacientes from "./paginas/Pacientes";
import Examenes from "./paginas/Examenes";

function App() {
  return (
    <Router>
      <Navegacion />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pacientes" element={<Pacientes />} />
        <Route path="/examenes" element={<Examenes />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
