import React, { useState } from "react";
import "../styles/Formulario.css";

function Formulario() {
  const [formData, setFormData] = useState({
    nombre: "",
    apellido: "",
    email: "",
    telefono: "",
    mensaje: "",
  });

  const [errores, setErrores] = useState({});

  const validar = () => {
    const nuevosErrores = {};

    if (!formData.nombre.trim()) {
      nuevosErrores.nombre = "El nombre es obligatorio";
    }

    if (!formData.apellido.trim()) {
      nuevosErrores.apellido = "El apellido es obligatorio";
    }

    if (!formData.email.trim()) {
      nuevosErrores.email = "El correo es obligatorio";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      nuevosErrores.email = "El correo no es válido";
    }

    if (!formData.telefono.trim()) {
      nuevosErrores.telefono = "El teléfono es obligatorio";
    } else if (!/^\+?\d{7,15}$/.test(formData.telefono)) {
      nuevosErrores.telefono = "El teléfono no es válido";
    }

    if (!formData.mensaje.trim()) {
      nuevosErrores.mensaje = "El mensaje no puede estar vacío";
    }

    return nuevosErrores;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleReset = () => {
    setFormData({
      nombre: "",
      apellido: "",
      email: "",
      telefono: "",
      mensaje: "",
    });
    setErrores({});
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const erroresValidos = validar();
    if (Object.keys(erroresValidos).length > 0) {
      setErrores(erroresValidos);
    } else {
      setErrores({});
      console.log("Formulario enviado ✅", formData);
      alert("¡Formulario enviado con éxito!");
      handleReset(); // limpia después de enviar
    }
  };

  return (
    <form className="form-container" onSubmit={handleSubmit}>
      <div className="contenedor-formulario">
        <div className="contenedor-input">
          <label htmlFor="nombre">Nombre</label>
          <input
            type="text"
            name="nombre"
            id="nombre"
            value={formData.nombre}
            onChange={handleChange}
          />
          {errores.nombre && <p className="error">{errores.nombre}</p>}
        </div>

        <div className="contenedor-input">
          <label htmlFor="apellido">Apellido</label>
          <input
            type="text"
            name="apellido"
            id="apellido"
            value={formData.apellido}
            onChange={handleChange}
          />
          {errores.apellido && <p className="error">{errores.apellido}</p>}
        </div>

        <div className="contenedor-input">
          <label htmlFor="email">Correo electrónico</label>
          <input
            type="email"
            name="email"
            id="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="usuario@correo.com"
          />
          {errores.email && <p className="error">{errores.email}</p>}
        </div>

        <div className="contenedor-input">
          <label htmlFor="telefono">Teléfono</label>
          <input
            type="text"
            name="telefono"
            id="telefono"
            value={formData.telefono}
            onChange={handleChange}
            placeholder="Ej: +5491123456789"
          />
          {errores.telefono && <p className="error">{errores.telefono}</p>}
        </div>

        <div className="contenedor-text-area">
          <label htmlFor="mensaje">Mensaje</label>
          <textarea
            name="mensaje"
            id="mensaje"
            value={formData.mensaje}
            onChange={handleChange}
            placeholder="Escriba su mensaje..."
          />
          {errores.mensaje && <p className="error">{errores.mensaje}</p>}
        </div>

        <div className="contenedor-btn-input">
          <input type="submit" value="Enviar" id="btn-enviar" />
          <input type="button" value="Borrar" onClick={handleReset} id="btn-reset" />
        </div>
      </div>
    </form>
  );
}

export default Formulario;
