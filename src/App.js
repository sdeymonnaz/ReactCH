import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Routes from './components/Routes';
import './App.css';
import { CartContext } from './context/cartContext';




function App() {
  return (
    <CartContext.Provider value={[]}>
      <div className="App">
        <Routes />
      </div>
    </CartContext.Provider>
  );
}

export default App;
