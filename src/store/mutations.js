import {
	CREATE_USER,
	LOGIN_USER,
	LOGOUT_USER,
	GET_CONTACT,
	GET_PAYMENTOPTIONS,
	GET_USER_PAYMENTOPTIONS,
	GET_NOTIFICATIONS,
	ADD_NOTIFICATION,
	GET_BANKS,
	UPDATE_STATISTICS,
	SET_ERROR
} from './mutation-types';

const TOKEN = 'token';
const USER = 'user';

export default {
	[CREATE_USER](state, response) {
		state.user = response;
	},
	[LOGIN_USER](state, response) {
		state.user = response;
		state.token = response._token;
		localStorage.setItem(TOKEN, response._token);
		localStorage.setItem(USER, JSON.stringify(response));
	},
	[LOGOUT_USER](state) {
		state.user = {};
		state.token = '';
		localStorage.clear();
		state.userPaymentOptions = [];
		state.paymentOptions = [];
		state.notifications = [];
		state.contact = [];
		state.routeLink = '';
	},
	[GET_CONTACT](state, response) {
		state.contact = response;
		// localStorage.setItem(CONTACT, JSON.stringify(response));
	},
	[GET_PAYMENTOPTIONS](state, response) {
		state.paymentOptions = response;
	},
	[GET_USER_PAYMENTOPTIONS](state, response) {
		state.userPaymentOptions = response;
	},
	[GET_NOTIFICATIONS](state, response) {
		state.notifications = response;
	},
	[ADD_NOTIFICATION](state, data) {
		const foundData = state.notifications.find(item => item._id === data._id);
		if (!foundData) {
			state.notifications.unshift(data);
		}
	},
	[GET_BANKS](state, data) {
		state.banks = data;
	},
	saveRouteLink(state, data) {
		state.routeLink = data;
	},
	clearRouteLink(state) {
		state.routeLink = '';
	},
	[UPDATE_STATISTICS](state, data) {
		state.statistics = data;
	},
	[SET_ERROR](state, data) {
		state.error = data;
	}
};
