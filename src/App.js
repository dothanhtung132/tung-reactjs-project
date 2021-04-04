import React, { useEffect, useState } from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.scss';
import HomePage from './pages/HomePage/HomePage';
import ShopPage from './pages/Shop/ShopPage';
import LoginPage from './pages/LoginPage/LoginPage';
import Header from './components/Header/Header';
import {auth, createUserProfileDocument} from './firebase/firebaseUtils';

function App() {
  const [currentUser, setCurrectUser] = useState(null);

  useEffect(() => {
    const unsubscribeFromAuth = auth.onAuthStateChanged(async user => {
      setCurrectUser(user);
      createUserProfileDocument(user);
    });
    return () => {
      unsubscribeFromAuth();
    }
  }, []);

  return (
    <div className="app">
      <Header currentUser={currentUser} />
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/shop' component={ShopPage} />
        <Route path='/login' component={LoginPage} />
      </Switch>
    </div>
  );
}

export default App;
