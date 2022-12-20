<template>
    <body onmousedown = 'return false' onselectstart = 'return false'>
        <div id="__next">
            <div data-sc-v="5.1.1" data-sc-c="header">
                <div data-sc-v="5.1.1" data-sc-c="proactivesignintoast"></div>
                <div style="height: 60px" class="w-100" data-sc-v="5.1.1" data-sc-c="fixedheaderspacer"></div>
                <Header />
            </div>
            <!-- <div style="margin-top: 12px; margin-bottom: -12px" class="
                  flex
                  dn-ns
                  flex-row
                  items-center
                  justify-between
                  b
                  bt
                  bb
                  pr-sm
                  pl-sm
                ">
                <label for="switch-to-compact-mode" style="font-size: var(--font-size-xxxs)">
                        <span><b>Compact mode</b> helps you find stories faster.</span></label>
            </div> -->
            <div class="pb-md dn-hp-xs-to-md"></div>
            <div class="db dn-hp-md-to-xs mt-sm spacing tight-b mb-lg-1" style="overflow: hidden;margin-top: 16px;">
                <div class="hpgrid-max-width ma-auto flex flex-1 items-center w-100">
                    <span style="width: 184px; height: 90px">
                            <div class="">
                            </div>
                        </span>
                    <router-link to="/" class="hp-masthead flex dn-hp-sm-to-xs justify-center w-100">
                        <img src="../assets/assembler/images/Janatavani.jpg" width="400px" />
                    </router-link><span style="width: 184px; height: 90px"> </span>
                </div>
                <div class="flex flex-1 items-center w-100 justify-center " style="display:none;height: 32px">
                    <div class="
                      flex
                      masthead-tagline
                      dn-hp-sm-to-xs
                      items-center
                      justify-center
                      italic
                      font-xs
                      lh-default
                      font-family-georgia
                      gray-dark
                      masthead-tagline-decoration
                      relative
                      dib
                      bg-white
                    " style="padding: 0 20px">
                        {{LinksDetails.tag_line}}
                    </div>
                </div>
            </div>
            <main id="main-content">
                <div class="hpgrid-max-width ma-auto" data-chain-name="DO-NOT-REMOVE-the7-briefing-strip" data-gtm-module="DO-NOT-REMOVE-the7-briefing-strip" data-link-group="hp-theseven" style="position: relative">
                    <div class="
                      chain
                      hpgrid hpgrid-max-width
                      ma-auto
                      mx-dsktp-order
                      small-bottom-separator
                      line-bottom
                      include-dividers-tables
                    ">
                        <div data-link-group="hp-theseven" class="
                        table-in-grid
                        hpgrid
                        hpgrid-item
                        hpgrid-item--c-start
                        hpgrid-item--c-spans
                        hpgrid-item--r-spans
                        super-wide-left-layout
                        grid-top grid-bottom grid-left grid-right
                        table1
                        include-dividers-features
                        hide-helpers
                      " style="--c-start-mx: 1;--c-start-lg: 1;--c-start-md: 1;--c-start-sm: 1;--c-start-xs: 1;--c-span-mx: 20;--c-span-lg: 16;--c-span-md: 12;--c-span-sm: 10;--c-span-xs: 1;
                      ">
                        </div>
                    </div>
                </div>
                <Design1 :FNews="featureData" :right_label="catName[6].name" ></Design1>
                <template v-if="catName.length>0">
                        <Design2 v-if="catName[0].id==1" :data="OfferProduct" :ids="catName[0].id" :label="catName[0].name"></Design2>
                        <!-- <DontMiss v-if="catName[4].id==5" :DontMiss="DontMiss" :ids="catName[4].id" :label="catName[4].name"></DontMiss> -->

                    <!-----Layout One start---->
                        <Design3 :data="layoutOne" :ids="lOneCid" :label="'ಸಂಚಯ'"></Design3>

                    <!------layout One end-->   

                     <!-----Layout Two start---->
                     <LayoutTwo :data="layoutTwo" :ids="lTwoCid" :label="'ಚಿತ್ರದಲ್ಲಿ ಸುದ್ದಿ'"></LayoutTwo>

                     <!------layout Two end-->   

                     <!------layout Three start-->

                     <DontMiss  :DontMiss="layoutThree" :ids="catName[2].id" :label="'ಇನ್ನಷ್ಟು ಸುದ್ದಿಗಳು'"></DontMiss>

                     <!------layout Three end-->


                       


                         <!--<Design3 v-if="catName[1].id==2" :data="latestData" :ids="catName[1].id" :label="catName[1].name"></Design3>-->
                        <!-- <DontMiss  :DontMiss="getFoodData" :ids="catName[2].id" :label="catName[2].name"></DontMiss> -->
                        <!-- <DontMiss v-if="catName[3].id==4" :DontMiss="getTravelData" :ids="catName[3].id" :label="catName[3].name"></DontMiss>  -->
</template>

            </main>
            <Footer />
        </div>
    </body>
</template>

<script>
import axios from "axios";
// import Header from "@/components/navbar";
import Header from "@/components/navbar";
import Footer from "@/components/footer";
import Testimonial from "@/components/Testimonial";
import HomeContent from "@/components/HomeContent1";
import HomeContent2 from "@/components/HomeContent2";
import Partners from "@/components/Partners";
import carousel2 from "vue-owl-carousel";
import carousel from "vue-owl-carousel2";
import carousel3 from "vue-owl-carousel2";
import News from "../components/News.vue";
import Slider from "../components/Slider.vue";
import FrontNews from '../components/FrontNews.vue';
import Guide from '../components/Guide.vue';
import DontMiss from '../components/DontMiss.vue';
import ClimateEnvironment from '../components/ClimateEnvironment.vue';
import TrendingNews from '../components/TrendingNews.vue';
import Travel from '../components/Travel.vue';
import Food from '../components/Food.vue';
import Diversions from '../components/Diversions.vue';
import Design2 from '../components/Design2.vue';
import Design3 from '../components/Design3.vue';
import Design1 from '../components/Design1.vue';
import LayoutTwo from '../components/LayoutTwo.vue';

export default {
    components: {
        Header,
        News,
        Footer,
        HomeContent,
        HomeContent2,
        Testimonial,
        Partners,
        Slider,
        carousel,
        carousel2,
        carousel3,
        Design1,
        FrontNews,
        Guide,
        DontMiss,
        ClimateEnvironment,
        TrendingNews,
        Travel,
        Food,
        Diversions,
        Design2,
        Design3,
        LayoutTwo
    },
    data() {
        return {
            show: true,
            
            isHas: true,
            uid: "",
            categoryNewsData: [],
            showSliders: true,
            testimonialData: [],
            partnerData: [],
            discountData: [],
            featureData: [],
            featureDelay: false,
            latestDelay: false,
            dealOfDay: false,
            categorydata: [],
            productData: [],
            latestData: [],
            OfferProduct: [],
            active_el: 1,
            pageData: [],
            allCategory: [],
            DontMiss: [],
            LinksDetails: [],
            catName: [],
            getFoodData: [],
            getTravelData: [],
            fields: {
                type: "nav",
                uid: "",
                fullname: "",
                mobile: "",
                address: "",
                Token: this.$root.auth,
            },
            layoutOne:[],
            layoutTwo:[],
            layoutThree:[],
            layoutShow:true,
            lOneCid:'',
            lTwoCid:'',
        };
    },

    mounted() {
        this.uid = localStorage.getItem("user");
        this.catData();
        this.frontNews();
        this.guidData();
        this.moreNews();
        this.categories();
        this.pData();
        this.dontData()
        this.getAllNews()
        this.site_setting()
        this.categoryName()
        this.foodData()
        this.travelData()
        this.getLayoutData1()
        this.getLayoutData2()
        this.getLayoutData3()
        
    },
    methods: {
        categoryName() {
            const axios = require("axios");
            var self = this;
            axios.post(this.$root.URL_ROOT + "api.php", {
                    type: "getcategoryName",
                })
                .then(function(response) {
                    var data = response.data;
                    console.log(data.data[0]['id']);
                    self.catName = data.data;
                    console.log(self.catName)
                });
        },
        getAllNews() {
            const axios = require("axios");
            var self = this;
            axios.post(this.$root.URL_ROOT + "api.php", {
                    type: "getAllNews",
                })
                .then(function(response) {
                    //console.log(response.data)
                    var data = response.data;
                    self.categoryNewsData = data.news;
                });
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
        pData() {
            const axios = require("axios");
            var self = this;
            axios
                .post(this.$root.URL_ROOT + "api.php", {
                    type: "aboutus",
                })
                .then(function(response) {
                    var data = response.data;
                    self.pageData = data.data;

                });
        },
        discountProd() {
            var ip_address = JSON.parse(localStorage.getItem("ip_address"));
            var user_session = JSON.parse(localStorage.getItem("user"));
            var uid = "";
            if (user_session != null) {
                uid = user_session;
            } else {
                uid = null;
            }
            const axios = require("axios");
            var self = this;
            axios
                .post(this.$root.URL_ROOT + "api.php?type=discount_product", {
                    uid: uid,
                    ip_address: ip_address,
                })
                .then(function(response) {
                    var data = response.data;
                    self.discountData = data.data;
                });
        },
        activate: function(el) {
            this.active_el = el;
        },
        catData() {
            const axios = require("axios");
            var self = this;
            axios
                .get(this.$root.URL_ROOT + "api.php?type=getCategory")
                .then(function(response) {
                    var data = response.data;
                    if (data.status == "success") {
                        self.categorydata = data.category;
                    }
                });
        },
        frontNews() {
            var ip_address = JSON.parse(localStorage.getItem("ip_address"));
            var user_session = localStorage.getItem("user");
            var uid = "";
            if (user_session != null) {
                uid = user_session;
            } else {
                uid = null;
            }
            const axios = require("axios");
            var self = this;
            axios
                .post(this.$root.URL_ROOT + "api.php?type=getAllFrontNews", {
                    uid: uid,
                    ip_address: ip_address,
                })
                .then(function(response) {
                    var data = response.data;
                    if (data.status == "success") {
                        self.featureDelay = true;
                        console.log('dsddadad');
                        console.log(data)
                        self.featureData = data.news;
                        // self.featureData = JSON.parse(ev.form.image_collection)
                    }
                });
        },
        moreNews() {
            var ip_address = JSON.parse(localStorage.getItem("ip_address"));
            var user_session = localStorage.getItem("user");
            var uid = "";
            if (user_session != null) {
                uid = user_session;
            } else {
                uid = null;
            }
            const axios = require("axios");
            var self = this;
            axios
                .post(this.$root.URL_ROOT + "api.php?type=getAllMoreNews", {
                    uid: uid,
                    ip_address: ip_address,
                })
                .then(function(response) {
                    var data = response.data;
                    if (data.status == "success") {
                        self.dealOfDay = true;
                        self.OfferProduct = data.news;
                        
                    }
                });
        },

        getLayoutData1() {
            const axios = require("axios");
            var self = this;
            axios
                .post(this.$root.URL_ROOT + "api.php?type=getLayoutData1", {
                    cname:'ಸಂಚಯ'
                })
                .then(function(response) {
                    let data = response.data;
                    console.log(data)
                    self.layoutOne=data.data;
                    self.lOneCid=data.cid;
                   
                });
        },

        getLayoutData2() {
            const axios = require("axios");
            var self = this;
            axios
                .post(this.$root.URL_ROOT + "api.php?type=getLayoutData2", {
                    cname:'ಚಿತ್ರದಲ್ಲಿ ಸುದ್ದಿ'
                })
                .then(function(response) {
                    let data = response.data;
                    console.log(data)
                    self.layoutTwo=data.data;
                    self.lTwoCid=data.cid;
                   
                });
        },

        getLayoutData3() {
            const axios = require("axios");
            var self = this;
            axios
                .post(this.$root.URL_ROOT + "api.php?type=getLayoutData3", {
                    
                })
                .then(function(response) {
                    let data = response.data;
                    console.log(data)
                    self.layoutThree=data.data;
                   // self.lTwoCid=data.cid;
                   
                });
        },

        dontData() {
            var ip_address = JSON.parse(localStorage.getItem("ip_address"));
            var user_session = localStorage.getItem("user");
            var uid = "";
            if (user_session != null) {
                uid = user_session;
            } else {
                uid = null;
            }
            const axios = require("axios");
            var self = this;
            axios
                .post(this.$root.URL_ROOT + "api.php?type=getAllGuidNews", {
                    uid: uid,
                    ip_address: ip_address,
                })
                .then(function(response) {
                    var data = response.data;
                    console.log(data)
                    if (data.status == "success") {
                        self.latestDelay = true;
                        self.latestData = data.news;
                    }
                });
        },

        guidData() {
            var ip_address = JSON.parse(localStorage.getItem("ip_address"));
            var user_session = localStorage.getItem("user");
            var uid = "";
            if (user_session != null) {
                uid = user_session;
            } else {
                uid = null;
            }
            const axios = require("axios");
            var self = this;
            axios
                .post(this.$root.URL_ROOT + "api.php?type=getAllDontNews", {
                    uid: uid,
                    ip_address: ip_address,
                })
                .then(function(response) {
                    var data = response.data;
                    if (data.status == "success") {
                        self.latestDelay = true;
                        self.DontMiss = data.news;
                    }
                });
        },
        foodData() {
            var ip_address = JSON.parse(localStorage.getItem("ip_address"));
            var user_session = localStorage.getItem("user");
            var uid = "";
            if (user_session != null) {
                uid = user_session;
            } else {
                uid = null;
            }
            const axios = require("axios");
            var self = this;
            axios
                .post(this.$root.URL_ROOT + "api.php?type=getAllFoodNews", {
                    uid: uid,
                    ip_address: ip_address,
                })
                .then(function(response) {
                    var data = response.data;
                    if (data.status == "success") {
                        self.getFoodData = data.news;
                    }
                });
        },
        travelData() {
            var ip_address = JSON.parse(localStorage.getItem("ip_address"));
            var user_session = localStorage.getItem("user");
            var uid = "";
            if (user_session != null) {
                uid = user_session;
            } else {
                uid = null;
            }
            const axios = require("axios");
            var self = this;
            axios
                .post(this.$root.URL_ROOT + "api.php?type=getAllTravelNews", {
                    uid: uid,
                    ip_address: ip_address,
                })
                .then(function(response) {
                    var data = response.data;
                    if (data.status == "success") {
                        self.getTravelData = data.news;
                    }
                });
        },
        testimonial() {
            const axios = require("axios");
            var self = this;
            axios
                .get(this.$root.URL_ROOT + "api.php?type=testimonial")
                .then(function(response) {
                    var data = response.data;
                    self.testimonialData = data.data;
                });
        },
        partner() {
            const axios = require("axios");
            var self = this;
            axios
                .get(this.$root.URL_ROOT + "api.php?type=partner")
                .then(function(response) {
                    var data = response.data;
                    if (data.status == "success") {
                        self.partnerData = data.data;
                        self.showSliders = true;
                    } else {
                        self.showSliders = false;
                    }
                });
        },
        classActive(id) {
            this.isActive = id;
        },
    },
};
</script>

<style>
a#hpvideo .hpvideo_overlay {
    display: none;
}

a#hpvideo.show_overlay .hpvideo_overlay {
    display: inline-block;
}

.art-size--sm .hpvideo_caption,
.art-size--sm #hpvideo.show_overlay .hpvideo_overlay {
    display: none;
}

.art-size--sm .hpvideo_caption,
.art-size--sm #hpvideo.show_overlay .hpvideo_overlay,
.grid-tiling .hpvideo_caption,
.grid-tiling #hpvideo.show_overlay .hpvideo_overlay {
    display: none;
}

.grid-tiling #hpvideo {
    margin-bottom: 8px;
}

.hpvideo_caption,
.hpvideo_overlay {
    animation-name: capfade;
    animation-duration: 1s;
    animation-timing-function: ease-in-out;
    animation-fill-mode: forwards;
    opacity: 0;
}

@keyframes capfade {
    0% {
        opacity: 0;
    }
    100% {
        opacity: 1;
    }
}

.fade-enter-active, .fade-leave-active {
    transition: opacity .5s;
  }
  .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
    opacity: 0;
  }
</style>
