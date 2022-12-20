<template>

<body>

    <!-- start page-wrapper -->
    <div class="page-wrapper">

      

        <!-- Start header -->
       <Header/>
        <!-- end of header -->


        <!-- start of breadcumb-section -->
        <div class="tp-breadcumb-area">
            <div class="container">
                <div class="row">
                    <div class="col-12">
                        <div class="tp-breadcumb-wrap">
                            <h2>About BNectar</h2>
                            <ul>
                                                              <!-- <li><router-link to="/">Home</router-link></li> -->

                                <!-- <li><span>About BNectar</span></li> -->
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <!-- <div class="hero-shape-img-1"><img src="../assets/images/slider/img-2.png" alt=""></div>
            <div class="hero-shape-img-2"><img src="../assets/images/slider/img-3.png" alt=""></div> -->
        </div>
        <!-- end of tp-breadcumb-section-->


        <!-- start about-section -->
        <section class="about-section section-padding p-t-0">
            <div class="container">
                <div class="row align-items-center">
                    <div class="col col-lg-5 col-12">
                        <div class="video-area">
                            <img :src="$root.URL_ROOT+'uploads/pages/'+pageData.image" alt>
                        </div>
                    </div>
                    <div class="col col-lg-7 col-12">
                        <div class="about-area">
                            <div class="about-wrap">
                                <div class="about-title">
                                    <!-- <small>About our Company</small> -->
                                    <h3 class="bold" style="    padding-bottom: 0;"> {{pageData.heading}} </h3>
                                </div>
                                <p v-html="pageData.pbody"> </p>
                               
                            </div>
                        </div>
                    </div>
                </div>
            </div> <!-- end container -->
        </section>
        <!-- end about-section -->

      

        <!-- start tp-fun-fact-section -->
        <!-- <section class="tp-fun-fact-section section-padding pt0">
            <div class="container">
                <div class="row">
                    <div class="col col-xs-12">
                        <div class="tp-fun-fact-grids clearfix">
                            <div class="grid">
                                <div class="info">
                                    <h3><span class="odometer" data-count="1500">100</span>+</h3>
                                    <p>Client Satisfaction</p>
                                </div>
                            </div>
                            <div class="grid">
                                <div class="info">
                                    <h3><span class="odometer" data-count="25">150</span>+</h3>
                                    <p>New Project</p>
                                </div>
                            </div>
                            <div class="grid">
                                <div class="info">
                                    <h3><span class="odometer" data-count="36">200</span></h3>
                                    <p>Latest Product</p>
                                </div>
                            </div>
                            <div class="grid">
                                <div class="info">
                                    <h3><span class="odometer" data-count="55">20</span>+</h3>
                                    <p>Award Winning</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div> 
        </section> -->
        <!-- end tp-fun-fact-section -->
 <!-- testimonial-area-start -->
      <!-- <Testimonial /> -->
      
        <!-- testimonial-area-end -->
        <!-- client-area start -->
      <!-- <Partners /> -->
        <!-- client-area end -->

        <!-- start of tp-site-footer-section -->
     <Footer/>
        <!-- end of tp-site-footer-section -->

    </div>
    <!-- end of page-wrapper -->



</body>
</template>

<script>
import Header from '@/components/Header'
import Footer from '@/components/footer'
import Testimonial from '@/components/Testimonial'
import Partners from '@/components/Partners'
import carousel2 from "vue-owl-carousel";
import carousel from 'vue-owl-carousel2'
export default {
    props: ["catedatas"],
    components: {
        Header,
        Footer,
        carousel,
        carousel2,
        Partners,
        Testimonial
    },
    data() {
        return {
            
            pageData: [],
            fields: {
                type: 'update_profile',
                uid: '',
                fullname: '',
                mobile: '',
                address: '',
                Token: this.$root.auth
            }
        }
    },
    mounted() {
        this.uid = localStorage.getItem('user')
        this.pData()
        this.goToTop()
    },
    methods: {
        goToTop() {
            document.body.scrollTop = 0
            document.documentElement.scrollTop = 0
        },
        pData() {
            const axios = require('axios')
            var self = this
            axios.post(this.$root.URL_ROOT + 'api.php', {
                type:'aboutus'
            }).then(function (response) {
                var data = response.data
                self.pageData = data.data
                console.log(response)
            })
        }
    }
}
</script>
