const SAVE_USERS = 'SAVE_USERS';
const SET_LOAD_USERS_ERROR = 'SET_LOAD_USERS_ERROR';
const START_LOADING = 'START_LOADING';
const STOP_LOADING = 'STOP_LOADING';
const SET_COUNT = 'SET_COUNT';


const saveUsers = value => ({
  type: SAVE_USERS,
  payload: value,
});

const setUsersError = error => ({
  type: SET_LOAD_USERS_ERROR,
  payload: error,
});

const startLoading = () => ({
  type: START_LOADING,
});

const stopLoading = () => ({
  type: STOP_LOADING,
});

const setCount = value => ({
  type: SET_COUNT,
  payload: value,
});

export const uploadUsers = (selectedPage) => (dispatch) => {
  dispatch(startLoading())

  fetch(`http://localhost:5000/api/v1/users?per_page=50&page=${selectedPage}`)
    .then(res => res.json())
    .then(({ users, countAllUsers }) => {
      dispatch(saveUsers(users))
      dispatch(setCount(countAllUsers))
    })
    .catch(error => dispatch(setUsersError(error.message)))
    .finally(() => dispatch(stopLoading()));
}

const initialState = {
  usersData: null,
  isLoading: false,
  error: null,
  countAllUsers: null,
};

export const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case SAVE_USERS:
      return {
        ...state,
        error: null,
        usersData: action.payload,
      };
    case SET_LOAD_USERS_ERROR:
      return {
        ...state,
        error: action.payload,
        usersData: null,
      };
    case START_LOADING:
      return {
        ...state,
        isLoading: true,
      };
    case STOP_LOADING:
      return {
        ...state,
        isLoading: false,
      };
    case SET_COUNT:
      return {
        ...state,
        countAllUsers: action.payload,
      };
    default:
      return state;
  }
};

