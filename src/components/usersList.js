import React, { useEffect } from 'react';
import PropTypes from 'prop-types'
import { connect } from 'react-redux';
import { uploadUsers } from '../store/rootReducer';
import { selectUsers, seleсtUsersError, seleсtIsLoading }
  from '../store/selectors'
import { useLocation, useHistory } from 'react-router-dom'
import '../styles/usersList.scss'
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
}) => {

  const location = useLocation();
  const history = useHistory();
  const searchParams = new URLSearchParams(location.search);
  const selectedPage = searchParams.get('page');

  useEffect(() => {
    loadUsers(selectedPage ? selectedPage : 1);
  }, [loadUsers, selectedPage]);

  const handleUserClick = (id) => {
    history.push({
      pathname: `/users/${id}`,
      search: location.search,
    });
  }

  return (
    <>
      {isLoading && !error && <Loader />}
      {error && !isLoading && <Error message={error} />}
      {!isLoading && !error &&
        <>
          <h1 className='page-name'>Users statistics</h1>
          <table className='table'>
            <thead className='table__header'>
              {columnNames.map(column =>
                <th className='table__header__cell'>{column}</th>
              )}
            </thead>
            <tbody>
              {usersData.map(user =>
                <tr onClick={() => handleUserClick(user.id)}>
                  <td className='table__cell table__cell--centered'>
                    {user.id}
                  </td>
                  <td className='table__cell table__cell--left'>
                    {user.first_name}
                  </td>
                  <td className='table__cell table__cell--left'>
                    {user.last_name}
                  </td>
                  <td className='table__cell table__cell--left'>
                    {user.email}
                  </td>
                  <td className='table__cell table__cell--centered'>
                    {user.gender}
                  </td>
                  <td className='table__cell table__cell--centered'>
                    {user.ip_address}
                  </td>
                  <td className='table__cell table__cell--centered'>
                    {user.totalClicks}
                  </td>
                  <td className='table__cell table__cell--centered'>
                    {user.totalPageViews}
                  </td>
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

UsersList.propTypes = {
  usersData: PropTypes.arrayOf(PropTypes.shape({})),
  loadUsers: PropTypes.func.isRequired,
  error: PropTypes.string,
  isLoading: PropTypes.bool,
};

UsersList.defaultProps = {
  usersData: [],
  error: null,
  isLoading: false,
};