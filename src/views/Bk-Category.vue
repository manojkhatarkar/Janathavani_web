<template>
  <body>
    <div id="__next">
      <div>
        <div>
          <div class="w-100" style="height: 60px"></div>
          <Header />
        </div>
        <div class="hpgrid-max-width mt-auto mr-auto mb-md ml-auto center">
          <div class="mr-sm ml-sm mr-0-ns ml-0-ns pt-md">
            <h1 class="font--headline lh-sm uppercase gray-darkest">
               {{SelectCategoryData.heading}}
            </h1>
          </div>
         
        </div>
        <main id="main-content">
          <div
            class="hpgrid-max-width ma-auto"
            data-chain-name="top-table"
            data-gtm-module="top-table"
            style="position: relative"
          >
            <div
              class="
                chain
                hpgrid hpgrid-max-width
                ma-auto
                mx-dsktp-order
                large-bottom-separator
                no-line-bottom
                include-dividers-tables
              "
            >
              <div
                class="
                  table-in-grid
                  hpgrid
                  hpgrid-item
                  hpgrid-item--c-start
                  hpgrid-item--c-spans
                  hpgrid-item--r-spans
                  extra-wide-center-3-col-table-full-width-layout
                  grid-top grid-bottom grid-left grid-right
                  table1
                  include-dividers-features
                  hide-helpers
                "
                style="
                  --c-start-mx: 1;
                  --c-start-lg: 1;
                  --c-start-md: 1;
                  --c-start-sm: 1;
                  --c-start-xs: 1;
                  --c-span-mx: 20;
                  --c-span-lg: 16;
                  --c-span-md: 12;
                  --c-span-sm: 10;
                  --c-span-xs: 1;
                "
              >
                <div
                  class="
                    card
                    relative
                    hpgrid-item
                    hpgrid-item--c-start
                    hpgrid-item--c-spans
                    hpgrid-item--r-spans
                    table1-columns-main
                    grid-top grid-center
                  "
                  style="
                    --c-start-mx: 5;
                    --c-start-lg: 5;
                    --c-start-md: 1;
                    --c-start-sm: 1;
                    --c-start-xs: 0;
                    --c-span-mx: 12;
                    --c-span-lg: 12;
                    --c-span-md: 12;
                    --c-span-sm: 10;
                    --c-span-xs: 1;
                    --r-span-mx: 8;
                    --r-span-lg: 8;
                    --dsktp-order: 3;
                  "
                  data-index="0"
                  data-admin-id="1"
                  data-feature-name="virus-luf-feed"
                  moat-id="fronts/flex-feature"
                  data-mx-span="12"
                  data-lg-span="12"
                  data-md-span="12"
                  data-sm-span="10"
                  data-xs-span="1"
                >
                  <div class="left no-wrap-text art-size--fullWidth">
                    <template v-for="News in allProducts">
                    <div v-if="News.sides==2" :key="News.id" class="card-top card-text" >
                      <div
                        class="
                          w-100
                          mw-100
                          overflow-hidden
                          relative
                          lh-0
                          mb-xxs
                        "
                      >
                        <div
                          class="dib"
                          style="
                            width: 100%;
                            height: 100%;
                            background-color: #eee;
                          "
                        >
                          <router-link :to="{name: 'Detail',params:{id:News.id}}"
                            class="art-link"
                            ><img
                              style="
                                width: 100%;
                                height: 100%;
                                background-color: #eee;
                              "
                            :src="$root.URL_ROOT+'uploads/Product/'+News.front_image"
                            alt=""
                              width="760"
                              height="427"
                              class="border-box db"
                          /></router-link>
                        </div>
                      </div>
                     <div
                        class="gray-darkest mb-xs label label-live-updates left"
                      >
                     
                        >
                      </div>
                      <div class="headline relative gray-darkest pb-xs">
                        <h2
                          class="
                            font--headline font-size-lg font-bold
                            left
                            relative
                          "
                        >
                          <router-link :to="{name: 'Detail',params:{id:News.id}}"><span
                              > {{News.name}} </span
                            ></router-link
                          >
                        </h2>
                      </div>
                     
                     <p class="sub-heading" v-if="News.description" v-html="News.description.slice(0, 300)+'...'" ></p>
                    </div>
                    </template>
                  </div>
                </div>
                <div
                  class="
                    card
                    relative
                    hpgrid-item
                    hpgrid-item--c-start
                    hpgrid-item--c-spans
                    hpgrid-item--r-spans
                    table1-columns-left
                    grid-top grid-left
                  "
                  style="
                    --c-start-mx: 1;
                    --c-start-lg: 1;
                    --c-start-md: 1;
                    --c-start-sm: 1;
                    --c-start-xs: 0;
                    --c-span-mx: 4;
                    --c-span-lg: 4;
                    --c-span-md: 12;
                    --c-span-sm: 10;
                    --c-span-xs: 1;
                    --r-span-mx: 4;
                    --r-span-lg: 4;
                    --dsktp-order: 0;
                  "
                  data-index="2"
                  data-admin-id="3"
                  data-feature-name="virus-1"
                  moat-id="fronts/flex-feature"
                  data-mx-span="4"
                  data-lg-span="4"
                  data-md-span="12"
                  data-sm-span="10"
                  data-xs-span="1"
                >
                  <div class="left wrap-text">
                   <template v-for="News in allProducts">
                    <div :key="News.id" v-if="News.sides==1" class="card-top card-text">
                      <div class="headline relative gray-darkest pb-xs">
                        <h2
                          class="
                            font--headline font-size-md font-bold
                            left
                            relative
                          "
                        >
                          <router-link :to="{name:'Detail',params:{id:News.id}}"><span
                              >
                             {{News.name}}
                              </span
                            ></router-link
                          >
                        </h2>
                      </div>
                      <div
                        class="
                          pb-xs
                          font-size-blurb
                          lh-fronts-tiny
                          font-light
                          gray-dark
                        "
                        style="font-size: 0.9375rem"
                      >
                        <span class="sub-heading"
                        v-if="News.description" v-html="News.description.slice(0, 300)+'...'"  ></span
                        >
                      </div>
                      <div class="byline gray-dark font-xxxxs pb-xs">
                       {{News.label}}
                      </div>
                    </div>
                    </template>
                  </div>
                </div>
               
               
                <div
                  class="
                    card
                    relative
                    hpgrid-item
                    hpgrid-item--c-start
                    hpgrid-item--c-spans
                    hpgrid-item--r-spans
                    table1-columns-right
                    grid-pseudo-left grid-middle grid-right
                  "
                  style="
                    --c-start-mx: 17;
                    --c-start-lg: 0;
                    --c-start-md: 1;
                    --c-start-sm: 1;
                    --c-start-xs: 0;
                    --c-span-mx: 4;
                    --c-span-lg: 4;
                    --c-span-md: 12;
                    --c-span-sm: 10;
                    --c-span-xs: 1;
                    --r-span-mx: 2;
                    --dsktp-order: 7;
                  "
                  data-index="7"
                  data-admin-id="8"
                  data-feature-name="virus-5"
                  moat-id="fronts/flex-feature"
                  data-mx-span="4"
                  data-lg-span="4"
                  data-md-span="12"
                  data-sm-span="10"
                  data-xs-span="1"
                >
                  <div class="left wrap-text">
                   <template v-for="News in allProducts">
                    <div :key="News.id" v-if="News.sides==3 || News.sides==4" class="card-top card-text">
                      <div class="headline relative gray-darkest pb-xs">
                        <h2
                          class="
                            font--headline font-size-sm font-bold
                            left
                            relative
                          "
                        >
                          <router-link :to="{name:'Detail',params:{id:News.id}}"><span
                              > {{News.name}} </span
                            ></router-link
                          >
                        </h2>
                      </div>
                      <div class="byline gray-dark font-xxxxs pb-xs">
                       {{News.label}}
                      </div>
                    </div>
                   </template>
                  </div>
                </div>
               
              </div>
            </div>
          </div>
          <div
            class="
              dn-hp-sm-to-mx
              flex
              items-center
              justify-center
              b
              bh
              bc-gray-lighter
              pt-lg
              pb-lg
              mt-lg
              mb-lg
            "
            style="min-height: 250px"
          >
            <div
              class="
                relative
                flex
                items-center
                justify-center
                bc-gray-lighter
                w-100
              "
            >
              <div
                class="
                  absolute
                  z-0
                  gray-dark
                  flex
                  justify-center
                  items-center
                  mt-lg
                  mr-auto
                  mb-lg
                  ml-auto
                  h-100
                  pt-lg
                  pb-lg
                "
                style="height: 250px"
              >
                Ad
              </div>
              
            </div>
          </div>
          <Guide :data="OfferProduct" :guideData="latestData"></Guide>
             <DontMiss :DontMiss="DontMiss" label="Don't Miss"></DontMiss>
            <DontMiss :DontMiss="DontMiss" label="Food"></DontMiss>
            <DontMiss :DontMiss="DontMiss"  label="Travel"></DontMiss>
        </main>
        <Footer />
      </div>
    </div>
  </body>
</template>

<script>
import axios from "axios";
import PriceRangeSlider from "@/components/PriceRangeSlider";
import Header from "@/components/Header";
import Footer from "@/components/footer";
import Guide from '../components/Guide.vue';
import DontMiss from '../components/DontMiss.vue';
export default {
  components: {
    Header,
    Footer,
    PriceRangeSlider,
    DontMiss,
    Guide
  },
  data() {
    return {
      SelectCategoryData: 0,
      allProducts: [],
      id: this.$route.params.id,
      latestData: [],
      OfferProduct: [],
      DontMiss:[],
       travelNews: [],
      foodNews: [],
      uid: localStorage.getItem('user'),
    };
  },
  mounted() {
    this.catData(this.$route.params.id);
    this.getCategory()
     this.guidData();
      this.moreNews();
      this.dontData();
      this.foodData();
      this.travelData();

  },
  watch: {
    "$route.params.id": function (newVal, oldVal) {
      this.catData(newVal);
     

    },
  },
  methods: {
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
                .then(function (response) {
                    var data = response.data;
                    console.log(data);
                    if (data.status == "success") {
                        self.DontMiss = data.news;
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
                .then(function (response) {
                    var data = response.data;
                    if (data.status == "success") {
                        self.OfferProduct = data.news;
                    }
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
                .then(function (response) {
                    var data = response.data;
                    console.log(data);
                    if (data.status == "success") {
                        self.latestData = data.news;
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
                .then(function (response) {
                    var data = response.data;
                    console.log(data);
                    if (data.status == "success") {
                        self.travelNews = data.news;
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
                .then(function (response) {
                    var data = response.data;
                    console.log(data);
                    if (data.status == "success") {
                        self.foodNews = data.news;
                    }
                });
        },
    catData(id) {
      this.id = id;
      const axios = require("axios");
      var self = this;
     
        axios
          .post(this.$root.URL_ROOT + "api.php", {
            type: "categoryProduct",
            id: id,
          })
          .then(function (response) {
            var data = response.data;
            console.log("CategoryApi", data);
            if (data.status == "success") {
              self.allProducts = data.product;
            } 
          });
    },
    getCategory() {
            var ev = this;
            axios
                .post(this.$root.URL_ROOT + "api.php", {
                    type: 'getSingleCategory',
                    id: this.id
                })
                .then(function (response) {
                    var data = response.data
                    if (data.status == 'success') {
                        ev.SelectCategoryData = data.category;
                    }
                });
        },
    goToTop() {
      document.body.scrollTop = 0;
      document.documentElement.scrollTop = 0;
    },
  },
};
</script>