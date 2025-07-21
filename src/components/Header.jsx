import React from "react";
import { Link, useLocation } from "react-router-dom";
import LogoElectroFix from "../assets/images/logo.png";
// --Hoja de estilos--
import "../styles/Header.css";

import Boton from "./Boton";
import { FaBars } from "react-icons/fa"; // ícono de menú
import { useState, useEffect } from "react";


function Header() {

  // El valor del estado inicial es flaso para que en la condicion ternaria no muestre el menu
  const [menuAbierto, setMenuAbierto] = useState(false)

  const location = useLocation(); // Importante


  //  Cierra el menú automáticamente cuando cambia la ruta
  useEffect(() => {
    setMenuAbierto(false)
  }, [location]);

  return(
    <header className="encabezado">
      <div className="contenedor-principal-header">
        
          <div className="contenedor-imagen">
            <img 
            className="img-logo"
            src={LogoElectroFix}
            alt="Logo ElectroFix"
            />
          </div>
        

        <nav className="navegacion-principal">
          <ul className="nav-list">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/servicios">Servicios</Link></li>
            <li><Link to="/quienes-somos">¿Quiénes Somos?</Link></li>
            <li><Link to="/contacto">Contacto</Link></li>

          {/* import { Link } from "react-router-dom";

            Esta era otra opcion mas simple

          <li><Link to="/" onClick={() => setMenuAbierto(false)}>Inicio</Link></li>
          <li><Link to="/productos" onClick={() => setMenuAbierto(false)}>Productos</Link></li>
          <li><Link to="/contacto" onClick={() => setMenuAbierto(false)}>Contacto</Link></li> */}

          </ul>
        </nav>

      <Boton
        className="menu-navegacion"
        icono={<FaBars size={24} />}
        // Niega la condicion para que cuando sea verdadero agregue o no la clase activo
        onClick={() => setMenuAbierto(!menuAbierto)}
      />
    </div>

    {/* Menu desplegable para mobile */}
    <div className={`contenedor-nav-display ${menuAbierto ? "activo" : ""}`}>
      <ul className="nav-list-display">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/servicios">Servicios</Link></li>
        <li><Link to="/quienes-somos">¿Quiénes Somos?</Link></li>
        <li><Link to="/contacto">Contacto</Link></li>
      </ul>
    </div>


    </header>
  )
}

export default Header;

