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
                                <input type="text" id="username" class="form-control" v-model="formData.email" placeholder="merxport@example.com" required>
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
export default {
    setup() {
        
    },
}
</script>
<style scoped>
    .btn {
        width: 100%;
    }
</style>
