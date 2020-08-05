import React, { useReducer } from 'react';
import axios from 'axios';

import AuthContext from './authContext';
import authReducer from './authReducer';
import {
  REGISTER_FAIL,
  REGISTER_SUCCESS,
  LOGIN_FAIL,
  LOGIN_SUCCESS,
  LOGOUT,
  AUTH_ERROR,
  USER_LOADED,
  CLEAR_ERRORS,
} from '../types';

const AuthState = (props) => {
  const initialState = {
    token: localStorage.getItem('token'),
    isAuthenticated: null,
    loading: true,
    user: null,
    error: null,
  };

  const [state, dispatch] = useReducer(authReducer, initialState);

  // load user
  const loadUser = () => console.log('load user');

  // register user
  const register = (formData) => {
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };

    axios
      .post('/api/users', formData, config)
      .then((res) => {
        dispatch({ type: REGISTER_SUCCESS, payload: res.data }); // res.data will be the token
      })

      .catch((err) => {
        dispatch({ type: REGISTER_FAIL, payload: err.response.data.msg });
      });
  };
  // login user
  const login = () => console.log('login');

  //   logout
  const logout = () => console.log('logout user');

  // clear error
  const clearErrors = () => console.log('clear errors');

  return (
    <AuthContext.Provider
      value={{
        token: state.token,
        isAuthenticated: state.isAuthenticated,
        loading: state.loading,
        error: state.error,
        user: state.user,
        register,
        loadUser,
        login,
        logout,
        clearErrors,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthState;
