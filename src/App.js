import React from 'react';
import './App.css';
import piaic from './piaic.png';
import unnamed from './unnamed.jpg';
import Home from './home';
import {TransactionProvider} from './transContext';

function App() {
  return (
    <TransactionProvider>
      <div className="background">
        <center>
      <header className="App-header">
        <img src={piaic} className="App-piaic" alt="piaic" /></header></center>
      <Home />
      </div>>
    </TransactionProvider>
  );
}

export default App;
