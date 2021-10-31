import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Routes from './components/Routes';
import './App.css';
import { CartProvider } from "./context/cartContext";




function App() {
  return (
      <div className="App">
        <CartProvider>
          <Routes />
        </CartProvider>
      </div>
      );
}

export default App;
