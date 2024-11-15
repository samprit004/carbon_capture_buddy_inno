// ProductInput.jsx
import React from 'react';
import './ProductInput.css';

function ProductInput() {  // Renamed the function to `ProductInput`
  return (
    <div className="app-container">
      <div className="title-container">
        <h2 className="main-title"></h2>
      </div>
      <div className="page-container">
        <div className="input-container">
          <input
            className="product-input"
            type="text"
            placeholder="Enter product name"
          />
        </div>
      </div>
    </div>
  );
}

export default ProductInput; // Make sure to export `ProductInput`
