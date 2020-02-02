import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import UserList from './usersList'
import '../styles/users.scss'


const UsersPage = () => {
  return (
    <div>
    <header className='header'>
      <div>AppCo</div>
    </header>
    <body>
    <NavLink to='/'>Main page</NavLink>
    {' '}
    <NavLink to='/users'>users</NavLink>
    <UserList />
    </body>
    <footer></footer>
  </div>
  )
}

export default UsersPage