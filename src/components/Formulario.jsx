import React from "react";
import "../styles/Formulario.css"

function Formulario() {
    return(
        <form className="form-container">
            <div className="contenedor-formulario">
                
                <div className="contenedor-input">
                    <label htmlFor="nombre">Nombre</label>
                    <input type="text" name="nombre" id="nombre" required />
                </div>

                <div className="contenedor-input">
                    <label htmlFor="apellido">Apellido</label>
                    <input type="text" name="apellido" id="apellido" required />
                </div>

                <div className="contenedor-input">
                    <label htmlFor="correo-electronico">Correo electrónico</label>
                    <input type="email" placeholder="usuario@correo.com" pattern="^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$" required name="email" id="email" />
                </div>

                <div className="contenedor-input">
                    <label htmlFor="telefono">Teléfono</label>
                    <input type="text" id="telefono" name="telefono" pattern="^\+?\d{1,3}[-.\s]?\(?\d{3}\)?[-.\s]?\d{3}[-.\s]?\d{4}$" required />
                </div>

                <div className="contenedor-text-area">
                    <label htmlFor="mensaje">Mensaje</label>
                    <textarea name="mensahe" id="mensaje" placeholder="Escriba su mensaje..." required></textarea>
                </div>


                <div className="contenedor-btn-input">
                    <input type="submit" value="Enviar" id="btn-enviar" />
                    <input type="reset" value="Borrar" id="btn-reset"/>
                </div>

            </div>
        
        </form>
    )
}

export default Formulario;