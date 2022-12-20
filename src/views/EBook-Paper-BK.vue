<template>
<body>
    <header class="">
        <div class="container">
            <div class="row align-items-center ebook-header">
                <div class="col-lg-2 col-md-2 col-sm-6 col-xs-6 text-left">
                    <router-link :to="{name: 'EBook'}">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="#d0d0d0" width="50px" height="30px" viewBox="0 0 448 512">
                            <path d="M447.1 256C447.1 273.7 433.7 288 416 288H109.3l105.4 105.4c12.5 12.5 12.5 32.75 0 45.25C208.4 444.9 200.2 448 192 448s-16.38-3.125-22.62-9.375l-160-160c-12.5-12.5-12.5-32.75 0-45.25l160-160c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25L109.3 224H416C433.7 224 447.1 238.3 447.1 256z" /></svg>
                    </router-link>
                </div>
                <div class="col-lg-10 col-md-10 col-sm-6 col-xs-6 text-right">
                    <h3>PAGE 01</h3>
                </div>
            </div>

            <div class="paper-header text-center">
                <img class="w-50" src="../assets/assembler/images/logo.webp" />
            </div>
        </div>
    </header>

    <main id="main-content" class="mt-20">

        <FrontNews :news="categoryNews.data"></FrontNews>
            <Guide></Guide>
    </main>
</body>
</template>

<script>
import axios from "axios";
import PriceRangeSlider from "@/components/PriceRangeSlider";
import Header from "@/components/Header";
import Footer from "@/components/footer";
import carousel from "vue-owl-carousel2";
import FrontNews from '../components/FrontNews.vue';
import Guide from '../components/Guide.vue';


export default {
    components: {
        Header,
        Footer,
        PriceRangeSlider,
        carousel,
        FrontNews,
        Guide
    },
    data() {
        return {
            isFilter: false,
            selectCat: 0,
            page: 2,
            isAct: 0,
            search_key: "",
            ProductsCount: 0,
            isHas: false,
            filterData: false,
            productCount: 0,
            categoryNews: [],
            range: {
                minValue: 0,
                maxValue: 1000,
            },
            ProdNoRecordFound: false,
            NoRecordFound: false,
            limit: 0,
            startval: null,
            isCheckeds: false,
            colorVal: [],
            colors: 0,
            setSelected: 0,
            sizes: 0,
            allCategory: [],
            allProducts: [],
            id: this.$route.params.id,
        };
    },
    mounted() {
        this.searchingVar = JSON.parse(localStorage.getItem("searchingVar"));
        this.goToTop();
        this.categories();
        this.catData(this.$route.params.id);
        this.getCategoryNews()
    },
    watch: {
        "$route.params.id": function (newVal, oldVal) {
            // console.log(newVal,oldVal)
            this.catData(newVal);
        },
        selectCat: function (newVal, oldVal) {
            if (newVal != oldVal) {
                this.isFilter = true;
                this.catData();
            }
        },
        search_key: function (newVal, oldVal) {
            if (newVal != oldVal) {
                this.isFilter = true;
                // this.catData();
            }
        },
        range: function (newVal, oldVal) {
            if (newVal != oldVal) {
                this.isFilter = true;
                // this.catData();
            }
        },
    },
    methods: {
        selectCategory(id) {
            this.selectCat = id;
        },
        limitSet(id) {
            this.limit = this.limit + id;
            this.isAct = id;
            this.catData();
        },
        w3_open() {
            document.getElementById("mySidebar").style.display = "block";
        },

        w3_close() {
            document.getElementById("mySidebar").style.display = "none";
        },
        search(id) {
            var self = this;
            if (self.search_key == "") {
                self.$toasted.global.error({
                    message: "Please and product or category name",
                });
            } else {
                axios
                    .post(this.$root.URL_ROOT + "api.php", {
                        type: "searchProduct",
                        cid: self.id,
                        search_key: self.search_key,
                    })
                    .then(function (response) {
                        var data = response.data;
                        if (data.status == "success") {
                            self.allProducts = data.data;
                            self.ProductsCount = data.count;
                        } else {
                            self.NoRecordFound = true;
                            self.ProductsCount = data.count;
                        }
                    });
            }
        },
        getCategoryNews(){
            var ev = this;
            axios
            .post(this.$root.URL_ROOT + "api.php", {
                type: "getCategoryNews",
                cid: 11,
            })
            .then(function (response) {
                var data = response.data;
                console.log(response);
                if (data.status == "success") {
                    
                    ev.categoryNews = data;

                }
            });
        },
        categories() {
            var ev = this;
            axios
                .post(this.$root.URL_ROOT + "api.php", {
                    type: "getCategory",
                })
                .then(function (response) {
                    var data = response.data;
                    console.log(response);
                    if (data.status == "success") {
                        ev.allCategory = data.category;
                    }
                });
        },
        catData(id) {
            this.id = id;
            const axios = require("axios");
            var self = this;
            if (this.isFilter != false) {
                axios
                    .post(this.$root.URL_ROOT + "api.php", {
                        type: "priceSearchProduct",
                        min: self.range.minValue,
                        max: self.range.maxValue,
                        cid: self.selectCat,
                        search_key: self.search_key,
                    })
                    .then(function (response) {
                        var data = response.data;
                        console.log("FilterApi", data);
                        if (data.status == "success") {
                            self.allProducts = data.data;
                            self.ProductsCount = data.count;
                            self.searchshow = true;
                        } else {
                            self.NoRecordFound = true;
                            self.ProductsCount = data.count;
                        }
                    });
            } else {
                axios
                    .post(this.$root.URL_ROOT + "api.php", {
                        type: "categoryProduct",
                        id: id,
                        limit: this.limit,
                    })
                    .then(function (response) {
                        var data = response.data;
                        console.log("CategoryApi", data);
                        if (data.status == "success") {
                            self.allProducts = data.product;
                            self.ProductsCount = data.count;
                            self.productCount = parseInt(self.allProducts.count);
                        } else {}
                    });
            }
        },
        goToTop() {
            document.body.scrollTop = 0;
            document.documentElement.scrollTop = 0;
        },
    },
};
</script>
<style scoped>
.w-50{
    width: 50%;
}
.paper-header{
  border-bottom: 8px solid #000;
  padding-bottom: 8px;
}
.mt-20{
  margin-top: 20px;
}
</style>