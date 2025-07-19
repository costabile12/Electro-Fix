import React from "react";
import "../styles/Boton.css"

function Boton({ icono, texto, onClick, tipo = "button", className = "" }) {
  return (
    <button
      className={`boton-generico ${className}`}
      type={tipo}
      onClick={onClick}
    >
      {icono || texto}
    </button>
  );
}

export default Boton;