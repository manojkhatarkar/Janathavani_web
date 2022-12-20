<template>
    <div class="hpgrid-max-width ma-auto  " data-chain-name="sports" data-gtm-module="sports" style="position:relative">
        <div class="mr-sm ml-sm mr-0-ns ml-0-ns label">
            <div class="gray-darkest mb-sm label label-section-large left">
                <a class="font-xs font-bold  heading-drop-size uppercase letter-spacing  offblack hover-gray-dark label-link"><span> <router-link class="link-catname" :to="'/CategoryName/'+label+'/'+ids"> {{label}} </router-link> </span><span class="relative" style="margin-left:0.125rem"><span style="position:absolute;size-to-use:normal;top:0"><svg class="content-box fill-gray hover-inherit hover-fill-gray" width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false" role="img" data-sc-v="6.6.0" data-sc-c="iconbase">
                                <title data-sc-v="6.6.0" data-sc-c="iconbase">ChevronRight</title>
                                <path d="M9.44 7.854L4.145 2.56l1.415-1.415 6 6a1 1 0 0 1 0 1.415l-6 6-1.415-1.415L9.44 7.854z" fill-rule="nonzero" data-sc-v="6.6.0" data-sc-c="iconbase"></path>
                            </svg></span></span></a>
            </div>
        </div>
        <div class="chain hpgrid hpgrid-max-width ma-auto  mx-dsktp-order large-bottom-separator no-line-bottom include-dividers-tables ">
            <div class="table-in-grid hpgrid hpgrid-item hpgrid-item--c-start hpgrid-item--c-spans hpgrid-item--r-spans even-split-3-separate-tables-layout  grid-top grid-bottom grid-left table1 include-dividers-features hide-helpers" style="--c-start-mx:1;--c-start-lg:1;--c-start-md:1;--c-start-sm:1;--c-start-xs:1;--c-span-mx:8;--c-span-lg:8;--c-span-md:6;--c-span-sm:10;--c-span-xs:1">
                <!-- <template v-for="(News,key) in data.left">
                <div :key="key" v-if="key==1" class="card relative
            
            hpgrid-item hpgrid-item--c-start hpgrid-item--c-spans hpgrid-item--r-spans
            table1-childStyles  grid-top grid-left grid-right
            
          " style="--c-start-mx:1;--c-start-lg:1;--c-start-md:1;--c-start-sm:1;--c-start-xs:0;--c-span-mx:8;--c-span-lg:8;--c-span-md:6;--c-span-sm:10;--c-span-xs:1;--dsktp-order:4" data-index="0" data-admin-id="1" data-feature-name="30-12a-commandersday2" moat-id="fronts/flex-feature" data-mx-span="8" data-lg-span="8" data-md-span="6" data-sm-span="10" data-xs-span="1">
                    <div class="left wrap-text" data-feature-id="homepage/story">
                        <div class="card-top card-text">
                            <div class="headline relative gray-darkest pb-xs">
                                <h2 class="relative left font--headline font-bold font-size-lg more-news-heading">
                                    <router-link data-pb-local-content-field="web_headline" :to="{name: 'Detail',params:{id:News.id}}">
                                        <span class="more-news-heading" v-html="News.name"> </span></router-link></h2>
                            </div>
                            <div class="pb-xs font-size-blurb lh-fronts-tiny font-light gray-dark " style="font-size:0.9375rem"><span > </span></div>
                            <div class="byline gray-dark font-xxxxs pb-xs">By <router-link :to="{name : 'Author',params:{id:News.label}}"> {{News.author}} </router-link></div>
                            <ul class="list-none ma-0 pt-0 pr-0 pb-xs pl-0 font--subhead lh-fronts-sm font-light font-size-related-links gray-darkest">
                                <li class="bb relative blt blt-outside blt-diamond blt-gray ">
                                    <router-link :to="{name: 'Detail',params:{id:News.id }}">
                                        <span class="sub-heading" v-html="News.description.slice(0, News.contentcount)"></span>
                                    </router-link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
</template>-->
<template v-for="(News,key) in data.left">
    <div :key="key" v-if="key<3" class="card relative
            
            hpgrid-item hpgrid-item--c-start hpgrid-item--c-spans hpgrid-item--r-spans
            table1-childStyles  grid-middle grid-left grid-right
            
          " style="--c-start-mx:1;--c-start-lg:1;--c-start-md:1;--c-start-sm:1;--c-start-xs:0;--c-span-mx:8;--c-span-lg:8;--c-span-md:6;--c-span-sm:10;--c-span-xs:1;--dsktp-order:5" data-index="1" data-admin-id="2" data-feature-name="30-12a-jahandotson"
        moat-id="fronts/flex-feature" data-mx-span="8" data-lg-span="8" data-md-span="6" data-sm-span="10" data-xs-span="1">
        <div class="left no-wrap-text art-size--lg" data-feature-id="homepage/story">
            <div class="card-left card-art left art--left fl no-bottom">
                <div class="w-100 mw-100 overflow-hidden relative lh-0 mb-xs" data-qa="art-wrapper">
                    <div class="dib" style="width:100%;height:100%;background-color:#eee"><a href="#" class="art-link">
                            <img  :src="$root.URL_ROOT+'uploads/Product/'+News.front_image" alt="" width="232" height="130" class="border-box db" style="width: 100%; height: 100%; background-color: rgb(238, 238, 238);"></a></div>
                </div>
            </div>
            <div class="card-right card-text no-bottom">
                <div class="headline relative gray-darkest pb-xs">
                    <h2 class="relative left font--headline font-bold font-size-sm">
                        <router-link data-pb-local-content-field="web_headline" :to="{name:'Detail',params:{id:News.id}}">
                            <span class="more-news-heading" v-html="News.name.slice(0, News.namecount)">  </span>
                        </router-link>
                    </h2>
                </div>
                <!-- <div class="byline gray-dark-2 font-xxxxs pb-xs" v-if="News.author!='' && News.author!=null">By 
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

<template v-for="(News,key) in data.left">
    <!-- <div :key="key" v-if="key!=1 && key != 2 " class="card relative
            
            hpgrid-item hpgrid-item--c-start hpgrid-item--c-spans hpgrid-item--r-spans
            table1-childStyles  grid-bottom grid-left grid-right
            
          " style="--c-start-mx:1;--c-start-lg:1;--c-start-md:1;--c-start-sm:1;--c-start-xs:0;--c-span-mx:8;--c-span-lg:8;--c-span-md:6;--c-span-sm:10;--c-span-xs:1;--dsktp-order:6" data-index="2" data-admin-id="7" data-feature-name="30-1a-terpscross" moat-id="fronts/flex-feature" data-mx-span="8" data-lg-span="8" data-md-span="6" data-sm-span="10" data-xs-span="1">
                    <div class="left wrap-text" data-feature-id="homepage/story">
                        <div class="card-top card-text">
                            <div class="headline relative gray-darkest pb-xs">
                                <h2 class="relative left font--headline font-bold font-size-sm ">
                                    <router-link data-pb-local-content-field="web_headline" :to="{name:'Detail',params:{id:News.id}}">
                                        <span class="more-news-heading" v-html="News.name.slice(0, News.namecount)"></span>
                                    </router-link>
                                </h2>
                            </div>
                            <div class="byline gray-dark font-xxxxs pb-xs">By <router-link :to="{name : 'Author',params:{id:News.label}}"> {{News.author}} </router-link></div>
                        </div>
                    </div>
                </div> -->
</template>
        </div>
<template v-for="(News,key) in data.main">
    <div :key="key" class="table-in-grid hpgrid hpgrid-item hpgrid-item--c-start hpgrid-item--c-spans hpgrid-item--r-spans even-split-3-separate-tables-layout  grid-top grid-bottom grid-center table2 include-dividers-features hide-helpers" style="--c-start-mx:9;--c-start-lg:9;--c-start-md:7;--c-start-sm:1;--c-start-xs:1;--c-span-mx:8;--c-span-lg:8;--c-span-md:6;--c-span-sm:10;--c-span-xs:1">
        <div class="card relative
            
            hpgrid-item hpgrid-item--c-start hpgrid-item--c-spans hpgrid-item--r-spans
            table2-childStyles  grid-top grid-bottom grid-left grid-right
            
          " style="--c-start-mx:1;--c-start-lg:1;--c-start-md:1;--c-start-sm:1;--c-start-xs:0;--c-span-mx:8;--c-span-lg:8;--c-span-md:6;--c-span-sm:10;--c-span-xs:1;--dsktp-order:3" data-index="1" data-admin-id="6" data-feature-name="29-8p-garcia" moat-id="fronts/flex-feature"
            data-mx-span="8" data-lg-span="8" data-md-span="6" data-sm-span="10" data-xs-span="1">
            <div class="left no-wrap-text art-size--fullWidth " data-feature-id="homepage/story">
                <div class="card-top card-text">
                    <div class="w-100 mw-100 overflow-hidden relative lh-0 mb-xxs" data-qa="art-wrapper">
                        <div class="dib" style="width:100%;height:100%;background-color:#eee">
                            <router-link :to="{name:'Detail',params:{id:News.id}}" class="art-link"><img :src="$root.URL_ROOT+'uploads/Product/'+News.front_image" alt="" width="496" height="331" class="border-box db" style="width: 100%; height: 100%; background-color: rgb(238, 238, 238);"></router-link>
                        </div>
                    </div>
    
                    <div class="gray-darkest font-xxxxs left pb-xs font--meta-text lh-sm" style="margin-top:14px;">
                        <router-link data-pb-local-content-field="web_headline" :to="{name:'Detail',params:{id:News.id}}">
                            <span class="more-news-heading"  v-html="News.name"></span>
                        </router-link>
                    </div>
                    <div class="gray-darkest mb-xxs label label-kicker left">
                        <router-link class="font-xxxxs font-bold    lh-sm offblack hover-gray-dark label-link" :to="{name:'Detail',params:{id:News.id}}"><span></span></router-link>
                    </div>
                    <div class="headline relative gray-darkest pb-xs">
                        <!-- <h2 class="relative left font--headline font-bold font-size-md">
                                    <router-link data-pb-local-content-field="web_headline" :to="{name:'Detail',params:{id:News.id}}"><span v-html="News.name.slice(0, News.namecount)">  </span></router-link>
                                    </h2> -->
                        <p>
                            <span class="sub-heading" v-html="News.description.slice(0, News.contentcount)">  </span>
                        </p>
                    </div>
                    <!-- <div class="byline -2 font-xxxxs pb-xs">By
                        <router-link :to="{name : 'Author',params:{id:News.label}}"> {{News.author}} </router-link>
                    </div>
                    <br />
                                <img src="../assets/images/icon/calendar.png" >

                                <span class="date-font">  {{getFormate(News.ndate)}}</span> -->
                </div>
            </div>
        </div>
    </div>
</template>
        <div class="table-in-grid hpgrid hpgrid-item hpgrid-item--c-start hpgrid-item--c-spans hpgrid-item--r-spans even-split-3-separate-tables-layout  grid-top grid-bottom grid-right table9 include-dividers-features hide-helpers" style="--c-start-mx:17;--c-start-lg:1;--c-start-md:1;--c-start-sm:1;--c-start-xs:1;--c-span-mx:4;--c-span-lg:16;--c-span-md:12;--c-span-sm:10;--c-span-xs:1">
<template v-for="(News,key) in data.right.slice(0,4)">
    <div :key="key" class="card relative l-border
            
            hpgrid-item hpgrid-item--c-start hpgrid-item--c-spans hpgrid-item--r-spans
            table9-childStyles  grid-top grid-left grid-right
            
          " style="--c-start-mx:1;--c-start-lg:0;--c-start-md:0;--c-start-sm:0;--c-start-xs:0;--c-span-mx:4;--c-span-lg:5;--c-span-md:4;--c-span-sm:10;--c-span-xs:1;--dsktp-order:0" data-index="2" data-admin-id="3" data-feature-name="30-2a-nats" moat-id="fronts/flex-feature"
        data-mx-span="4" data-lg-span="5" data-md-span="4" data-sm-span="10" data-xs-span="1">
        <div class="left wrap-text" data-feature-id="homepage/story">
            <div class="card-top card-text">
                <div class="headline relative gray-darkest pb-xs">
                    <h2 class="relative left font--headline font-bold font-size-sm">
                        <router-link data-pb-local-content-field="web_headline" :to="{name:'Detail',params:{id:News.id}}">
                            <span class="more-news-heading" v-html="News.name.slice(0, News.namecount)"></span>
                        </router-link>
                    </h2>
                </div>
                <!-- <div class="byline gray-dark-2 font-xxxxs pb-xs">By
                    <router-link :to="{name : 'Author',params:{id:News.label}}"> {{News.author}} </router-link>
                </div>
                <br />
                                <img src="../assets/images/icon/calendar.png" >

                                <span class="date-font">  {{getFormate(News.ndate)}}</span> -->
            </div>
        </div>
    </div>
</template>
           
        </div>
    </div>
</div>
</template>

<script>
export default {
    props: ["data","ids","label"],
    components: {},
    data() {
        return {};
    },
    mounted() {},
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
