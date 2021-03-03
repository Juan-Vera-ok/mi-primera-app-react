import React, { useState, useEffect } from "react";
import logo from './logo.svg';
import './App.css';
//import HolaMundo from "./components/HolaMundo";
//import AdiosMundo from "./components/AdiosMundo";
import Saludar from "./components/Saludar";

function App() {
  
  const [stateCar,setStateCar]= useState(false);
  const [contar,setContar]= useState(0);
  
  useEffect(() => {
    console.log("Total: "+ contar);
  }, [contar])

  const user= {
    nombre:"Juan Ignacio Vera",
    edad:25,
    color:"Negro"
  }

  const saludarFn = (nombre,edad) =>{

    console.log("Hola "+nombre+" tiene "+edad+" años.");
    console.log(`hola ${nombre},tiene ${edad} años.`);
  };


  const encenderApagar =()=>{
    //setStateCar(!stateCar);
    setStateCar(prevValue => !prevValue);
    setContar(contar+1);
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Saludar userInfo={user} saludarFn={saludarFn}/>
        <h3>El coche está: {stateCar?"Encendido":"Apagado"}</h3>
        <button onClick={encenderApagar}>Encender / Apagar</button>
        <h4>Clicks totales: {contar}</h4>
        
      </header>
    </div>
  );
}

export default App;
