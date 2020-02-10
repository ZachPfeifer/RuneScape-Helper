

import React from 'react';
import { Route, Switch } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import Home from "./pages/Home";
import Error from "./pages/Error";
import Items from './pages/Items';
import TradeRate from './pages/TradeRate';
import HiScores from './pages/HiScores';
import SingleItem from './pages/SingleItem';
import ItemContextProvider from './context/ItemContext';
import './App.css'
// import ItemsMapped from './components/Item/ItemsMapped';

// import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div>
      <NavBar />
      <Switch>
        <ItemContextProvider>
          <Route exact path="/" component={Home} />
          <Route exact path="/items" component={Items} />
          {/* <Route exact path="/items-page=:number/" component={Items} /> */}
          <Route exact path="/items/:id" component={SingleItem} />
          <Route exact path="/trade-rates" component={TradeRate} />
          <Route exact path="/hiscores" component={HiScores} />
        </ItemContextProvider>
        <Route component={Error} />
      </Switch>
    </div>
  );
}

export default App;
