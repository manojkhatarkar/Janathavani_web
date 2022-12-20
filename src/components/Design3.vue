<template>
<div class="hpgrid-max-width ma-auto  " data-chain-name="arts-entertainment" data-gtm-module="arts-entertainment" data-link-group="arts-entertainment" style="min-height:;position:relative">
    <div class="mr-sm ml-sm mr-0-ns ml-0-ns label">
        <div class="gray-darkest mb-sm label label-package left">
            <div class="font-xxs font-bold heading-drop-size  uppercase letter-spacing  black hover-gray-dark label-link mouse-eff f-18" v-on:click="guidShow = !guidShow">
                <span><router-link class="link-catname" :to="'/Category/'+label+'/'+ids"> {{label}} </router-link></span>
                <span class="relative" style="margin-left:0.125rem">
                    <span style="position:absolute;top:0.0625rem">
                        <!-- <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" aria-hidden="true" focusable="false" role="img" class="wpds-c-eMGhSw " width="16" height="16">
                             <path d="m6 12.62-.71-.71L9.25 8 5.33 4.09 6 3.38 10.67 8Z"></path> 
                        </svg> -->
                    </span>
                </span>
                <transition name="fade">
                    <img src="../assets/images/icon/up.png" class="icon-click" v-if="guidShow" />
                    <img src="../assets/images/icon/down.png" class="icon-click" v-else />
                </transition>

            </div>
        </div>
    </div>
    <transition name="fade">
    <div v-if="guidShow" class="chain hpgrid hpgrid-max-width ma-auto  mx-dsktp-order large-bottom-separator no-line-bottom include-dividers-tables ">

        <template v-for="(News,key) in data.main">
            <div :key="key" v-if="key<1" class="table-in-grid hpgrid hpgrid-item hpgrid-item--c-start hpgrid-item--c-spans hpgrid-item--r-spans even-split-3-separate-tables-layout  grid-top grid-bottom grid-left table1 include-dividers-features hide-helpers" style="--c-start-mx:1;--c-start-lg:1;--c-start-md:1;--c-start-sm:1;--c-start-xs:1;--c-span-mx:8;--c-span-lg:8;--c-span-md:6;--c-span-sm:10;--c-span-xs:1">
                <div class="card relative
        
        hpgrid-item hpgrid-item--c-start hpgrid-item--c-spans hpgrid-item--r-spans
        table1-childStyles  grid-top grid-bottom grid-left grid-right
        
      " style="--c-start-mx:1;--c-start-lg:1;--c-start-md:1;--c-start-sm:1;--c-start-xs:0;--c-span-mx:8;--c-span-lg:8;--c-span-md:6;--c-span-sm:10;--c-span-xs:1;--dsktp-order:6" data-index="0" data-admin-id="6" data-feature-name="9-6p-insight" moat-id="fronts/flex-feature" data-mx-span="8" data-lg-span="8" data-md-span="6" data-sm-span="10" data-xs-span="1">
                    <div class="center no-wrap-text art-size--fullWidth" data-feature-id="homepage/story">
                        <div class="card-top card-text">
                            <div class="slideshow-container overflow-hidden relative pb-xs dots-touch">
                                <figure role="region" aria-label="Slideshow" data-testid="slideshow" data-sc-v="6.6.0" data-sc-c="slideshowtrack">
                                    <div class="relative aspect-custom mb-xs transition-opacity duration-400 ease-in-out hover-parent" role="group" aria-label="1 of 5" id="null-items" style="--aspect-width:3; --aspect-height:2;">
                                        <router-link :to="{name:'Detail',params:{id:News.id}}" class="dib art-link image-wrapper absolute top-0 left-0 center transition-opacity ease-in-out controlled-duration o-100" style="--controlled-duration:1000ms;">
                                            <img :src="$root.URL_ROOT+'uploads/Product/'+News.front_image" class="dib va-m mw-100" alt="" data-slide="0" style="max-height: 100%; height: 100%;">
                                        </router-link>
                                    </div>

                                </figure>
                                <div class="overflow-hidden mt-xs" role="progressbar" aria-label="Slideshow progress bar" aria-valuemin="1" aria-valuemax="5" aria-valuenow="1" data-qa="sc-pagination-dots" data-sc-v="6.6.0" data-sc-c="paginationdots">
                                    <div class="flex relative transition-transform duration-400 ease-out" data-sc-v="6.6.0" data-sc-c="paginationdots" style="left: 50%; transform: translate(-35px);">
                                        <div class="pa-xxs brad-50 transition-all duration-400 ease-out bg-gray-darkest" data-sc-v="6.6.0" data-sc-c="paginationdots" style="transform: scale(1); margin: 0px 3px;"></div>
                                        <div class="pa-xxs brad-50 transition-all duration-400 ease-out bg-gray" data-sc-v="6.6.0" data-sc-c="paginationdots" style="transform: scale(0.75); margin: 0px 3px;"></div>
                                        <div class="pa-xxs brad-50 transition-all duration-400 ease-out bg-gray" data-sc-v="6.6.0" data-sc-c="paginationdots" style="transform: scale(0.75); margin: 0px 3px;"></div>
                                        <div class="pa-xxs brad-50 transition-all duration-400 ease-out bg-gray" data-sc-v="6.6.0" data-sc-c="paginationdots" style="transform: scale(0.5); margin: 0px 3px;"></div>
                                        <div class="pa-xxs brad-50 transition-all duration-400 ease-out bg-gray" data-sc-v="6.6.0" data-sc-c="paginationdots" style="transform: scale(0.25); margin: 0px 3px;"></div>
                                    </div>
                                </div>
                            </div>
                            <div class="headline relative gray-darkest pb-xs">
                                <h2 class="relative center font--headline font-light font-size-lg">
                                    <router-link data-pb-local-content-field="web_headline" :to="{name:'Detail',params:{id:News.id}}">
                                        <span class="guid-news-heading" v-html="News.name.slice(0, News.namecount)+'...'"></span>
                                    </router-link>
                                </h2>
                            </div>
                            <div class="pb-xs font-size-blurb lh-fronts-tiny font-light gray-dark-2 " style="font-size:0.9375rem">
                                <span class="sub-heading" v-html="News.description.slice(0, News.contentcount)+'...'">
                                </span></div>
                            <!-- <div class="byline gray-dark-2 font-xxxxs pb-xs">By  {{News.label}} </div> -->
                        </div>
                    </div>
                </div>
            </div>
        </template>

        <div class="table-in-grid hpgrid hpgrid-item hpgrid-item--c-start hpgrid-item--c-spans hpgrid-item--r-spans even-split-3-separate-tables-layout  grid-top grid-bottom grid-center table2 include-dividers-features hide-helpers" style="--c-start-mx:9;--c-start-lg:9;--c-start-md:7;--c-start-sm:1;--c-start-xs:1;--c-span-mx:8;--c-span-lg:8;--c-span-md:6;--c-span-sm:10;--c-span-xs:1">
            <template v-for="(News,key) in data.left">
                <div :key="key" v-if="key<3" class="card relative

                hpgrid-item hpgrid-item--c-start hpgrid-item--c-spans hpgrid-item--r-spans
                table2-childStyles  grid-top grid-left grid-right l-border

                " style="--c-start-mx:1;--c-start-lg:1;--c-start-md:1;--c-start-sm:1;--c-start-xs:0;--c-span-mx:8;--c-span-lg:8;--c-span-md:6;--c-span-sm:10;--c-span-xs:1;--dsktp-order:3" data-index="1" data-admin-id="1" data-feature-name="9-930-tonynoms" moat-id="fronts/flex-feature" data-mx-span="8" data-lg-span="8" data-md-span="6" data-sm-span="10" data-xs-span="1">
                    <div class="left wrap-text art-size--lg" data-feature-id="homepage/story">
                        <div class="card-right card-art left art--right no-bottom">
                            <div class="w-100 mw-100 overflow-hidden relative lh-0 mb-xs" data-qa="art-wrapper">
                                <div class="dib" style="width:100%;height:100%;background-color:#eee">
                                    <router-link :to="{name:'Detail',params:{id:News.id}}" class="art-link">
                                        <img :src="$root.URL_ROOT+'uploads/Product/'+News.front_image" alt="" width="232" height="130" class="border-box db" style="width: 100%; height: 100%; background-color: rgb(238, 238, 238);">
                                    </router-link>
                                </div>
                            </div>
                        </div>
                        <div class="card-left card-text no-bottom">
                            <div class="headline relative gray-darkest pb-xs">
                                <h2 class="relative left font--headline font-bold font-size-sm">
                                    <router-link :to="{name:'Detail',params:{id:News.id}}" data-pb-local-content-field="web_headline" >
                                        <span class="guid-news-heading" v-html="News.name.slice(0, News.namecount)+'...'"></span>
                                    </router-link>
                                </h2>
                            </div>
                            <!-- <div class="byline gray-dark-2 font-xxxxs pb-xs">By <a href="#"> {{News.label}} </a></div>
                            <br />
                                <img src="../assets/images/icon/calendar.png" >

                                <span class="date-font">  {{getFormate(News.ndate)}}</span> -->
                        </div>
                        <div class="cb"></div>
                    </div>
                </div>
            </template>
        </div>
        <div class="table-in-grid hpgrid hpgrid-item hpgrid-item--c-start hpgrid-item--c-spans hpgrid-item--r-spans even-split-3-separate-tables-layout  grid-top grid-bottom grid-right table9 include-dividers-features hide-helpers" style="--c-start-mx:17;--c-start-lg:1;--c-start-md:1;--c-start-sm:1;--c-start-xs:1;--c-span-mx:4;--c-span-lg:16;--c-span-md:12;--c-span-sm:10;--c-span-xs:1">
            <template v-for="(News,key) in data.right">
                <div :key="key" v-if="key<6" class="card relative l-border
        
        hpgrid-item hpgrid-item--c-start hpgrid-item--c-spans hpgrid-item--r-spans
        table9-childStyles  grid-top grid-left grid-right
        
      " style="--c-start-mx:1;--c-start-lg:0;--c-start-md:0;--c-start-sm:0;--c-start-xs:0;--c-span-mx:4;--c-span-lg:5;--c-span-md:4;--c-span-sm:10;--c-span-xs:1;--dsktp-order:0" data-index="2" data-admin-id="3" data-feature-name="9-2p-spanish" moat-id="fronts/flex-feature" data-mx-span="4" data-lg-span="5" data-md-span="4" data-sm-span="10" data-xs-span="1">
                <div class="left wrap-text" data-feature-id="homepage/story">
                    <div class="card-top card-text">
                        <div class="headline relative gray-darkest pb-xs">
                            <h2 class="relative left font--headline font-bold font-size-sm ">
                                <router-link :to="{name:'Detail',params:{id:News.id}}" data-pb-local-content-field="web_headline" >
                                    <span class="guid-news-heading" v-html="News.name.slice(0, News.namecount)+'...'">
                                    </span>
                                </router-link>
                            </h2>
                        </div>
                        <!-- <div class="byline gray-dark-2 font-xxxxs pb-xs">By <a href="#"> {{News.label}} </a></div>
                        <br />
                                <img src="../assets/images/icon/calendar.png" >

                                <span class="date-font">  {{getFormate(News.ndate)}}</span> -->
                    </div>
                </div>
            </div>
            </template>
        </div>
    </div>
</transition>
</div>
</template>

<script>
export default {
    props: ["data", "ids", "label"],
    components: {},
    data() {
        return {
            guidShow:true,
        };
    },
    mounted() {
        console.log(this.props)
    },
    methods: {
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
<style>
    .fade-enter-active, .fade-leave-active {
      transition: opacity .5s;
    }
    .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
      opacity: 0;
    }
    .mouse-eff{
      cursor :pointer;
    }
    .icon-click {
        width: 25px;
        float: right;
        padding-top: 5px;
    }
  </style>
