import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.scss';
import HomePage from './pages/HomePage/HomePage';
import ShopPage from './pages/Shop/ShopPage';
import LoginPage from './pages/LoginPage/LoginPage';
import Header from './components/Header/Header';

function App() {
  return (
    <div className="app">
      <Header />
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/shop' component={ShopPage} />
        <Route path='/login' component={LoginPage} />
      </Switch>
    </div>
  );
}

export default App;
