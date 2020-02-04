import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { selectUserDetailes } from '../store/selectors'

import UserList from './usersList'
import UserStatistic from './userStatistic'
import '../styles/usersPage.scss'


const UsersPage = ({ match, userDetails }) => {
  const userId = match.params.id

  const linkClass = userId
    ? 'nav__link' 
    : 'nav__link nav__link--active'
  
  const linkTo = `/users/${userId}`

  return (
    <div>
      <header className='header'>
        <Link to='/' className='header__logo'>AppCo</Link>
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
            className={linkClass}
          >
            Users statistics
          </Link>
          {userId && 
          <>
            <span className='nav__arrow'></span>
            <Link
              to={linkTo}
              className='nav__link nav__link--active'
            >
              {userDetails.length ? userDetails[0]['name'] : ''}
            </Link>
            </>
          }
          
        </div>
        {userId && <UserStatistic userId={userId}/>}
        {!userId && <UserList match={match}/>}
      </body>
      <footer className='footer'>
        <Link to='/' className='footer__logo'>AppCo</Link>
        <div className='footer__rights'>All rights reserved by ThemeTags</div>
        <div className='footer__copyright'>Copyrights © 2019.</div>
      </footer>
    </div>
  )
}

const mapStateToProps = state => ({
  userDetails: selectUserDetailes(state),
});

export default connect(
  mapStateToProps,
  null
)(UsersPage);