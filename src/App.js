

import React from 'react';
import { Route, Switch } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import Home from "./pages/Home";
import Error from "./pages/Error";
import Items from './pages/Items';
import TradeRate from './pages/TradeRate';

// import 'bootstrap/dist/css/bootstrap.min.css';
// import 'boostrap'
import './App.css'
import SingleItem from './pages/SingleItem';


function App() {
  return (
    <div>
      <NavBar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/items" component={Items} />
        <Route exact path="/items/:id" component={SingleItem} />
        <Route exact path="/trade-rates" component={TradeRate} />

        <Route component={Error} />
      </Switch>
    </div>
  );
}

export default App;
