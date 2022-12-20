<template>
    <div>
        <nav class="
              z-7
              header-nav
              flex
              hide-for-print
              items-center
              justify-center
              w-100
              border-box
              fixed
              bg-black
            " aria-label="primary navigation">
            <div>
                <a href="/accessibility" class="
                  skip-link
                  sr-only sr-only-focusable
                  white
                  underline
                  brad-md
                  pa-lg
                  border-box
                  font-sans-serif font-bold
                ">Accessibility statement</a><a href="#main-content" class="
                  skip-link
                  sr-only sr-only-focusable
                  white
                  underline
                  brad-md
                  pa-lg
                  border-box
                  font-sans-serif font-bold
                ">Skip to main content</a>
            </div>
            <div class="flex flex-1 ml-xs ml-sm-ns" style="line-height: 60px; height: 60px">
                <form id="search-form" method="get" class="search-form dn flex-ns items-center relative" action="#" role="search">
                    <label for="query " aria-labelledby="searchTitle"><input type="text" id="query" autocomplete="off" name="query" class="no-shadow text-input brad-4 font-xxxs pa-0 b-none dn hidden" style="
                      width: 0;
                      height: 34px;
                      line-height: 20px;
                      transition: all 0.25s cubic-bezier(0.49, 0.37, 0.45, 0.71);
                    " placeholder="Search" aria-label="search" value="" /></label><span id="searchTitle" class="dn">Search Input</span><button type="submit" name="btn-search" class="
                    pa-0
                    focus-highlight
                    btn btn-sm
                    dn
                    dib-ns
                    btn-show-search-input btn-gray
                  " aria-label="search">
                        <svg class="content-box fill-white va-m" width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false" role="img" data-sc-v="6.5.1" data-sc-c="iconbase">
                            <title data-sc-v="6.5.1" data-sc-c="iconbase">Search</title>
                            <path d="M10.974 9.56l3.585 3.585-1.414 1.414-3.585-3.585a5.466 5.466 0 1 1 1.414-1.414zm-1.04-3.094a3.466 3.466 0 1 0-6.934 0 3.466 3.466 0 0 0 6.933 0z" fill-rule="nonzero" data-sc-v="6.5.1" data-sc-c="iconbase"></path>
                        </svg>
                    </button>
                </form>
                <div class="ml-xs-ns dn db-ns flex-ns items-center">
                    <button data-qa="sc-header-sections-button" @click="isShowing ^= true" aria-label="Sections" class="
                    transition-color
                    duration-400
                    ease-in-out
                    btn btn-gray btn-sm
                    focus-highlight
                  ">
                        <div class="flex-ns">
                            <span class="dn dib-ns mr-xs font-times">Sections 1</span><svg class="content-box fill-gray va-m fill-white" width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false" role="img" data-sc-v="6.5.1" data-sc-c="iconbase">
                                <title data-sc-v="6.5.1" data-sc-c="iconbase">Menu</title>
                                <path d="M15 12v2H1v-2h14zm-4-5v2H1V7h10zm4-5v2H1V2h14z" fill-rule="nonzero" data-sc-v="6.5.1" data-sc-c="iconbase"></path>
                            </svg>
                        </div>
                    </button>
                </div>
                <div class="ml-xs-ns dn-ns pa-0">
                    <button data-qa="sc-header-sections-button" @click="isShowing ^= true" aria-label="Sections" class="
                    transition-color
                    duration-400
                    ease-in-out
                    btn btn-gray btn-sm btn-pa-0
                    focus-highlight
                  ">
                        <div class="flex-ns">
                            <span class="dn dib-ns mr-xs">Sections 1</span><svg class="content-box fill-gray va-m fill-white" width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false" role="img" data-sc-v="6.5.1" data-sc-c="iconbase">
                                <title data-sc-v="6.5.1" data-sc-c="iconbase">Menu</title>
                                <path d="M22 18v2H2v-2h20zm-5-7v2H2v-2h15zm5-7v2H2V4h20z" fill-rule="nonzero" data-sc-v="6.5.1" data-sc-c="iconbase"></path>
                            </svg>
                        </div>
                    </button>
                </div>
            </div>
            <div class="flex flex-1 justify-center z-1">
                <router-link to="/" class="center">
                    <img width="200" src="../assets/images/logo-2.jpg" />
                </router-link>
            </div>
            <div class="flex flex-1 justify-end mr-xs mr-sm-ns">
                <div class="dn dib-ns ml-xs">
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
                    btn-blue btn-sm
                    dib-ns
                    va-m
                    white
                  " :to="{name: 'Subscription'}"><span class="truncate ma-0">Subscribe </span></router-link>
                </div>
                <div class="ml-xs mw-200 dn db-ns">
                    <router-link v-if="!uid" :to="{ name: 'SignIn' }" data-qa="sc-account-button-not-small" aria-label="Sign in" class="
                    transition-color
                    duration-400
                    ease-in-out
                    btn btn-gray btn-sm
                    focus-highlight
                  ">
                        <div class="flex-ns">
                            <span class="dn dib-ns sign-in-text truncate mr-xxs mw-144">Sign in</span><svg class="content-box fill-gray va-m" width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false"
                                role="img" data-sc-v="6.5.1" data-sc-c="iconbase">
                                <title data-sc-v="6.5.1" data-sc-c="iconbase">ProfileSolid</title>
                                <path d="M11 5A3 3 0 1 1 5 5 3 3 0 0 1 11 5zm.167 4.649l1.22.439c.959.343 1.613 1.204 1.613 2.19V13a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1v-.722c0-.986.653-1.847 1.61-2.19l1.771-.636A7.787 7.787 0 0 1 8 9c.893 0 1.782.153 2.62.452l.528.19a1 1 0 0 1 .019.007z" fill-rule="nonzero" data-sc-v="6.5.1" data-sc-c="iconbase"></path>
                            </svg>
                        </div>
                    </router-link>
                    <router-link v-if="uid" :to="{ name: 'myaccount' }" data-qa="sc-account-button-not-small" class="
                      transition-color
                      duration-400
                      ease-in-out
                      btn btn-gray btn-sm
                      focus-highlight pt-8
                    ">
                        <div class="flex-ns" data-sc-v="5.1.1" data-sc-c="navbutton">
                            <span class="dn dib-ns sign-in-text truncate mr-xxs mw-144" data-sc-v="5.1.1" data-sc-c="navbutton"> {{userdetail.email}} </span>
                            <svg class="content-box fill-gray profile va-m" width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" data-sc-v="5.1.1" data-sc-c="iconbase">
                                    <title data-sc-v="5.1.1" data-sc-c="iconbase">
                                        ProfileSolid
                                    </title>
                                    <path d="M11 5A3 3 0 1 1 5 5 3 3 0 0 1 11 5zm.167 4.649l1.22.439c.959.343 1.613 1.204 1.613 2.19V13a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1v-.722c0-.986.653-1.847 1.61-2.19l1.771-.636A7.787 7.787 0 0 1 8 9c.893 0 1.782.153 2.62.452l.528.19a1 1 0 0 1 .019.007z" fill-rule="nonzero" data-sc-v="5.1.1" data-sc-c="iconbase"></path>
                                </svg>
                        </div>
                    </router-link>
                </div>
                <div class="ml-xs mw-200 items-center pa-0 dn-ns">
                    <button data-qa="sc-account-button-small" aria-label="Sign in" class="
                    transition-color
                    duration-400
                    ease-in-out
                    btn btn-gray btn-sm btn-pa-0
                    focus-highlight
                  ">
                        <div class="flex-ns">
                            <span class="dn dib-ns sign-in-text truncate mr-xxs mw-144">Sign in</span><svg class="content-box fill-gray va-m" width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false" role="img" data-sc-v="6.5.1" data-sc-c="iconbase">
                                <title data-sc-v="6.5.1" data-sc-c="iconbase">ProfileSolid</title>
                                <path d="M17 8a5 5 0 0 1-5 5 5 5 0 0 1-5-5c0-2.762 2.238-5 5-5s5 2.238 5 5zm.462 7.25l2.199.879A3.696 3.696 0 0 1 22 19.556V21a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1v-1.444c0-1.508.927-2.865 2.336-3.427l3.187-1.271a12.124 12.124 0 0 1 8.955 0l.958.383a1 1 0 0 1 .026.01z" fill-rule="nonzero" data-sc-v="6.5.1" data-sc-c="iconbase"></path>
                            </svg>
                        </div>
                    </button>
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
              ">
                <nav class="relative side-nav pb-xxl" aria-label="Sections Navigation" aria-hidden="false" style="box-sizing: border-box; width: 304px; outline: none;background: #2a2a2a;">
                    <div class="pr-md pl-md pb-md pt-md">
                        <a data-qa="subs-offer" class="
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
                    " :to="{name: 'Subscription'}"><span class="truncate ma-0">Subscribe</span></a>
                    </div>
                    <div class="border-box mb-sm b bt first:b-none db dn-ns pt-sm bc-gray-dark">
                        <div class="db dn-ns mr-md ml-md relative">
                            <form id="search-forms" method="get" action="https://www.washingtonpost.com/search" role="search">
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
                                                Search
                                            </div>
                                            <input aria-labelledby="sc-label-query" id="querys" name="query" type="text" class="
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
                                    </label><input type="submit" class="dn" value="" /><svg class="
                          content-box
                          fill-gray
                          absolute
                          bottom-0
                          right-0
                          pb-xs
                          pr-xxs
                          mr-xs
                          pointer-events-none
                        " width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false" role="img" data-sc-v="6.5.1" data-sc-c="iconbase">
                                        <title data-sc-v="6.5.1" data-sc-c="iconbase">Search</title>
                                        <path d="M10.974 9.56l3.585 3.585-1.414 1.414-3.585-3.585a5.466 5.466 0 1 1 1.414-1.414zm-1.04-3.094a3.466 3.466 0 1 0-6.934 0 3.466 3.466 0 0 0 6.933 0z" fill-rule="nonzero" data-sc-v="6.5.1" data-sc-c="iconbase"></path>
                                    </svg>
                            </form>
                        </div>
                    </div>
    
    
                    <div class="flex font--subhead white hover-bg-black relative">
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
    
                    <div class="flex font--subhead white hover-bg-black relative" v-for="category in allCategory" :key="category.id">
                        <router-link :to="{
                                name: 'Category',
                                params: { name: category.heading, id: category.id },
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
                    "> {{category.heading}} </router-link>
                    </div>
                    <div class="flex font--subhead white hover-bg-black relative">
    
                        <router-link :to="{
                                name: 'EBook',
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
                    "> Print Edition </router-link>
                    </div>
                </nav>
            </div>
        </transition>
    </div>
</template>

<script>
import axios from "axios";
export default {
    components: {},
    props: ["isHas"],
    data() {
        return {
            activeClass: false,
            isSubCategory: false,
            recaptchaVerified: false,
            pleaseTickRecaptchaMessage: "",
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
            uid: localStorage.getItem("user"),
            fields: {
                type: "nav",
                uid: localStorage.getItem("user"),
                fullname: "",
                mobile: "",
                address: "",
                Token: this.$root.auth,
            },
        };
    },
    mounted() {
        if (this.$route.name == "Product") {
            this.activeClass = true;
        }
        this.isShowing = this.isHas;
        this.shownav();
        this.getCart();
        this.site_logos();
        this.categories();
        if (this.uid > 0) {
            this.getUserDetail()
        }
    },
    watch: {
        cartCount: function(cartCount) {
            this.cartCount = cartCount;
        },
    },
    methods: {
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
                console.log('user', data);
                if (data.status == 'success') {
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
            axios
                .get(this.$root.URL_ROOT + "api.php?type=getCategory")
                .then(function(response) {
                    var data = response.data;
                    if (data.status == "success") {
                        ev.allCategory = data.category;
                    }
                });
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
                    // console.log(response.data)
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
</style>
