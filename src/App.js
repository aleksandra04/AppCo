import React from 'react';
import { Route, Switch } from 'react-router-dom'
import './App.css';
import UsersPage from './components/usersPage'
import Main from './components/main'


const App = () => {

  return (
    <>
    <Switch>
      <Route path='/' exact component={Main}/>
      <Route path='/users' component={UsersPage}/>
    </Switch>
    </>
  );
}

export default App;
