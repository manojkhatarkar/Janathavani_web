<template>
    <div class="hpgrid-max-width ma-auto  " data-chain-name="arts-entertainment" data-gtm-module="arts-entertainment" data-link-group="arts-entertainment" style="min-height:;position:relative">
        <div class="mr-sm ml-sm mr-0-ns ml-0-ns label">
            <div class="gray-darkest mb-sm label label-package left">
                <div class="font-xxs font-bold heading-drop-size  uppercase letter-spacing  black hover-gray-dark label-link mouse-eff f-18" v-on:click="guidShow = !guidShow">
                    <span><router-link class="link-catname" :to="'/CategoryName/'+label+'/'+ids"> {{label}} </router-link></span>
                    <span class="relative" style="margin-left:0.125rem">
                        <span style="position:absolute;top:0.0625rem">
                            <!-- <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" aria-hidden="true" focusable="false" role="img" class="wpds-c-eMGhSw " width="16" height="16">
                                 <path d="m6 12.62-.71-.71L9.25 8 5.33 4.09 6 3.38 10.67 8Z"></path> 
                            </svg> -->
                        </span>
                    </span>
                    <transition name="fade">
                        <img src="../assets/images/icon/up.png" class="icon-click" v-if="guidShow" />
                        <img src="../assets/images/icon/down.png" class="icon-click" v-else />
                    </transition>
    
                </div>
            </div>
        </div>

        <transition name="fade">
            <div
              v-if="guidShow"
              class="chain hpgrid hpgrid-max-width ma-auto mx-dsktp-order large-bottom-separator no-line-bottom include-dividers-tables"
            >
              <div
                class="table-in-grid hpgrid hpgrid-item hpgrid-item--c-start hpgrid-item--c-spans hpgrid-item--r-spans tiling-layout grid-top grid-bottom grid-left grid-right allcontent include-dividers-features hide-helpers"
                style="
                  --c-start-mx: 1;
                  --c-start-lg: 1;
                  --c-start-md: 1;
                  --c-start-sm: 1;
                  --c-start-xs: 1;
                  --c-span-mx: 20;
                  --c-span-lg: 16;
                  --c-span-md: 12;
                  --c-span-sm: 10;
                  --c-span-xs: 1;
                "
              >
                <template v-for="News in data.slice(0, 8)">
                  <div 
                    :key="News.id"
                    class="card relative hpgrid-item hpgrid-item--c-start hpgrid-item--c-spans hpgrid-item--r-spans allcontent-childStyles grid-tiling grid-top grid-bottom grid-left left-br"
                    style="
                      --c-start-mx: 0;
                      --c-start-lg: 0;
                      --c-start-md: 0;
                      --c-start-sm: 0;
                      --c-start-xs: 0;
                      --c-span-mx: 5;
                      --c-span-lg: 4;
                      --c-span-md: 6;
                      --c-span-sm: 5;
                      --c-span-xs: 1;
                      --dsktp-order: 0;
                    "
                    data-index="0"
                    data-admin-id="1"
                    data-feature-name="13-7a-cutler"
                    moat-id="fronts/flex-feature"
                    data-mx-span="5"
                    data-lg-span="4"
                    data-md-span="6"
                    data-sm-span="5"
                    data-xs-span="1"
                  >
                  <div  class="l-border card relative
        
                  hpgrid-item hpgrid-item--c-start hpgrid-item--c-spans hpgrid-item--r-spans
                  table9-childStyles  grid-top grid-left grid-right
                  
                " style="--c-start-mx:1;--c-start-lg:0;--c-start-md:0;--c-start-sm:0;--c-start-xs:0;--c-span-mx:4;--c-span-lg:5;--c-span-md:4;--c-span-sm:5;--c-span-xs:1;--r-span-mx:1;--dsktp-order:0" data-index="2" data-admin-id="6" data-feature-name="op-b" moat-id="fronts/flex-feature" data-mx-span="4" data-lg-span="5" data-md-span="4" data-sm-span="5" data-xs-span="1">
                              <div class="left wrap-text art-size--xs" data-feature-id="homepage/story">
                                  <div class="card-right card-art left art--right no-bottom">
                                      <div class="w-100 mw-100 overflow-hidden relative lh-0 mb-xs is-square-art" data-qa="art-wrapper">
                                          <div class="dib" style="width:100%;height:100%;background-color:#eee">
                                              <router-link :to="'/OpinianDetail/'+News.id" class="art-link">
                                                  <img :src="$root.URL_ROOT+'uploads/Product/'+News.front_image" alt="" width="64" height="64" class="border-box db" style="width: 100%; height: 100%; background-color: rgb(238, 238, 238);"></router-link>
                                          </div>
                                      </div>
                                  </div>
                                  <div class="card-left card-text no-bottom">
                                      <div class="headline relative gray-darkest pb-xs">
                                          <h2 class="relative left font--headline font-light font-size-xs opinion-heading">
                                              <router-link :to="'/OpinianDetail/'+News.id" data-pb-local-content-field="web_headline">
                                                  <span v-html="News.name.slice(0, News.namecount)">
                                                  </span>
                                              </router-link>
                                          </h2>
                                      </div>
                                      <!-- <div class="byline gray-dark-2 font-xxxxs pb-xs">Opinion by
                                          <router-link :to="{name : 'Author',params:{id:News.label}}"> {{News.author}} </router-link>
                                      </div>
                                      <br />
                                          <img src="../assets/images/icon/calendar.png" >
          
                                          <span class="date-font">  {{getFormate(News.ndate)}}</span> -->
                                  </div>
                                  <div class="cb"></div>
                              </div>
                          </div>
                  </div> 
                
                  
                
                </template>
              </div>
            </div>
          </transition>


      

    </div>
    </template>
    
    <script>
    export default {
        props: ["data", "ids", "label"],
        components: {},
        data() {
            return {
                guidShow:true,
            };
        },
        mounted() {
            console.log(this.props)
        },
        methods: {
            getFormate(dt){
                const months = ["January","February","March","April","May","June","July","August","September","October","November","December"];
                var setD=new Date(dt);
                console.log(setD)
                var day=setD.getDay();
                var month=months[setD.getMonth()];
                var year=setD.getFullYear();
                var lst=month+'-'+day+'-'+year;
                return lst;
            },
        },
    };
    </script>
    <style>
        .fade-enter-active, .fade-leave-active {
          transition: opacity .5s;
        }
        .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
          opacity: 0;
        }
        .mouse-eff{
          cursor :pointer;
        }
        .icon-click {
            width: 25px;
            float: right;
            padding-top: 5px;
        }
      </style>
    