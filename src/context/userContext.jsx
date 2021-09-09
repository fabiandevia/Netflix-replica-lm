import React, { createContext, useState, useEffect } from 'react';
import { USER_LIST, CURRENT_USER } from '../constants/storage';
import { saveToLocalStorage, getFromLocalStorage } from '../utils/storage';
import userData from './users.json';

export const DEFAULT_VALUE = {
  users: [],
  currentUser: null,
  updateUsers: () => {},
  updateCurrentUser: () => {},
  updateUser: () => {},
};

const UserContext = createContext(DEFAULT_VALUE);

export default UserContext;

export const UserProvider = ({ children }) => {
  const [users, setUsers] = useState([]);
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    setUsers(getFromLocalStorage(USER_LIST, true) || userData);
    setCurrentUser(getFromLocalStorage(CURRENT_USER, true));
  }, []);

  const updateUsers = value => {
    Array.isArray(value) && setUsers(value);
    saveToLocalStorage(USER_LIST, value);
  };

  const updateCurrentUser = value => {
    if (typeof value === 'object' || !value) setCurrentUser(value);
    saveToLocalStorage(CURRENT_USER, value);
  };

  const updateUser = user => {
    const newUsers = users.filter(_user => _user.id !== user.id).concat(user);
    updateUsers(newUsers);
    updateCurrentUser(user);
  };

  return (
    <UserContext.Provider
      value={{ users, updateUsers, currentUser, updateCurrentUser, updateUser }}
    >
      {children}
    </UserContext.Provider>
  );
};
