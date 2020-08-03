import React from 'react';
import logo from './assets/images/logo.svg';
import './assets/css/App.css';
import MiComponente from "./components/MiComponente"; 

function Presentacion([nombreChica, edadChica ], [nombreChico, edadChico]) {
const Pareja =  <p>
                  Hola la pareja del dia esta formada por { nombreChica } de { edadChica } años y { nombreChico } de { edadChico } años
                </p> ;
return Pareja
}

function App( { nombreChica=" SinNombre ", edadChica , nombreChico=" SinNombre ", edadChico  } ) {
  const presentacion = <p>Hola Bienvenidos Amigos</p> ;
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        { presentacion }

        { Presentacion([nombreChica, edadChica], [nombreChico, edadChico]) } 
        { Presentacion(["Auron", 24], ["Yeine", 19]) }

        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <div className="Componentes">
          <MiComponente />

        </div> 
      </header>
    </div>
  );
}

export default App;
