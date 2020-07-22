import {
  ON_FILTER_USER,
  UPDATE_USER_LIST,
  UNSUCCESSFULL_UPDATE,
  FILTER_USERS,
} from "constants/ActionTypes";

export const filterUsers = (filter) => {
  return {
    type: ON_FILTER_USER,
    payload: filter,
  };
};

export const updateUserList = (users) => {
  console.log(users);
  return {
    type: UPDATE_USER_LIST,
    payload: users,
  };
};

export const showErrorMessage = (error) => {
  return {
    type: UNSUCCESSFULL_UPDATE,
    payload: error,
  };
};
