import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types'
import { connect } from 'react-redux';
import '../styles/userStatistic.scss'

import { uploadUserStatistic } from '../store/rootReducer';
import { selectUserDetailes } from '../store/selectors'

import Chart from './chart'

const UserStatistic = ({
  userDetailes,
  uploadStatistic,
  userId,
}) => {
  const [dateFrom, setDateFrom] = useState('2019-10-24')
  const [dateTo, setDateTo] = useState('2019-10-31')

  useEffect(() => {
    uploadStatistic(userId, dateFrom, dateTo);
  }, [userId, dateFrom, dateTo, uploadStatistic]);

  const changeDateFromHandler = (event) => {
    setDateFrom(event.target.value)
  }

  const changeDateToHandler = (event) => {
    setDateTo(event.target.value)
  }

  return (
    <>
      <h1 className='user-name'>
        {userDetailes.length && userDetailes[0].name}
      </h1>
      <label className='label'>
        From
        <input
          type='date'
          value={dateFrom}
          onChange={changeDateFromHandler}
          className='input'
        >
        </input>
      </label>
      <label className='label'>
        To
        <input
          type='date'
          value={dateTo}
          onChange={changeDateToHandler}
          className='input'
        >
        </input>
      </label>
      <p className='chart-name'>Clicks</p>
      <Chart
        dataKey='clicks'
        data={userDetailes}
      />
      <p className='chart-name'>Views</p>
      <Chart
        dataKey='page_views'
        data={userDetailes}
      />
    </>
  )
}

const mapStateToProps = state => ({
  userDetailes: selectUserDetailes(state),
});

const mapDispatchToProps = dispatch => ({
  uploadStatistic: (userId, startDate, endDate) => 
    dispatch(uploadUserStatistic(userId, startDate, endDate)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserStatistic);

UserStatistic.propTypes = {
  userDetailes: PropTypes.arrayOf(PropTypes.shape({})),
  uploadStatistic: PropTypes.func.isRequired,
  userId: PropTypes.number.isRequired,
};

UserStatistic.defaultProps = {
  userDetailes: [],
};
