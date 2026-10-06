import React from 'react'
import ReactDOM from 'react-dom/client'

//Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap"

// index.css'
import '../styles/index.css'

// components
import Home from './components/Home';

let counter = 0;
let timerId = null;

const root = ReactDOM.createRoot(document.getElementById('root'));

function renderApp () {
  root.render(
    <React.StrictMode>
      <Home 
      seconds = {counter}
      onPause = {handlePause}
      onResume = {handleResume}
      onReset = {handleReset}      
      />

    </React.StrictMode>
);
}

function handleResume() {
  if (!timerId) {
    timerId = setInterval(() => {
      counter++;
      renderApp();
    }, 1000);
  }
}

function handlePause() {
  clearInterval(timerId);
  timerId = null;
}

function handleReset() {
  counter = 0;
  renderApp();
}

handleResume();
  




