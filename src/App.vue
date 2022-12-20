<template>
  <div id="app" >
    <router-view />
  </div>
</template>
<script>
import axios from "axios";
require("./assets/css/style.css");
require("./assets/css/bootstrap.min.css");
require("./assets/css/3610ecb4adedc30e4584.css");
require("./assets/css/0093d6031c497221edfe.css");
require("./assets/css/13220f8e201d50f1c5da.css");

export default {
  data() {
    return {
      ip_address: JSON.parse(localStorage.getItem("ip_address")),
      ratings: 0,
    };
  },
  mounted() {
    this.goToTop();
    //  this.getConfig()
    this.myIpData();
    this.ip_address = JSON.parse(localStorage.getItem("ip_address"));
    this.uid = localStorage.getItem("user");
    this.setRatings();
    this.update();
    // $("#app").on("contextmenu",function(e) {
    //     return false;
    // });
    document.oncontextmenu = new Function("return false;");

        //     $(document).ready(function(){
        //       $(function() {
        //         $(this).bind("contextmenu", function(event) {
        //             event.preventDefault();
        //             alert('Right click disable in this site!!')
        //         });
        //     });
        // });
  },
  methods: {
    update () {
      const param = {
        type: 'l_time'
      }
      axios({
        method: 'POST',
        url: this.$root.URL_ROOT + 'api.php',
        data: param
      }).then(function (response) {
        const data = response.data
       // console.log('status', data)
      })
    },
    setRatings() {
      var ev = this;
      axios
        .post(this.$root.URL_ROOT + "api.php?type=setRating")
        .then(function (response) {
          var data = response.data;
          // console.log(response)
          if (data.status == "success") {
            ev.ratings = data.data;
          }
        });
    },
    // async getConfig () {
    //   const response = await axios.get(this.$root.URL_ROOT + 'api.php?type=linksdetails')
    //   this.$store.commit('getConfig', response.data.data)
    // },
    goToTop() {
      document.body.scrollTop = 0;
      document.documentElement.scrollTop = 0;
    },
    myIpData() {
      var ip_address = JSON.parse(localStorage.getItem("ip_address"));

      if (ip_address == null) {
        var min = 100000;
        var max = 999999;
        var num = Math.floor(Math.random() * (max - min + 1)) + min;
        localStorage.setItem("ip_address", JSON.stringify(num));
      }
    },
  },
};
</script>
<style>
/* @import url(https://fonts.googleapis.com/css?family=PT+Sans:400,700);
@import url(https://fonts.googleapis.com/css?family=Oswald:300,400,500,600,700);*/
/* @import url(https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.6.3/css/font-awesome.css);  */
/*@import url(https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css);*/
@import url('https://fonts.googleapis.com/css2?family=Lato&display=swap');

 body,
    figure,
    h1,
    h2,
    h3,
    h4,
    h5,
    h6,
    p,
    strong,
    span,
    a {
        /*font-family: Oswald, Arial, Helvetica, "Nimbus Sans L", sans-serif !important;*/
        /*font-family: 'Ubuntu', sans-serif !important;*/
        font-family: 'lato' !important;
}
  @font-face {
        font-family: Oswald, Arial, Helvetica, "Nimbus Sans L", sans-serif;
        src: url('./assets/css/nimbus-sans-l.regular.otf');
      }
        @font-face {
        font-family: 'Times New Roman', Times, serif;
        src: url('./assets/css/times-new-roman.ttf');
      }
.font-times{
        /*font-family: 'Times New Roman', Times, serif !important;*/
       /*font-family: 'Ubuntu', sans-serif !important;*/
       font-family: 'lato' !important;
}
h1.detail-heading span h5 strong {
    font-size: 46px;
}
.border-bottom {
  border-bottom: 1px solid #e9e9e9;
}
.detail-heading{
    /*font-family: 'Times New Roman', Times, serif !important;*/
   /*font-family: 'Ubuntu', sans-serif !important;*/
   font-family: 'lato' !important;
    font-size: 38px;
    line-height: 40px;
    font-weight: bold;
    font-style: normal;
    text-transform: none;
    text-decoration: none;
    margin-bottom: 30px;
}
.post-heading {
    /*font-family: 'Times New Roman', Times, serif !important;*/
    /*font-family: 'Ubuntu', sans-serif !important;*/
    font-family: 'lato' !important;
    font-size: 16px;
    line-height: 25px;
    font-weight: bold;
    font-style: normal;
    text-transform: none;
    text-decoration: none;
}
.post-content {
    /*font-family: 'Times New Roman', Times, serif !important;*/
    /*font-family: 'Ubuntu', sans-serif !important;*/
    font-family: 'lato' !important;
    font-size: 15px;
    line-height: 25px;
    font-weight: normal;
    font-style: normal;
}
.post-content p{
    /*font-family: 'Times New Roman', Times, serif !important;*/
   /*font-family: 'Ubuntu', sans-serif !important;*/
   font-family: 'lato' !important;
    font-size: 15px;
    line-height: 25px;
    font-weight: normal;
    font-style: normal;
}
.post-content span{
    /*font-family: 'Times New Roman', Times, serif !important;*/
   /*font-family: 'Ubuntu', sans-serif !important;*/
   font-family: 'lato' !important;
    font-size: 15px;
    line-height: 25px;
    font-weight: normal;
    font-style: normal;
}
.post-content p span{
    /*font-family: 'Times New Roman', Times, serif !important;*/
    font-size: 16px;
    line-height: 15px;
    font-weight: normal;
    font-style: normal;
}
.story-post{
  /* display: flex;
    justify-content: space-between; */
    max-width: 70%;
    margin: auto;
}
.detail-by{
      display: flex;
    align-items: center;
    justify-content: space-around;
    width: 130px;
}
.detail-date {
  color: #a9a9a9;
}
.share-post{
  width: 730px;
    max-width: 100%;
    height: 100%;
    padding: 30px 20px 30px 0;
    margin: 0 -1px 0 0;
   
}
.post-detail {
      padding: 30px 0 30px 40px;
    border-left-width: 1px;
    border-left-style: solid;
    border-right-width: 0;
    border-right-style: solid;
    border-color: rgba(212,212,212,.5);

}
.btn:hover{
  color:#aaaaaa;
}
.pt-8{
  padding-top: 8px !important;
}
.search-bar-show{
  width: 200px;
    height: 42px;
    line-height: 20px;
    transition: all 0.25s cubic-bezier(0.49, 0.37, 0.45, 0.71) 0s;
    padding: 10px;
    margin-bottom: 12px;
}
.search-bar{
  position: absolute;
    right: 0px;
}
.search-btn {
    background-color: transparent !important;
    border: none !important;
    color: #000 !important;
}
.product-wrap .product-item .product-related-content {
  padding: 20px;
  background: #fff;
  text-align: center;
}

.product-wrap .product-item .product-related-content h3 {
  font-size: 20px;
  font-weight: 600;
  margin-bottom: 10px;
}

@media (max-width: 767px) {
  .product-wrap .product-item .product-related-content h3 {
    font-size: 18px;
  }
  .mobile-bg{
    background: #fff !important;
  }
  .m-black a{
    color: #000 !important;
  }
}

.product-wrap .product-item .product-related-content h3 a {
  color: #30180d;
}

.product-wrap .product-item .product-related-content h3 a:hover {
  color: #ffb015;
}

.product-wrap .product-item .product-related-content .product-btm {
  display: block;
  justify-content: space-between;
  align-items: center;
  text-align: center;
  color: #f00;
  font-weight: bold;
  -webkit-box-pack: justify;
  -ms-flex-pack: justify;
  justify-content: space-between;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
}

.product-wrap
  .product-item
  .product-related-content
  .product-btm
  .product-price
  ul {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
}

.product-wrap
  .product-item
  .product-related-content
  .product-btm
  .product-price
  ul
  li {
  color: #a18d84;
  font-weight: 500;
}

.product-wrap
  .product-item
  .product-related-content
  .product-btm
  .product-price
  ul
  li:first-child {
  color: #ffb015;
  margin-right: 10px;
}

.product-wrap
  .product-item
  .product-related-content
  .product-btm
  .product-price
  ul
  li:last-child {
  text-decoration: line-through;
}

.product-wrap
  .product-item
  .product-related-content
  .product-btm
  .product-ratting
  ul {
  display: -webkit-box;
  display: -ms-flexbox;
  /* display: flex; */
}

.product-wrap
  .product-item
  .product-related-content
  .product-btm
  .product-ratting
  ul
  li {
  padding-right: 3px;
  color: #ff9600;
}

.product-wrap
  .product-item
  .product-related-content
  .product-btm
  .product-ratting
  ul
  li
  span {
  color: #c2beb3;
}
.related-product-margin {
  margin: 0px 0 8px 90px;
}
.product-main-image {
  width: 100%;
  background: #f1f1f1;
  padding: 5px;
  margin: 0 20px;
}
.thumb-img {
  max-width: 100px;
  background: #f1f1f1;
  padding: 5px;
}
.line-height-8 {
  line-height: 8;
}
.qtybutton i {
  font-size: 16px;
  font-weight: 100;
}
.not-active {
  pointer-events: none;
  cursor: default;
  text-decoration: none;
  color: black;
}
.note {
  font-size: 16px;
  color: #ff0011;
  font-weight: bold;
}
.show-me {
  opacity: 1 !important;
  visibility: visible !important;
}
.owl-dots{
  display: none;
}
button:disabled,
button[disabled]{
  /* border: 1px solid #999999; */
  background-color: #e9e9e9 !important;
  color: #666666;
}
.w-50{
    width: 50%;
}
#nprogress{
  position: fixed;
  top:0;
  left:0;
  width: 100%;
  height: 100%;
  z-index: 9999999999999999999999;
  background-color: #fff;
  background-repeat: no-repeat;
  background-size: 20%;
  background-position: 50% 50%;
  background-image: url("./assets/images/loader.gif");
}
.pos-relative{
  position: relative;
}
.mb-25{
  margin-bottom: 25px;
}
.error-msgs{
  color: red;
}
.error-msg{
  color: red;
}
button.btn.btn-default.reveal3 {
    position: absolute;
    right: 12px;
    top: 22px;
    background: #1955a5;
}
.text-white{
  color: #fff !important;
}
.hide{
  display: none;
}
.hpgrid.include-dividers-features>.grid-right:not(.grid-left):before {
  top: -10px !important;
}
.cat-dropdown .submenus{
  display: none;
}
.cat-dropdown:hover .submenus{
  display: block;
}
.submenus {
    position: absolute;
    z-index: 9999999;
    background: #000;
    color: #fff;
    list-style: none;
    padding: 0 20px;
    width: 200px;
    top: 60px;
}
.submenus li a{
  color: #fff;
}
.nav-white {
  background: #706f6f !important;
  background-color: #fff !important;
}
.wpds-c-fwSnNk {
    display: flex;
    background-color: var(--white);
    padding-top: var(--wpds-space-125);
    padding-left: var(--wpds-space-150);
    padding-right: var(--wpds-space-050);
    padding-bottom: var(--wpds-space-125);
    z-index: 2;
    justify-content: space-between;
}
.wpds-c-iFdbMO {
    font-family: var(--wpds-fonts-subhead);
    font-weight: var(--wpds-fontWeights-bold);
    font-size: 0.875rem;
    align-self: center;
    font-weight: bold;
}
a span p strong {
  font-family: Oswald, Arial, Helvetica, "Nimbus Sans L", sans-serif;
  line-height: 1.6;
  }
  span p strong {
    font-family: Oswald, Arial, Helvetica, "Nimbus Sans L", sans-serif;
  line-height: 1.6;
  }
</style>
