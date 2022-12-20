<template>
<div>
    <div class="hpgrid-max-width ma-auto" data-chain-name="hp-more-top-stories" data-gtm-module="hp-more-top-stories" style="position: relative" data-gtm-vis-recent-on-screen-11017726_485="224986" data-gtm-vis-first-on-screen-11017726_485="224986" data-gtm-vis-total-visible-time-11017726_485="100" data-gtm-vis-has-fired-11017726_485="1">
        <div class="mr-sm ml-sm mr-0-ns ml-0-ns">
            <div class="gray-darkest mb-sm label label-section-large left" >
                <span class="font-xs font-bold uppercase letter-spacing offblack font-times"><span>More Top Stories</span></span>
            </div>
        </div>
        
        <div  class="
              chain
              hpgrid hpgrid-max-width
              ma-auto
              mx-dsktp-order
              large-bottom-separator
              no-line-bottom
              include-dividers-tables
            ">
            <div class="
                table-in-grid
                hpgrid
                hpgrid-item
                hpgrid-item--c-start
                hpgrid-item--c-spans
                hpgrid-item--r-spans
                wide-center-4-separate-tables-layout
                grid-top grid-bottom grid-left
                table1
                include-dividers-features
                hide-helpers
              " style="
                --c-start-mx: 1;
                --c-start-lg: 1;
                --c-start-md: 1;
                --c-start-sm: 1;
                --c-start-xs: 1;
                --c-span-mx: 4;
                --c-span-lg: 4;
                --c-span-md: 4;
                --c-span-sm: 10;
                --c-span-xs: 1;
              ">
                <div class="
                  card
                  relative
                  hpgrid-item
                  hpgrid-item--c-start
                  hpgrid-item--c-spans
                  hpgrid-item--r-spans
                  table1-childStyles
                  grid-top grid-left grid-right
                " style="
                  --c-start-mx: 1;
                  --c-start-lg: 1;
                  --c-start-md: 1;
                  --c-start-sm: 1;
                  --c-start-xs: 1;
                  --c-span-mx: 4;
                  --c-span-lg: 4;
                  --c-span-md: 4;
                  --c-span-sm: 10;
                  --c-span-xs: 1;
                  --dsktp-order: 7;
                " data-index="0" data-admin-id="1" data-feature-name="12-3p-usfrancect" moat-id="fronts/flex-feature" data-mx-span="4" data-lg-span="4" data-md-span="4" data-sm-span="10" data-xs-span="1">
                    <div class="left no-wrap-text">
                        <template v-for="(News,index) in data.left">
                            <div :key="index"  class="card-top card-text">
                                <div class="headline relative gray-darkest pb-xs">
                                    <h2 class="
                          font--headline font-size-lg font-bold
                          left
                          relative
                        ">
                                        <router-link :to="{name: 'Detail',params:{id:News.id}}"><span>
                                                {{News.name}}
                                            </span></router-link>
                                    </h2>
                                </div>
                                <div class="
                        pb-xs
                        font-size-blurb
                        lh-fronts-tiny
                        font-light
                        gray-dark
                      " style="font-size: 0.9375rem">
                                    <span class="sub-heading" v-if="News.description" v-html="News.description.slice(0, 300)+'...'"></span>
                                </div>
                                <div class="byline gray-dark font-xxxxs pb-xs">
                                   <router-link :to="{name : 'Author',params:{id:News.label}}"> {{News.author}} </router-link>
                                </div>
                            </div>
                        </template>
                    </div>
                </div>

            </div>
            <div class="
                table-in-grid
                hpgrid
                hpgrid-item
                hpgrid-item--c-start
                hpgrid-item--c-spans
                hpgrid-item--r-spans
                wide-center-4-separate-tables-layout
                grid-top grid-bottom grid-center
                table2
                include-dividers-features
                hide-helpers
              " style="
                --c-start-mx: 5;
                --c-start-lg: 5;
                --c-start-md: 5;
                --c-start-sm: 1;
                --c-start-xs: 1;
                --c-span-mx: 8;
                --c-span-lg: 8;
                --c-span-md: 8;
                --c-span-sm: 10;
                --c-span-xs: 1;
              ">
                <template v-for="(News,index) in data.main">
                    <div :key="index"  class="
                  card
                  relative
                  hpgrid-item
                  hpgrid-item--c-start
                  hpgrid-item--c-spans
                  hpgrid-item--r-spans
                  table2-childStyles
                  grid-top grid-left grid-right
                " style="
                  --c-start-mx: 1;
                  --c-start-lg: 1;
                  --c-start-md: 1;
                  --c-start-sm: 1;
                  --c-start-xs: 1;
                  --c-span-mx: 8;
                  --c-span-lg: 8;
                  --c-span-md: 8;
                  --c-span-sm: 10;
                  --c-span-xs: 1;
                  --dsktp-order: 5;
                " data-index="1" data-admin-id="6" data-feature-name="12-6p-turkeystrait" moat-id="fronts/flex-feature" data-mx-span="8" data-lg-span="8" data-md-span="8" data-sm-span="10" data-xs-span="1">
                        <div class="left no-wrap-text art-size--fullWidth">
                            <div class="card-top card-text">
                                <div class="
                        slideshow-container
                        overflow-hidden
                        relative
                        pb-xs
                        dots-touch
                      ">

                                    <figure   :key="key" role="region" aria-label="Slideshow" data-testid="slideshow" data-sc-v="5.1.1" data-sc-c="slideshowtrack">
                                        <div class="
                            relative
                            aspect-custom
                            mb-xs
                            transition-opacity
                            duration-400
                            ease-in-out
                            hover-parent
                          " role="group" aria-label="5 of 5" id="null-items" style="--aspect-width: 16; --aspect-height: 9">
                                                            
                                            <router-link :to="{name: 'Detail', params:{id:News.id}}" class="
                             
                            " style="--controlled-duration: 1500ms">
                         <carousel :autoplay="true" :nav="false" v-if="News.image_collection" :indicators="false" :items="1" :responsive="{
                            0: { items: 1 },
                            576: { items: 1 },
                            600: { items: 1 },
                            768: { items: 1 },
                            1200: { items: 1 },
                            1500: { items: 1 },
                            }">        
                            <img v-for="(allimg,key) in getImg(News.image_collection)" :key="key"  :src="$root.URL_ROOT+'uploads/Product/'+allimg" class="dib va-m mw-100" alt="Image" data-slide="4" style="max-height: 100%; height: 100%" />
                         </carousel>
                            </router-link>

                                        </div>
                                        <div class="
                            ease-out
                            controlled-duration
                            transition-opacity
                            o-100
                          " data-sc-v="5.1.1" data-sc-c="slideshowcaption" style="--controlled-duration: 1500ms">
                                            <div class="
                              gray-dark
                              font-xxxxs
                              left
                              pb-xs
                              font--meta-text
                              lh-sm
                            " style="min-height: 13.1875px">
                                                {{News.name}}
                                            </div>
                                        </div>
                                    </figure>
                             <!-- </carousel> -->

                                    <div class="overflow-hidden mt-xs" role="progressbar" aria-label="Slideshow progress bar" aria-valuemin="1" aria-valuemax="5" aria-valuenow="5" data-qa="sc-pagination-dots" data-sc-v="5.1.1" data-sc-c="paginationdots">
                                        <div class="
                            flex
                            relative
                            transition-transform
                            duration-400
                            ease-out
                          " data-sc-v="5.1.1" data-sc-c="paginationdots" style="left: 50%; transform: translate(-35px)">
                                            <div class="
                              pa-xxs
                              brad-50
                              transition-all
                              duration-400
                              ease-out
                              bg-gray
                            " data-sc-v="5.1.1" data-sc-c="paginationdots" style="transform: scale(0.25); margin: 0px 3px"></div>
                                            <div class="
                              pa-xxs
                              brad-50
                              transition-all
                              duration-400
                              ease-out
                              bg-gray
                            " data-sc-v="5.1.1" data-sc-c="paginationdots" style="transform: scale(0.5); margin: 0px 3px"></div>
                                            <div class="
                              pa-xxs
                              brad-50
                              transition-all
                              duration-400
                              ease-out
                              bg-gray
                            " data-sc-v="5.1.1" data-sc-c="paginationdots" style="transform: scale(0.75); margin: 0px 3px"></div>
                                            <div class="
                              pa-xxs
                              brad-50
                              transition-all
                              duration-400
                              ease-out
                              bg-gray
                            " data-sc-v="5.1.1" data-sc-c="paginationdots" style="transform: scale(0.75); margin: 0px 3px"></div>
                                            <div class="
                              pa-xxs
                              brad-50
                              transition-all
                              duration-400
                              ease-out
                              bg-gray-darkest
                            " data-sc-v="5.1.1" data-sc-c="paginationdots" style="transform: scale(1); margin: 0px 3px"></div>
                                        </div>
                                    </div>
                                </div>
                                <div class="headline relative gray-darkest pb-xs">
                                    <h2 class="
                          font--headline font-size-md font-bold
                          left
                          relative
                        ">
                                        <router-link :to="{name: 'Detail',params:{id:News.id}}"><span>
                                                {{News.name}} </span></router-link>
                                    </h2>
                                </div>
                                <div class="
                        pb-xs
                        font-size-blurb
                        lh-fronts-tiny
                        font-light
                        gray-dark
                      " style="font-size: 0.9375rem">
                                    <span class="sub-heading" v-html="News.description.slice(0, 300)+'...'"></span>
                                </div>
                                <div class="byline gray-dark font-xxxxs pb-xs">
                                    <span>  <router-link :to="{name : 'Author',params:{id:News.label}}"> {{News.author}} </router-link> </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </template>
            </div>
            <div class="
                table-in-grid
                hpgrid
                hpgrid-item
                hpgrid-item--c-start
                hpgrid-item--c-spans
                hpgrid-item--r-spans
                wide-center-4-separate-tables-layout
                grid-top grid-bottom grid-center
                table3
                include-dividers-features
                hide-helpers
              " style="
                --c-start-mx: 13;
                --c-start-lg: 13;
                --c-start-md: 1;
                --c-start-sm: 1;
                --c-start-xs: 1;
                --c-span-mx: 4;
                --c-span-lg: 4;
                --c-span-md: 12;
                --c-span-sm: 10;
                --c-span-xs: 1;
              ">
               <template v-for="(News,index) in data.right2">
                    <div :key="index"  class="
                  card
                  relative
                  hpgrid-item
                  hpgrid-item--c-start
                  hpgrid-item--c-spans
                  hpgrid-item--r-spans
                  table3-childStyles
                  grid-bottom grid-left grid-right
                " style="
                  --c-start-mx: 1;
                  --c-start-lg: 1;
                  --c-start-md: 0;
                  --c-start-sm: 1;
                  --c-start-xs: 1;
                  --c-span-mx: 4;
                  --c-span-lg: 4;
                  --c-span-md: 6;
                  --c-span-sm: 10;
                  --c-span-xs: 1;
                  --dsktp-order: 4;
                " data-index="2" data-admin-id="5" data-feature-name="12-6p-abccdc" moat-id="fronts/flex-feature" data-mx-span="4" data-lg-span="4" data-md-span="6" data-sm-span="10" data-xs-span="1">
                    <div class="left no-wrap-text art-size--fullWidth">
                        <div class="card-top card-text">
                            <div class="w-100 mw-100 overflow-hidden relative lh-0 mb-xs">
                                <div class="dib" style="
                          width: 100%;
                          height: 100%;
                          background-color: #eee;
                        ">
                                    <router-link :to="{name: 'Detail', params:{id:News.id}}" ><img style="
                              width: 100%;
                              height: 100%;
                              background-color: rgb(238, 238, 238);
                            " :src="$root.URL_ROOT+'uploads/Product/'+News.front_image" />
                            </router-link>
                                </div>
                            </div>
                            <div class="headline relative gray-darkest pb-xs">
                                <h2 class="
                          font--headline font-size-sm font-bold
                          left
                          relative
                        ">
                                    <router-link :to="{name: 'Detail',params:{id:News.id}}">
                                    <span> {{News.name}} </span></router-link>
                                </h2>
                            </div>
                            <div class="byline gray-dark font-xxxxs pb-xs">
<router-link :to="{name : 'Author',params:{id:News.label}}"> {{News.author}} </router-link>
                            </div>
                        </div>
                    </div>
                </div>
                </template>
               
            </div>
            <div class="
                table-in-grid
                hpgrid
                hpgrid-item
                hpgrid-item--c-start
                hpgrid-item--c-spans
                hpgrid-item--r-spans
                wide-center-4-separate-tables-layout
                grid-top grid-bottom grid-right
                table9
                include-dividers-features
                hide-helpers
              " style="
                --c-start-mx: 17;
                --c-start-lg: 1;
                --c-start-md: 1;
                --c-start-sm: 1;
                --c-start-xs: 1;
                --c-span-mx: 4;
                --c-span-lg: 16;
                --c-span-md: 12;
                --c-span-sm: 10;
                --c-span-xs: 1;
              ">
                <template v-for="(News,index) in data.right">
                    <div :key="index" class="
                  card
                  relative
                  hpgrid-item
                  hpgrid-item--c-start
                  hpgrid-item--c-spans
                  hpgrid-item--r-spans
                  table9-childStyles
                  grid-middle grid-left grid-right
                " style="
                  --c-start-mx: 1;
                  --c-start-lg: 0;
                  --c-start-md: 0;
                  --c-start-sm: 0;
                  --c-start-xs: 0;
                  --c-span-mx: 4;
                  --c-span-lg: 5;
                  --c-span-md: 4;
                  --c-span-sm: 10;
                  --c-span-xs: 1;
                  --dsktp-order: 1;
                " data-index="3" data-admin-id="3" data-feature-name="12-4p-gaetz" moat-id="fronts/flex-feature" data-mx-span="4" data-lg-span="5" data-md-span="4" data-sm-span="10" data-xs-span="1">
                    <div class="left no-wrap-text">
                        <div class="card-top card-text">
                            <div class="headline relative gray-darkest pb-xs">
                                <h2 class="
                          font--headline font-size-sm font-bold
                          left
                          relative
                        ">
                                    <router-link :to="{name: 'Detail',params:{id:News.id}}"><span>
                                    {{News.name}} </span></router-link>
                                </h2>
                            </div>
                            <div class="byline gray-dark font-xxxxs pb-xs">
<router-link :to="{name : 'Author',params:{id:News.label}}"> {{News.author}} </router-link>
                               </div>
                        </div>
                    </div>
                </div>
                </template>
            </div>
        </div>
      
        
    </div>
    <div class="hpgrid-max-width ma-auto" data-chain-name="hp_pandemic" data-gtm-module="hp_pandemic" style="position: relative">
        <div class="mr-sm ml-sm mr-0-ns ml-0-ns">
            <div class="gray-darkest mb-sm label label-section-large left">
                <a class="
                  font-xs font-bold
                  uppercase
                  letter-spacing
                  offblack
                  hover-blue
                  label-link
                " data-href="#"><span class="font-times">Guide to the Pandemic</span><span class="relative" style="margin-left: 0.125rem"><span style="position: absolute; size-to-use: normal; top: 0">
                            <svg class="
                        content-box
                        fill-gray
                        hover-fill-blue hover-inherit
                      " width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" data-sc-v="5.1.1" data-sc-c="iconbase">
                                <title data-sc-v="5.1.1" data-sc-c="iconbase">
                                    ChevronRight
                                </title>
                                <path d="M9.44 7.854L4.145 2.56l1.415-1.415 6 6a1 1 0 0 1 0 1.415l-6 6-1.415-1.415L9.44 7.854z" fill-rule="nonzero" data-sc-v="5.1.1" data-sc-c="iconbase"></path>
                            </svg>
                        </span></span></a>
            </div>
        </div>
        <div class="
              chain
              hpgrid hpgrid-max-width
              ma-auto
              mx-dsktp-order
              large-bottom-separator
              no-line-bottom
              include-dividers-tables
            ">

            <div class="
                table-in-grid
                hpgrid
                hpgrid-item
                hpgrid-item--c-start
                hpgrid-item--c-spans
                hpgrid-item--r-spans
                double-wide-with-top-strip-layout
                grid-pseudo-top grid-bottom grid-left
                table1
                include-dividers-features
                hide-helpers
              " style="
                --c-start-mx: 1;
                --c-start-lg: 1;
                --c-start-md: 1;
                --c-start-sm: 1;
                --c-start-xs: 1;
                --c-span-mx: 10;
                --c-span-lg: 8;
                --c-span-md: 12;
                --c-span-sm: 10;
                --c-span-xs: 1;
              ">
               <template v-for="(News,index) in guideData.left">
                            <div :key="index" class="
                  card
                  relative
                  hpgrid-item
                  hpgrid-item--c-start
                  hpgrid-item--c-spans
                  hpgrid-item--r-spans
                  table1-columns-left
                  grid-top grid-left grid-right
                " style="
                  --c-start-mx: 1;
                  --c-start-lg: 1;
                  --c-start-md: 1;
                  --c-start-sm: 1;
                  --c-start-xs: 0;
                  --c-span-mx: 10;
                  --c-span-lg: 8;
                  --c-span-md: 12;
                  --c-span-sm: 10;
                  --c-span-xs: 1;
                  --dsktp-order: 4;
                " data-index="1" data-admin-id="6" data-feature-name="11-750pm-covidchaos" moat-id="fronts/flex-feature" data-mx-span="10" data-lg-span="8" data-md-span="12" data-sm-span="10" data-xs-span="1">
                    <div class="left wrap-text">
                        <div class="card-top card-text">
                            <div class="headline relative gray-darkest pb-xs">
                                <h2 class="
                          font--headline font-size-lg font-bold
                          left
                          relative
                        ">
                                    <router-link :to="{name: 'Detail',params:{id:News.id}}">
                                    <span> {{News.name}} </span></router-link>
                                </h2>
                            </div>
                            <div class="
                        pb-xs
                        font-size-blurb
                        lh-fronts-tiny
                        font-light
                        gray-dark
                      " style="font-size: 0.9375rem">
                                <span class="sub-heading" v-if="News.description" v-html="News.description.slice(0, 300)+'...'"></span>
                            </div>
                            <div class="byline gray-dark font-xxxxs pb-xs">
                             <router-link :to="{name : 'Author',params:{id:News.label}}"> {{News.author}} </router-link>
                            </div>
                        </div>
                    </div>
                </div>
               </template>

            </div>
            <div class="
                table-in-grid
                hpgrid
                hpgrid-item
                hpgrid-item--c-start
                hpgrid-item--c-spans
                hpgrid-item--r-spans
                double-wide-with-top-strip-layout
                grid-pseudo-top grid-bottom grid-right
                table2
                include-dividers-features
                hide-helpers
              " style="
                --c-start-mx: 11;
                --c-start-lg: 9;
                --c-start-md: 1;
                --c-start-sm: 1;
                --c-start-xs: 1;
                --c-span-mx: 10;
                --c-span-lg: 8;
                --c-span-md: 12;
                --c-span-sm: 10;
                --c-span-xs: 1;
              ">

               <template v-for="(News,index) in guideData.main">
                            <div :key="index" class="
                  card
                  relative
                  hpgrid-item
                  hpgrid-item--c-start
                  hpgrid-item--c-spans
                  hpgrid-item--r-spans
                  table2-columns-main
                  grid-top grid-bottom grid-left
                " style="
                  --c-start-mx: 1;
                  --c-start-lg: 1;
                  --c-start-md: 1;
                  --c-start-sm: 1;
                  --c-start-xs: 0;
                  --c-span-mx: 5;
                  --c-span-lg: 4;
                  --c-span-md: 6;
                  --c-span-sm: 5;
                  --c-span-xs: 1;
                  --r-span-mx: 6;
                  --r-span-lg: 6;
                  --r-span-md: 6;
                  --r-span-sm: 6;
                  --dsktp-order: 0;
                " data-index="3" data-admin-id="4" data-feature-name="12-2p-btwplagueships" moat-id="fronts/flex-feature" data-mx-span="5" data-lg-span="4" data-md-span="6" data-sm-span="5" data-xs-span="1">
                    <div class="left no-wrap-text art-size--fullWidth">
                        <div class="card-top card-text">
                            <div class="w-100 mw-100 overflow-hidden relative lh-0 mb-xs">
                                <div class="dib" style="
                          width: 100%;
                          height: 100%;
                          background-color: #eee;
                        ">
                                    <router-link :to="{name: 'Detail',params:{id:News.id}}" class="art-link">
                                    <img style="
                              width: 100%;
                              height: 100%;
                              background-color: rgb(238, 238, 238);
                            " :src="$root.URL_ROOT+'uploads/Product/'+News.front_image" /></router-link>
                                </div>
                            </div>
                            <div class="headline relative gray-darkest pb-xs">
                                <h2 class="
                          font--headline font-size-sm font-bold
                          left
                          relative
                        ">
                                    <router-link :to="{name: 'Detail',params:{id:News.id}}">
                                    <span> {{News.name}}
                                        </span></router-link>
                                </h2>
                            </div>
                            <div class="byline gray-dark font-xxxxs pb-xs">
<router-link :to="{name : 'Author',params:{id:News.label}}"> {{News.author}} </router-link>
                            </div>
                        </div>
                    </div>
                </div>
               </template>
               <template v-for="(News,index) in guideData.right2">
                            <div :key="index+33"  class="
                  card
                  relative
                  hpgrid-item
                  hpgrid-item--c-start
                  hpgrid-item--c-spans
                  hpgrid-item--r-spans
                  table2-columns-right
                  grid-top grid-right
                " style="
                  --c-start-mx: 6;
                  --c-start-lg: 5;
                  --c-start-md: 7;
                  --c-start-sm: 6;
                  --c-start-xs: 0;
                  --c-span-mx: 5;
                  --c-span-lg: 4;
                  --c-span-md: 6;
                  --c-span-sm: 5;
                  --c-span-xs: 1;
                  --r-span-mx: 2;
                  --r-span-lg: 2;
                  --r-span-md: 2;
                  --r-span-sm: 2;
                  --dsktp-order: 1;
                " data-index="4" data-admin-id="5" data-feature-name="12-5a-school-covid-test" moat-id="fronts/flex-feature" data-mx-span="5" data-lg-span="4" data-md-span="6" data-sm-span="5" data-xs-span="1">
                    <div class="left wrap-text">
                        <div class="card-top card-text">
                            <div class="headline relative gray-darkest pb-xs">
                                <h2 class="
                          font--headline font-size-sm font-bold
                          left
                          relative
                        ">
                                    <router-link :to="{name:'Detail',params:{id:News.id}}"><span>
                                      {{News.name}} </span></router-link>
                                </h2>
                            </div>
                            <div class="byline gray-dark font-xxxxs pb-xs">
                              <router-link :to="{name : 'Author',params:{id:News.label}}"> {{News.author}} </router-link>
                            </div>
                        </div>
                    </div>
                </div>
               </template>
            </div>
        </div>
    </div>
</div>
</template>

<script>
import carousel from "vue-owl-carousel";

export default {
    props: ["data","guideData"],
    components: {
      carousel
    },
    data() {
        return {
         
        };
    },
    mounted() {},
    methods: {
      getImg(imgAry) {
            return JSON.parse(imgAry)
      },
    },
};
</script>

