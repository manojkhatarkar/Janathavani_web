<template>
    <body onmousedown = 'return false' onselectstart = 'return false'>
        <div id="__next">
            <div>
                <div>
                    <div class="w-100" style="height: 60px"></div>
                    <Header />
                </div>
                <main id="main-content">
                    <section>
                        <div class="container">
                            <div class="row">
                                <div class="col-md-4">
                                    <div class="">
                                        <div class="form-group txt-center">
                                            <input type="date" class="form-control mtop-10 " v-model="calenderDate" :max="currentDate" @change="changeData()" />
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-4">
                                    
                                </div>
                                <div class="col-md-4"></div>
                            </div>
                            
                            <div class="row">
                                <div class="col-lg-12 col-md-12 col-sm-6 col-xs-6">
                                    <!-- <carousel :autoplay="false" v-if="allEbook.count>0" :nav="false" :items="4" :responsive="{ 0: { items: 2 }, 576: { items: 1 }, 600: { items: 1 }, 768: { items: 1 }, 1200: { items: 4 }, 1500: { items: 4 },}"> -->
                                    <div class="ebook-slider pd-20 row" v-if="showData">
                                        <router-link class="col-lg-3 col-md-3 col-sm-6 col-xs-6 e-card" v-for="ebook in allEbook.ebook" :key="ebook.id" :to="{name : 'Ebook-Paper', params:{id : ebook.id}}">
                                            <!-- <div  :style="'background:url('+$root.URL_ROOT+'uploads/Ebook/'+ebook.photo+')'"  class="e-img card"></div> -->
                                            <div class="ebook-img brdr-line">
                                                
                                                <!-- <p> {{ebook.heading}} </p> -->
                                                <img :src="$root.URL_ROOT+'uploads/Ebook/'+ebook.photo" class="" width="200" />
                                            </div>
                                            <p class="ebook-date"> {{ebook.heading}} </p>
                                        </router-link>
                                    </div>
                                    <div v-else class="no-record">
                                        <div><h2>No Record Found</h2></div>
                                    </div>
                                    <!-- </carousel> -->
                                </div>
                            </div>
                        </div>
                    </section>
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
import carousel from "vue-owl-carousel2";

export default {
    components: {
        Header,
        Footer,
        PriceRangeSlider,
        carousel
    },
    data() {
        return {
            allEbook: [],
            calenderDate: '',
            currentDate: '',
            showData:false,
        };
    },
    mounted() {

        this.goToTop();
        this.categories();
        this.setCurrentDate();
    },

    methods: {
        changeData() {
            var ev = this;
           console.log(ev.calenderDate);

            axios
                .post(this.$root.URL_ROOT + "api.php", {
                    type: "getEbookByDate",
                    cdate: this.calenderDate
                })
                .then(function(response) {
                    var data = response.data;
                    console.log(data);
                    if (data.status == "success") {
                        ev.allEbook = data;
                        ev.showData=true;
                    }else{
                        ev.showData=false;
                    }
                });
        },
        setCurrentDate() {
            const dateObj = new Date();
            const month = (dateObj.getMonth()) + 1;
            this.calenderDate = dateObj.getFullYear() + "-" + (month > 9 ? month : "0" + month) + "-" + dateObj.getDate();
            console.log(this.calenderDate)
            this.currentDate = this.calenderDate;
        },
        categories() {
            var ev = this;
            axios
                .post(this.$root.URL_ROOT + "api.php", {
                    type: "getAllEbook",
                })
                .then(function(response) {
                    var data = response.data;
                    console.log(response);
                    if (data.status == "success") {
                        ev.allEbook = data;
                        ev.showData=true;
                    }else{
                        ev.showData=false;
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

<style scoped>
.card {
    position: relative;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
    min-width: 0;
    word-wrap: break-word;
    background-color: #fff;
    background-clip: border-box;
    /* border: 1px solid rgba(0,0,0,.125); */
    border-radius: 0.25rem;
}
.no-record{
    text-align: center;
    padding:20%;
}
.no-record h2{
    color: red;
    font-weight: bold !important;
}

.e-card {
    /* max-height: 265px;  */
    /* overflow: hidden; */
    /* width: 275px; */
    margin-bottom: 30px;
    /* text-align: center; */
}

.e-card img {
    /*width: 275px;*/
    width:100%;
    height: 100%;
}

.e-img {
    /* background: url(https://5ineprojects.com/Janatavani/api/backend/api/uploads/Ebook/1.0012424f.jpg); */
    background-size: cover;
    width: 100%;
    height: 200px;
    /* width:580px; height:440px; */
}

.ebook-date {
    font-size: 20px !important;
    font-weight: bold;
    color: #000 !important;
    text-align: center;
}

.e-date {
    color: rgba(0, 0, 0, .6) !important;
    font-size: 11px !important;
    /* font-weight: bold; */
    margin: 5px 0;
}

.e-card p {
    color: #000;
    font-size: 16px;
}

.ebook-img {
    /*max-height: 210px;*/
    max-height: 300px;
    overflow: hidden;
}

.mtop-10 {
    margin-top: 10px;
}
</style>
