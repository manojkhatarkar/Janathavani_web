<template>
  <!-- start page-wrapper -->
    <div class="page-wrapper">

      

        <!-- Start header -->
       <Header/>
        <!-- end of header -->



        <!-- start about-section -->
        <div class="wellcome pd-0">
            <div class="container">
                <div class="row">
                    <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 text-well">
                        <div class="media" style="margin-top:120px;">
                            <div class="media-body pd-0">
                                <h1 class="bold text-center font-58"> {{pageData.heading}} </h1>
<p v-html="pageData.pbody"></p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
        <!-- end about-section -->

      

     

        <!-- start of tp-site-footer-section -->
     <Footer/>
        <!-- end of tp-site-footer-section -->

    </div>
    <!-- end of page-wrapper -->
</template>
<script>
import Header from '@/components/navbar'
import Footer from '@/components/footer'
export default {
   props:["catedatas"],
   components: { Header, Footer},
    data () {
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
 mounted () {
    this.uid = localStorage.getItem('user')
    this.pData()
    // console.log(this.this.$route.params)
  this.goToTop()
  },
  methods: {
    goToTop () {
      document.body.scrollTop = 0
      document.documentElement.scrollTop = 0
    },
     pData () {
      const axios = require('axios')
      var self = this
      axios.post(this.$root.URL_ROOT + 'api.php', {type:'getCmsByLinkname',
                linkname: 'TermsConditions'}).then(function (response) {
        var data = response.data
        self.pageData = data
        console.log(response)
      })
    }
  }
}
</script>
