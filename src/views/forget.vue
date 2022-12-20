<template>
 <div class="page-wrapper">
        <!-- Start header -->
        <Header />
        <!-- end of header -->
        <!-- login-area start -->
        <div class="tp-login-area">
            <div class="container">
                <div class="row">
                    <div class="col-lg-12">
                        <form class="tp-accountWrappers col-lg-6 col-md-6 col-12" action="#">
                            
                            <div class="tp-accountForm form-style">
                                <div class="fromTitle">
                                    <h2>Reset Password</h2>
                                    <p>Sign into your pages account</p>
                                </div>
                                <div class="row">
                                    <div class="col-lg-12 col-md-12 col-12">
                                        <label>Email</label>
                                        <input type="text" v-model="email" id="email" name="email" placeholder="Email Address">
                                    </div>
                                    <div class="col-lg-12 col-md-12 col-12">
                                        <button type="button" @click="forget" class="tp-accountBtn">Send OTP</button>
                                    </div>
                                </div>
                                <h4 class="or"><span>OR</span></h4>
                               
                                <p class="subText">Don't have an account? <router-link :to="{name:'registration'}">Create free
                                        account</router-link></p>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
        <!-- login-area end -->
        <!-- start of tp-site-footer-section -->
        <Footer />
        <!-- end of tp-site-footer-section -->

    </div>
</template>

<script>
import Header from '@/components/navbar'
import Footer from '@/components/footer'
export default {
    components: {
        Header,
        Footer
    },
    data() {
        return {
            email: '',
            password: '',
            role: '',
            token: localStorage.getItem('token'),
            msg: []
        }
    },
    mounted() {
        // this.login()
        this.uid = localStorage.getItem('user')
        this.check()
   this.goToTop ()

    },
    methods: {
        check() {
            if (this.uid != null) {
                window.location.href = 'myaccount';
            }
        },
        forget() {
            var vi = this
            const axios = require('axios')
            if (this.email === '') {
                this.$toasted.global.error({
                    message: 'Please enter Your Email'
                })
            } else {
                        localStorage.setItem('forgotemail', this.email)
                axios({
                    method: 'POST',
                    url: this.$root.URL_ROOT + 'api.php',
                    data: {
                        type: 'forgot',
                        email: this.email
                    }
                }).then(function (response) {
                    var data = response.data
                    console.log(response)
                    if (data.status === 'success') {
                        vi.$toasted.global.success({
                            message: 'An OTP Code Send To Your Email Address Please Check...'
                        })
                        // window.location.href = 'resetpassword';
                        vi.$router.push({ name: 'resetpassword' });
                    } else {
                        // vi.$toasted.global.error({
                        //     message: data.msg
                        // })
                         vi.$toasted.global.success({
                            message: 'An OTP Code Send To Your Email Address Please Check...'
                        })
                        // window.location.href = 'resetpassword';
                        vi.$router.push({ name: 'resetpassword' });
                    }
                })
            }
            return false
        }
    }
}
</script>
