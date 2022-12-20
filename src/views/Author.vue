<template lang="en">
<div onmousedown = 'return false' onselectstart = 'return false'>
    <Header />
    <div class="container mt-100">
    <main id="main-content" class="flex flex-grid flex-wrap mr-auto ml-auto print-mt-none">
        <div style="min-width:0" class="mb-sm b bb w-100">
            <div class="flex flex-column flex-ns-row items-ns-start b bt bc-gray-lighter pt-sm" style="min-width:0">
                <div class="center mr-md-ns" data-qa="author-avatar">
                    <figure aria-hidden="true" class="hide-for-print mw-100 dib bg-gray-lightest h-auto overflow-hidden brad-50 bw-0" style="width:180px;height:180px">
                        <div class="transition-opacity duration-400 ease-in-out opacity transition o-100">
                            <img data-chromatic="ignore" loading="lazy" :src="$root.URL_ROOT+'uploads/Content/'+authorData.image" alt="Headshot of Aaron Blake" class="mw-100 h-auto brad-50"></div>
                    </figure>
                </div>
                <div style="min-width:0">
                    <div class="flex items-center mb-sm">
                        <h1 class="font-lg font-bold font--headline mt-xs mb-xs center left-ns pr-sm-ns" data-qa="author-name"> {{authorData.name}} </h1>
                    </div>
                    <h2 class="font-md font-bold font--headline center left-ns undefined" data-qa="author-location">Janathavani</h2>
                    <p class="font-xxs font-bold font--meta-text mb-sm" data-qa="author-expertise"> {{authorData.designation}} </p>
                    <p class="font-xxs font-light font--meta-text lh-lg mb-sm" data-qa="author-education">Education: {{authorData.education}}</p>
                    <div class="font-xxs font-light font--meta-text lh-lg overflow-hidden h-100 mb-sm">
                        <div data-qa="author-long-bio" v-html="authorData.about">
                         </div>
                    </div>
                </div>
            </div>
            <div class="flex justify-between-ns justify-center flex-wrap w-100 items-center mt-sm b bt hide">
                <nav class="flex pt-sm pb-sm-ns items-center" aria-label="social links"><a class="pa-0 flex-shrink-0 brad-50 border-box transition-colors duration-200 ease-in-out bg-white hover-bg-gray-lighter focus-bg-gray-lighter offblack b-solid bw bc-gray-light hover-bc-gray-light focus-bc-gray-darkest-alpha-50 bold  h-md w-md pointer b-none" data-href="mailto:aaron.blake%40washpost.com" variant="solid" aria-label="email">
                        <div class="flex items-center justify-center h-100 w-100"><svg class="content-box fill-current" width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false" role="img">
                                <title>MailSolid</title>
                                <path d="M3.313 5.273C3.493 5.103 3.734 5 4 5h16c.13 0 .253.025.366.07L11.79 12.49 3.313 5.273zM21 7.166V18a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V7.775l8.064 6.867c.376.32.945.305 1.338-.036L21 7.166z" fill-rule="nonzero"></path>
                            </svg></div>
                    </a><a class="pa-0 flex-shrink-0 brad-50 border-box transition-colors duration-200 ease-in-out bg-white hover-bg-gray-lighter focus-bg-gray-lighter offblack b-solid bw bc-gray-light hover-bc-gray-light focus-bc-gray-darkest-alpha-50 bold ml-md h-md w-md pointer b-none" data-href="https://www.facebook.com/aaronblakewp?fref=ts" variant="solid" aria-label="facebook">
                        <div class="flex items-center justify-center h-100 w-100"><svg class="content-box fill-current" width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false" role="img">
                                <title>Facebook</title>
                                <path d="M12 2C6.477 2 2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12c0-5.523-4.477-10-10-10" fill-rule="evenodd"></path>
                            </svg></div>
                    </a><a class="pa-0 flex-shrink-0 brad-50 border-box transition-colors duration-200 ease-in-out bg-white hover-bg-gray-lighter focus-bg-gray-lighter offblack b-solid bw bc-gray-light hover-bc-gray-light focus-bc-gray-darkest-alpha-50 bold ml-md h-md w-md pointer b-none" data-href="https://twitter.com/aaronblake" variant="solid" aria-label="twitter">
                        <div class="flex items-center justify-center h-100 w-100"><svg class="content-box fill-current" width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false" role="img">
                                <title>Twitter</title>
                                <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.35 8.35 0 0 0 22 5.92a8.189 8.189 0 0 1-2.357.646 4.117 4.117 0 0 0 1.804-2.27 8.222 8.222 0 0 1-2.605.996 4.107 4.107 0 0 0-6.993 3.743 11.65 11.65 0 0 1-8.457-4.287 4.106 4.106 0 0 0 1.27 5.477A4.073 4.073 0 0 1 2.8 9.713v.052a4.105 4.105 0 0 0 3.292 4.022 4.095 4.095 0 0 1-1.853.07 4.108 4.108 0 0 0 3.834 2.85A8.233 8.233 0 0 1 2 18.407a11.617 11.617 0 0 0 6.29 1.84" fill-rule="evenodd"></path>
                            </svg></div>
                    </a><a class="pa-0 flex-shrink-0 brad-50 border-box transition-colors duration-200 ease-in-out bg-white hover-bg-gray-lighter focus-bg-gray-lighter offblack b-solid bw bc-gray-light hover-bc-gray-light focus-bc-gray-darkest-alpha-50 bold ml-md h-md w-md pointer b-none" data-href="https://www.washingtonpost.com/arcio/rss/author/Aaron-Blake" variant="solid" aria-label="rss">
                        <div class="flex items-center justify-center h-100 w-100"><svg class="content-box fill-current" width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false" role="img">
                                <title>Rss</title>
                                <path d="M11.43 12.57a13.33 13.33 0 013.9 9.43H12A10 10 0 002 12V8.67a13.33 13.33 0 019.43 3.9zm4.71-4.71A20 20 0 002 2v3.33A16.62 16.62 0 018.38 6.6a16.88 16.88 0 015.41 3.61 16.88 16.88 0 013.61 5.41A16.62 16.62 0 0118.67 22H22a20 20 0 00-5.86-14.14zM5.33 15.33a3.34 3.34 0 103.34 3.34 3.34 3.34 0 00-3.34-3.34z" fill-rule="nonzero"></path>
                            </svg></div>
                    </a></nav>
            </div>
        </div>
        
        <div data-qa="right-rail-ad" class="dn db-ns mt-0 mb-0 pb-lg-mod mr-auto ml-auto hide-for-print flex flex-column right-rail flex-1 col-4-lg flex-l">
            <div style="min-height:0;top:65px" class="dn db-ns sticky" data-qa="right-rail-ad">
                <div class="sticky" style="top: 65px;">
                    <div aria-hidden="true" class="hide-for-print relative flex justify-center content-box items-center b bh" style="border-top-color: transparent; border-bottom-color: transparent;">
                        <div class="center absolute w-100 border-box">
                            <div class="dib gray-dark pl-xs pr-xs font-sans-serif light font-xxxxs lh-md"></div>
                        </div>
                      
                    </div>
                </div>
            </div>
        </div>
    </main>
        </div>

    <Footer />
</div>
</template>

<script>
import axios from "axios";
import PriceRangeSlider from "@/components/PriceRangeSlider";
import Header from "@/components/Header";
import Footer from "@/components/footer";
import Guide from '../components/Guide.vue';
import DontMiss from '../components/DontMiss.vue';
export default {
    components: {
        Header,
        Footer,
        PriceRangeSlider,
        DontMiss,
        Guide
    },
    data() {
        return {
            SelectCategoryData: 0,
            allProducts: [],
            id: this.$route.params.id,
            authorData: [],
            OfferProduct: [],
            DontMiss: [],
            travelNews: [],
            foodNews: [],
            uid: localStorage.getItem('user'),
            i: 0
        };
    },
    mounted() {
        this.getAuthor()
    },
    watch: {
        "$route.params.id": function (newVal) {
            this.getAuthor(newVal);
        },
    },
    methods: {
        getAuthor() {
            var ev = this;
            axios
                .post(this.$root.URL_ROOT + "api.php", {
                    type: 'getSingleAuthor',
                    id: this.id
                })
                .then(function (response) {
                    var data = response.data
                        ev.authorData = data;
                });
        },
        goToTop() {
            document.body.scrollTop = 0;
            document.documentElement.scrollTop = 0;
        },
    },
};
</script>
<style scoped>
.mt-210{
    margin-top: 210px;
}
</style>
