import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.scss';
import HomePage from './pages/HomePage/HomePage';
import ShopPage from './pages/Shop/ShopPage';

function App() {
  return (
    <div className="app">
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/shop' component={ShopPage} />
      </Switch>
    </div>
  );
}

export default App;
