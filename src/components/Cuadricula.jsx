import React from "react";

function Cuadricula({texto, icono, titulo, className }){
    return(
        <div className={className}>
            <div className="contenedor-icono">
                {typeof icono === "function" ? icono() : icono}
            </div>
            <div className="contenedor-texto">
                <h3>{titulo}</h3>
                <p>{texto}</p>
            </div>
            
        </div>
    )
}

export default Cuadricula;

