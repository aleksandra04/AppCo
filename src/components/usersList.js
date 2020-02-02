import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { uploadUsers } from '../store/rootReducer';
import { selectUsers, seleсtUsersError, seleсtIsLoading } from '../store/selectors'
import { NavLink } from 'react-router-dom';
import { useLocation } from 'react-router-dom'
import '../styles/users.scss'
import Pagination from './pagination'
import Loader from './loader'
import { Error } from './error'

const columnNames = ['id', 'Firs name', 'Last name', 'Email', 'Gender',
  'IP address', 'Total clicks', 'Total page views']

const UsersList = ({
  usersData,
  error,
  isLoading,
  loadUsers,
  match,
}) => {

  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const selectedPage = searchParams.get('page');

  useEffect(() => {
    loadUsers(selectedPage ? selectedPage : 1);
  }, [selectedPage]);

  return (
      <>
      {isLoading && !error && <Loader />}
      {error && ! isLoading && <Error message={error} />}
      {!isLoading && !error && <>
        <table className='table'>
        <thead>
          {columnNames.map(column =>
            <th>{column}</th>
          )}
        </thead>
        <tbody>
          {usersData.map(user =>
            <tr>
              <td>{user.id}</td>
              <td>{user.first_name}</td>
              <td>{user.last_name}</td>
              <td>{user.email}</td>
              <td>{user.gender}</td>
              <td>{user.ip_address}</td>
              <td>{user.totalClicks}</td>
              <td>{user.totalPageViews}</td>
              
            </tr>
          )}
        </tbody>
      </table>
      <Pagination />
          </>}
    </>
  )
}

const mapStateToProps = state => ({
  usersData: selectUsers(state),
  error: seleсtUsersError(state),
  isLoading: seleсtIsLoading(state),
});

const mapDispatchToProps = dispatch => ({
  loadUsers: value => dispatch(uploadUsers(value)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UsersList);