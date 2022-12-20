<template>
<div class="hpgrid-max-width ma-auto" data-chain-name="DM module" data-gtm-module="DM module" style="position: relative">
    <div class="mr-sm ml-sm mr-0-ns ml-0-ns">
        <div class="gray-darkest mb-sm label label-section-large left" v-on:click="dontMissShow = !dontMissShow">
            <span class="font-xs font-bold uppercase letter-spacing offblack"><span class="font-times"> {{label}} </span>
        
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
        <div class="" v-if="dontMissShow">
            <div class="row" v-if="DontMiss.length">
                <template v-for="News in DontMiss.slice(0,8)">
                    <div :key="News.id" class=" col-sm-3 card" >
                        <div class="left no-wrap-text art-size--fullWidth">
                            <div class="card-top card-text">
                                <div class="w-100 mw-100 overflow-hidden relative lh-0 mb-xs">
                                    <div class="dib" style="
                            width: 100%;
                            height: 100%;
                            background-color: #eee;
                            ">
                                        <a :to="{name:'Detail',params:{id:News.id}}" class="art-link">
                                            <img style="
                                width: 100%;
                                height: 100%;
                                background-color: #eee;
                                " :src="$root.URL_ROOT+'uploads/Product/'+News.front_image" /></a>
                                    </div>
                                </div>
                                <div class="headline relative gray-darkest pb-xs">
                                    <h2 class="
                            font--headline font-size-sm font-bold
                            left
                            relative
                            ">
                                        <router-link :to="{name:'Detail',params:{id:News.id}}">
                                            <span class="break-word" v-html="News.name.slice(0, News.namecount)"> </span></router-link>
                                    </h2>
                                </div>
                                <div class="byline gray-dark font-xxxxs pb-xs">
                                    <router-link :to="{name : 'Author',params:{id:News.label}}"> {{News.author}} </router-link>
                                </div>
                            </div>
                        </div>
                    </div>
                </template>
            </div>
            <div v-else style="height:70px;" ></div>
        </div>
        
    </transition>
</div>
</template>

<script>
export default {
    props: ["DontMiss", "label"],
    components: {},
    data() {
        return {
            dontMissShow:false,
        };
    },
    mounted() {},
    methods: {},
};
</script>
<style scoped>
.break-word {
    word-break: break-all;
}
</style>