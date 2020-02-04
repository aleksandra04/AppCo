import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { selectUsers } from '../store/selectors'

import UserList from './usersList'
import UserStatistic from './userStatistic'
import '../styles/usersPage.scss'


const UsersPage = ({ match, usersData }) => {
  const userId = match.params.id

  // console.log('selectUsers', selectUsers)
  // console.log('usersData', usersData)
  return (
    <div>
      <header className='header'>
        <div className='header__logo'>AppCo</div>
      </header>
      <body className='body'>
        <div className='nav'>
          <Link
            to='/'
            className='nav__link'
          >
            Main page
          </Link>
          <span className='nav__arrow'></span>
          <Link
            to='/users'
            className='nav__link nav__link--active'
          >
            Users statistics
          </Link>
          
        </div>
        {userId && <UserStatistic userId={userId}/>}
        {!userId && <UserList match={match}/>}
      </body>
      <footer className='footer'>
        <div className='footer__logo'>AppCo</div>
        <div className='footer__rights'>All rights reserved by ThemeTags</div>
        <div className='footer__copyright'>Copyrights © 2019.</div>
      </footer>
    </div>
  )
}

const mapStateToProps = state => ({
  usersData: selectUsers(state),
});

export default connect(
  mapStateToProps,
  null
)(UsersPage);