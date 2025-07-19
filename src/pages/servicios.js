import React from "react";
import "../styles/Servicios.css"
import ImagenServicio from "../assets/images/servicios.jpg"

function Servicios(){
    return(
        <div className="contenedor-servicios">
            <section className="contenedor-titulo">
                <h1 className="titulo">Nuestros Servicios</h1>
                <h4 className="subtitulo">En ElectroFix, nos especializamos en la reparación y mantenimiento de electrodomésticos pequeños para que vuelvas a disfrutar de tus equipos en perfecto estado. Atendemos a domicilio y en nuestro taller.</h4>
            </section>

            
            <div className="contenedor-flex-servicios">

                <section className="contenedor-reparacion-de-electrodomesticos">
                    <h2>Reparación de Electrodomésticos</h2>
                    <ul className="lista-de-electrodomesticos">

                        <li>
                            <h4>Licuadoras, batidoras y procesadoras de alimentos</h4>
                            <p>Reemplazo de piezas, motor, cuchillas, cableado y más.</p>
                        </li>

                        <li>
                            <h4>Cafeteras eléctricas y pavas eléctricas</h4>
                            <p>Solución de problemas de calentamiento, sensores y controles.</p>
                        </li>

                        <li>
                            <h4>Plancha y vaporizadores</h4>
                            <p>Limpieza de sarro, reparación de resistencia, cambio de cables.</p>
                        </li>

                        <li>
                            <h4>Microondas hornos eléctricos y pancheras</h4>
                            <p>Diagnóstico completo, reemplazo de fusibles, magnetrones y placas electrónicas.</p>
                        </li>

                        <li>
                            <h4>Aspiradoras y robots de limpieza</h4>
                            <p>Reparación de motor, cambio de filtros, limpieza profunda.</p>
                        </li>

                        
                    </ul>

                </section>

                <section className="contenedor-mantenimiento">
                    <div className="contenedor-texto-mantenimiento">
                        <h2>Mantenimiento Preventivo</h2>
                        <ul className="lista-de-servicios-de-mantenimiento">
                            <li>
                                <p>Limpieza interna y externa</p>
                            </li>
                            <li>
                                <p>Verificación de funcionamiento</p>
                            </li>
                            <li>
                                <p>Lubricación y ajustes de piezas móviles</p>
                            </li>
                            <li>
                                <p>Prevención de fallas por uso prolongado</p>
                            </li>
                        </ul>

                    </div>

                    <div className="contenedor-imagen-servicios">
                        <img className="imagen-servicios"
                        src={ImagenServicio}
                        alt="Servicio y Mantenimiento"
                        loading="lazy" />
                    </div>
                    
                </section>

            </div>


        </div>


    )
}

export default Servicios;