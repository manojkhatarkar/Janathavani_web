<template>
<div class="hpgrid-max-width ma-auto" data-chain-name="hp-top-table-main" data-gtm-module="hp-top-table-main" style="position: relative">
    <div style="margin-bottom:0px;" class="
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
                wide-center-3-col-table-at-left-layout
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
                --c-span-mx: 16;
                --c-span-lg: 16;
                --c-span-md: 12;
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
                  table1-columns-left
                  grid-top grid-left
                " style="
                  --c-start-mx: 1;
                  --c-start-lg: 1;
                  --c-start-md: 1;
                  --c-start-sm: 1;
                  --c-start-xs: 0;
                  --c-span-mx: 4;
                  --c-span-lg: 4;
                  --c-span-md: 4;
                  --c-span-sm: 10;
                  --c-span-xs: 1;
                  --r-span-lg: 6;
                  --r-span-md: 6;
                  --dsktp-order: 6;
                " data-index="0" data-admin-id="7" data-feature-name="12-8p-bideninflation" moat-id="fronts/flex-feature" data-mx-span="4" data-lg-span="4" data-md-span="4" data-sm-span="10" data-xs-span="1">
                <div class="left wrap-text">

                    <template v-for="News in FNews.left">
                        <div :key="News.id" class="card-top card-text border-bottom">
                            <div class="headline relative gray-darkest pb-xs">
                                <h2 class="
                          font--headline font-size-lg font-bold
                          left
                          relative
                        ">
                                    <router-link :to="{name : 'Detail',params:{id: News.id}}"> <span class="post-heading" v-html="News.name.slice(0, News.namecount)+'...'">
                                        </span></router-link>
                                </h2>
                            </div>
                            <div class="
                        pb-xs
                        font-size-blurb
                        lh-fronts-tiny
                        font-light
                        gray-dark
                      ">
                                <span class="post-content" v-html="News.description.slice(0, News.contentcount)+'...'"></span>
                            </div>
                            <div class="byline gray-dark font-xxxxs pb-xs">
                                <router-link :to="{name : 'Author'}"> By {{News.label}} </router-link>
                            </div>
                        </div>
                    </template>

                </div>
            </div>

            <div class="
                  card
                  relative
                  hpgrid-item
                  hpgrid-item--c-start
                  hpgrid-item--c-spans
                  hpgrid-item--r-spans
                  table1-columns-main
                  grid-top grid-center
                " style="
                  --c-start-mx: 5;
                  --c-start-lg: 5;
                  --c-start-md: 5;
                  --c-start-sm: 1;
                  --c-start-xs: 0;
                  --c-span-mx: 8;
                  --c-span-lg: 8;
                  --c-span-md: 8;
                  --c-span-sm: 10;
                  --c-span-xs: 1;
                  --r-span-lg: 10;
                  --r-span-md: 10;
                  --dsktp-order: 10;
                " data-index="7" data-admin-id="14" data-feature-name="12-10p-afghan-women" moat-id="fronts/flex-feature" data-mx-span="8" data-lg-span="8" data-md-span="8" data-sm-span="10" data-xs-span="1">
                <div class="center no-wrap-text art-size--fullWidth">
                    <template v-for="News in FNews.main">
                        <div :key="News.id" class="card-top card-text">
                            <div class="w-100 mw-100 overflow-hidden relative lh-1 mb-xs">
                                <div class="dib" style="width: 100%; height: 100%">
                                    <div class="art-slot custom-html" style="overflow: hidden">
                                        <div>

                                            <carousel :autoplay="true" :nav="false" :indicators="false" :items="1" :responsive="{ 0: { items: 1 }, 576: { items: 1 }, 600: { items: 1 }, 768: { items: 1 }, 1200: { items: 1 }, 1500: { items: 1 }}">
                                                <router-link :to="{name : 'Detail', params:{id:News.id}}" id="hpvideo" class="">
                                                    <img :src="$root.URL_ROOT+'uploads/Product/'+News.front_image" />
                                                    <div class="hpvideo_overlay"></div>
                                                </router-link>
                                                <template v-if="News.image_collection">
                                                    <router-link v-for="(allimg,key) in getImg(News.image_collection)" :key="key" :to="{name : 'Detail', params:{id:News.id}}" id="hpvideo" class="">
                                                        <img :src="$root.URL_ROOT+'uploads/Product/'+allimg" />
                                                        <div class="hpvideo_overlay"></div>
                                                    </router-link>
                                                </template>
                                            </carousel>

                                            <div class="hpvideo_caption">
                                                <!-- {{News.name}} -->
                                            </div>
                                        </div>
                                        <div></div>
                                    </div>
                                </div>
                            </div>
                            <div class="headline relative gray-darkest pb-xs">
                                <h2 class="
                          font--headline font-size-lg font-light
                          center
                          relative
                        ">
                                    <router-link :to="{name : 'Detail', params:{id:News.id}}"><span class="post-heading" v-html="News.name.slice(0, News.namecount)+'...'"> </span></router-link>
                                </h2>
                            </div>
                            <div class="
                        pb-xs
                        font-size-blurb
                        lh-fronts-tiny
                        font-light
                        gray-dark
                      " style="font-size: 0.9375rem">
                                <span class="post-content" v-html="News.description.slice(0, News.contentcount)+'...'"> </span>
                            </div>
                            <div class="byline gray-dark font-xxxxs pb-xs">
                                <router-link :to="{name : 'Author'}"> By {{News.label}} </router-link>
                            </div>
                        </div>
                    </template>

                </div>
            </div>

            <div class="
                  card
                  relative
                  hpgrid-item
                  hpgrid-item--c-start
                  hpgrid-item--c-spans
                  hpgrid-item--r-spans
                  table1-columns-right
                  grid-bottom grid-right
                " style="
                  --c-start-mx: 13;
                  --c-start-lg: 13;
                  --c-start-md: 0;
                  --c-start-sm: 0;
                  --c-start-xs: 0;
                  --c-span-mx: 4;
                  --c-span-lg: 4;
                  --c-span-md: 4;
                  --c-span-sm: 10;
                  --c-span-xs: 1;
                  --r-span-mx: 5;
                  --r-span-lg: 5;
                  --dsktp-order: 15;
                " data-index="9" data-admin-id="16" data-feature-name="12-5p-cairspies" moat-id="fronts/flex-feature" data-mx-span="4" data-lg-span="4" data-md-span="4" data-sm-span="10" data-xs-span="1">
                <div class="left no-wrap-text art-size--fullWidth">
                    <template v-for="News in FNews.right2">
                        <div :key="News.id" class="card-top card-text">
                            <div class="w-100 mw-100 overflow-hidden relative lh-0 mb-xs">
                                <div class="dib" style="width: 100%;height: 100%;background-color: #eee;">
                                    <router-link :to="{name : 'Detail',params:{id:News.id}}" class="art-link">
                                        <img :src="$root.URL_ROOT+'uploads/Product/'+News.front_image" class="right2-img min-200" /></router-link>
                                </div>
                            </div>
                            <div class="headline relative gray-darkest pb-xs">
                                <h2 class="
                          font--headline font-size-sm font-bold
                          left
                          relative
                        ">
                                    <router-link :to="{name : 'Detail',params:{id:News.id}}"><span class="post-heading" v-html="News.name.slice(0, News.namecount)+'...'"> </span></router-link>
                                </h2>
                            </div>
                            <div class="byline gray-dark font-xxxxs pb-xs">
                                <router-link :to="{name : 'Author'}" class="post-heading"> By {{News.label}} </router-link>
                            </div>
                        </div>
                    </template>
                </div>
            </div>
        </div>
        <div data-link-group="opinions" class="
                table-in-grid
                hpgrid
                hpgrid-item
                hpgrid-item--c-start
                hpgrid-item--c-spans
                hpgrid-item--r-spans
                wide-center-3-col-table-at-left-layout
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
              " data-gtm-vis-first-on-screen-11017726_496="9891" data-gtm-vis-total-visible-time-11017726_496="100" data-gtm-vis-has-fired-11017726_496="1">

            <template v-for="News in FNews.right">
                <div :key="News.id" class="
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
                  --c-span-sm: 5;
                  --c-span-xs: 1;
                  --dsktp-order: 1;
                " data-index="2" data-admin-id="2" data-feature-name="op-c" moat-id="fronts/flex-feature" data-mx-span="4" data-lg-span="5" data-md-span="4" data-sm-span="5" data-xs-span="1">
                    <div class="left wrap-text art-size--xs">
                        <div class="card-right card-art left art--right no-bottom">
                            <div class="
                        w-100
                        mw-100
                        overflow-hidden
                        relative
                        lh-0
                        mb-xs
                        is-square-art
                      ">
                                <div class="dib" style="
                          width: 100%;
                          height: 100%;
                          background-color: #eee;
                        ">
                                    <router-link :to="{name : 'Detail',params:{id:News.id}}" class="art-link">
                                        <img :src="$root.URL_ROOT+'uploads/Product/'+News.front_image" class="right2-img" /></router-link>
                                </div>
                            </div>
                        </div>
                        <div class="card-left card-text no-bottom">
                            <div class="headline relative gray-darkest pb-xs">
                                <h2 class="
                          font--headline font-size-xs font-light
                          left
                          relative
                        ">
                                    <router-link :to="{name : 'Detail',params:{id:News.id}}"><span class="post-heading" v-html="News.name.slice(0, News.namecount)+'...'">

                                        </span></router-link>
                                </h2>
                            </div>
                            <div class="byline gray-dark font-xxxxs pb-xs">
                                <router-link class="post-content" :to="{name : 'Author'}"> By {{News.label}} </router-link>
                            </div>
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

export default {
    props: ["FNews"],
    components: {
        carousel
    },
    data() {
        return {};
    },
    mounted() {},
    methods: {
        getImg(imgAry) {
            return JSON.parse(imgAry)
        }
    },
};
</script>

<style scoped>
.min-200 {
    min-height: 150px;
    max-height: 150px;
}
</style>
