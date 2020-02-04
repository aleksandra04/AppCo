import React from 'react';
import Chart from './chart'

const UserStatistic = ({userId}) => {
  return (
    <>
    <input type='date'></input>
    <Chart userId={userId}/>
    </>
  )
}

export default UserStatistic
