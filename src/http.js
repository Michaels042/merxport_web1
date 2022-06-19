import axios from 'axios';
import NProgress from 'nprogress';
import constants from './constants';
import router from './router';
import store from './store';
import logger from './logger';

class ApiError {
  constructor(message, code) {
    this.message = message;
    this.code = code;
  }
}

ApiError.prototype.toString = function toString() {
  console.log(this);
  return this.message;
};

const { VUE_APP_API_URL: API_URL } = process.env;

const instance = axios.create({
  baseURL: API_URL
});

const capitalize = (value) => {
  if (!value) return '';
  return value.replace(
    /\w\S*/g,
    txt => txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase()
  );
};
const setTokenIfExists = (options) => {
  const token = localStorage.getItem('token');

  if (!token) {
    return;
  }

  if (!options.headers) {
    options.headers = {};
  }
  options.headers.Authorization = `Bearer ${token}`;
};

const http = {
  request(url, method, data, options = {}) {
    return new Promise((resolve, reject) => {
      setTokenIfExists(options);
      instance({
        method,
        url: `${API_URL}/${url}`,
        data,
        timeout: 1000 * 60,
        ...options
      })
        .then((response) => {
          // utils.log('API Success response', response);
          resolve(response.data);
        })
        .catch((err) => {
          logger.log('API Call Error', err);
          if (!err.response) {
            reject(constants.CONNECTIVITY_ERROR);
          } else if (err.response.data.message) {
            const message = capitalize(err.response.data.message);
            reject(new ApiError(message, err.response.status));
          } else {
            let message = null;
            switch (err.response.status) {
              case 401:
                message = constants.ERROR_401;

                window.$('.modal').modal('hide');

                store.commit('logout_user');
                router.push({ name: 'userLogin' });
                break;
              case 404:
                message = constants.ERROR_404;
                break;
              case 451:
                message = constants.ERROR_451;
                break;
              case 500:
                message = constants.ERROR_500;
                break;
              default:
                message = constants.DEFAULT_ERROR;
                break;
            }

            reject(new ApiError(message, err.response.status));
          }
        });
    });
  },

  get(url, params = {}) {
    const options = {
      params
    };
    return this.request(url, 'GET', null, options);
  },

  post(url, data, isJson = true) {
    const options = {};

    if (!isJson) {
      options.headers = {
        'Content-Type': 'multipart/form-data'
      };

      const formData = new FormData();
      Object.entries(data).forEach(([key, value]) => formData.append(key, value));
      data = formData;
    }
    return this.request(url, 'POST', data, options);
  },

  put(url, data, isJson = true) {
    const options = {};

    if (!isJson) {
      options.headers = {
        'Content-Type': 'multipart/form-data'
      };

      const formData = new FormData();
      Object.entries(data).forEach(([key, value]) => formData.append(key, value));
      data = formData;
    }

    return this.request(url, 'PUT', data, options);
  },

  delete(url) {
    return this.request(url, 'DELETE');
  },

  uploadFile(file) {
    const url = `uploads/${store.state.user._id}`;
    return this.post(
      url,
      {
        file
      },
      false
    );
  }
};

// before a request is made start the nprogress
instance.interceptors.request.use((config) => {
  NProgress.start();
  return config;
});

// before a response is returned stop nprogress
instance.interceptors.response.use(
  (response) => {
    NProgress.done();
    return response;
  },
  (error) => {
    NProgress.done();
    return Promise.reject(error);
  }
);

export default http;
