<template>
  <div style="height: 98vh" v-if="ebook.id"> 
    <!-- <button @click="interact" type="=:button">Interact with page</button> -->
    <!-- <VuePdfApp @after-created="afterCreated" page-scale="20" :pdf="$root.URL_ROOT+'uploads/Ebook/'+ebook.file" />  -->
    <!-- <embed :src="$root.URL_ROOT+'uploads/Ebook/'+ebook.file" style="width:100%;height:100%;" /> -->
    <!-- <iframe :src="$root.URL_ROOT+'uploads/Ebook/'+ebook.file" style="width:100%;height:100%;"></iframe> -->

    
    

      <div class="graph-outline">
        <object style="width:100%;" :data="$root.URL_ROOT+'uploads/Ebook/'+ebook.file+'?#zoom=85&scrollbar=0&toolbar=0&navpanes=0'" type="application/pdf">
          <embed :src="$root.URL_ROOT+'uploads/Ebook/'+ebook.file+'?#zoom=85&scrollbar=0&toolbar=0&navpanes=0'" type="application/pdf" />
        </object>
      </div>
  
  </div>
</template>

<script>
// import VuePdfApp from "vue-pdf-app";



export default {
  components: {
    // VuePdfApp,
   
  },
  data () {
    return {
      ebook: [],
      id: this.$route.params.id,
    }
  },
   mounted () {
   this.getDetail()
  },
  methods: {
    async interact() {
      if (!this.pdfjs) return;

      await this.pdfjs.pdfViewer.pagesPromise;
      console.log(document.querySelectorAll(".page"));
    },
    afterCreated(pdfjs) {
      // non-reactive
      this.pdfjs = pdfjs;
      window._pdf = pdfjs;
    },

      getDetail() {
            const axios = require("axios");
            var self = this;
            axios
                .post(this.$root.URL_ROOT + "api.php", {
                    id: this.id,
                    type: 'getSingleEbook'
                })
                .then(function (response) {
                    var data = response.data;
                    console.log(response);
                    self.ebook = data.ebook;
                    self.ebook.file = self.ebook.file+'#toolbar=0';
                });
        },
  },
};
</script>

<style>
@import "https://unpkg.com/vue-pdf-app@2.0.0/dist/icons/main.css";
</style>