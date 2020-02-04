import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import {
    LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
  } from 'recharts';

import { uploadUserStatistic } from '../store/rootReducer';
import { userDetailes, seleсtUsersError, seleсtIsLoading } from '../store/selectors'


const Chart = ({
    userDetailes,
    uploadStatistic,
    userId,
}) => {

    // take it from input form with two datepickers
    let startDate = '2019-10-03'
    let endDate = '2019-10-25'

    useEffect(() => {
        uploadStatistic(userId, startDate, endDate);
    }, [userId]);

    return (
        <div>
        <LineChart
          width={800}
          height={400}
          data={userDetailes}
          margin={{
            top: 5, right: 30, left: 20, bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis
            dataKey="date"
            tickSize={7}
            // tickFormatter={timeStr => new Intl.DateTimeFormat('en-US', { date: 'short'}).format(new Date(timeStr))}
          />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="clicks" dot={false} />
        </LineChart>
        {' '}
        <LineChart
            width={500}
            height={300}
            data={userDetailes}
            margin={{
                top: 5, right: 30, left: 20, bottom: 5,
            }}
            >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis
                dataKey="date"
                // tickFormatter={timeStr => new Intl.DateTimeFormat('en-US', { month: 'long'}).format(new Date(timeStr))}
            />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="page_views" dot={false} />
        </LineChart>
        </div>
      );
}

const mapStateToProps = state => ({
  userDetailes: userDetailes(state),
});

const mapDispatchToProps = dispatch => ({
  uploadStatistic: (userId, startDate, endDate) => dispatch(uploadUserStatistic(userId, startDate, endDate)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Chart);