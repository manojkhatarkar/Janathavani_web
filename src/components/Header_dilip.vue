<template>
    <div>
        <nav id="sc-primary-nav" aria-label="Header Navigation" class=" m-h-60 z-7 header-nav flex hide-for-print items-center justify-center w-100 border-box fixed blck-font bg-white" data-sc-v="5.1.1" data-sc-c="basenav">
            <div data-sc-v="5.1.1" data-sc-c="keyboardonlynavlinks">
                <a data-href="#accessibility/index.html" class="skip-link sr-only sr-only-focusable white underline brad-md pa-lg border-box font-sans-serif font-bold" data-sc-v="5.1.1" data-sc-c="keyboardonlynavlinks">Accessibility statement</a><a data-href="##main-content" class="
                skip-link
                sr-only sr-only-focusable
                white
                underline
                brad-md
                pa-lg
                border-box
                font-sans-serif font-bold
              " data-sc-v="5.1.1" data-sc-c="keyboardonlynavlinks">Skip to main content</a>
            </div>
            <div class="flex flex-1 ml-xs ml-sm-ns" style="line-height: 60px; height: 60px" data-sc-v="5.1.1" data-sc-c="basenav">
                <!-- <div id="search-form" class="search-form dn flex-ns items-center relative" role="search">
                    <label for="query" aria-labelledby="searchTitle">
                        <input type="text" id="query" autocomplete="off" v-model="searchText" name="query" :class="searchShowing ? 'search-bar-show' : 'b-none dn hidden'" class="no-shadow text-input brad-4 font-xxxs pa-0 " placeholder="Search" aria-label="search" value=""></label>
                    <span id="searchTitle" class="dn">Search Input</span>
                    <button type="button" @click="searchNews()" name="btn-search" class="changethis pa-0 focus-highlight btn btn-sm dn dib-ns btn-show-search-input btn-gray" :class="searchShowing ? 'search-btn' : '' " aria-label="search">
                        <svg class="content-box fill-white va-m" width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false" role="img" data-sc-v="6.5.1" data-sc-c="iconbase">
                            <title data-sc-v="6.5.1" data-sc-c="iconbase">Search</title>
                            <path d="M10.974 9.56l3.585 3.585-1.414 1.414-3.585-3.585a5.466 5.466 0 1 1 1.414-1.414zm-1.04-3.094a3.466 3.466 0 1 0-6.934 0 3.466 3.466 0 0 0 6.933 0z" fill-rule="nonzero" data-sc-v="6.5.1" data-sc-c="iconbase"></path>
                        </svg>
                    </button>
                </div> -->
                <div class="ml-xs-ns db-ns flex-ns items-center" data-sc-v="5.1.1" data-sc-c="rendernavbutton">
                    <button data-qa="sc-header-sections-button" @click="isShowing ^= true" class="
                  transition-color
                  duration-400
                  ease-in-out
                  focus-highlight
                changethis " >
                        <div class="flex-ns" data-sc-v="5.1.1" data-sc-c="navbutton">
                            <span class="dn dib-ns mr-xs font-times" data-sc-v="5.1.1" data-sc-c="navbutton">
                                <!---Sections---> 
                            </span>
                            <!-- <svg class="content-box fill-gray menu va-m fill-white" width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" data-sc-v="5.1.1" data-sc-c="iconbase">
                                <title data-sc-v="5.1.1" data-sc-c="iconbase">Menu</title>
                                <path d="M15 12v2H1v-2h14zm-4-5v2H1V7h10zm4-5v2H1V2h14z" fill-rule="nonzero" data-sc-v="5.1.1" data-sc-c="iconbase"></path>
                            </svg> -->
                            <img src="../assets/images/icon/search.png" >
                        </div>
                    </button>
                </div>
    
                <div class="ml-xs-ns db-ns flex-ns items-center" data-sc-v="5.1.1" data-sc-c="rendernavbutton">
                    <button data-qa="sc-header-sections-button" @click="isShowing ^= true" class="
                  transition-color
                  duration-400
                  ease-in-out
                 
                  focus-highlight
                changethis " >
                        <div class="flex-ns" data-sc-v="5.1.1" data-sc-c="navbutton">
                            <span class="dn dib-ns mr-xs font-times" data-sc-v="5.1.1" data-sc-c="navbutton">
                                <!---Sections---> 
                            </span>
                            <!-- <svg class="content-box fill-gray menu va-m fill-white" width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" data-sc-v="5.1.1" data-sc-c="iconbase">
                                <title data-sc-v="5.1.1" data-sc-c="iconbase">Menu</title>
                                <path d="M15 12v2H1v-2h14zm-4-5v2H1V7h10zm4-5v2H1V2h14z" fill-rule="nonzero" data-sc-v="5.1.1" data-sc-c="iconbase"></path>
                            </svg> -->
                            <img src="../assets/images/icon/home-line.png" class="hide-mobile" @click="$router.push('/')" >
                        </div>
                    </button>
                </div>
                <!-- <div class="ml-xs-ns dn-ns pa-0" data-sc-v="5.1.1" data-sc-c="rendernavbutton">
                    <button @click="isShowing ^= true" data-qa="sc-header-sections-button" class="
                  transition-color
                  duration-400
                  ease-in-out
                  btn btn-gray btn-sm btn-pa-0
                  focus-highlight
                ">
                        <div class="flex-ns" data-sc-v="5.1.1" data-sc-c="navbutton">
                            <span class="dn dib-ns mr-xs" data-sc-v="5.1.1" data-sc-c="navbutton">Sections</span><svg class="content-box fill-gray menu va-m fill-white" width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" data-sc-v="5.1.1" data-sc-c="iconbase">
                                <title data-sc-v="5.1.1" data-sc-c="iconbase">Menu</title>
                                <path d="M22 18v2H2v-2h20zm-5-7v2H2v-2h15zm5-7v2H2V4h20z" fill-rule="nonzero" data-sc-v="5.1.1" data-sc-c="iconbase"></path>
                            </svg>
                        </div>
                    </button>
                </div> -->
                <!-- <form id="search-form" method="get" class="search-form dn flex-ns items-center relative" action="#" role="search">
                    <button type="button" @click="notificationShowing ^= true" name="btn-search" style="padding: 7px;margin: 8px;" class="changethis pa-0 focus-highlight btn btn-sm dn dib-ns btn-show-search-input btn-gray">
                        <svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" fill="currentColor" aria-hidden="true" focusable="false" role="img" class="wpds-c-iawSIt ">
                            <path d="M7 3a1 1 0 1 1 2 0 1 1 0 0 1-2 0Z" fill="currentColor"></path>
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M2.32 12c-.178.608-.32 1-.32 1h12s-.142-.392-.32-1c-.292-1.004-.68-2.6-.68-4 0-2.761-1.686-5-5-5S3 5.239 3 8c0 1.4-.388 2.996-.68 4Zm1.04 0h9.28c-.035-.13-.072-.265-.108-.407C12.274 10.595 12 9.25 12 8c0-1.182-.36-2.173-.992-2.857C10.388 4.471 9.418 4 8 4c-1.419 0-2.388.471-3.008 1.143C4.36 5.827 4 6.818 4 8c0 1.25-.274 2.595-.532 3.593-.036.142-.073.278-.109.407Z" fill="currentColor"></path>
                            <path d="M6 13a2 2 0 1 0 4 0H9a1 1 0 1 1-2 0H6Z" fill="currentColor"></path>
                        </svg>
                    </button>
                </form>
                <div v-if="notificationShowing" id="tooltip" aria-labelledby="tooltip-control" aria-hidden="false" class="shadow tooltip undefined z-2 duration-400 ease-in-out border-box brad-4 shadow-2 bg-white o-100" data-as-popover="as-popover" data-qa="wpds-tooltip-content"
                    role="dialog" data-show="true" style="position: absolute; inset: 10px auto auto 200px; transition-property: opacity, visibility; width: 360px; box-shadow: var(--wpds-shadows-300); transform: translate3d(-149px, 42px, 0px);overflow: auto;
        max-height: 400px;
        padding: 20px;" data-popper-reference-hidden="false" data-popper-escaped="false" data-popper-placement="bottom">
                    <div class="wpds-c-bYpCJQ active notification-menu">
                        <div class="wpds-c-fwSnNk">
                            <h3 class="wpds-c-iFdbMO news-alerts-subhead">NEWS ALERTS</h3>
                            <div class="flex"><button style="    color: #636262;
        font-size: 3px;" class="wpds-c-gNHrZC wpds-c-gNHrZC-jJaDHd-variant-secondary wpds-c-gNHrZC-biynoz-density-compact wpds-c-gNHrZC-ejCoEP-icon-left wpds-c-gNHrZC-iobFYN-css"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" aria-hidden="true" focusable="false" role="img" class="wpds-c-lkFBxd ">
                                        <path d="M10.5 9a2.5 2.5 0 0 0-2.45 2H1v1h7.05A2.5 2.5 0 0 0 13 12h2v-1h-2a2.5 2.5 0 0 0-2.5-2Zm0 4.29a1.79 1.79 0 1 1 1.79-1.79 1.79 1.79 0 0 1-1.79 1.79ZM8 4a2.5 2.5 0 0 0-4.9 0H1v1h2.05A2.5 2.5 0 0 0 8 5h7V4ZM5.5 6.29A1.79 1.79 0 1 1 7.29 4.5 1.79 1.79 0 0 1 5.5 6.29Z"></path>
                                    </svg><span class="wpds-c-iSKIAI">Preferences</span></button></div>
                        </div>
                        <div class="wpds-c-iLjeEs" style="margin:20px auto;">
                            <a class="alert-menu-item-0" href="#" style="color:#636262;">
                                <div class="PJLV PJLV-iePpoFM-css">
                                    <div class="notification-menu-item read"><span class="wpds-c-fkfkhC news-alerts-notification-headline">‘When in God’s name are we going to stand up to the gun lobby?’ Biden asks after Texas school shooting leaves 18 children dead</span>
                                        <div class="wpds-c-cQjPLt">
                                            <div>Today at 9:16 PM</div><span class="blt blt-dot-large blt-gray-dark blt-inbetween news-alerts">Breaking News</span>
                                        </div>
                                    </div>
                                </div>
                            </a>
                        </div>
                    </div>
                </div> -->
            </div>
    
            <ul id="homeNav" class="
              transition-opacity
              duration-400
              dn
              flex-l
              nowrap
              flex-1 flex-wrap
              font-xxxs
              items-center
              pointer
              offwhite
              list-none
              bold
              mt-0
              mr-0
              mb-0
              ml-md
              pa-0
              o-100-l
              w-100-l
              visible-l
              ease-in
              overflow-hidden
              hide-mobile
            " style="flex: 10; height: 60px; line-height: 60px" data-qa="header-nav-links-ul">
                <li class="mr-md db cat-dropdown" v-for="category in allCategory" :key="category.id">
    
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
                </li>
                <li class="mr-md db">
                    <router-link :to="{
                            name: 'contactus',
                          }" class="gray-lightest-bk blck-font pointer"> ಸಂಪರ್ಕಿಸಿ </router-link>
                </li>
                <li class="mr-md db">
                    <router-link to="/Ebook" class="gray-lightest-bk blck-font pointer"> Print Edition </router-link>
                </li>
    
            </ul>
            <img class="hide-mobile" width="230" src="../assets/assembler/images/logo.webp" id="homeLogo" @click="$router.push('/')" />
            <span class="
              absolute
              mw-0-lg mw-unset-nl
              transition-opacity
              duration-400
              o-0-l
              w-0-l
              hidden-l
              ease-out
            "><a data-href="##" class="flex flex-column items-center center"><span class="
                  italic
                  nowrap
                  font-xxxxs
                  lh-default
                  font-family-georgia
                  unstable-secondary
                ">
                        <router-link to="/" class="center font-times">
                            <img width="150px" src="../assets/assembler/images/logo.webp" />
                        </router-link><br />
                       
                    </span></a>
            </span>
            <div class="flex flex-1 justify-end mr-xs mr-sm-ns" data-sc-v="5.1.1" data-sc-c="basenav">
                <div class="ml-xs mw-200  db-ns" data-sc-v="5.1.1" data-sc-c="rendernavbutton" @mouseenter="rightMenu=true" >
                    <router-link v-if="!uid" :to="{ name: 'SignIn' }" data-qa="sc-account-button-not-small " class="hover-drop transition-color duration-400 ease-in-out f-c-w focus-highlight pt-8 changethis">
                        <div class="flex-ns" data-sc-v="5.1.1" data-sc-c="navbutton">
                            <span class="dn dib-ns sign-in-text truncate mr-xxs mw-144 font-times" data-sc-v="5.1.1" data-sc-c="navbutton">Sign in</span>
                            <img src="../assets/images/icon/user-line.png"  class="hover-drop" />
                            <!-- <svg class="content-box user-icon-clr profile va-m" width="25" height="25" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" data-sc-v="5.1.1" data-sc-c="iconbase">
                                <title data-sc-v="5.1.1" data-sc-c="iconbase">
                                    ProfileSolid
                                </title>
                                <path d="M11 5A3 3 0 1 1 5 5 3 3 0 0 1 11 5zm.167 4.649l1.22.439c.959.343 1.613 1.204 1.613 2.19V13a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1v-.722c0-.986.653-1.847 1.61-2.19l1.771-.636A7.787 7.787 0 0 1 8 9c.893 0 1.782.153 2.62.452l.528.19a1 1 0 0 1 .019.007z" fill-rule="nonzero" data-sc-v="5.1.1" data-sc-c="iconbase"></path>
                            </svg> -->
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

                    <div class="card drop-box" v-if="rightMenu" @mouseleave="rightMenu=false">
                        <div class="card-content">
                            <ul>
                                <li><router-link :to="{name: 'Subscription'}">Subscription</router-link></li>
                                <li>Billing</li>
                                <li><router-link to="/contactus"> Contact Us</router-link></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <!-- <div class="ml-xs mw-200 items-center pa-0 dn-ns" data-sc-v="5.1.1" data-sc-c="rendernavbutton">
                    <button data-qa="sc-account-button-small" class="
                  transition-color
                  duration-400
                  ease-in-out
                  btn btn-gray btn-sm btn-pa-0
                  focus-highlight
                ">
                        <div class="flex-ns" data-sc-v="5.1.1" data-sc-c="navbutton">
                            <span class="dn dib-ns sign-in-text truncate mr-xxs mw-144" data-sc-v="5.1.1" data-sc-c="navbutton">Sign in</span><svg class="content-box fill-gray profile va-m" width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" data-sc-v="5.1.1" data-sc-c="iconbase">
                                <title data-sc-v="5.1.1" data-sc-c="iconbase">
                                    ProfileSolid
                                </title>
                                <path d="M17 8a5 5 0 0 1-5 5 5 5 0 0 1-5-5c0-2.762 2.238-5 5-5s5 2.238 5 5zm.462 7.25l2.199.879A3.696 3.696 0 0 1 22 19.556V21a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1v-1.444c0-1.508.927-2.865 2.336-3.427l3.187-1.271a12.124 12.124 0 0 1 8.955 0l.958.383a1 1 0 0 1 .026.01z" fill-rule="nonzero" data-sc-v="5.1.1" data-sc-c="iconbase"></path>
                            </svg>
                        </div>
                    </button>
                </div> -->
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
                <nav class="relative side-nav pb-xxl mobile-bg shadow" aria-label="Sections Navigation" aria-hidden="false" style="box-sizing: border-box; width: 304px; outline: none;background: #2a2a2a;">
                    <div class="pr-md pl-md pb-md pt-md">
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
                "> Print Edition </router-link>
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

                    $(window).scroll(function () {
            if ($(this).scrollTop() > 100) {
                $('#homeNav').fadeOut(500, function() {
                        $('#homeLogo').fadeIn(500);
                        // $('#sc-primary-nav').addClass('nav-white');
                        //$('.changethis').addClass('change-btn');
                        $("#sc-primary-nav").addClass('h-90');
                    });
            } else {
                $('#homeLogo').fadeOut(500, function() {
                        $('#homeNav').fadeIn(500);
                        // $('#sc-primary-nav').removeClass('nav-white');
                        //$('.changethis').removeClass('change-btn');
                        $("#sc-primary-nav").removeClass('h-90');

                    });
            }
        })

        setTimeout(()=>{
            $("#sc-primary-nav").removeClass('h-90');
        },1000)
            
        
        document.addEventListener("DOMContentLoaded", function() {
            
            window.addEventListener('scroll', function() {
               
                if (window.scrollY > 100) {
                    $('#homeNav').fadeOut(500, function() {
                        $('#homeLogo').fadeIn(500);
                        // $('#sc-primary-nav').addClass('nav-white');
                        $('.changethis').addClass('change-btn');

                    });
                } else {
                    $('#homeLogo').fadeOut(500, function() {
                        $('#homeNav').fadeIn(500);
                        // $('#sc-primary-nav').removeClass('nav-white');
                        $('.changethis').removeClass('change-btn');
                        

                    });
                }
            });
        });
    },
    watch: {
        cartCount: function(cartCount) {
            this.cartCount = cartCount;
        },
    },
    methods: {
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
