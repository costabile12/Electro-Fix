import React from "react";
import { Link } from "react-router-dom";
import LogoElectroFix from "../assets/images/logo.png";
// --Hoja de estilos--
import "../styles/Header.css";

import Boton from "./Boton";
import { FaBars } from "react-icons/fa"; // ícono de menú
import { useState } from "react";

function Header() {

  const [menuAbierto, setMenuAbierto] = useState(false)

  const toggleMenu = () => {
    setMenuAbierto(!menuAbierto);
  }

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
          </ul>
        </nav>

      <Boton
        className="menu-navegacion"
        icono={<FaBars size={24} />}
        onClick={toggleMenu}
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

