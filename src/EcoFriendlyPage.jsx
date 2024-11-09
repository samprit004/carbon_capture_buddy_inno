// src/EcoFriendlyPage.jsx
import React, { useState } from 'react';

const EcoFriendlyPage = () => {
  const [productName, setProductName] = useState('');

  const handleInputChange = (event) => {
    setProductName(event.target.value);
  };

  return (
    <div className="eco-friendly-container">
      <h1>Track Emissions, Discover Eco-friendly Alternatives!</h1>
      
      <div className="form-container">
        <label htmlFor="product-name">Write the product name here...</label>
        <input
          type="text"
          id="product-name"
          value={productName}
          onChange={handleInputChange}
          placeholder="Enter a product name"
        />
        <button>Find Alternatives</button>
      </div>

      <div className="eco-friendly-info">
        {productName && (
          <p>Searching for alternatives to: {productName}</p>
        )}
      </div>
    </div>
  );
};

export default EcoFriendlyPage;
