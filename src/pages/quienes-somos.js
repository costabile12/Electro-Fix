import React from "react";
import ImgTaller1 from "../assets/images/taller-reparacion.jpg";
import ImgTaller2 from "../assets/images/imagen-taller-2.jpg";
import "../styles/QuienesSomos.css"


function QuienesSomos(){
    return(

        <div className="contenedor-quienes-somos" >
            <section className="contenedor-titulo">
                <h1 className="titulo">¿Quiénes Somos?</h1>
            </section>
            <section className="contenedor-texto">
                <p>
                    En ElectroFix, somos un equipo de técnicos especializados con más de 10 años de experiencia en la reparación y mantenimiento de electrodomésticos pequeños. Nos apasiona devolverle vida útil a tus aparatos favoritos y ayudarte a ahorrar tiempo y dinero con soluciones rápidas, seguras y duraderas.
                </p>

                <p>
                    Creemos en la atención personalizada, el compromiso con cada cliente y el uso de repuestos de calidad para garantizar resultados efectivos. Trabajamos con marcas reconocidas del mercado y ofrecemos diagnóstico sin cargo en nuestro taller.
                </p>

                <p>
                    Nuestro objetivo es que puedas seguir disfrutando de tus electrodomésticos como el primer día, con la tranquilidad de estar en manos de profesionales responsables.
                </p>
            </section>
            
            <section className="imagenes-taller">
                <div className="contenedor-imagen-1">
                    <img className="imagen-taller-1"
                    src={ImgTaller1}
                    alt="Taller de reparacion"
                    loading="lazy" />
                </div>
                <div className="box-vacio-1">
                    <h3>Nuestra Visión</h3>
                    <p>Ser un referente local en servicios técnicos, destacándonos por la calidad del trabajo, la atención al cliente y la innovación constante.</p>
                </div>
                <div className="contenedor-imagen-2">
                    <img className="imagen-taller-2"
                    src={ImgTaller2}
                    alt="Taller de reparacion (plancha)"
                    loading="lazy"/>
                </div>
                <div className="box-vacio-2">
                    <h3>Nuestra Misión</h3>
                    <p>Brindar soluciones prácticas, económicas y duraderas en la reparación y mantenimiento de electrodomésticos, cuidando el tiempo y la inversión de nuestros clientes.</p>
                </div>
            </section> 
            
        </div>
        
    )
}
export default QuienesSomos;