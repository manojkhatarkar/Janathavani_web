<template>
    <div onmousedown = 'return false' onselectstart = 'return false'>
        <Header />
        <header class="w-100 mt-md" style="margin:150px auto 50px auto">
            <div class="mr-auto ml-auto " style="padding:0 5vw">
                <div class="hpgrid-max-width mt-auto mr-auto mb-md mb-0-l pb-sm-xs ml-auto center">
                    <div class="mr-sm ml-sm mr-0-ns ml-0-ns">
                        <h1 class="font--headline"> {{catName}}</h1>
                    </div>
                </div>
            </div>
        </header>
        <div style="max-width:1400px" class="ma-auto">
            <div class="relative">
                <main class="row flex-grid flex flex-wrap mr-auto ml-auto print-mt-none">
                    <article class="col-md-8 col-sm-6 b-l br-l mb-xxl-ns mt-xxs mt-md-l pr-lg-l col-8-lg mr-lg-l" data-qa="main">
                        <div>
                            <template v-for="News in allProducts">
                                <div :key="News.id" data-feature-id="homepage/story" class="pb-md b bb gray-darkest">
                                    <div class="w-100 grid" style="grid-template-columns: 1fr 220px;padding:0 0 !important;">
                                        <div class="story-headline pr-sm">
                                            <div class="font--subhead letter-spacing-sm font-xxxs offblack hide-for-print mb-xs pb-xxs-ns" data-qa="kicker"></div>
                                            <router-link :to="'/OpinianDetail/'+News.id" class="flex hover-blue" data-pb-local-content-field="web_headline" >
                                                <h3 class="font-md font-bold font--headline lh-sm gray-darkest hover-blue mb-0 antialiased mb-xxs " style="line-height:25px;" data-qa="card-title" v-html="News.name"> </h3>
                                            </router-link>
                                            <p class="pt-xs pb-xs font-size-blurb lh-fronts-tiny font-light gray-dark dn db-ns post-content sub-heading" v-if="News.description" v-html="News.description.slice(0, 300)+'...'"></p>
                                            <span class="font-xxxs font-light font--meta-text lh-sm gray-dark">
                                                 <router-link :to="{name : 'Author'}" class="post-content">   {{News.label}} </router-link>
                                            </span>
                                              
                                                    <span data-qa="timestamp" class="font-xxxs font-light font--meta-text lh-sm gray-dark dot-xxs-gray-dark post-content"> {{News.udate}} </span>
                                        </div>
                                        <div class="border-box pl-0 w-100">
                                            <router-link :to="'/OpinianDetail/'+News.id" class="art-link" >
                                                <img  style="width: 100%;height: auto;background-color: #eee;" :src="$root.URL_ROOT+'uploads/Product/'+News.front_image" alt="" class="border-box db" />
                                            </router-link>
                                            </div>
                                    </div>
                                </div>
                            </template>
                        </div>
                    </article>

                    <pagination class="mt-10" v-model="page2" :records="totalCount" :per-page="perPage" />
                    
                  
                </main>
            </div>
        </div>
        <Footer />
    </div>
    </template>
    
    <script>
    import axios from "axios";
    import PriceRangeSlider from "@/components/PriceRangeSlider";
    import Header from "@/components/Header";
    import Footer from "@/components/footer";
    import Guide from '../components/Guide.vue';
    import DontMiss from '../components/DontMiss.vue';
    import Pagination from 'vue-pagination-2'
    export default {
        components: {
            Header,
            Footer,
            PriceRangeSlider,
            DontMiss,
            Guide,
            Pagination
        },
        data() {
            return {
                SelectCategoryData: 0,
                catName:'',
                allProducts: [],
                id: this.$route.params.id,
                latestData: [],
                OfferProduct: [],
                DontMiss: [],
                travelNews: [],
                foodNews: [],
                uid: localStorage.getItem('user'),
                i:0,

                page2: 1,
                totalCount: 0,
                newAry: [],
                perPage: 5,
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
            page2: function (vl) {
                this.changePage()
            },
            "$route.params.id": function (newVal, oldVal) {
                this.catData(newVal);
    
            },
            "$route.params.name": function (newVal, oldVal) {
                //this.catData(newVal);
    
            },
        },
        methods: {
            changePage() {
                this.allProducts = []
                const preCount = (this.perPage * this.page2)
                const temp = this.perPage
                let newPP = (preCount) - temp
                for (let i = 0; i < temp; i++) {
                    if (this.newAry[newPP]) {
                        this.allProducts[i] = this.newAry[newPP]
                        newPP++
                    }
                }
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
                            self.catName=data.categoryname;
                            self.allProducts = data.product;
                            
                            self.newAry=data.product;
                            self.totalCount = data.count
                            self.changePage()
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
    