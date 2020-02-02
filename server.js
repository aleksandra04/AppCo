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
    .reduce((a,b) => a + b),
  totalPageViews: stat.map((a) => a.page_views)
    .reduce((a,b) => a + b),
}
})

const usersWithFilter = (usersPerPage, currentPage) => {
  let start = usersPerPage * (currentPage - 1);
  let end = usersPerPage * currentPage;

  return usersWithStatistic.slice(start, end)
}

app.get('/api/v1/users/:id?', (request, response) => {
  if(request.params.id){
    console.log("user_id", request.params.id)
  }
  response.set('Access-Control-Allow-Origin', 'http://localhost:3000');
  response.json({
    users: usersWithFilter(request.query.per_page, request.query.page),
    countAllUsers: users.length
  })
})

app.use(express.static('build'))

app.listen(port, () => {
  console.log(`listen ${port}`)
})