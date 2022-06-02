import logo from './logo.svg';
import './App.css';
import React from 'react';


let element = (
  <React.Fragment>
  <div className="App">
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <p>
        Edit <code>src/App.js</code> and save to reload.
      </p>
      <a
        className="App-link"
        href="https://reactjs.org"
        target="_blank"
        rel="noopener noreferrer"
      >
        Learn React by doing
      </a>
    </header>
  </div>



  <div className="App">
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <p>
        Edit <code>src/App.js</code> and save to reload.
      </p>
      <a
        className="App-link"
        href="https://reactjs.org"
        target="_blank"
        rel="noopener noreferrer"
      >
        Learn React by doing
      </a>
    </header>
  </div>
  </React.Fragment>
  )

  let myvar = [{sayHello: ()=>{console.log('hello World')}}]


const App = () => {
  return (<>
  
      {getTitle()}
      {getElement('Bienvenue au cours de ReactJS')}
      {myvar[0].sayHello}
  </>)
}


function getTitle(title){
  return <h1>{process.env.REACT_APP_TITLE}</h1>
             
}

function getElement(title){
   return <h1>{title}</h1>
}



export default App;
