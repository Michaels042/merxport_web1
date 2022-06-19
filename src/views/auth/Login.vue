<template>
  <section class="hero-login">
        <div class="overlay-left">
            <div class="left-log">
                <div class="logo">
                     <img :src="`${$baseImageUrl}/MerxLogo-White.svg`" alt />
                </div>
                <div class="foreground">
                    <p>
                        If you encounter any issues creating an account or
                        loggin in, kindly contact us immediately
                    </p>
                </div>   
            </div>

            <div class="center-log">
                <div class="center-content">
                    <button>
                        <router-link to="./"><i class="fas fa-times"></i>Return To MerxPort Homepage</router-link>
                    </button>
        
                    <form @submit.prevent="login" novalidate>   
                        <h1>Login</h1>
        
                        <div class="form-group">
                            <div>
                                <label for="name">Phone Number or Email Address</label><br>
                                <input type="text" id="username" class="form-control" v-model="formData.username" placeholder="merxport@example.com" required>
                            </div>

                            <div>
                                <label for="password">Password</label><br>
                                <input type="password" id="password" class="form-control" v-model="formData.password" placeholder="At least four characters" required>
                            </div>
                            <p>
                                <a href="#">Forgot Password</a>
                            </p>
                        </div>
                        <app-button
                        type="submit"
                        :disabled="checkFields"
                        :loading="loading"
                         buttonText="Login" />
                        <!-- <span>
                            <input type="submit" class="btn" value="Login">
                        </span> -->
                        <div>
                            <span>
                                No Account yet?
                            </span>
                            <span class="register">
                                <router-link to="registration">Register</router-link>
                            </span>
                        </div>
                    </form>
                </div>
                
                <div class="center-footer">
                    <div class="foot-link">
                        <a href="#"><img :src="`${$baseImageUrl}/FB.svg`" alt="facebook" />Facebook</a>
                    </div>
    
                    <div class="foot-link">
                        <a href="#"><img :src="`${$baseImageUrl}/Google.svg`" alt="google">Google</a>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
    import AppButton from "@/components/utils/SubmitButton";
    import { mapActions, mapState, mapMutations } from 'vuex';

    export default {
        name: "Login",
            components: {
                AppButton,
            },  
        data() {
            return {
            loading: false,
            resending: false,
            formData: {
                username: '',
                password: ''
            },
            message: ''
            };
        },
        computed: {
            ...mapState(['routeLink']),
            checkFields() {
            if (this.formData.username === '') {
                return true;
            }
            if (this.formData.password === '') {
                return true;
            }
            return false;
            }
        },
        methods: {
            ...mapActions(['get_contact', 'logout_user']),
            ...mapMutations(['clearRouteLink']),
            login() {
            this.loading = true;
            const formData = { ...this.formData };
            this.$store
                .dispatch('login_user', formData)
                .then((response) => {
                this.loading = false;
                if (response.emailVerified) {
                    this.get_contact();
                    this.message = '';
                    if (this.routeLink) {
                    this.$router.push(
                        {
                        name: this.routeLink.name,
                        params: this.routeLink.params,
                        query: this.routeLink.query
                        },
                        this.clearRouteLink()
                    );
                    // this.clearRouteLink();
                    } else {
                    this.$router.push('/home');
                    }
                } else {
                    this.logout_user();
                    this.message = 'Your account is not verified. Please go to your email to verify your account.';
                    // this.$toastr.success('Your account is not verified. Please go to your email to verify your account');
                    // this.clearMessage();
                }
                })
                .catch((error) => {
                this.$toastr.error(error);
                this.loading = false;
                });
            },
            resendLink() {
            this.resending = true;
            this.$http
                .post('verification/resend', { email: this.formData.username })
                .then((response) => {
                this.$toastr.success(
                    'Link has been resent to your email, check your mail'
                );
                this.resending = false;
                })
                .catch((error) => {
                this.$toastr.error(error);
                this.resending = false;
                });
            },
            clearMessage() {
            setTimeout(() => {
                this.message = '';
            }, 10000);
            }
        },
        created() {
            const token = localStorage.getItem('token');
            const user = JSON.parse(localStorage.getItem('user'));
            if (token && user) {
            this.$router.push('dashboard');
            }
        },
        beforeRouteEnter(to, from, next) {
            next();
        },
        beforeRouteUpdate(to, from, next) {
            next();
        },
        // components: {
        //     Header
        // }
    };
</script>

<style scoped>
    .btn {
        width: 100%;
    }
</style>
