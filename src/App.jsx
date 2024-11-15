import React, { useState } from 'react';
import Nav from './components/nav'; // Ensure this path is correct
import './App.css'; 
import ProductInput from './components/ProductInput';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <Nav />
      <ProductInput /> {/* Using the corrected ProductInput component */}
    </div>
  );
}

export default App;
