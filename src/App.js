

import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from "./pages/Home";
import Error from "./pages/Error";
import NavBar from './components/NavBar/NavBar';
// import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'


function App() {
  return (
    <div className="App">
      <NavBar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route component={Error} />
      </Switch>
    </div>
  );
}

export default App;
