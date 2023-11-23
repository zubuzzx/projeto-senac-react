import './App.css';
import { BrowserRouter, Link, Routes, Route } from "react-router-dom";
import Home from './Components/pages/Home';
import Sobre from './Components/pages/Sobre';
import Servicos from './Components/pages/Servicos';
import Contato from './Components/pages/Contato';
import { FaHome, FaRegUser, FaBolt,FaMailBulk } from "react-icons/fa";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <div className="App">
          <ul className="Menu">
            <li><Link to="/"><FaHome/>Home</Link></li>
            <li><Link to="/sobre"><FaRegUser/>Sobre</Link></li>
            <li><Link to="/servicos"><FaBolt/>Serviços</Link></li>
            <li><Link to="/contato"><FaMailBulk/>Contato</Link></li>
          </ul>
       </div>

       <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/sobre" element={<Sobre />} />
        <Route exact path="/servicos" element={<Servicos />} />
        <Route exact path="/contato" element={<Contato />} />
       </Routes>
      </BrowserRouter>
    
      <div>
        <p><b>&copy; 2023 -  Gustavo</b></p>
      </div>
    </div>
  );
}

export default App;
