import Vue from 'vue';
// import toastr from 'toastr';
// import tooltip from 'tippy.js';
import logger from './logger';
import http from './http';

// toastr.options = {
//   closeButton: true,
//   // debug: true,
//   newestOnTop: false,
//   progressBar: true,
//   positionClass: 'toast-top-right',
//   preventDuplicates: true,
//   showDuration: '400',
//   hideDuration: '1000',
//   timeOut: '5000',
//   extendedTimeOut: '1000',
//   showEasing: 'swing',
//   hideEasing: 'linear',
//   showMethod: 'fadeIn',
//   hideMethod: 'fadeOut'
// };

// const { error } = toastr;

// toastr.error = (message, title) => error(String(message), title);

Object.assign(Vue.prototype, {
  // $log: logger.log,
  $http: http,
  // $toastr: toastr,
  // $tooltip: tooltip,
  $baseUrl: process.env.BASE_URL,
  $baseImageUrl: `${process.env.BASE_URL}assets/images`
});

export default {
  // http,
  // toastr,
  // log: logger.log
};
