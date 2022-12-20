<template>
<div>
 <div class="hpgrid-max-width ma-auto" style="position: relative" v-for="News in categoryNewsData" :key="News.id">
                <div class="mr-sm ml-sm mr-0-ns ml-0-ns">
                    <div class="gray-darkest mb-sm label label-section-large left">
                        <a class="
                  font-xs font-bold
                  uppercase
                  letter-spacing
                  offblack
                  hover-blue
                  label-link
                " data-href="#https://www.washingtonpost.com/politics/"><span> {{News.heading}} </span><span class="relative" style="margin-left: 0.125rem"><span style="position: absolute; size-to-use: normal; top: 0"><svg class="
                        content-box
                        fill-gray
                        hover-fill-blue hover-inherit
                      " width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" data-sc-v="5.1.1" data-sc-c="iconbase">
                                        <title data-sc-v="5.1.1" data-sc-c="iconbase">
                                            ChevronRight
                                        </title>
                                        <path d="M9.44 7.854L4.145 2.56l1.415-1.415 6 6a1 1 0 0 1 0 1.415l-6 6-1.415-1.415L9.44 7.854z" fill-rule="nonzero" data-sc-v="5.1.1" data-sc-c="iconbase"></path>
                                    </svg></span></span></a>
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
              " >
              <template v-for="leftNews in News.cat_news" >
                        <div :key="leftNews.id" v-if="leftNews.left==1" class="
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
                " data-index="0" data-admin-id="6" data-feature-name="12-7p-pkcapitol" moat-id="fronts/flex-feature" data-mx-span="4" data-lg-span="4" data-md-span="4" data-sm-span="10" data-xs-span="1">
                            <div class="left wrap-text">
                                <div class="card-top card-text">
                                    <div class="gray-darkest mb-xxs label label-kicker left">
                                        <a class="
                          font-xxxxs font-bold
                          dib
                          mr-xs
                          lh-sm
                          dib
                          offblack
                          hover-blue
                          label-link
                        " href="#"><span>@PKCapitol</span></a><span class="dib font-xxxxs lh-sm gray-darkest"><span></span></span>
                                    </div>
                                    <div class="headline relative gray-darkest pb-xs">
                                        <h2 class="
                          font--headline font-size-lg font-bold
                          left
                          relative
                        ">
                                            <a href="#">
                                            <span>{{leftNews.name}}</span></a>
                                        </h2>
                                    </div>
                                    <div class="
                        pb-xs
                        font-size-blurb
                        lh-fronts-tiny
                        font-light
                        gray-dark
                      " style="font-size: 0.9375rem">
                                        <span class="sub-heading" v-html="leftNews.description"></span>
                                    </div>
                                    <div class="byline gray-dark font-xxxxs pb-xs">
                                        <a href="#"> {{leftNews.label}} </a>
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
                        <div class="
                  card
                  relative
                  hpgrid-item
                  hpgrid-item--c-start
                  hpgrid-item--c-spans
                  hpgrid-item--r-spans
                  table2-childStyles
                  grid-top grid-bottom grid-left grid-right
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
                  --dsktp-order: 6;
                " data-index="1" data-admin-id="5" data-feature-name="12-8a-reid" moat-id="fronts/flex-feature" data-mx-span="8" data-lg-span="8" data-md-span="8" data-sm-span="10" data-xs-span="1">
                            <template v-for="leftNews in News.cat_news" >
                            <div :key="leftNews.id" v-if="leftNews.main==1" class="left no-wrap-text art-size--fullWidth">
                                <div class="card-top card-text">
                                    <div class="w-100 mw-100 overflow-hidden relative lh-0 mb-xxs">
                                        <div class="dib" style="width: 100%;height: 100%;background-color: #eee;">
                                            <a data-href="#" class="art-link">
                                              <img style="
                              width: 100%;
                              height: 100%;
                              background-color: rgb(238, 238, 238);
                            " :src="$root.URL_ROOT+'uploads/Product/'+leftNews.front_image" alt="Image" width="496" height="331" class="border-box db" 
                            :srcset="$root.URL_ROOT+'uploads/Product/'+leftNews.front_image" /></a>
                                        </div>
                                    </div>
                                    <div class="
                        gray-dark
                        font-xxxxs
                        left
                        pb-xs
                        font--meta-text
                        lh-sm
                      ">
                                       {{leftNews.subheading}}
                                    </div>
                                    <div class="headline relative gray-darkest pb-xs">
                                        <h2 class="
                          font--headline font-size-md font-bold
                          left
                          relative
                        ">
                                            <a href="#"><span>
                                             {{leftNews.name}}
                                             </span></a>
                                        </h2>
                                    </div>
                                    <div class="
                        pb-xs
                        font-size-blurb
                        lh-fronts-tiny
                        font-light
                        gray-dark
                      " style="font-size: 0.9375rem">
                                        <span class="sub-heading" v-html="leftNews.description"></span>
                                    </div>
                                    <div class="byline gray-dark font-xxxxs pb-xs">
                                        <a href="#"> {{leftNews.label}} </a>
                                    </div>
                                </div>
                            </div>
                        </template>
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
              <template v-for="leftNews in News.cat_news" >
                        <div :key="leftNews.id" v-if="leftNews.right2==1" class="
                  card
                  relative
                  hpgrid-item
                  hpgrid-item--c-start
                  hpgrid-item--c-spans
                  hpgrid-item--r-spans
                  table3-childStyles
                  grid-top grid-left grid-right
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
                " data-index="2" data-admin-id="4" data-feature-name="12-4p-bump-lindell" moat-id="fronts/flex-feature" data-mx-span="4" data-lg-span="4" data-md-span="6" data-sm-span="10" data-xs-span="1">
                            <div class="left no-wrap-text art-size--fullWidth">
                                <div class="card-top card-text">
                                    <div class="w-100 mw-100 overflow-hidden relative lh-0 mb-xs">
                                        <div class="dib" style="
                          width: 100%;
                          height: 100%;
                          background-color: #eee;
                        ">
                      <a data-href="#" class="art-link">
                          <img style="width: 100%;height: 100%;background-color: rgb(238, 238, 238);" 
                          :src="$root.URL_ROOT+'uploads/Product/'+leftNews.front_image" alt="Image" width="232" height="130" class="border-box db" 
                          :srcset="$root.URL_ROOT+'uploads/Product/'+leftNews.front_image" /></a>
                                        </div>
                                    </div>
                                    <div class="gray-darkest mb-xxs label label-kicker left">
                                        <a class="
                          font-xxxxs font-bold
                          lh-sm
                          offblack
                          hover-blue
                          label-link
                        " data-href="#https://www.washingtonpost.com/politics/2022/01/12/are-you-one-1-11-americans-mike-lindell-doesnt-want-arrest/"><span> {{leftNews.subheading}} </span></a>
                                    </div>
                                    <div class="headline relative gray-darkest pb-xs">
                                        <h2 class="
                          font--headline font-size-sm font-bold
                          left
                          relative
                        ">
                                            <a data-href="#https://www.washingtonpost.com/politics/2022/01/12/are-you-one-1-11-americans-mike-lindell-doesnt-want-arrest/"><span>
                                            {{leftNews.name}} </span></a>
                                        </h2>
                                    </div>
                                    <div class="byline gray-dark font-xxxxs pb-xs">
                                        
                                        <a data-href="#"> {{leftNews.label}} </a>
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
              <template v-for="leftNews in News.cat_news" >
                        <div :key="leftNews.id" v-if="leftNews.right==1" class="
                  card
                  relative
                  hpgrid-item
                  hpgrid-item--c-start
                  hpgrid-item--c-spans
                  hpgrid-item--r-spans
                  table9-childStyles
                  grid-top grid-left grid-right
                " style="
                  --c-start-mx: 1;
                  --c-start-lg: 0;
                  --c-start-md: 0;
                  --c-start-sm: 0;
                  --c-start-xs: 0;
                  --c-span-mx: 4;
                  --c-span-lg: 4;
                  --c-span-md: 6;
                  --c-span-sm: 5;
                  --c-span-xs: 1;
                  --dsktp-order: 0;
                " data-index="3" data-admin-id="1" data-feature-name="12-7a-npr-trump" moat-id="fronts/flex-feature" data-mx-span="4" data-lg-span="4" data-md-span="6" data-sm-span="5" data-xs-span="1">
                            <div class="left no-wrap-text">
                                <div class="card-top card-text">
                                    <div class="headline relative gray-darkest pb-xs">
                                        <h2 class="
                          font--headline font-size-sm font-bold
                          left
                          relative
                        ">
                                            <a data-href="#https://www.washingtonpost.com/politics/trump-npr-interview/2022/01/12/a2d0a26e-7397-11ec-bc13-18891499c514_story.html"><span>
                                             {{leftNews.name}} </span></a>
                                        </h2>
                                    </div>
                                    <div class="byline gray-dark font-xxxxs pb-xs">
                                        By
                                        <a data-href="#https://www.washingtonpost.com/people/john-wagner/">{{leftNews.label}}</a>
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
import axios from "axios";


export default {
    props: ["categoryNewsData","keyVal"],
    components: {
        carousel,
        // starRating,
    },
    data() {
        return {
            whishlist: 0,
        };
    },
    mounted() {
        this.orderDetail()
    },
    methods: {
          orderDetail() {

            var ev = this;
            axios({
                method: 'POST',
                url: this.$root.URL_ROOT + 'api.php',
                data: {
                    type: 'myorder',
                    uid: ev.uid,

                }
            }).then(function (response) {
                var data = response.data.data
                ev.orderDetailData = data
            })
        },
    },
};
</script>
