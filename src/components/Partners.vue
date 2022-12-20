<template>
      <section class="client-area ">
           <div class="container">
                <div class="row">
                    <div class="col-lg-6 offset-lg-3">
                        <div class="section-title">
                            <h2>Our <span>Partner</span></h2>
                            <p>
                                <!-- Lorem Ipsum is simply dummy text of the printing and typesetting industry has been the
                                industry's standard consectetur adipisicing elit. -->
                                </p>
                        </div>
                    </div>
                </div>
                <div class="client-item">
                    <div class="client-carousel owl-carousel">
<carousel2 :autoplay="false" v-if="showData" :nav="false" :items="4" :responsive="{ 0: { items: 4 }, 576: { items: 1 }, 600: { items: 1 }, 768: { items: 1 }, 1200: { items: 4 }, 1500: { items: 4 },}">
                        <img v-for="page in pageData" :key="page.id" :src="$root.URL_ROOT+'uploads/Content/'+page.image" alt="clinet">
</carousel2>
                    </div>
                </div>
            </div>
        </section>
</template>

<script>
import carousel2 from 'vue-owl-carousel2'
import axios from "axios";

export default {
    components: {
        carousel2,
    },
    data() {
        return {
            pageData: [],
            showData: false
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
                type:'partners'
            }).then(function (response) {
                var data = response.data
                self.pageData = data.data
                self.showData = true
            })
        }
    }
}
</script>