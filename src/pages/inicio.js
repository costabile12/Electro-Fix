import React from "react";
import Electrodomesticos from "../assets/images/electrodomesticos.png";
import "../styles/Inicio.css";
import { useNavigate } from 'react-router-dom';
import Boton from "../components/Boton";
import BannerDeHorarios from "../assets/images/banner.png"
import Cuadricula from "../components/Cuadricula";
import RedSocial from "../components/RedSocial";
import AcercaDelServiceImg from "../assets/images/acerca-del-service.jpg"

function Inicio(){

  const navigate = useNavigate();

  const iconoPulgar = () => {
    return(
      <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 1024 1024"><path fill="#222222" d="M885.9 533.7c16.8-22.2 26.1-49.4 26.1-77.7c0-44.9-25.1-87.4-65.5-111.1a67.67 67.67 0 0 0-34.3-9.3H572.4l6-122.9c1.4-29.7-9.1-57.9-29.5-79.4A106.62 106.62 0 0 0 471 99.9c-52 0-98 35-111.8 85.1l-85.9 311H144c-17.7 0-32 14.3-32 32v364c0 17.7 14.3 32 32 32h601.3c9.2 0 18.2-1.8 26.5-5.4c47.6-20.3 78.3-66.8 78.3-118.4c0-12.6-1.8-25-5.4-37c16.8-22.2 26.1-49.4 26.1-77.7c0-12.6-1.8-25-5.4-37c16.8-22.2 26.1-49.4 26.1-77.7c-.2-12.6-2-25.1-5.6-37.1M184 852V568h81v284zm636.4-353l-21.9 19l13.9 25.4a56.2 56.2 0 0 1 6.9 27.3c0 16.5-7.2 32.2-19.6 43l-21.9 19l13.9 25.4a56.2 56.2 0 0 1 6.9 27.3c0 16.5-7.2 32.2-19.6 43l-21.9 19l13.9 25.4a56.2 56.2 0 0 1 6.9 27.3c0 22.4-13.2 42.6-33.6 51.8H329V564.8l99.5-360.5a44.1 44.1 0 0 1 42.2-32.3c7.6 0 15.1 2.2 21.1 6.7c9.9 7.4 15.2 18.6 14.6 30.5l-9.6 198.4h314.4C829 418.5 840 436.9 840 456c0 16.5-7.2 32.1-19.6 43"/></svg>
    )
    
  };

  const iconoHerramientas = () => {
    return(
      <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 24 24"><g fill="none" stroke="#222222" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" color="#222222"><path d="m13 11l5-5m1 1l-2-2l2.5-1.5l1 1zM4.025 8.975a3.5 3.5 0 0 1-.79-3.74l1.422 1.422h2v-2L5.235 3.235a3.5 3.5 0 0 1 4.529 4.53l6.47 6.471a3.5 3.5 0 0 1 4.53 4.529l-1.421-1.422h-2v2l1.422 1.422a3.5 3.5 0 0 1-4.53-4.528L7.763 9.765a3.5 3.5 0 0 1-3.738-.79"/><path d="m12.203 14.5l-5.604 5.604a1.35 1.35 0 0 1-1.911 0l-.792-.792a1.35 1.35 0 0 1 0-1.911L9.5 11.797"/></g></svg>
    )
  };

  const iconoUmbrella = () => {
    return(
      <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 24 24"><g fill="none" stroke="#222222" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"><path d="M15.636 13Q12 9.364 8.364 13C5.878 10.87 4.486 10.87 2 13C2 7.477 6.477 3 12 3s10 4.477 10 10c-2.486-2.13-3.878-2.13-6.364 0"/><path d="M12 11.5v7.273c0 3.519-5.5 3.519-5.5 0"/></g></svg>
    )
  };

  const iconoTilde = () => {
    return(
      <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 1200 1200"><path fill="#222222" d="M600 0C268.63 0 0 268.63 0 600s268.63 600 600 600s600-268.63 600-600S931.369 0 600 0m0 130.371c259.369 0 469.556 210.325 469.556 469.629S859.369 1069.556 600 1069.556c-259.37 0-469.556-210.251-469.556-469.556C130.445 340.696 340.63 130.371 600 130.371m229.907 184.717L482.153 662.915L369.36 550.122L258.691 660.718l112.793 112.793l111.401 111.401l110.597-110.669l347.826-347.754z"/></svg>
    )
  };

  const logoFacebook =  () => {
    return(
      <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 256 256"><path fill="#1877F2" d="M256 128C256 57.308 198.692 0 128 0S0 57.308 0 128c0 63.888 46.808 116.843 108 126.445V165H75.5v-37H108V99.8c0-32.08 19.11-49.8 48.348-49.8C170.352 50 185 52.5 185 52.5V84h-16.14C152.959 84 148 93.867 148 103.99V128h35.5l-5.675 37H148v89.445c61.192-9.602 108-62.556 108-126.445"/><path fill="#FFF" d="m177.825 165l5.675-37H148v-24.01C148 93.866 152.959 84 168.86 84H185V52.5S170.352 50 156.347 50C127.11 50 108 67.72 108 99.8V128H75.5v37H108v89.445A129 129 0 0 0 128 256a129 129 0 0 0 20-1.555V165z"/></svg>
    )
  };

  const logoInstagram = () => {
    return(
      <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 24 24"><path fill="#ffffff" d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4zm9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8A1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25M12 7a5 5 0 0 1 5 5a5 5 0 0 1-5 5a5 5 0 0 1-5-5a5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3a3 3 0 0 0 3 3a3 3 0 0 0 3-3a3 3 0 0 0-3-3"/></svg>
    )
  }

  const logoTikTok = () => {
    return(
      <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 1024 1024"><path fill="#000000" fillRule="evenodd" d="M912 224.962C912 162.575 861.425 112 799.038 112H224.962C162.575 112 112 162.575 112 224.962v574.076C112 861.426 162.575 912 224.962 912h574.076C861.425 912 912 861.426 912 799.038zM774.759 460.916c-51.615.577-99.71-15.027-141.938-43.927v202.874c0 90.166-61.72 167.62-148.996 187.848c-119.068 27.165-219.864-58.954-232.577-161.835c-13.294-102.884 52.322-193.051 152.892-213.281c19.651-4.045 49.209-4.045 64.458-.577v108.661c-4.692-1.153-9.086-2.31-13.709-2.888c-39.304-6.937-77.371 12.715-92.977 48.55c-15.605 35.838-5.16 77.451 26.629 101.73c26.586 20.806 56.085 23.694 86.14 9.822c30.057-13.291 46.21-37.567 49.676-70.512c.578-4.622.546-9.826.546-15.028V222.206c0-10.981.086-10.502 11.068-10.502h86.12c6.36 0 8.673.915 9.25 8.433c4.621 67.047 55.526 124.147 120.838 132.818c6.937 1.155 14.369 1.613 22.58 2.19z"/></svg>
    )
  }

  const logoTwitter = () => {
    return(
      <svg xmlns="http://www.w3.org/2000/svg" width="50" height="57.142857142857146" viewBox="0 0 448 512"><path fill="#000000" d="M64 32C28.7 32 0 60.7 0 96v320c0 35.3 28.7 64 64 64h320c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64zm297.1 84L257.3 234.6L379.4 396h-95.6L209 298.1L123.3 396H75.8l111-126.9L69.7 116h98l67.7 89.5l78.2-89.5zm-37.8 251.6L153.4 142.9h-28.3l171.8 224.7h26.3z"/></svg>
    )
  }


  return(


    <div className="contenedor-incio">

      <section className="contenedor-titulo">
        <h1 className="titulo">Servicio técnico de electrodomésticos</h1>
        <h4 className="subtitulo">
          <strong className="palabra-resaltada">Service de garantía</strong> de marcas seleccionadas
        </h4>
        <div className="contenedor-de-imagen-de-electrodeomesticos"> 
          <img
          loading="lazy"
          className="imagen-electrodomesticos"
          src={Electrodomesticos}
          alt="Electrodomesticos"/>
        </div>
      </section>

      <section className="contenedor-solicitud-de-servicio">

        <Boton
        texto={"Whatsapp (Clic aquí)"}
        onClick={() => window.open("https://wa.me/549123456789", "_blank")}
        className="boton-whatsapp" />
    
        <Boton
        texto="Solicitar Service"
        onClick={() => navigate("/contacto")}
        className="boton-service"
        />

      </section>

      <section className="contenedor-banner-horarios">
        <img
        className="banner-horarios"
        src={BannerDeHorarios}
        alt="Banner de horarios de atención" />
      </section>

      <section className="contenedor-informacion-para-cliente">
        <Cuadricula
        className={"tecnicos-matriculados"}
        icono={iconoPulgar()}
        titulo={"Técnicos Matriculados"}
        texto={"Técnicos matriculados con experiencia en reparación de electrodomésticos"} />

        <Cuadricula
        className={"reparacion-y-mantenimiento"}
        icono={iconoHerramientas()}
        titulo={"Reparación & Mantenimiento"}
        texto={"Reparación y mantenimiento. Todas las marcas"} />

        <Cuadricula
        className={"garantia-escrita"}
        icono={iconoUmbrella()}
        titulo={"Garantía Escrita"}
        texto={"Brindamos garantía escrita en toda reparación."} />

        <Cuadricula 
        className={"repuestos"}
        icono={iconoTilde()}
        titulo={"Repuestos Originales"}
        texto={"Trabajamos con repuestos originales"}/>
        
      </section>

      <section className="contenedor-acerca-del-service">
        <div className="columna-texto" >

          <h3>Acerca del Service</h3>

          <h4>
            Somos Electro-Fix servicio tecnico en CABA y GBA contamos con amplia experiencia en la reparación de electrodomésticos. Somos Técnicos Matriculados especializados en el mantenimiento y reparación de electrodomesticos
          </h4>

          <p>
            Nuestro objetivo es solucionar el inconveniente en su electrodoméstico para que funcione en óptimas condiciones. Para la tranquilidad de nuestros clientes con cada reparación entregamos garantía escrita.
          </p>

          <p>
            Nuestro pilares son la eficiencia y velocidad a la hora de realizar las reparaciones.            
          </p>

          <h4>Redes Sociales</h4>

          <ul className="lista-redes-sociales">
            
            <RedSocial
            href={"https://www.facebook.com/?locale=es_ES"}
            label={"facebook"}
            children={logoFacebook()}
            className={"logo-facebook"} />

            <RedSocial
            href={"https://www.instagram.com/"}
            label={"instagram"}
            children={logoInstagram()}
            className={"logo-instagram"} />

            <RedSocial
            href={"https://www.facebook.com/?locale=es_ES"}
            label={"tik-tok"}
            children={logoTikTok()}
            className={"logo-tik-tok"} />

            <RedSocial
            href={"https://x.com/?lang=es"}
            label={"twitter"}
            children={logoTwitter()}
            className={"logo-twitter"} />

          </ul>
          
        </div>

        <div className="columna-imagen">
          <div className="contenedor-imagen-service">
            <img
            src={AcercaDelServiceImg}
            className="imagen-acerca-service"
            alt="Imagen de service" />            
          </div> 

        </div>
      </section>
      
    </div>
  )
}

export default Inicio;