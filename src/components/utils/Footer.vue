<template>
  <div>
    <footer v-if="type === 'normal'" role="contentinfo" class="main-footer bg-blue-sky">
      <div class="container">
        <div class="footerTop footerRow">
          <div class="row">
            <div class="offset-md-3 col-md-6 text-center">
              <h2 class="title title_lg margin-b-30">Start Trading now</h2>
              <p
                class="hero_blub"
              >Trade Bitcoin, Dash, Ethereum, and other cryptocurrencies in minutes.</p>
              <div class="dashboard-cta">
                <router-link
                  :to="{ name: 'userRegister'}"
                  class="btn btn-blue-black margin-b-15"
                >Get started</router-link>
                <router-link :to="{ name: 'exchange' }" class="btn btn-trans-bw margin-b-15">visit exchange</router-link>
              </div>
            </div>
          </div>
        </div>

        <div class="footerBottom footerRow">
          <div class="row">
            <div class="col-md-4 brandBlock">
              <div class="footer_block">
                <div class="brand_media">
                  <a href>
                    <img :src="`${$baseImageUrl}/icons/logo_black.svg`" alt="Logo" />
                  </a>
                </div>

                <ul class="social-media">
                  <li>
                    <a href="#">
                      <span class="fa-stack">
                        <i class="fa fa-circle fa-stack-2x"></i>
                        <i class="fa fa-facebook fa-stack-1x"></i>
                      </span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <span class="fa-stack">
                        <i class="fa fa-circle fa-stack-2x"></i>
                        <i class="fa fa-twitter fa-stack-1x"></i>
                      </span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <span class="fa-stack">
                        <i class="fa fa-circle fa-stack-2x"></i>
                        <i class="fa fa-youtube fa-stack-1x"></i>
                      </span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <span class="fa-stack">
                        <i class="fa fa-circle fa-stack-2x"></i>
                        <i class="fa fa-linkedin fa-stack-1x"></i>
                      </span>
                    </a>
                  </li>
                </ul>

                <div class="copyright_notice margin_bottom_md">
                  <p>&copy; Copyright 2018, Rabaflow Inc. All rights reserved.</p>
                </div>
              </div>
            </div>
            <div class="col-md-8 brandNav">
              <div class="row">
                <div class="col-sm-6 col-md-4 footer_block">
                  <div class="ft_block_header">
                    <h3 class="item_title caps_upper txt-color-primary">Platform</h3>
                  </div>
                  <ul class="ft_nav_block">
                    <li>
                      <router-link :to="{ name: 'home'}">Home</router-link>
                    </li>
                    <li>
                      <router-link :to="{ name: 'userLogin'}">My Account</router-link>
                    </li>
                    <li>
                      <router-link :to="{ name: 'user.marketplace'}">Buy Coins</router-link>
                    </li>
                    <li>
                      <router-link :to="{ name: 'user.marketplace'}">Sell Coins</router-link>
                    </li>
                    <li>
                      <router-link :to="{ name: 'exchange'}">Crypto Exchange</router-link>
                    </li>
                  </ul>
                </div>
                <div class="col-sm-6 col-md-4 footer_block">
                  <div class="ft_block_header">
                    <h3 class="item_title caps_upper txt-color-red">Support</h3>
                  </div>
                  <ul class="ft_nav_block">
                    <!-- TODO: Create and change router links that don't have their corresponding routes -->
                    <li>
                      <router-link :to="{ name: 'home'}">Get Help</router-link>
                    </li>
                    <li>
                      <router-link :to="{ name: 'home'}">Contact Us</router-link>
                    </li>
                    <li>
                      <router-link :to="{ name: 'home'}">AML/KYC Policy</router-link>
                    </li>
                    <li>
                      <router-link :to="{ name: 'terms'}">Terms of Use</router-link>
                    </li>
                    <li>
                      <router-link :to="{ name: 'privacy'}">Privacy Policy</router-link>
                    </li>
                  </ul>
                </div>
                <div class="col-sm-12 col-md-4 footer_block">
                  <div class="ft_block_header">
                    <h4 class="item_title caps_upper txt-color-orange">Subscribe</h4>
                  </div>
                  <p>Get notifications about the what’s happening in crypto-currency in your inbox. Subscribe to our newsletter.</p>
                  <form class="footer-form margin-t-30">
                    <input type="search" placeholder="Your email address" class="form-control" />
                    <input type="submit" value="subscribe Now" class="submitBtn btn-block" />
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
    <footer class="footer-nav" v-else-if="type === 'auth'">
      <p class="copyright">&copy; {{new Date().getFullYear()}}, Rabaflow Inc. All Rights Reserved.</p>
      <figure class="brand">
        <router-link :to="{ name: 'home' }">
          <img :src="`${$baseImageUrl}/icons/logo.svg`" alt="Rabaflow icon" />
        </router-link>
      </figure>
      <nav class="navigation">
        <ul class>
          <li>
            <router-link :to="{ name: 'home'}">Home</router-link>
          </li>
          <li>
            <router-link :to="{ name: 'exchange'}">Exchange</router-link>
          </li>
          <li>
            <router-link :to="{ name: 'user.marketplace'}">Buy/Sell</router-link>
          </li>
          <li>
            <router-link :to="{ name: 'terms'}">Terms of Use</router-link>
          </li>
          <li>
            <router-link :to="{ name: 'privacy' }">Policies</router-link>
          </li>
        </ul>
      </nav>
    </footer>
  </div>
</template>

<script>
export default {
  props: {
    type: {
      required: false,
      default: 'normal',
      type: String,
      enum: ['normal', 'auth']
    }
  }
};
</script>