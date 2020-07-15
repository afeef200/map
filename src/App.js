import React from 'react';
import a from './pics/a.png';
import p from './pics/p.png';
import f from './pics/f.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous"></link>

    <button type="button" class="btn btn-primary btn-lg btn-block"  >
    <img src={a} alt="a" class = "App-logo" />
    <h2>ambulance</h2>
    </button>
    <button type="button" class="btn btn-primary btn-lg btn-block">
    <img src={p} alt="p" class = "App-logo" />
    <h2>Police Station</h2>

    </button>
    <button type="button" class="btn btn-primary btn-lg btn-block">
    <img src={f} alt="f" class = "App-logo" />
    <h2>Fire Station</h2>

    </button>

    </div>
  );
}

export default App;
