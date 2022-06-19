
import Vue from 'vue';
import Vuex from 'vuex';
import mutations from './mutations';
import * as actions from './actions/index';

Vue.use(Vuex);

const state = {
  user: {},
  error: null,
  token: ''
};

export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters: {
    isToken: stateObj => stateObj.token && stateObj.user,
    getToken: stateObj => stateObj.token !== '',
  },
 
});
