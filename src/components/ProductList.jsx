import React, { useState } from "react";

const ProductList = ({ products, onDeleteProduct }) => {
  const [sortField, setSortField] = useState("codigo");

  const sortedProducts = [...products].sort((a, b) => {
    if (sortField === "cantidad" || sortField === "codigo") {
      return a[sortField] - b[sortField];
    }
    if (sortField === "creacion") {
      return new Date(a.creacion) - new Date(b.creacion);
    }
    return a[sortField].localeCompare(b[sortField]);
  });

  return (
    <div className="card">
      <div className="form-grid">
        <h2>Lista de Productos</h2>

        <div>
          <label class="m-2" htmlFor="sortField" className="order-label">
            Ordenar por:
          </label>
          <select
            id="sortField"
            className="order-select"
            onChange={(e) => setSortField(e.target.value)}
            value={sortField}
          >
            <option value="codigo">Código</option>
            <option value="nombre">Nombre</option>
            <option value="cantidad">Cantidad</option>
            <option value="creacion">Fecha de Creación</option>
          </select>
        </div>
      </div>
      <div class="pt-4">
        {sortedProducts.length === 0 && <p>No hay productos creados.</p>}
        {sortedProducts.map((product) => (
          <div key={product.codigo} className="list-item card">
            <div className="card-content">
              <h3>{product.nombre}</h3>
              <p>
                <strong>Código:</strong> {product.codigo}
              </p>
              <p>{product.descripcion}</p>
              <p>
                <strong>Cantidad:</strong> {product.cantidad}
              </p>
              <p>
                <strong>Creación:</strong> {product.creacion}
              </p>
            </div>
            <button
              className="danger"
              onClick={() => onDeleteProduct(product.codigo)}
            >
              Eliminar
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
