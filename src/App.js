import React from 'react';
import './App.css';
import './components/Conversor.css';
import Conversor from "./components/Conversor"

function App() {
  return (
    <div className="App">
      <h1> Conversor de moedas</h1>
      <div className="Linha">
        <Conversor moedaA = "USD" moedaB = "BRL"></Conversor>
        <Conversor moedaA = "BRL" moedaB = "USD"></Conversor>
      </div>
      <div className="Linha">
        <Conversor moedaA = "EUR" moedaB = "BRL"></Conversor>
        <Conversor moedaA = "BRL" moedaB = "EUR"></Conversor>
      </div>
      <div className="Linha">
        <Conversor moedaA = "GBP" moedaB = "BRL"></Conversor>
        <Conversor moedaA = "BRL" moedaB = "GBP"></Conversor>
      </div>
    </div>
  );
}

export default App;
