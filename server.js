const express = require('express');
const app = express();
const port = 5000 //TO CHANGE
const users = require('./public/users')
const users_statistic = require('./public/users_statistic')

const usersWithStatistic = users.map(user => {
  const stat = users_statistic
    .filter(userInfo => userInfo.user_id === user.id)

  return {
    ...user,
    // staistic: stat,
    totalClicks: stat.map((a) => a.clicks)
      .reduce((a, b) => a + b),
    totalPageViews: stat.map((a) => a.page_views)
      .reduce((a, b) => a + b),
  }
})

const usersWithFilter = (usersPerPage, currentPage) => {
  let start = usersPerPage * (currentPage - 1);
  let end = usersPerPage * currentPage;

  return usersWithStatistic.slice(start, end)
}

const userDetailes = (userId, startDate, endDate) => {
  let from = new Date(startDate)
  let to = new Date(endDate)
  let user = users.find(user => user.id === +userId)
  let data = users_statistic.filter(item => item.user_id === +userId)
    .map(item => {
    return {
      ...item,
      name: `${user.first_name} ${user.last_name}`,
      date: new Date(item.date)
    }
  }).filter(item => from <= item.date && item.date <= to)
  return data.map(item => {
    return {
      ...item,
      date: `${item.date.getFullYear()}-${item.date.getMonth() + 1}-${item.date.getDate()}`
    }
  })
}

app.get('/api/v1/users/:id?', (request, response) => {
  response.set('Access-Control-Allow-Origin', 'http://localhost:3000');
  if (request.params.id) {
    //TODO check if user exists, maybe return error and catch it on the clients side
    response.json(userDetailes(request.params.id, request.query.from, request.query.to))
  }
  else {
    response.json({
      users: usersWithFilter(request.query.per_page, request.query.page),
      countAllUsers: users.length
    })
  }
})

app.use(express.static('build'))

app.listen(port, () => {
  console.log(`listen ${port}`)
})