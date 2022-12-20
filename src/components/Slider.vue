<template>
    <carousel3 :autoplay="true" v-if="showData" :nav="false" :items="1" :responsive="{ 0: { items: 1 }, 576: { items: 1 }, 600: { items: 1 }, 768: { items: 1 }, 1200: { items: 1 }, 1500: { items: 1 },}">
              
                <div class="slide" v-for="(slider,key) in allSlider" :key="key">
                    <img src="../assets/images/slider/slide-1.jpg" alt class="slider-bg pos-absolute">
                    
                    <div class="container">
                        <div class="row">
                            <div class="col col-lg-8 slide-caption">
                                <div class="slide-title">
                                    <h2> {{slider.heading}} </h2>
                                    <h3 class="font-36 yellow-color "> {{slider.heading2}} </h3>
                                </div>
                                <!-- <div class="btns">
                                     <a :href="slider.link" class="btn theme-btn">Shop Now <i class="fa fa-angle-double-right"></i></a>
                                </div> -->
                            </div>
                        </div>
                    </div>
                    <div class="right-image">
                        <div class="simg-1" :style="key==1 ? 'left: 250px;width:420px;' : ''">
                            <img v-if="key==0" :src="$root.URL_ROOT+'uploads/Slider/'+slider.image" :style="key==1 || key==2 ? 'width: 65%;' : ''" alt="">
                           <img id="flag-img" v-else src="../assets/images/Choice.gif" class="flag-sm flag" >
                            </div>
                               
                        <div class="simg-2">
                            <!-- <img src="../assets/images/icon/honey.png" alt=""> -->
                        </div>
                    </div>
                    <!-- <div class="hero-shape-img z-999">
                        <img src="../assets/images/slider/img-3.png" alt=""></div> -->
                </div>
                    </carousel3>
</template>

<script>
import carousel3 from 'vue-owl-carousel2'
export default {
    components: {
        carousel3
    },
    data() {
        return {
            allSlider: [],
            showData: false
        };
    },
    mounted() {
        this.SliderData();

    },
  
    methods: {
      SliderData(){
            const axios = require('axios')
            var self = this
            axios.post(this.$root.URL_ROOT + 'api.php', {
                type:'home_silder'
            }).then(function (response) {
                var data = response.data
                self.allSlider = data.data
                self.showData = true
            })
      }

    },
};
</script>
