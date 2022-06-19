<template>
  <div>
    <header class="main-nav">
      <div class="wrapper">
        <div class="brand">
          <router-link :to="{ name: 'home'}">
            <img :src="`${$baseImageUrl}/icons/logo_white.svg`" alt="Rabaflow Logo" />
            <span class="app_status">Beta</span>
          </router-link>
        </div>
        <nav class="nav-box">
          <ul class="navigation-list ">
            <li v-if="isToken" :class="[$route.name === 'dashboard' ? active : '']">
              <router-link :to="{ name: 'dashboard' }">Dashboard</router-link>
            </li>
            <li
              :class="[$route.name === 'user.marketplace' || $route.path.includes('marketplace') ? active : '']"
            >
              <router-link :to="{ name: 'user.marketplace'}">Buy/Sell</router-link>
            </li>
            <li>
              <router-link :to="{ name: 'exchange' }">Exchange</router-link>
            </li>
            <li :class="orderActive">
              <router-link @click.native="toggleMenu" :to="{ name: 'orders.all'}">My Orders</router-link>
            </li>
            <li :class="[$route.name === 'wallet' ? active : '']">
              <router-link @click.native="toggleMenu" :to="{ name: 'wallet' }">Wallet</router-link>
            </li>
          </ul>
        </nav>

        <div class="right-nav">
          <div class="notification dropdown" v-if="isToken">
            <a href data-toggle="dropdown" class="my-profile loading" aria-expanded="false">
              <i class="fa fa-bell"></i>
              <loading v-if="loadingNotification" :smallSpinner="true" />
              <span
                class="notificationCount"
                v-if="unReadNotifications.length !== 0"
              >{{unReadNotifications.length}}</span>
            </a>
            <div class="dropdown-menu notificationsPanel">
              <header class="widgetPanelHeader">
                <h4 class="title caps_upper">Notifications</h4>
              </header>
              <div class="notificationsBody">
                <ul class="notification-list">
                    <header-notify-component v-for="(n, index) in unReadNotifications.slice(0, 3)" :key="index" :notification="n" :header="true" />
                </ul>
              </div>
              <div class="widgetPanelFooter" v-if="notifications.length !== 0">
                <router-link :to="{ name: 'notifications'}" class="widgetCTA">See All</router-link>
              </div>
            </div>
          </div>
          <nav class="user-account dropdown" v-if="isToken">
            <a href data-toggle="dropdown" class="my-profile" aria-expanded="false">
              <span class="user-information">
                <div class="avatar" style="overflow: hidden;">
                  <avatar :user="user" />
                </div>
                <span class="profile-name">{{firstName}} {{lastName}}</span>
              </span>
            </a>
            <ul class="dropdown-menu">
              <!-- <li><a href="index.html">Dashboard</a></li> -->
              <li>
                <router-link :to="{ name: 'user.profile' }">Profile</router-link>
              </li>
              <li>
                <a @click.prevent="logOut" href>Logout</a>
              </li>
            </ul>
          </nav>
          <nav class="nav-cta" v-else>
            <router-link :to="{name: 'userLogin'}" class="sign-in">Log In</router-link>
            <router-link :to="{name: 'userRegister'}" class="register">Sign Up</router-link>
            <router-link class="get-started" id="get-started" data-toggle="collapse"
              :to="{name: 'userRegister'}" aria-expanded="false" aria-controls="get-started-cta"
            >Get Started</router-link>
          </nav>
          <div class="home-button bg-white-trans">
            <button class="hamburger hamburger--spring menu-btn" type="button" @click="toggleMenu">
              <span class="hamburger-box">
                <span class="hamburger-inner"></span>
              </span>
            </button>
          </div>
        </div>
      </div>
    </header>
  </div>
</template>

<script>
import { mapState, mapActions, mapGetters } from 'vuex';
import { isEmpty } from '@/helper-functions';
import HeaderNotifyComponent from '@/components/dashboard/HeaderNotifyComponent';
import Avatar from '@/components/utils/Avatar';
import moment from 'moment';

export default {
  data() {
    return {
      active: 'active',
      loadingNotification: false,
      moment
    };
  },
  computed: {
    ...mapState(['user', 'notifications']),
    ...mapGetters(['unReadNotifications', 'isToken']),
    firstName() {
      if (!isEmpty(this.user)) {
        return this.user.firstName;
      }
      return '';
    },
    lastName() {
      if (!isEmpty(this.user)) {
        return this.user.lastName;
      }
      return '';
    },
    orderActive() {
      switch (this.$route.name) {
        case 'orders.all':
          return this.active;
        case 'orders.pending':
          return this.active;
        case 'orders.cancelled':
          return this.active;
        case 'orders.completed':
          return this.active;
        default:
          return '';
      }
    }
  },
  methods: {
    ...mapActions(['logout_user']),
    logOut() {
      this.logout_user();
      this.$router.push('/');
    },
    toggleMenu() {
      if (!window.$('.home-button').is(':visible')) {
        return;
      }

      window.$('.menu-btn').toggleClass('is-active');
      window.$('.main-nav .nav-box .navigation-list').slideToggle();
      window.$('body').toggleClass('noScroll');
      window.$('.main-content').toggleClass('open');
    }
  },
  created() {},
  updated() {},
  components: {
    HeaderNotifyComponent,
    Avatar
  }
};
</script>