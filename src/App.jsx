import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Componentes/Navegacion";
import Footer from "./Componentes/Footer";
import Home from "./paginas/Home";
import Pacientes from "./paginas/Pacientes";
import Examenes from "./paginas/Examenes";
import Login from "./paginas/Login";
import Registro from "./paginas/Registro";

import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/pacientes" element={<Pacientes />} />
            <Route path="/examenes" element={<Examenes />} />
            <Route path="/login" element={<Login />} />
            <Route path="/registro" element={<Registro />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
