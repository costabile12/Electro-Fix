import React from "react";
import "../styles/MarcaElectrodomestico.css"

function MarcaElectrodomestico ( {className, logoDeMarca, nombreDeMarca} ) {
  return(
    <div className="contenedor-imagen-marca">
      <img className= {className}
      src={logoDeMarca}
      alt={nombreDeMarca} />
    </div>
  )
}

export default MarcaElectrodomestico;