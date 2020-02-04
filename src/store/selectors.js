import { createSelector } from 'reselect';

import { usersPerPage } from './../App';

const rootSelector = state => state;

export const selectUsers = createSelector(
  rootSelector,
  ({ usersData }) => {
   return !usersData ? [] : usersData;
  }
)

export const seleсtUsersError = createSelector(
  rootSelector,
  ({ error }) => error
);

export const seleсtIsLoading = createSelector(
  rootSelector,
  ({ isLoading }) => isLoading
);

export const seleсtPaginationButtons = createSelector(
  rootSelector,
  ({ countAllUsers }) => {
    let count = Math.ceil(countAllUsers / usersPerPage)

    let arr = [...Array(count+1).keys()]
    arr.shift()

    let result = []
      while(arr.length>0) {
        result.push(arr.splice(0, 5))
      }

    return result
  }
);

export const selectUserDetailes = createSelector(
  rootSelector,
  ({ userStatistics }) => {
   return !userStatistics ? [] : userStatistics;
  }
)