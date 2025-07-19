import React from "react";
import LogoElectroFix from "../assets/images/logo.png";
import "../styles/Footer.css"
import MarcaElectrodomestico from "./MarcaElectrodomestico";
import LogoLiliana from "../assets/images/logo-liliana.png";
import LogoUltraComb from "../assets/images/logo-ultracomb.png";
import LogoYelmo from "../assets/images/logo-yelmo.png";
import LogoPhilips from "../assets/images/logo-philips.png"

function Footer() {
    return(
        <footer className="pie-de-pagina">
            <div className="contenedor-logo">
                <img
                className="img-logo"
                src={LogoElectroFix}
                alt="Logo Electro-Fix" />
            </div>
            <section className="servicio-de-garantia">
                <p className="texto-garantia">Contamos con servicio de garantía de las siguientes marcas:</p>
                
                <div className="marquee-wrapper">
                <ul className="lista-de-marcas marquee-content">
                    <li>
                    <MarcaElectrodomestico 
                        className="marca logo-liliana"
                        logoDeMarca={LogoLiliana}
                        nombreDeMarca="Liliana"
                    />
                    </li>
                    <li>
                    <MarcaElectrodomestico 
                        className="marca logo-ultra-comb"
                        logoDeMarca={LogoUltraComb}
                        nombreDeMarca="Ultra-Comb"
                    />
                    </li>
                    <li>
                    <MarcaElectrodomestico 
                        className="marca logo-yelmo"
                        logoDeMarca={LogoYelmo}
                        nombreDeMarca="Yelmo"
                    />
                    </li>
                    <li>
                    <MarcaElectrodomestico 
                        className="marca logo-philips"
                        logoDeMarca={LogoPhilips}
                        nombreDeMarca="Philips"
                    />
                    </li>
                </ul>
                </div>
                
                <div className="contenedor-derechos-reservados">
                    <p className="texto-derecho-reservado">
                        ©Copyright2025 Electro-Fix.
                    </p>
                    <p className="texto-derecho-reservado">
                        Todos los derechos reservados.
                    </p>
                </div>
            </section>
            


        </footer>
    )
    
}

export default Footer;