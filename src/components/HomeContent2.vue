<template>
      <section class="offer-area section-padding">
            <div class="container">
                <div class="row align-items-center">
                    <div class="col-lg-7">
                        <div class="">
                            <img style="padding: 0 20px 0 0;" :src="$root.URL_ROOT+'uploads/Content/'+pageData.image" alt="">
                        </div>
                    </div>
                    <div class="col-lg-5">
                        <div class="offer-wrap">
                            <div class="offer-title">
                                <h2> We Present To You </h2>
                            </div>
                            <div class="sub-heading" v-html="pageData.description"></div>
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
                type:'home_content-1'
            }).then(function (response) {
                var data = response.data
                self.pageData = data[0]
                self.showData = true

            })
        }
    }
}
</script>