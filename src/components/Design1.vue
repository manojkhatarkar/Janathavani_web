<template>
<div class="hpgrid-max-width ma-auto  " data-chain-name="hp-top-table-main" data-gtm-module="hp-top-table-main" style="min-height:;position:relative">
    <div class="chain hpgrid hpgrid-max-width ma-auto  mx-dsktp-order large-bottom-separator no-line-bottom include-dividers-tables has-spanning-rows" style="--extra-rows-mx:1">
        <div class="table-in-grid hpgrid hpgrid-item hpgrid-item--c-start hpgrid-item--c-spans hpgrid-item--r-spans wide-center-3-col-table-at-left-with-top-strip-layout  grid-top grid-left table0 include-dividers-features hide-helpers" style="--c-start-mx:1;--c-start-lg:1;--c-start-md:1;--c-start-sm:1;--c-start-xs:1;--c-span-mx:16;--c-span-lg:16;--c-span-md:12;--c-span-sm:10;--c-span-xs:1">
            <div class="card relative
        hpgrid-item hpgrid-item--c-start hpgrid-item--c-spans hpgrid-item--r-spans
        table0-childStyles  grid-top grid-bottom grid-left grid-right
      " style="--c-start-mx:1;--c-start-lg:1;--c-start-md:1;--c-start-sm:1;--c-start-xs:1;--c-span-mx:16;--c-span-lg:16;--c-span-md:12;--c-span-sm:10;--c-span-xs:1;--dsktp-order:13" data-index="0" data-admin-id="1" data-feature-name="17-11p-primaries" moat-id="fronts/flex-feature" data-mx-span="16" data-lg-span="16" data-md-span="12" data-sm-span="10" data-xs-span="1">
                <div class="center no-wrap-text" data-feature-id="homepage/story">
                    <div class="card-top card-text">
                        <div class="gray-darkest mb-sm label label-package center">

                        </div>
                        <div class="headline relative gray-darkest pb-xs">
                            <h2 class="relative center font--headline-1 font-bold font-size-xl">
                                <a data-pb-local-content-field="web_headline" href="#https://www.washingtonpost.com/politics/2022/05/17/trump-barnette-mastriano-pennsylvania/"><span> {{FNews.newsheading}} </span></a></h2>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class=" design-mb-h table-in-grid hpgrid hpgrid-item hpgrid-item--c-start hpgrid-item--c-spans hpgrid-item--r-spans wide-center-3-col-table-at-left-with-top-strip-layout  grid-pseudo-right grid-horizontal-divider-off grid-bottom grid-left table1 include-dividers-features hide-helpers" style="--c-start-mx:1;--c-start-lg:1;--c-start-md:1;--c-start-sm:1;--c-start-xs:1;--c-span-mx:16;--c-span-lg:16;--c-span-md:12;--c-span-sm:10;--c-span-xs:1">
            <template >
                <div  class=" card relative hpgrid-item hpgrid-item--c-start hpgrid-item--c-spans hpgrid-item--r-spans table1-columns-left  grid-top grid-left" style="--c-start-mx:1;--c-start-lg:1;--c-start-md:1;--c-start-sm:1;--c-start-xs:0;--c-span-mx:4;--c-span-lg:4;--c-span-md:4;--c-span-sm:10;--c-span-xs:1;--r-span-mx:1;--r-span-lg:6;--r-span-md:6;--dsktp-order:6" data-index="1" data-admin-id="2" data-feature-name="17-11p-primaries" moat-id="fronts/flex-feature" data-mx-span="4" data-lg-span="4" data-md-span="4" data-sm-span="10" data-xs-span="1">
                    
                    <div v-for="News in FNews.left" class="left no-wrap-text l-border" data-feature-id="homepage/story">
                        <div :key="News.id" class="card-top card-text l-pt">
                            <div class="headline relative gray-darkest pb-xs">
                                <h2 class="relative left font--headline-1 font-bold font-size-sm 1 left-news-hrading">
                                    <router-link :to="{name : 'Detail',params:{id: News.id}}"><span v-html="News.name.slice(0, News.namecount)"></span></router-link>
                                </h2>
                            </div>
                            <div class="pb-xs font-size-blurb lh-fronts-tiny font-light gray-dark-2 " style="font-size:0.9375rem">
                                <span class="top-1-sub-heading" v-html="News.description.slice(0, News.contentcount)">
                                </span>
                            </div>
                            <!-- <div class="byline gray-dark-2 font-xxxxs pb-xs">By<router-link :to="{name : 'Author',params:{id:News.label}}"> {{News.author}} </router-link>
                                
                            </div> 
                            <br />
                                <img src="../assets/images/icon/calendar.png" >

                                <span class="date-font">  {{getFormate(News.ndate)}}</span>-->
                        </div>
                    </div>
                </div>
            </template>
            <!-- <template v-for="(News,key) in FNews.main">
                <div :key="key" v-if="key==1" class="card relative
        
        hpgrid-item hpgrid-item--c-start hpgrid-item--c-spans hpgrid-item--r-spans
        table1-columns-main  grid-pseudo-left grid-pseudo-right grid-middle grid-center
        
      " style="--c-start-mx:5;--c-start-lg:5;--c-start-md:5;--c-start-sm:1;--c-start-xs:0;--c-span-mx:8;--c-span-lg:8;--c-span-md:8;--c-span-sm:10;--c-span-xs:1;--r-span-mx:5;--r-span-lg:5;--r-span-md:5;--dsktp-order:9" data-index="2" data-admin-id="3" data-feature-name="17-9p-fetterman" moat-id="fronts/flex-feature" data-mx-span="8" data-lg-span="8" data-md-span="8" data-sm-span="10" data-xs-span="1">
                    <div class="left wrap-text art-size--lg" data-feature-id="homepage/story">
                        <div class="card-right card-art left art--right no-bottom">
                            <div class="w-100 mw-100 overflow-hidden relative lh-0 mb-xs" data-qa="art-wrapper">
                                <div class="dib" style="width:100%;height:100%;background-color:#eee">
                                    <router-link :to="{name : 'Detail', params:{id:News.id}}" class="art-link">
                                        <img :src="$root.URL_ROOT+'uploads/Product/'+News.front_image" alt="" width="232" height="130" class="border-box db" style="width: 100%; height: 100%; background-color: rgb(238, 238, 238);">
                                    </router-link>
                                </div>
                            </div>
                        </div>
                        <div class="card-left card-text no-bottom">
                            <div class="headline relative gray-darkest pb-xs ">
                                <h2 class="relative left font--headline font-bold font-size-sm home-center-heading " style="padding-top: 50px;">
                                    <router-link :to="{name : 'Detail', params:{id:News.id}}" data-pb-local-content-field="web_headline"><span v-html="News.name.slice(0, News.namecount)">
                                        </span></router-link>
                                </h2>
                            </div>
                            <div class="pb-xs font-size-blurb lh-fronts-tiny font-light gray-dark " style="font-size:0.9375rem"><span class="sub-heading" v-html="News.description.slice(0, News.contentcount)">
                                </span></div>
                            <div class="byline gray-dark font-xxxxs pb-xs">By <router-link :to="{name : 'Author',params:{id:News.label}}"> {{News.author}} </router-link>
                            </div>

                        </div>
                        <div class="cb"></div>
                    </div>
                </div>
            </template> -->
            <template >
                <div  class="card relative
        
        hpgrid-item hpgrid-item--c-start hpgrid-item--c-spans hpgrid-item--r-spans
        table1-columns-right  grid-top grid-right
        
      " style="--c-start-mx:13;--c-start-lg:13;--c-start-md:0;--c-start-sm:0;--c-start-xs:0;--c-span-mx:4;--c-span-lg:4;--c-span-md:4;--c-span-sm:10;--c-span-xs:1;--r-span-mx:2;--r-span-lg:5;--dsktp-order:10" data-index="4" data-admin-id="5" data-feature-name="17-7p-pasenategop" moat-id="fronts/flex-feature" data-mx-span="4" data-lg-span="4" data-md-span="4" data-sm-span="10" data-xs-span="1">
                    
                    <div v-for="News in FNews.right2"  class="left no-wrap-text art-size--fullWidth" data-feature-id="homepage/story">
                        <div :key="News.id" class="card-top card-text l-border">
                            <div class="mb-xs live-graphic">
                                <div class=" flex flex-column pt-20" id="2022-05-17_PA_P_R_S_HomepagePrimaryResultsTable">
                                    <router-link :to="{name : 'Detail',params:{id:News.id}}" class="gray-darkest flex-grow-1 heading-new">
                                        <h3 class="lh-lg font-xs font-bold font--subhead mr-xs  di" v-html="News.name.slice(0, News.namecount)"></h3>
                                        <!-- <a class="content-box w-auto brad-11 pl-xs pr-xs dib inline-flex items-center va-m bg-red hover-bg-red-dark focus-bg-red-dark white mb-xxs cand-0-GOP-bg uppercase font-bold font-sans-serif antialiased transition-colors duration-200 ease-in-out h-20 font-xxxxs" style="color: white;">GOP</a> -->
                                        <!-- <p class="gray-darker mb-xxs font-xxxxs font-sans-serif">Estimated 95 percent of votes counted</p> -->
                                    </router-link>
                                    <router-link :to="{name : 'Detail',params:{id:News.id}}" class="art-link">
                                        <img :src="$root.URL_ROOT+'uploads/Product/'+News.front_image" class="right2-img min-200" />
                                    </router-link>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </template>
            <template ><!----v-if="keys==0"-->
                <div   class="card relative dn-hp-sm dn-hp-xs hpgrid-item hpgrid-item--c-start hpgrid-item--c-spans hpgrid-item--r-spans
table1-columns-main  grid-top grid-center
      " style="--c-start-mx:5;--c-start-lg:5;--c-start-md:5;--c-start-sm:1;--c-start-xs:0;--c-span-mx:8;--c-span-lg:8;--c-span-md:8;--c-span-sm:10;--c-span-xs:1;--r-span-mx:5;--r-span-lg:8;--r-span-md:8;--dsktp-order:8" data-index="7" data-admin-id="14" data-feature-name="18-1a-wrap-video" moat-id="fronts/flex-feature" data-mx-span="8" data-lg-span="8" data-md-span="8" data-sm-span="10" data-xs-span="1">
               
                    <div v-for="(News,keys) in FNews.main" class="left no-wrap-text art-size--fullWidth" data-feature-id="homepage/story"> <!---slider content---->
                        <div :key="keys" v-if="keys<2"  class="card-top card-text l-border l-pd">
                            <figure class="flex-feature mb-xxs">
                                <div class="powa-wrapper" style="width: 100%; height: 0px; background-size: cover; padding-bottom: 56.25%; background-color: rgb(245, 245, 245); background-repeat: no-repeat; background-position: center center;">
                                    <div class="powa powa-processed small powa-short powa-horizontal" data-org="wapo" data-ads="true" data-ad-bar="1" data-allow-share="true" data-aspect-ratio="0.5625" data-autoinit="true" data-autoplay-on-desktop="false" data-blurb="false" data-custom-btn-text="Key results" data-duration-or-live="true" data-event400="false" data-live="false" data-loop="false" data-muted="true" data-playthrough="false" data-promo-video="true" data-preview="false" data-preview2="false" data-show-title="false" data-subtitles="false" data-uuid="5458de3f-835f-4a31-b45f-05aa9000dc5f" data-powa-index="0" data-img="https://www.washingtonpost.com/resizer/v44pryrg-sVcwrc4Dz9t_8VuH1w=/960x540/filters:quality(80)/posttv-thumbnails-prod.s3.amazonaws.com/05-18-2022/t_965cb7bb8470455ebceee2dffda99712_name_thumb.jpg" data-img-uuid="5458de3f-835f-4a31-b45f-05aa9000dc5f" data-ad-timeouts="{&quot;vastLoad&quot;:3,&quot;videoLoad&quot;:3,&quot;adStart&quot;:3}" data-controls="false" data-mobile-controls="false" data-device-class="deskweb" data-env="v/4.1.17" id="powa-5458de3f-835f-4a31-b45f-05aa9000dc5f-0" tabindex="0" style="padding-bottom: 0%;" data-advertising="{&quot;adBar&quot;:true}" data-player-type="posttv-embed-hp" data-article-autoplay="false" data-rendered="true" data-ready="true">
                                        <carousel style="overflow: hidden;height: 277px;"  v-if="News.image_collection.length>0" :autoplay="true" :nav="false" :indicators="false" :items="1" :slideTransition="animateOut" :responsive="{ 0: { items: 1 }, 576: { items: 1 }, 600: { items: 1 }, 768: { items: 1 }, 1200: { items: 1 }, 1500: { items: 1 }}">
                                            <!-- <carousel-3d :disable3d="true" :width="480" :controls-visible="false"  :display="1" :autoplay="true" >
                                            <slide  :index='1'> -->
                                            <router-link :to="{name : 'Detail', params:{id:News.id}}" id="hpvideo" class="">
                                                <img :src="$root.URL_ROOT+'uploads/Product/'+News.front_image" />
                                                <div class="hpvideo_overlay"></div>
                                            </router-link>
                                            <!-- </slide> -->
                                            <template v-if="News.image_collection">
                                                <slide v-for="(allimg,key) in getImg(News.image_collection)" :index='key'>
                                                <router-link  :key="key" :to="{name : 'Detail', params:{id:News.id}}" id="hpvideo"  class="">
                                                    <img :src="$root.URL_ROOT+'uploads/Product/'+allimg" />
                                                    <div class="hpvideo_overlay"></div>
                                                </router-link>
                                            </slide>
                                            </template>
                                           
                                            <!-- </carousel-3d> -->
                                        </carousel>
                                        <div v-else>
                                            <router-link  :key="key" :to="{name : 'Detail', params:{id:News.id}}" id="hpvideo" class="">
                                                <img :src="$root.URL_ROOT+'uploads/Product/'+News.front_image" style="width:100%;height:330px;" />
                                                <div class="hpvideo_overlay"></div>
                                            </router-link>
                                        </div>
                                    </div>
                                </div>
                            </figure>
                            <div class="headline relative gray-darkest pb-xs">
                                <h2 class="relative left font--headline font-bold font-size-sm home-center-heading " style="padding-top:60px;">
                                    
                                    <router-link :to="{name : 'Detail',params:{id: News.id}}"><span v-html="News.name.slice(0, News.namecount)"></span></router-link>
                                </h2>
                            </div>
                            <div class="
                        pb-xs
                        font-size-blurb
                        lh-fronts-tiny
                        font-light
                        gray-dark-2
                      " style="font-size: 0.9375rem">
                                <span class="post-content" v-html="News.description.slice(0, News.contentcount)"> </span>
                            </div>
                            <!-- <div class="byline gray-dark-2 font-xxxxs pb-xs" v-if="News.author!='' && News.author!=null">
                                    <router-link :to="{name : 'Author',params:{id:News.label}}">By {{News.author}} </router-link>
                            </div>
                            <br />
                                <img src="../assets/images/icon/calendar.png" >

                                <span class="date-font">  {{getFormate(News.ndate)}}</span> -->
                        </div>
                    </div>
                </div>
            </template>
        </div>
        

        <!----For Mobile Start----->
        
        <div class="design-mb-s">

            <template ><!----v-if="keys==0"-->
                <div   class="card relative dn-hp-sm  hpgrid-item hpgrid-item--c-start hpgrid-item--c-spans hpgrid-item--r-spans
table1-columns-main  grid-top grid-center
      " style="--c-start-mx:5;--c-start-lg:5;--c-start-md:5;--c-start-sm:1;--c-start-xs:0;--c-span-mx:8;--c-span-lg:8;--c-span-md:8;--c-span-sm:10;--c-span-xs:1;--r-span-mx:5;--r-span-lg:8;--r-span-md:8;--dsktp-order:8" data-index="7" data-admin-id="14" data-feature-name="18-1a-wrap-video" moat-id="fronts/flex-feature" data-mx-span="8" data-lg-span="8" data-md-span="8" data-sm-span="10" data-xs-span="1">
                
                    <div v-for="(News,keys) in FNews.main" class="left no-wrap-text art-size--fullWidth" data-feature-id="homepage/story"> <!---slider content---->
                        <div :key="keys" v-if="keys<2"  class="card-top card-text l-border l-pd">
                            <figure class="flex-feature mb-xxs">
                                <div class="powa-wrapper" style="width: 100%; height: 277px; background-size: cover; padding-bottom: 56.25%; background-color: rgb(245, 245, 245); background-repeat: no-repeat; background-position: center center;">
                                    <div class="powa powa-processed small powa-short powa-horizontal" data-org="wapo" data-ads="true" data-ad-bar="1" data-allow-share="true" data-aspect-ratio="0.5625" data-autoinit="true" data-autoplay-on-desktop="false" data-blurb="false" data-custom-btn-text="Key results" data-duration-or-live="true" data-event400="false" data-live="false" data-loop="false" data-muted="true" data-playthrough="false" data-promo-video="true" data-preview="false" data-preview2="false" data-show-title="false" data-subtitles="false" data-uuid="5458de3f-835f-4a31-b45f-05aa9000dc5f" data-powa-index="0" data-img="https://www.washingtonpost.com/resizer/v44pryrg-sVcwrc4Dz9t_8VuH1w=/960x540/filters:quality(80)/posttv-thumbnails-prod.s3.amazonaws.com/05-18-2022/t_965cb7bb8470455ebceee2dffda99712_name_thumb.jpg" data-img-uuid="5458de3f-835f-4a31-b45f-05aa9000dc5f" data-ad-timeouts="{&quot;vastLoad&quot;:3,&quot;videoLoad&quot;:3,&quot;adStart&quot;:3}" data-controls="false" data-mobile-controls="false" data-device-class="deskweb" data-env="v/4.1.17" id="powa-5458de3f-835f-4a31-b45f-05aa9000dc5f-0" tabindex="0" style="padding-bottom: 0%;" data-advertising="{&quot;adBar&quot;:true}" data-player-type="posttv-embed-hp" data-article-autoplay="false" data-rendered="true" data-ready="true">
                                        <carousel style="overflow: hidden;height: 277px;"  v-if="News.image_collection.length>0" :autoplay="true" :nav="false" :indicators="false" :items="1" :slideTransition="animateOut" :responsive="{ 0: { items: 1 }, 576: { items: 1 }, 600: { items: 1 }, 768: { items: 1 }, 1200: { items: 1 }, 1500: { items: 1 }}">
                                            <!-- <carousel-3d :disable3d="true" :width="480" :controls-visible="false"  :display="1" :autoplay="true" >
                                            <slide  :index='1'> -->
                                            <router-link :to="{name : 'Detail', params:{id:News.id}}" id="hpvideo" class="">
                                                <img :src="$root.URL_ROOT+'uploads/Product/'+News.front_image" />
                                                <div class="hpvideo_overlay"></div>
                                            </router-link>
                                            <!-- </slide> -->
                                            <template v-if="News.image_collection">
                                                <slide v-for="(allimg,key) in getImg(News.image_collection)" :index='key'>
                                                <router-link  :key="key" :to="{name : 'Detail', params:{id:News.id}}" id="hpvideo"  class="">
                                                    <img :src="$root.URL_ROOT+'uploads/Product/'+allimg" />
                                                    <div class="hpvideo_overlay"></div>
                                                </router-link>
                                            </slide>
                                            </template>
                                           
                                            <!-- </carousel-3d> -->
                                        </carousel>
                                        <div v-else>
                                            <router-link  :key="key" :to="{name : 'Detail', params:{id:News.id}}" id="hpvideo" class="">
                                                <img :src="$root.URL_ROOT+'uploads/Product/'+News.front_image" style="width:100%;height:330px;" />
                                                <div class="hpvideo_overlay"></div>
                                            </router-link>
                                        </div>
                                    </div>
                                </div>
                            </figure>
                            <div class="headline relative gray-darkest pb-xs">
                                <h2 class="relative left font--headline font-bold font-size-sm home-center-heading " style="padding-top:60px;">
                                    
                                    <router-link :to="{name : 'Detail',params:{id: News.id}}"><span v-html="News.name.slice(0, News.namecount)"></span></router-link>
                                </h2>
                            </div>
                            <div class="
                        pb-xs
                        font-size-blurb
                        lh-fronts-tiny
                        font-light
                        gray-dark-2
                      " style="font-size: 0.9375rem">
                                <span class="post-content" v-html="News.description.slice(0, News.contentcount)"> </span>
                            </div>
                            <!-- <div class="byline gray-dark-2 font-xxxxs pb-xs" v-if="News.author!='' && News.author!=null">
                                    <router-link :to="{name : 'Author',params:{id:News.label}}">By {{News.author}} </router-link>
                            </div>
                            <br />
                                <img src="../assets/images/icon/calendar.png" >

                                <span class="date-font">  {{getFormate(News.ndate)}}</span> -->
                        </div>
                    </div>
                </div>
            </template>

            <template >
                <div  class=" card relative hpgrid-item hpgrid-item--c-start hpgrid-item--c-spans hpgrid-item--r-spans table1-columns-left  grid-top grid-left" style="--c-start-mx:1;--c-start-lg:1;--c-start-md:1;--c-start-sm:1;--c-start-xs:0;--c-span-mx:4;--c-span-lg:4;--c-span-md:4;--c-span-sm:10;--c-span-xs:1;--r-span-mx:1;--r-span-lg:6;--r-span-md:6;--dsktp-order:6" data-index="1" data-admin-id="2" data-feature-name="17-11p-primaries" moat-id="fronts/flex-feature" data-mx-span="4" data-lg-span="4" data-md-span="4" data-sm-span="10" data-xs-span="1">
                    
                    <div v-for="News in FNews.left" class="left no-wrap-text l-border" data-feature-id="homepage/story">
                        <div :key="News.id" class="card-top card-text l-pt">
                            <div class="headline relative gray-darkest pb-xs">
                                <h2 class="relative left font--headline-1 font-bold font-size-sm 1 left-news-hrading">
                                    <router-link :to="{name : 'Detail',params:{id: News.id}}"><span v-html="News.name.slice(0, News.namecount)"></span></router-link>
                                </h2>
                            </div>
                            <div class="pb-xs font-size-blurb lh-fronts-tiny font-light gray-dark-2 " style="font-size:0.9375rem">
                                <span class="top-1-sub-heading" v-html="News.description.slice(0, News.contentcount)">
                                </span>
                            </div>
                            <!-- <div class="byline gray-dark-2 font-xxxxs pb-xs">By<router-link :to="{name : 'Author',params:{id:News.label}}"> {{News.author}} </router-link>
                                
                            </div> 
                            <br />
                                <img src="../assets/images/icon/calendar.png" >

                                <span class="date-font">  {{getFormate(News.ndate)}}</span>-->
                        </div>
                    </div>
                </div>
            </template>
            
            <template >
                <div  class="card relative
        
        hpgrid-item hpgrid-item--c-start hpgrid-item--c-spans hpgrid-item--r-spans
        table1-columns-right  grid-top grid-right
        
      " style="--c-start-mx:13;--c-start-lg:13;--c-start-md:0;--c-start-sm:0;--c-start-xs:0;--c-span-mx:4;--c-span-lg:4;--c-span-md:4;--c-span-sm:10;--c-span-xs:1;--r-span-mx:2;--r-span-lg:5;--dsktp-order:10" data-index="4" data-admin-id="5" data-feature-name="17-7p-pasenategop" moat-id="fronts/flex-feature" data-mx-span="4" data-lg-span="4" data-md-span="4" data-sm-span="10" data-xs-span="1">
                    
                    <div v-for="News in FNews.right2"  class="left no-wrap-text art-size--fullWidth" data-feature-id="homepage/story">
                        <div :key="News.id" class="card-top card-text l-border">
                            <div class="mb-xs live-graphic">
                                <div class=" flex flex-column pt-20" id="2022-05-17_PA_P_R_S_HomepagePrimaryResultsTable">
                                    <router-link :to="{name : 'Detail',params:{id:News.id}}" class="gray-darkest flex-grow-1 heading-new">
                                        <h3 class="lh-lg font-xs font-bold font--subhead mr-xs  di" v-html="News.name.slice(0, News.namecount)"></h3>
                                        <!-- <a class="content-box w-auto brad-11 pl-xs pr-xs dib inline-flex items-center va-m bg-red hover-bg-red-dark focus-bg-red-dark white mb-xxs cand-0-GOP-bg uppercase font-bold font-sans-serif antialiased transition-colors duration-200 ease-in-out h-20 font-xxxxs" style="color: white;">GOP</a> -->
                                        <!-- <p class="gray-darker mb-xxs font-xxxxs font-sans-serif">Estimated 95 percent of votes counted</p> -->
                                    </router-link>
                                    <router-link :to="{name : 'Detail',params:{id:News.id}}" class="art-link">
                                        <img :src="$root.URL_ROOT+'uploads/Product/'+News.front_image" class="right2-img min-200" />
                                    </router-link>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </template>
        </div>
        
         <!----For Mobile End----->
        
        
        
        <div class="table-in-grid hpgrid hpgrid-item hpgrid-item--c-start hpgrid-item--c-spans hpgrid-item--r-spans wide-center-3-col-table-at-left-with-top-strip-layout  grid-top grid-bottom grid-right table9 include-dividers-features hide-helpers" style="--c-start-mx:17;--c-start-lg:1;--c-start-md:1;--c-start-sm:1;--c-start-xs:1;--c-span-mx:4;--c-span-lg:16;--c-span-md:12;--c-span-sm:10;--c-span-xs:1;--r-span-mx:2">
            <div class="hpgrid-item hpgrid-item--c-start hpgrid-item--c-spans hpgrid-item--r-spans hpgrid-close-the-gap" style="grid-row-end:1;--c-start-mx:1;--c-span-mx:4">
                <div class="gray-darkest mb-sm label label-package left">
                    <span class="font-xxs-2 font-bold   uppercase letter-spacing  black"><span> <router-link to="Opinion/ಅಭಿಪ್ರಾಯ/22">ಅಭಿಪ್ರಾಯ</router-link></span></span></div>
            </div>
           
            <template v-for="News in FNews.right">
                <div :key="News.id" class="l-border card relative
        
        hpgrid-item hpgrid-item--c-start hpgrid-item--c-spans hpgrid-item--r-spans
        table9-childStyles  grid-top grid-left grid-right
        
      " style="--c-start-mx:1;--c-start-lg:0;--c-start-md:0;--c-start-sm:0;--c-start-xs:0;--c-span-mx:4;--c-span-lg:5;--c-span-md:4;--c-span-sm:5;--c-span-xs:1;--r-span-mx:1;--dsktp-order:0" data-index="2" data-admin-id="6" data-feature-name="op-b" moat-id="fronts/flex-feature" data-mx-span="4" data-lg-span="5" data-md-span="4" data-sm-span="5" data-xs-span="1">
                    <div class="left wrap-text art-size--xs" data-feature-id="homepage/story">
                        <div class="card-right card-art left art--right no-bottom">
                            <div class="w-100 mw-100 overflow-hidden relative lh-0 mb-xs is-square-art" data-qa="art-wrapper">
                                <div class="dib" style="width:100%;height:100%;background-color:#eee">
                                    <router-link :to="'/OpinianDetail/'+News.id" class="art-link">
                                        <img :src="$root.URL_ROOT+'uploads/Product/'+News.front_image" alt="" width="64" height="64" class="border-box db" style="width: 100%; height: 100%; background-color: rgb(238, 238, 238);"></router-link>
                                </div>
                            </div>
                        </div>
                        <div class="card-left card-text no-bottom">
                            <div class="headline relative gray-darkest pb-xs">
                                <h2 class="relative left font--headline font-light font-size-xs opinion-heading">
                                    <router-link :to="'/OpinianDetail/'+News.id" data-pb-local-content-field="web_headline">
                                        <span v-html="News.name.slice(0, News.namecount)">
                                        </span>
                                    </router-link>
                                </h2>
                            </div>
                            <!-- <div class="byline gray-dark-2 font-xxxxs pb-xs">Opinion by
                                <router-link :to="{name : 'Author',params:{id:News.label}}"> {{News.author}} </router-link>
                            </div>
                            <br />
                                <img src="../assets/images/icon/calendar.png" >

                                <span class="date-font">  {{getFormate(News.ndate)}}</span> -->
                        </div>
                        <div class="cb"></div>
                    </div>
                </div>
            </template>
        </div>
    </div>

   
    
</div>
</template>

<script>
import carousel from "vue-owl-carousel";
//import { Carousel3d, Slide } from 'vue-carousel-3d';


export default {
    props: ["FNews","right_label"],
    components: {
        carousel
        // Carousel3d,
        // Slide,
    },
    data() {
        return {
            slides: 5,
        };
    },
    mounted() {
        console.log('test data');
        console.log(this.FNews)
    },
    methods: {
        getImg(imgAry) {
            return JSON.parse(imgAry)
        },
        getFormate(dt){
            const months = ["January","February","March","April","May","June","July","August","September","October","November","December"];
            var setD=new Date(dt);
            console.log(setD)
            var day=setD.getDay();
            var month=months[setD.getMonth()];
            var year=setD.getFullYear();
            var lst=month+'-'+day+'-'+year;
            return lst;
        },
    },
};
</script>

<style scoped>
.l-border {
    border-bottom: 1px solid #e9e9e9;
    padding-bottom: 22px;
    /* border-top: 1px solid #e9e9e9; */
}

.min-200 {
    min-height: 150px;
    max-height: 150px;
}
</style>
