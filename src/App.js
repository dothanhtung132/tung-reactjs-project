import React, { useEffect, useState } from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.scss';
import HomePage from './pages/HomePage/HomePage';
import ShopPage from './pages/Shop/ShopPage';
import LoginPage from './pages/LoginPage/LoginPage';
import Header from './components/Header/Header';
import {auth, createUserProfileDocument} from './firebase/firebaseUtils';

function App() {
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    const unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      setCurrentUser(userAuth);
      const userRef = await createUserProfileDocument(userAuth);
      userRef.onSnapshot(snapshot => {
        setCurrentUser({id: snapshot.id, ...snapshot.data()});
      })
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
