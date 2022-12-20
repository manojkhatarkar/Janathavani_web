<template>
    <div onmousedown = 'return false' onselectstart = 'return false'>
        <Header />
        <header class="w-100 mt-md" style="margin:150px auto 50px auto">
            <div class="mr-auto ml-auto " style="padding:0 5vw">
                <div class="hpgrid-max-width mt-auto mr-auto mb-md mb-0-l pb-sm-xs ml-auto center">
                    <div class="mr-sm ml-sm mr-0-ns ml-0-ns">
                        <h1 class="font--headline"> {{$route.params.name}}</h1>
                    </div>
                </div>
            </div>
        </header>
        <div style="max-width:1400px" class="ma-auto">
            <div class="relative">
                <main class="row flex-grid flex flex-wrap mr-auto ml-auto print-mt-none">
                    <article class="col-md-8 col-sm-6 b-l br-l mb-xxl-ns mt-xxs mt-md-l pr-lg-l col-8-lg mr-lg-l" data-qa="main">
                        <div v-if="$route.params.id!=4 && $route.params.id!=1">
                            <template v-for="News in allProducts.left">
                                <div  :key="News.id" data-feature-id="homepage/story" class="pb-md b bb gray-darkest">
                                    <div class="w-100 grid" style="grid-template-columns: 1fr 220px;padding:0 0 !important;">
                                        <div class="story-headline pr-sm">
                                            <div class="font--subhead letter-spacing-sm font-xxxs offblack hide-for-print mb-xs pb-xxs-ns" data-qa="kicker"></div>
                                            <router-link :to="{name:'Detail',params:{id:News.id}}" class="flex hover-blue" data-pb-local-content-field="web_headline" >
                                                <h3 class="font-md font-bold font--headline lh-sm gray-darkest hover-blue mb-0 antialiased mb-xxs cat-heading" style="line-height:25px;" data-qa="card-title" v-html="News.name"> </h3>
                                            </router-link>
                                            <p class="txt-justy pt-xs pb-xs font-size-blurb lh-fronts-tiny font-light gray-dark dn db-ns post-content sub-heading cat-new-sub-heading" v-if="News.description" v-html="News.description.slice(0, 300)+'...'"></p>
                                            <span class="font-xxxs font-light font--meta-text lh-sm gray-dark">
                                                 <router-link :to="{name : 'Author'}" class="post-content">   {{News.label}} </router-link>
                                            </span>
                                              
                                                    <span data-qa="timestamp" class="font-xxxs font-light font--meta-text lh-sm gray-dark dot-xxs-gray-dark post-content"> {{News.udate}} </span>
                                        </div>
                                        <div class="border-box pl-0 w-100">
                                            <router-link :to="{name: 'Detail',params:{id:News.id}}" class="art-link" >
                                                <img  style="width: 100%;height: auto;background-color: #eee;" :src="$root.URL_ROOT+'uploads/Product/'+News.front_image" alt="" class="border-box db" />
                                            </router-link>
                                            </div>
                                    </div>
                                </div>
                            </template>
                        </div>
                        <div v-if="$route.params.id==4 || $route.params.id==1">
                            <template v-for="News in allProducts">
                                <div  :key="News.id" data-feature-id="homepage/story" class="pb-md b bb gray-darkest">
                                    <div class="w-100 grid" style="grid-template-columns: 1fr 220px;padding:0 0 !important;">
                                        <div class="story-headline pr-sm">
                                            <div class="font--subhead letter-spacing-sm font-xxxs offblack hide-for-print mb-xs pb-xxs-ns" data-qa="kicker"></div>
                                            <router-link :to="{name:'Detail',params:{id:News.id}}" class="flex hover-blue" data-pb-local-content-field="web_headline" >
                                                <h3 class="font-md font-bold font--headline lh-sm gray-darkest hover-blue mb-0 antialiased mb-xxs cat-heading" style="line-height:25px;" data-qa="card-title" v-html="News.name"> </h3>
                                            </router-link>
                                            <p class="txt-justy pt-xs pb-xs font-size-blurb lh-fronts-tiny font-light gray-dark dn db-ns post-content sub-heading cat-new-sub-heading" v-if="News.description" v-html="News.description.slice(0, 300)+'...'"></p>
                                            <span class="font-xxxs font-light font--meta-text lh-sm gray-dark">
                                                 <router-link :to="{name : 'Author'}" class="post-content">   {{News.label}} </router-link>
                                            </span>
                                              
                                                    <span data-qa="timestamp" class="font-xxxs font-light font--meta-text lh-sm gray-dark dot-xxs-gray-dark post-content"> {{News.udate}} </span>
                                        </div>
                                        <div class="border-box pl-0 w-100">
                                            <router-link :to="{name: 'Detail',params:{id:News.id}}" class="art-link" >
                                                <img  style="width: 100%;height: auto;background-color: #eee;" :src="$root.URL_ROOT+'uploads/Product/'+News.front_image" alt="" class="border-box db" />
                                            </router-link>
                                            </div>
                                    </div>
                                </div>
                            </template>
                        </div>
                    </article>
                    <aside v-if="checkId" class="col-md-4 col-sm-6 hide-for-print flex-column right-rail flex-1 mt-md-l flex-l flex col-4-lg" data-qa="right-rail">
                        <div data-qa="sectionfronts-rightrail" v-if="$route.params.id!=4 && $route.params.id!=1">
                            <div class="mt-sm mb-sm">
                                <div class="headline-list hide-for-print w-100">
                                    <ul class="list-unstyled mt-xs" data-cy="most-read-headline-list">
                                        <template v-for="(News,key) in allProducts.right">
                                <li  :key="key" class="cb flex pt-sm pb-sm  flex-column ">
                                            <div class="flex">
                                                <div data-qa="headline-number" class="font-lg dib mr-sm b bb bc-secondary font--headline hide" style="max-height:1.25em"> {{(key)}} </div>
                                                <div class="w-100 clearfix">
                                                   
                                                      <router-link :to="{name: 'Detail',params:{id:News.id}}"  data-qa="headline-text">
                                                        <h2 class="gray-darkest hover-blue font--headline font-sm post-heading cat-heading" v-html="News.name">  </h2>
                                                    </router-link>
                                                </div>
                                            </div>
                                        </li>
                                        </template>
                                    </ul>
                                </div>
                            </div>
                           
                        </div>
                    </aside>
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
                checkId:false,
            };
        },
        mounted() {
            this.catData(this.$route.params.id);
            this.getCategory()
            
            //this.moreNews();
            this.dontData();
           
            
            this.goCheck();

            if(this.$route.params.id=='2'){
                this.moreNews();
            }
            else if(this.$route.params.id=='3'){
                this.foodData();
            }
            else if(this.$route.params.id=='4'){
                this.travelData();
            }
            else if(this.$route.params.id=='1'){
                this.guidData();
            }
            
    
        },
        watch: {
            "$route.params.id": function (newVal, oldVal) {
                this.catData(newVal);
                this.goCheck();
                
            },
            "$route.params.name": function (newVal, oldVal) {
                //this.catData(newVal);
    
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
                            self.allProducts = data.news;

                            console.log('testData-->');
                            console.log(self.allProducts)
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
                            self.allProducts=data.news;
                            
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
                            self.allProducts = data.news;
                            
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
                            self.allProducts=data.news;
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
            goCheck(){
                var ids=this.$route.params.id;
                if(ids==5){
                    this.checkId=false;
                }else if(ids==8){
                    this.checkId=false;
                }else if(ids==14){
                    this.checkId=false;
                }else{
                    this.checkId=true;
                }
            }
        },
    };
    </script>
    