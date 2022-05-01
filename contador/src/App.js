import logo from './logo.svg';
import './App.css';
import React, {useState} from 'react';


function App() {

  const[inicio, sumar] = useState(0); 

  const suma = () =>{
    try {
      sumar(inicio+1)

    } catch (error) {
      console.log(error);
    }
  }

  const resta = () =>{
    try {
      
      sumar(inicio-1)

    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Contador: {inicio}
        </p>
        <button onClick={suma}>Sumar 1 </button>
        <br></br>
        <button onClick={resta}> Resta 1</button>
        <br></br>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
