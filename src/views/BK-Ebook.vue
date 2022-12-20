<template>
<body>
    <div id="__next">
        <div>
            <div>
                <div class="w-100" style="height: 60px"></div>
                <Header />
            </div>
            <main id="main-content">
                <section>
                    <div class="container-fluid">
                        <div class="row">
                            <div class="col-lg-2 col-md-2 col-sm-6 col-xs-6 bg-black">
                                <div class="wraper hidden-sm"><a href="#" target="_parent"><img class="logo" src="../assets/assembler/images/logo.png" width="90%"></a>
                                    <!-- <p class="intro">The e-Replica edition is an exact digital replica of the newspaper printed in Washington, DC. Choose your edition:</p><a href="#" target="_blank" style="color:#FFF;">Click here to use the old version of e-Replica</a><br><br><a href="#" target="_parent">The Janatavani (Monday - Saturday)</a><br><br><a href="#" target="_parent">The Janatavani (Sunday)</a><br><br><a href="#" target="_parent">WP Magazine</a><br><br><a href="#" target="_parent">Parade</a><br>
                                    <p style="margin-top:1rem;">Return to the<a href="#" target="_parent"> The Janatavani</a> website</p><a class="button-archives" id="button-archives" href="#" alt="Click here to access The Janatavani archives" title="Click here to access The Janatavani archives">Access The Janatavani archives</a> -->
                                </div>

                                <div class="archive section-pd">
                                    <div class="date col-lg-12 col-md-12 col-sm-3 col-xs-3 ">
                                        <h5>SATURDAY</h5>
                                        <p>April 13, 2022</p>
                                    </div>
                                    <div class="date col-lg-12 col-md-12 col-sm-3 col-xs-3">
                                        <input class="form-control" type="date" />
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-10 col-md-10 col-sm-6 col-xs-6">
                                <carousel :autoplay="false" v-if="allEbook.count>0" :nav="false" :items="4" :responsive="{ 0: { items: 2 }, 576: { items: 1 }, 600: { items: 1 }, 768: { items: 1 }, 1200: { items: 4 }, 1500: { items: 4 },}">
                                    <div class="ebook-slider pd-20" v-for="ebook in allEbook.ebook" :key="ebook.id">
                                        <router-link :to="{name : 'Ebook-Paper', params:{id : ebook.id}}">
                                            <img :src="$root.URL_ROOT+'uploads/Ebook/'+ebook.photo" />
                                        </router-link>
                                    </div>
                                </carousel>
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
        };
    },
    mounted() {
      
        this.goToTop();
        this.categories();
     
    },

    methods: {
       
    
        categories() {
            var ev = this;
            axios
                .post(this.$root.URL_ROOT + "api.php", {
                    type: "getAllEbook",
                })
                .then(function (response) {
                    var data = response.data;
                    console.log(response);
                    if (data.status == "success") {
                        ev.allEbook = data;
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
