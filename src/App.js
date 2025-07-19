import './App.css';
import { HashRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';


import Inicio from "./pages/inicio.js";
import Servicios from "./pages/servicios.js";
import QuienesSomos from "./pages/quienes-somos.js";
import Contacto from "./pages/contacto.js";


function App() {
  return (
    <HashRouter basename="/Electro-Fix">
      <div className="App">
        
          <Header />

          <main>
            <Routes>
              <Route path='/' element={<Inicio />} />
              <Route path='/servicios' element={<Servicios />} />
              <Route path='/quienes-somos' element={<QuienesSomos />} />
              <Route path='/contacto' element={<Contacto />} />
            </Routes>
          </main>

          <Footer /> 
          
      </div>
    </HashRouter>
  );
}

export default App;
