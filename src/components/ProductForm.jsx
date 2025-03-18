import React, { useState } from "react";

const ProductForm = ({ onAddProduct }) => {
  const [formData, setFormData] = useState({
    codigo: "",
    nombre: "",
    descripcion: "",
    cantidad: "",
    creacion: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.codigo || !formData.nombre) {
      alert("Código y Nombre son requeridos");
      return;
    }

    onAddProduct({
      ...formData,
      codigo: Number(formData.codigo),
      cantidad: Number(formData.cantidad),
    });

    setFormData({
      codigo: "",
      nombre: "",
      descripcion: "",
      cantidad: "",
      creacion: "",
    });
  };

  return (
    <div className="card">
      <h2>Crear Producto</h2>
      <form onSubmit={handleSubmit} className="form-grid">
        <input
          name="codigo"
          type="number"
          placeholder="Código"
          value={formData.codigo}
          onChange={handleChange}
        />
        <input
          name="nombre"
          placeholder="Nombre"
          value={formData.nombre}
          onChange={handleChange}
        />
        <input
          name="descripcion"
          placeholder="Descripción"
          value={formData.descripcion}
          onChange={handleChange}
        />
        <input
          name="cantidad"
          type="number"
          placeholder="Cantidad"
          value={formData.cantidad}
          onChange={handleChange}
        />
        <input
          name="creacion"
          type="date"
          value={formData.creacion}
          onChange={handleChange}
        />
        <button type="submit" className="primary">
          Agregar Producto
        </button>
      </form>
    </div>
  );
};

export default ProductForm;
