import {
    CREATE_USER, LOGIN_USER, LOGOUT_USER
  } from '../mutation-types';
  import http from '@/http';
  
  export const create_user = ({ commit }, formData) => new Promise((resolve, reject) => {
    http
      .post('auth/signup', formData)
      .then((response) => {
        commit(CREATE_USER, response.data);
        resolve(response);
      })
      .catch((error) => {
        reject(error);
      });
  });
  
  export const login_user = ({ commit }, formData) => new Promise((resolve, reject) => {
    http
      .post('auth', formData)
      .then((response) => {
        commit(LOGIN_USER, response);
        resolve(response);
      })
      .catch((error) => {
        reject(error);
      });
  });
  
  export const logout_user = ({ commit }) => {
    commit(LOGOUT_USER);
  };
  
  