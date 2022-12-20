<template>
<body class="login-screen">
    <div id="__next">
        <div>
            <div>
                <div class="w-100" style="height: 60px"></div>
                <Header />
            </div>

            <main id="main-content">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-4 offset-lg-4 login-area">
                            <div class="main">
                                <div class="header">
                                    <h3 class="py-3 font-times">Sign In</h3>
                                  
                                    <p class="py-3 " v-if="showpass"> <strong class="bold"> {{fields.username}} </strong> <span @click="changeMail" class="underline pointer">Change</span></p>
                                </div>
                                <div class="form">
                                    <form novalidate="" data-qa="login-form" class="signin-fields">
                                        <div class="sl-input">
                                            <label for="username" class="focus-within flex flex-column w-100 relative">
                                                <div class="w-100 relative" data-sc-v="6.4.8" data-sc-c="input">
                                                    <input id="username" placeholder="Email address" v-if="!showpass" name="email" type="email" v-model="fields.username" class="
                                border-box
                                brad-2
                                no-shadow
                                b-solid
                                bw
                                font-light font-xxs font-sans-serif
                                pl-xs
                                pr-sm
                                pb-0
                                w-100
                                focus-bc-blue
                                outline-none
                                transition-colors transition-font-size
                                duration-400
                                ease-in-out
                                h-xl
                                lh-xl
                                focused-pt-sm
                              " />
                                                </div>
                                            </label>
                                        </div>
                                        <input type="password" v-model="fields.password" v-if="showpass" placeholder="Password" name="password" class="
                                border-box
                                brad-2
                                no-shadow
                                b-solid
                                bw
                                appearance-none
                                font-light font-xxs font-sans-serif
                                pl-xs
                                pr-sm
                                pb-0
                                w-100
                                focus-bc-blue
                                outline-none
                                transition-colors transition-font-size
                                duration-400
                                ease-in-out
                                h-xl
                                lh-xl
                                focused-pt-sm
                              " />
                                        <button class="
                          inline-flex
                          items-center
                          justify-center
                          lh-md
                          overflow-hidden
                          border-box
                          min-w-btn
                          transition-colors
                          duration-200
                          ease-in-out
                          font-sans-serif font-bold
                          antialiased
                          subs-theme
                          bg-blue
                          hover-bg-blue-dark
                          focus-bg-blue-dark
                          white
                          b-solid
                          bw
                          bc-transparent
                          focus-bc-gray-darkest-alpha-50
                          mt-sm
                          mb-xs
                          brad-lg
                          pl-md
                          pr-md
                          h-md
                          pt-0
                          pb-0
                          w-100
                          pointer
                        " data-cy="login-btn" @click="login" type="button" v-if="signCheck">
                                            Next
                                        </button>
                                        <button class="font-times
                          inline-flex
                          items-center
                          justify-center
                          lh-md
                          overflow-hidden
                          border-box
                          min-w-btn
                          transition-colors
                          duration-200
                          ease-in-out
                          font-sans-serif font-bold
                          antialiased
                          subs-theme
                          bg-blue
                          hover-bg-blue-dark
                          focus-bg-blue-dark
                          white
                          b-solid
                          bw
                          bc-transparent
                          focus-bc-gray-darkest-alpha-50
                          mt-sm
                          mb-xs
                          brad-lg
                          pl-md
                          pr-md
                          h-md
                          pt-0
                          pb-0
                          w-100
                          pointer
                        " data-cy="login-btn" @click="login" type="button" v-else>
                                            Sign In
                                        </button>
                                    </form>

                                    <div>
                                        <div class="helper-text"><span>or</span></div>

                                        <div class="social-button-area">
                                            <div class="row social-button-row">
                                                <div class="column">
                                                    <facebook-login class=" inline-flex
                                items-center
                                justify-center
                                lh-md
                                overflow-hidden
                                border-box
                                min-w-btn
                                transition-colors
                                duration-200
                                ease-in-out
                                font-sans-serif font-bold
                                antialiased
                                bg-white
                                hover-bg-gray-lighter
                                focus-bg-gray-lighter
                                offblack
                                b-solid
                                bw
                                bc-gray-light
                                hover-bc-gray-light
                                focus-bc-gray-darkest-alpha-50
                                social-btn
                                font-sans-serif font-light font-xxs
                                mb-xs
                                brad-lg
                                pl-md
                                pr-md
                                h-md
                                pt-0
                                pb-0
                                w-100
                                pointer" style="background-color:#4864b4 !important;"
      appId="657951751965460"
      @login="getUserData"
      @logout="onLogout"
      @get-initial-status="getUserData">
    </facebook-login>
                                                    <!-- <button @click="AuthProvider('facebook')" class="
                                inline-flex
                                items-center
                                justify-center
                                lh-md
                                overflow-hidden
                                border-box
                                min-w-btn
                                transition-colors
                                duration-200
                                ease-in-out
                                font-sans-serif font-bold
                                antialiased
                                bg-white
                                hover-bg-gray-lighter
                                focus-bg-gray-lighter
                                offblack
                                b-solid
                                bw
                                bc-gray-light
                                hover-bc-gray-light
                                focus-bc-gray-darkest-alpha-50
                                social-btn
                                font-sans-serif font-light font-xxs
                                mb-xs
                                brad-lg
                                pl-md
                                pr-md
                                h-md
                                pt-0
                                pb-0
                                w-100
                                pointer
                              " title="" type="button" data-qa="auth--facebook">
                                                        <div class="
                                  flex flex-row
                                  justify-center
                                  h-100
                                  items-center
                                ">
                                                            <div class="mr-xs flex items-center">
                                                                <svg class="content-box fill-facebook" width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" name="facebook" aria-hidden="true" focusable="false" role="img" data-sc-v="6.4.8" data-sc-c="iconbase">
                                                                    <title data-sc-v="6.4.8" data-sc-c="iconbase">
                                                                        Facebook
                                                                    </title>
                                                                    <path d="M12 2C6.477 2 2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12c0-5.523-4.477-10-10-10" fill-rule="evenodd" data-sc-v="6.4.8" data-sc-c="iconbase"></path>
                                                                </svg>
                                                            </div>
                                                            <span class="center font-light">Continue with Facebook</span>
                                                        </div>
                                                    </button> -->
                                                    <button  @click="AuthProvider('google')" class="
                                inline-flex
                                items-center
                                justify-center
                                lh-md
                                overflow-hidden
                                border-box
                                min-w-btn
                                transition-colors
                                duration-200
                                ease-in-out
                                font-sans-serif font-bold
                                antialiased
                                bg-white
                                hover-bg-gray-lighter
                                focus-bg-gray-lighter
                                offblack
                                b-solid
                                bw
                                bc-gray-light
                                hover-bc-gray-light
                                focus-bc-gray-darkest-alpha-50
                                social-btn
                                font-sans-serif font-light font-xxs
                                mb-xs
                                brad-lg
                                pl-md
                                pr-md
                                h-md
                                pt-0
                                pb-0
                                w-100
                                pointer
                              " title="" type="button" data-qa="auth--google">
                                                        <div class="
                                  flex flex-row
                                  justify-center
                                  h-100
                                  items-center
                                ">
                                                            <div class="mr-xs flex items-center">
                                                                <img class="ma-auto w-xxs" src="https://www.washingtonpost.com/wp-stat/paywall/USW/images/google-icon.png" alt="Login with Google" />
                                                            </div>
                                                            <span class="center font-light">Continue with Google</span>
                                                        </div>
                                                    </button>
                                                   
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="signup">
                                        <div class="center">
                                            Need an account ?&nbsp;<span class="redirect-link gray-dark underline" tabindex="0">
                                               <router-link :to="{name : 'SignIn'}"> Sign In </router-link> </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="setup-account"></div>
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                            <div id="google-root"></div>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    </div>
</body>
</template>

<script>
import axios from "axios";
import Header from "@/components/Header";
import Footer from "@/components/Footer-v2";
import VueRecaptcha from "vue-recaptcha";
import VueSocialauth from "vue-social-auth";
import facebookLogin from "facebook-login-vuejs";

import {
    ValidationProvider,
    ValidationObserver
} from "vee-validate";

export default {
    components: {
        Header,
        Footer,
        VueRecaptcha,
        ValidationProvider,
        ValidationObserver,
        VueSocialauth,
        facebookLogin
    },
    data() {
        return {
            isConnected: false,
    name: '',
    email: '',
    personalID: '',
    picture: '',
    FB: undefined,

            showpass: false,
            signCheck: false,
            isHas: false,
            passshow: "password",
            passshows: "password",
            uid: localStorage.getItem("user"),
            reCap: false,
            fields: {
                type: "userlogin",
                username: "",
                password: "",
                ip_address: JSON.parse(localStorage.getItem("ip_address")),
            },
        };
    },
    mounted() {
        this.uid = localStorage.getItem("user");
        this.check();
        this.goToTop();
    },
    methods: {

    loginSocial(token){
        var vi = this
    this.fields= {
        name : token.name,
        username : token.email,
        password : token.email,
        type: "socialsignup",
    }
    axios({
                    method: "POST",
                    url: this.$root.URL_ROOT + "api.php",
                    data: this.fields,
                }).then(function (response) {
                    var data = response.data;
                    console.log(data);
                    if (data.status === "success") {
                        localStorage.setItem("user", data.data);
                        localStorage.setItem("token", data.data);
                        vi.$toasted.global.success({
                            message: "Login Success Please wait...",
                        });
                        // window.location.href = "./myaccount";
                            vi.$router.push('myaccount');
                    } else {
                        vi.$toasted.global.error({
                            message: data.msg,
                        });
                    }
                });
    },
   getUserData() {
       var vi = this;
        FB.api('/me', {fields: 'id,name,email,picture'}, function (response) {
        console.log(response);
        var data = response
        if(data.id>0){
        vi.loginSocial(data)
        }
        });
},
    sdkLoaded(payload) {
      this.isConnected = payload.isConnected
      this.FB = payload.FB
      if (this.isConnected) this.getUserData()
    },
    onLogin() {
      this.isConnected = true
      this.getUserData()
    },
    onLogout() {
      this.isConnected = false;
    },
        AuthProvider(provider) {
        var self = this;
        this.$auth
        .authenticate(provider)
        .then((response) => {
        console.log(response);
        self.SocialLogin(provider, response);
        })
        .catch((err) => {
        console.log({ err: err });
        });
    },
    SocialLogin(provider, response) {
      this.$http
        .post(
          "./" + provider,
          response
        )
        .then((response) => {
          console.log('login',response.data);
        })
        .catch((err) => {
          console.log({ err: err });
        });
    },
        markRecaptchaAsVerified(response) {
            this.pleaseTickRecaptchaMessage = "This field is required";
            this.recaptchaVerified = true;
        },
        switchLoc() {
            var vali = this.$refs.form.validate();
            if (!this.recaptchaVerified) {
                this.pleaseTickRecaptchaMessage = "Please tick recaptcha.";
                this.reCap = true;
                // console.log(this.reCap);
            } else {
                this.reCap = false;
                vali.then((val) => {
                    if (val == true) {
                        this.signup();
                    }
                });
            }
        },
        goToTop() {
            document.body.scrollTop = 0;
            document.documentElement.scrollTop = 0;
        },
        check() {
            if (this.uid != null) {
                window.location.href = "myaccount";
            }
        },
         changeMail(){
            this.showpass = false;
        },
        login() {
            if (this.fields.username === "") {
                this.$toasted.global.error({
                    message: "Please enter Email",
                });
            } else if (this.fields.password === "") {
                if (this.fields.password === "" && this.showpass === "") {
                    this.$toasted.global.error({
                        message: "Please enter password",
                    });
                }
                this.showpass = true;
            } else {
                var vi = this;
                axios({
                    method: "POST",
                    url: this.$root.URL_ROOT + "api.php",
                    data: this.fields,
                }).then(function (response) {
                    var data = response.data;
                      if (data.status === "success") {
                        localStorage.setItem("user", data.session.uid);
                        localStorage.setItem("token", data.session.uid);
                        vi.$toasted.global.success({
                            message: "Login Success Please wait...",
                        });
                         vi.$router.push('/');
                    } else {
                        vi.$toasted.global.error({
                            message: data.msg,
                        });
                    }
                });
            }
        },
    },
};
</script>
