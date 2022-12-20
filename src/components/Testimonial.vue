<template>
<section class="testimonial-area section-padding">
    <div class="container">
        <div class="row">
            <div class="col-lg-6 offset-lg-3">
                <div class="section-title">
                    <h2>Client <span>Testimonial</span></h2>
                    <p>
                        <!-- Lorem Ipsum is simply dummy text of the printing and typesetting industry has been the
                                industry's standard consectetur adipisicing elit. -->
                    </p>
                </div>
            </div>
        </div>
        <div class="testimonial-wrap">

            <div class="testimonial-active">
                <carousel :autoplay="false" v-if="showData" :nav="false" :items="1" :responsive="{ 0: { items: 1 }, 576: { items: 1 }, 600: { items: 1 }, 768: { items: 1 }, 1200: { items: 1 }, 1500: { items: 1 },}">
                    <div class="testimonial-item" v-for="data in pageData" :key="data.id">
                        <div class="testimonial-img">
                            <img :src="$root.URL_ROOT+'uploads/Content/'+data.image" alt="">
                            <div class="t-quote">
                                <i class="fi flaticon-left-quote"></i>
                            </div>
                        </div>
                        <div class="testimonial-content">
                            <p class="sub-heading" v-html="data.description"></p>
                            <div class="testimonial-author">
                                <h3> {{data.heading}} </h3>
                            </div>
                            <div class="t-content-quote">
                                <i class="fi flaticon-left-quote"></i>
                            </div>
                        </div>
                    </div>
                </carousel>
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
                type: 'testimonial'
            }).then(function (response) {
                var data = response.data
                self.pageData = data.data
                self.showData = true

            })
        }
    }
}
</script>
