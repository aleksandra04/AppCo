import React from 'react';
import { Route, Switch } from 'react-router-dom'
import './App.css';
import UsersPage from './components/usersPage'
import Main from './components/Main/main'

export const usersPerPage = 10

const App = () => {

  return (
    <>
    <Switch>
      <Route path='/' exact component={Main}/>
      <Route path='/users/:id?' component={UsersPage}/>
    </Switch>
    </>
  );
}

export default App;
