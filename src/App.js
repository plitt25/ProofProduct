import React, { useState } from 'react';
import ProductForm from './components/ProductForm';
import ProductList from './components/ProductList';


const App = () => {
  const [products, setProducts] = useState([]);

  const addProduct = (product) => {
    setProducts([...products, product]);
  };

  const deleteProduct = (codigo) => {
    setProducts(products.filter((product) => product.codigo !== codigo));
  };

  return (
    <div className="container">
      <ProductForm onAddProduct={addProduct} />
      <ProductList products={products} onDeleteProduct={deleteProduct} />
    </div>
  );
};

export default App;
