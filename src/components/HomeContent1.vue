<template>
<section class="category-area section-padding">
    <div class="container">
        <div class="row align-items-center">
             <div class="col-lg-12">
                <div class="category-wrap">
                    <div class="category-title text-center bottom-icon benefites-heading"> 
                        <h2> {{pageData.heading}} </h2>
                    </div>
                    </div>
                    </div>
            <div class="col-lg-4 ">
                <div class="category-wrap">
                    <!-- <div class="category-title"> align-items-center
                        <h2> {{pageData.heading}} </h2>
                    </div> -->
                    <div class="category-item">
                        <!-- <p class="font-now" v-html="pageData.description"></p> -->
                        <p class="font-now">
                            <ul class="list mr-list-top lineheight-list-top">
                                <li><strong> Immunity booster</strong></li>
                                <li><strong> Helps in weight loss</strong></li>
                                <li><strong> Regulates blood sugar</strong></li>
                                <li><strong> Lowers cholesterol </strong></li>
                                <!-- <li><strong> Excellent source of anti oxidants</strong></li> -->
                                <!-- <li><strong> Antibacterial &amp; antifungal</strong></li> -->
                                <!-- <li><strong> Fights allergy</strong></li> -->
                            </ul>
                            <p><br></p>
                    </div>
                </div>
            </div>
            <!-- <div class="col-lg-1"></div> -->
            <div class="col-lg-4">
                <div class="">
                    <img :src="$root.URL_ROOT+'uploads/Content/'+pageData.image" class="w-100" alt="">
                    <!-- <div class="ct-img"><img src="../assets/images/category/icon-4.png" alt=""></div> -->
                </div>
            </div>
            <!-- <div class="col-lg-1"></div> -->
             <div class="col-lg-4">
                <div class="category-wrap">
                    <div class="category-item pdl-100">
                        <!-- <p class="font-now" v-html="pageData.description"></p> -->
                        <p class="font-now">
                            <ul class="list lineheight-list-top mr-list-top">
                                <li><strong> Improves heart health</strong></li>

                                <!-- <li><strong> Increases glycogen</strong></li> -->
                                <!-- <li><strong> Helps for digestive issues</strong></li> -->
                                <!-- <li><strong> Soothe a sore throat</strong></li> -->
                                <li><strong> Suppresses cold &amp; cough</strong></li>
                                <li><strong> Gives sound sleep</strong></li>
                                <!-- <li><strong> Hangover relief</strong></li> -->
                                <li><strong> Best substitute to sugar</strong></li>
                                <!-- <li><strong> Honey helps in treating respiratory tract infections</strong></li> -->

                            </ul>
                            <p><br></p>
                    </div>
                </div>
            </div>
        </div>
    </div>

</section>
</template>

<script>
import carousel from 'vue-owl-carousel2'
export default {
    components: {
        carousel,
    },
    data() {
        return {
            pageData: [],
            showData: false
        }
    },
    mounted() {
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
                type: 'home_content-1'
            }).then(function (response) {
                var data = response.data
                self.pageData = data[1]
                self.showData = true

            })
        }
    }
}
</script>
