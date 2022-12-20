<template>
  <div
    class="hpgrid-max-width ma-auto"
    data-chain-name="DM module"
    data-gtm-module="DM module"
    style="position: relative"
  >
    <div class="mr-sm ml-sm mr-0-ns ml-0-ns">
      <div
        class="gray-darkest mb-sm label label-section-large left mouse-eff"
        v-on:click="dontMissShow = !dontMissShow"
      >
        <span class="font-xs heading-drop-size font-bold uppercase letter-spacing offblack">
          <span class="font-times"><router-link class="link-catname" :to="'/CategoryName/'+label+'/'+ids"> {{ label }} </router-link></span>
          <transition name="fade">
            <img
              src="../assets/images/icon/up.png"
              class="icon-click"
              v-if="dontMissShow"
            />
            <img
              src="../assets/images/icon/down.png"
              class="icon-click"
              v-else
            />
          </transition>
        </span>
      </div>
    </div>

    <transition name="fade">
      <div
        v-if="dontMissShow"
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
          <template v-for="News in DontMiss.slice(0, 8)">
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
              <div class="left no-wrap-text art-size--fullWidth">
                <div class="card-top card-text">
                  <div class="w-100 mw-100 overflow-hidden relative lh-0 mb-xs">
                    <div
                      class="dib"
                      style="width: 100%; height: 240px; background-color: #eee"
                    >
                      <a
                        :to="{ name: 'Detail', params: { id: News.id } }"
                        class="art-link"
                      >
                        <img
                          style="
                            width: 100%;
                            height: 100%;
                            background-color: #eee;
                            max-height:100%;
                            
                          "
                          :src="
                            $root.URL_ROOT +
                            'uploads/Product/' +
                            News.front_image
                          "
                      /></a>
                    </div>
                  </div>
                  <div class="headline relative gray-darkest pb-xs">
                    <h2
                      class="font--headline font-size-sm font-bold left relative"
                    >
                      <router-link
                        :to="{ name: 'Detail', params: { id: News.id } }"
                      >
                        <template v-if="News.namecount">
                          <span
                            class="dont-news-heading brk"
                            v-html="News.name.slice(0, News.namecount)"
                          >
                          </span>
                        </template>

                        <template v-else>
                          <span
                            class="dont-news-heading brk"
                            v-html="News.name"
                          >
                          </span>
                        </template>
                      </router-link>
                    </h2>
                  </div>
                  <div class="byline gray-dark font-xxxxs pb-xs">
                    <router-link
                      :to="{ name: 'Author', params: { id: News.label } }"
                    >
                      {{ News.author }}
                    </router-link>
                  </div>
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
  props: ["DontMiss","ids", "label"],
  components: {},
  data() {
    return {
      dontMissShow: true,
    };
  },
  mounted() {
    if(this.ids=='4'){
      this.dontMissShow=true;
    }
  },
  methods: {},
};
</script>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}

.fade-enter,
.fade-leave-to
/* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}

.mouse-eff {
  cursor: pointer;
}

.icon-click {
  width: 25px;
  float: right;
  padding-top: 5px;
}
</style>
