<template>
  <body class="success-body">
      <div class="s-card">
      <div class="text-center">
        <img src="../assets/images/success.gif" />
      </div>
        <h1 class="s-h1">Success</h1> 
        <h3 style="color:#f79595;margin-bottom:20px">Thankyou for Subscription</h3>
        <p class="s-p">We received your purchase request;<br/> we'll be in touch shortly!</p>
       <router-link to="./" class="
              transition-color
              duration-400
              ease-in-out
              font-xxs
              center
              border-box
              lh-default
              dib
              pt-xxs
              pl-sm
              pr-sm
              pb-xxs
              brad-2
              font-bold
              bw
              b-solid
              header-nav-button-font-size
              bg-blue
              hover-bg-blue-dark
              focus-bg-blue-dark
              white
              b-solid
              bw
              bc-transparent
              focus-bc-gray-darkest-alpha-50
              btn-blue
              w-100
              dib-ns
              va-m
              white
            " style="width:33%!important;"><span class="truncate ma-0" style="color:#fff;">Back to Home</span></router-link>
      </div>
    </body>
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
            isHas: false,
            passshow: 'password',
            username: '',
            password: '',
            role: '',
            token: localStorage.getItem('token'),
            msg: []
        }
    },
    mounted() {
        // this.login()
        this.uid = localStorage.getItem('user')
        this.removeCoupon()
        this.goToTop()
    },
    methods: {
        goToTop() {
            document.body.scrollTop = 0
            document.documentElement.scrollTop = 0
        },
        removeCoupon() {
        var coupon =  localStorage.getItem('coupon')
        if (coupon>0) {
                  localStorage.removeItem("coupon");
                  localStorage.removeItem("coupon_name");
                  }
              }
          }
        }
</script>
 <style>
      .success-body {
        text-align: center;
        padding: 40px 0;
        background: #EBF0F5;
      }
        .s-h1 {
          color: #88B04B;
          font-family: "Nunito Sans", "Helvetica Neue", sans-serif;
          font-weight: 900;
          font-size: 40px;
          margin-bottom: 10px;
        }
        .s-p {
          color: #404F5E;
          font-family: "Nunito Sans", "Helvetica Neue", sans-serif;
          font-size:20px;
          margin: 0;
        }
      .s-i {
        color: #9ABC66;
        font-size: 100px;
        line-height: 200px;
        margin-left:-15px;
      }
      .s-card {
        background: white;
        padding: 60px;
        border-radius: 4px;
        box-shadow: 0 2px 3px #C8D0D8;
        display: inline-block;
        margin: 0 auto;
      }
    </style>