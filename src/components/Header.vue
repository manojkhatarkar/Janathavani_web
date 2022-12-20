<template>
    <div>
        <nav id="sc-primary-nav" aria-label="Header Navigation" class="nav-scroll-js m-h-60 z-7 header-nav hide-for-print items-center justify-center w-100 border-box fixed blck-font bg-white" data-sc-v="5.1.1" data-sc-c="basenav">
            <div :class="isMobile?'row nav-header-pd mobile-ro':'row nav-header-pd'">
                <div :class="isMobile?'col-2 un-p txt-center':'col-1 un-p txt-center'">
                    <img src="../assets/images/icon/search-big.png" class="pt-20 w-25-n m-w-50" @click="isShowing ^= true">
                    <router-link to="/" >
                        <img src="../assets/images/icon/notification.png" class="pd-l-10 pt-20 w-30-n m-w-50 m-hide" style="margin-left:15px;">
                    </router-link>
                </div>
               
                <div :class="isMobile?'col-8':'col-10'">
                    <template v-if="isMobile==false">
                        <div class="category-data">
                            <ul id="homeNav" class="transition-opacity duration-400 dn flex-l nowrap flex-1 flex-wrap font-xxxs items-center pointer offwhite list-none bold mt-0 mr-0 mb-0 ml-md pa-0 o-100-l w-100-l visible-l ease-in overflow-hidden hide-mobile" style="flex: 10; height: 60px; line-height: 60px" data-qa="header-nav-links-ul">
                                <li class="mr-md db cat-dropdown" v-for="category in allCategory" :key="category.id">
                                    <template v-if="category.heading==='ಅಭಿಪ್ರಾಯ'">
                                        <router-link :to="{
                                                name: 'Opinion',
                                                params: { name: category.heading, id: category.id },
                                            }" class="gray-lightest-bk blck-font pointer"> {{category.heading}} </router-link>
                                        <ul class="submenus shadow" v-if="category.subcategory">
                                            <li class="li-home li-one sub-menus" v-for="submenu in category.subcategory" :key="submenu.id"><i class="fas fa-long-arrow-alt-right hidden-sm hidden-md hidden-xs"></i>
                                                <!-- <router-link :to="{ name: 'Product', params: { name:submenu.heading, id:submenu.id} }"> {{submenu.heading}} 1 </router-link> -->
                                                <router-link :to="{
                                                    name: 'Category',
                                                    params: { name: submenu.heading, id: submenu.id },
                                                }"> {{submenu.heading}} </router-link>
                                            </li>
                                        </ul>
                                    </template>
                                    <template v-else>
                                        <router-link :to="{
                                            name: 'Category',
                                            params: { name: category.heading, id: category.id },
                                        }" class="gray-lightest-bk blck-font pointer"> {{category.heading}} </router-link>
                                        <ul class="submenus shadow" v-if="category.subcategory">
                                            <li class="li-home li-one sub-menus" v-for="submenu in category.subcategory" :key="submenu.id"><i class="fas fa-long-arrow-alt-right hidden-sm hidden-md hidden-xs"></i>
                                                <!-- <router-link :to="{ name: 'Product', params: { name:submenu.heading, id:submenu.id} }"> {{submenu.heading}} 1 </router-link> -->
                                                <router-link :to="{
                                                    name: 'Category',
                                                    params: { name: submenu.heading, id: submenu.id },
                                                }"> {{submenu.heading}} </router-link>
                                            </li>
                                        </ul>
                                    </template>
                                </li>
                                <!-- <li class="mr-md db">
                                    <router-link :to="{
                                            name: 'contactus',
                                        }" class="gray-lightest-bk blck-font pointer"> ಸಂಪರ್ಕಿಸಿ </router-link>
                                </li> -->
                                
        
                            </ul>
                        </div>
                        <div class="logo-dis" style="display:none;">
                            <router-link to="/" >
                                <img src="../assets/assembler/images/logo.webp" class="logo-new pt-10 1" >
                            </router-link>
                        </div>
                    </template>
                    <template v-else>
                        <div class="logo-dis-mobile" >
                            <router-link to="/" >
                                <img src="../assets/assembler/images/Janatavani.jpg" class="logo-new-mobile pt-10 manoj-1" >
                            </router-link>    
                        </div>
                    </template>
                </div>
                <div :class="isMobile?'col-2 un-p txt-center':'col-1 un-p txt-center'">
                    <router-link to="/Ebook" >
                        <img src="../assets/images/icon/news.png"  class="pt-20 w-25-n m-w-50 m-hide">
                    </router-link>
                    
                    <img src="../assets/images/icon/user-big.png" class="pd-l-10 pt-20 w-30-n m-w-50 m-l-15" @click="checkDrop()"  >
                </div>

            </div>

            <div class="card drop-box" v-if="rightMenu" >
                <div class="card-content">
                    <ul>
                        <li><router-link to="/login" class="dib-ns sign-in-text truncate mr-xxs mw-144 font-times" data-sc-v="5.1.1" data-sc-c="navbutton">Sign in</router-link></li>
                        <li><router-link :to="{name: 'Subscription'}">Subscription</router-link></li>
                        <li>Billing</li>
                        <li><router-link to="/contactus"> Contact Us</router-link></li>
                    </ul>
                </div>
            </div>
        </nav>
        <transition name="bounce">
            <div v-show="isShowing" id="sc-sections-nav-drawer" class="
            scrollbar-width-none
            font-xxxs
            fixed
            transition-transform
            duration-500
            ease-in-out
            outline-none
            o-100
            transform-3d-zeroed
          " style="
            top: 60px;
            left: 0px;
            bottom: 0px;
            width: 100%;
            height: 100%;
            overflow: auto;
            z-index: 6;
            mt-30
          ">
                <nav class="relative side-nav pb-xxl mobile-bg shadow" aria-label="Sections Navigation" aria-hidden="false" style="box-sizing: border-box; width: 304px; outline: none;background: #2a2a2a;">
                    <div class="pr-md pl-md pb-md pt-md hide-web show-mobile">
                        <router-link data-qa="subs-offer" class="
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
                " :to="{name: 'Subscription'}"><span class="truncate ma-0">Subscribe </span></router-link>
                    </div>

                    <div class="border-box mb-sm b bt first:b-none db dn-ns pt-sm bc-gray-dark">
                        <div class="db dn-ns mr-md ml-md relative">
                            <div id="search-form" role="search">
                                <label for="query" class="focus-within flex flex-column w-100 relative flex">
                                    <div class="w-100 relative" data-sc-v="6.5.1" data-sc-c="input">
                                        <div id="sc-label-query" for="query" class="
                          gray-dark
                          font-light
                          absolute
                          z-1
                          border-box
                          pointer-events-none
                          pl-xxs
                          pr-xxs
                          ml-xxs
                          top-50
                          -translate-y-50
                          mt-0
                        " data-sc-v="6.5.1" data-sc-c="input">
                                           
                                        </div>
                                        <input aria-labelledby="sc-label-query" v-model="searchText" id="query" name="query" type="text" class="
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
                          h-sm
                          lh-initial
                        " aria-label="search" autocomplete="off" data-sc-v="6.5.1" data-sc-c="input" value="" />
                                    </div>
                                </label>
                                <input type="submit" class="dn" @click="searchNews()" value="" />
                                <!-- <svg class="
                      content-box
                      fill-gray
                      absolute
                      bottom-0
                      right-0
                      pb-xs
                      pr-xxs
                      mr-xs
                      pointer-events-none
                    " width="16" @click="searchNews()" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false" role="img" data-sc-v="6.5.1" data-sc-c="iconbase">
                                    <title data-sc-v="6.5.1" data-sc-c="iconbase">Search</title>
                                    <path d="M10.974 9.56l3.585 3.585-1.414 1.414-3.585-3.585a5.466 5.466 0 1 1 1.414-1.414zm-1.04-3.094a3.466 3.466 0 1 0-6.934 0 3.466 3.466 0 0 0 6.933 0z" fill-rule="nonzero" data-sc-v="6.5.1" data-sc-c="iconbase"></path>
                                </svg> -->
                            </div>
                            <button class="btn btn-info bg-blue hover-bg-blue-dark focus-bg-blue-dark" @click="searchNews()" style="margin-top:5px;">Search</button>
                        </div>
                    </div>
                    <div class="flex font--subhead white hover-bg-black relative m-black">
    
                        <router-link :to="{ name: 'Home' }" class="
                  w-100
                  border-box
                  white
                  flex
                  hover-inherit
                  h-100
                  pl-md
                  pt-sm
                  pb-sm
                "> ಮುಖಪುಟ </router-link>
                    </div>
                    <div class="flex font--subhead white hover-bg-black relative m-black" v-for="category in allCategory" :key="category.id">
                        <template v-if="category.heading==='ಅಭಿಪ್ರಾಯ'">
                            <router-link :to="{
                                name: 'Opinion',
                                params: { name: category.heading, id: category.id },
                              }" class="w-100 border-box white flex hover-inherit h-100 pl-md pt-sm pb-sm  "> {{category.heading}} </router-link>
                        </template>
                        <template v-else>
                            <router-link :to="{
                                name: 'Category',
                                params: { name: category.heading, id: category.id },
                              }" class="w-100 border-box white flex hover-inherit h-100 pl-md pt-sm pb-sm  "> {{category.heading}} </router-link>

                        </template>
                        
    
                    </div>
                    
                    <div class="flex font--subhead white hover-bg-black relative m-black">
    
                        <router-link :to="{
                            name: 'contactus',
                          }" class="
                  w-100
                  border-box
                  white
                  flex
                  hover-inherit
                  h-100
                  pl-md
                  pt-sm
                  pb-sm
                "> ಸಂಪರ್ಕಿಸಿ </router-link>
                    </div>
                    <div class="flex font--subhead white hover-bg-black relative m-black">
    
                        <router-link :to="{
                            name: 'EBook',
                          }" class="font-times
                  w-100
                  border-box
                  white
                  flex
                  hover-inherit
                  h-100
                  pl-md
                  pt-sm
                  pb-sm
                "> E-Paper </router-link>
                    </div>
                </nav>
            </div>
        </transition>
    </div>
</template>

<script>
import axios from "axios";
import $ from "jquery";

export default {
    components: {},
    props: ["isHas"],
    data() {
        return {
            notificationShowing: false,
            searchShowing: false,
            activeClass: false,
            isSubCategory: false,
            showMe: false,
            isToggle: false,
            myaccountdropdown: false,
            wish: [],
            isShowing: false,
            uid: localStorage.getItem("user"),
            cartCount: [],
            postroute: [],
            searchData: [],
            allCategory: [],
            catedatas: [],
            site_logo: [],
            userdetail: [],
            LinksDetails: [],
            rightMenu:false,
            fields: {
                type: "nav",
                uid: localStorage.getItem("user"),
                fullname: "",
                mobile: "",
                address: "",
                Token: this.$root.auth,
            },
            searchText:'',
            isMobile:false,
        };
    },
    mounted() {
        if (this.$route.name == "Product") {
            this.activeClass = true;
        }
        this.isShowing = this.isHas;
        this.shownav();
        this.getCart();
        this.categories();
        this.site_logos();
        this.site_setting()
        if (this.uid > 0) {
            this.getUserDetail()
        }

        $('#homeLogo').fadeOut(500, function() {
                        $('#homeNav').fadeIn(500);
                        // $('#sc-primary-nav').removeClass('nav-white');
                        //$('.changethis').removeClass('change-btn');
                        $("#sc-primary-nav").addClass('h-90');

                    });

                    if(window.innerWidth<900){
                        this.isMobile=true;
                    }else{
                        this.isMobile=false;
                    }
                    $(window).scroll(function () {
                       //console.log(window.innerWidth)

                        if($(this).scrollTop()>100){
                            $(".side-nav").addClass('pt-30');
                            $(".nav-scroll-js").addClass('h-90');
                            $(".category-data").attr('style', 'display:none');
                            $(".logo-dis").attr('style', 'display:block');
                        }else if($(this).scrollTop()<100){
                            $(".side-nav").removeClass('pt-30');
                            $(".nav-scroll-js").removeClass('h-90');
                            $(".category-data").attr('style', 'display:block');
                            $(".logo-dis").attr('style', 'display:none');
                        }
                    })
                       

        setTimeout(()=>{
            //$("#sc-primary-nav").removeClass('h-90');
        },1000)
            
        
       
    },
    watch: {
        cartCount: function(cartCount) {
            this.cartCount = cartCount;
        },
    },
    methods: {
        checkDrop(){
            console.log(this.rightMenu)
            if(this.rightMenu==true){
                this.rightMenu=false;
            }else{
                this.rightMenu=true;
            }
        },
        searchNews(){
            var ev=this;
            this.searchShowing = true;
            if(this.searchText=='' || this.searchText==null){
                // this.$toasted.global.error({
                //     message: "Please enter new search text",
                // });
            }else{
                axios({
                method: 'POST',
                url: this.$root.URL_ROOT + 'api.php',
                data: {
                    type: 'searchNews',
                    searchText: this.searchText
                }
                }).then(function (response) {
                    var data = response.data
                    console.log(data)
                    if(data.status=='success'){
                        ev.$router.push('/Detail/'+data.product.id);
                    }else{
                        ev.$toasted.global.error({
                            message: "Record not found",
                        });
                    }
                })
            }

        },
        getUserDetail() {
            var self = this
            axios({
                method: 'POST',
                url: this.$root.URL_ROOT + 'api.php',
                data: {
                    type: 'userDetail',
                    uid: this.uid
                }
            }).then(function(response) {
                var data = response.data
                // console.log(data);
                if (data.data) {
                    self.userdetail = data.data
                }
            })

        },
        showNav() {
            if (this.showMe == false) {
                this.showMe = true;
            } else {
                this.showMe = false;
            }
        },
        showToggle() {
            if (this.isToggle == true) {
                this.isToggle = false;
            } else {
                this.isToggle = true;
            }
        },
        openNav() {
            document.getElementById("mySidenav").style.width = "250px";
        },
        closeNav() {
            document.getElementById("mySidenav").style.width = "0";
        },
        shownav() {
            this.responsive = true;
        },
        categories() {
            var ev = this;
            axios({
                method: 'POST',
                url: this.$root.URL_ROOT + 'api.php',
                data: {
                    type: 'getAllCategory',
                }
            }).then(function(response) {
                var data = response.data
                ev.allCategory = data.category.category;

                // if (data.status == "success") {
                // }
            })
        },
        whichCount() {
            var ev = this;
            var ip_address = JSON.parse(localStorage.getItem("ip_address"));
            var user_session = JSON.parse(localStorage.getItem("user"));
            var uid = "";
            if (user_session != null) {
                uid = user_session;
            } else {
                uid = null;
            }
            axios
                .post(this.$root.URL_ROOT + "api.php?type=whichCount", {
                    uid: uid,
                    ip_address: ip_address,
                })
                .then(function(response) {
                    ev.wish = response.data;
                });
        },
    },
};
</script>

<style>
.showclass {
    opacity: 1 !important;
    left: 0 !important;
    top: 0px;
    z-index: 99999999999 !important;
    visibility: visible !important;
    padding-top: 50px;
}

.shadow {
    box-shadow: 1px 4px 9px #5d5b5b;
}

.change-btn {
    background-color: #fff !important;
    color: #000 !important;
}

.change-btn svg {
    fill: #000 !important;
}

.change-color {
    color: #000;
}
</style>
