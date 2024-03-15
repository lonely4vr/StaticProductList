
import React from 'react';
import './ProductList.css';

// adding data into products array
const products = [
  { id: 1, name: "Laptop", description: "High-performance laptop for professionals.", price: 1200 },
  { id: 2, name: "Smartphone", description: "Feature-packed smartphone with advanced camera technology.", price: 800 },
  { id: 3, name: "Headphones", description: "Wireless headphones with noise-cancellation feature.", price: 150 },
  { id: 4, name: "Tablet", description: "Versatile tablet for work and entertainment.", price: 500 },
];

const ProductList = () => {
  return (
    <div className="product-list">
      {products.map(product => (
        <div key={product.id} className="product">
          <h3>{product.name}</h3>
          <p>{product.description}</p>
          <p>Price: ${product.price}</p>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
