<template>
<carousel :autoplay="false" :nav="false" :items="4" :responsive="{ 0: { items: 2 }, 576: { items: 2 }, 600: { items: 2 }, 768: { items: 2 }, 1200: { items: 4 }, 1500: { items: 4 },}">
    <div class="col-xl-11 col-lg-11 col-md-11 col-sm-11 col-11" v-for="(product,rd) in productData" :key="rd">
        <div class="product-item">
            <div class="product-img">
                <img :src="$root.URL_ROOT+'uploads/Product/'+product.front_image" alt="">
                <ul>
                    <li><a  data-bs-toggle="tooltip" data-bs-html="true" @click="add_to_cart(product.id,product.name,'1',product.selling_cost)" title="Add to Cart"><i class="fi flaticon-shopping-cart"></i></a></li>
                    <li class="hide"><a  data-bs-toggle="tooltip" data-bs-html="true" title="Add to Wishlist" @click="whishList(product.id)"><i class="fi flaticon-like"></i></a></li>
                </ul>
            </div>
            <div class="product-content">
                <h3><router-link :to="{ name: 'productDetail', params: { id: product.id } }"> 
                    {{product.name}} 
                    </router-link></h3>
                <div class="product-btm">
                    <div class="product-price">
                        <ul>
                            <li>INR {{product.selling_cost}} </li>
                            <li ><template v-if="product.purchese_cost != 0">INR {{product.purchese_cost}}</template></li>
                        </ul>
                    </div>
                </div>
                 <div class="mobile-cart" >
                    <a  data-bs-toggle="tooltip" class="btn theme-btn" data-bs-html="true" @click="add_to_cart(product.id,product.name,'1',product.selling_cost)" title="Add to Cart">
                       Add to cart     </a>
                    <!-- <a  data-bs-toggle="tooltip" class="btn" data-bs-html="true" title="Add to Wishlist" @click="whishList(product.id)">
                    Add to wishlist
                    </a> -->
                    </div>
            </div>
        </div>
    </div>
</carousel>
</template>
<script>
// import starRating from "@/components/starRating";
import carousel from "vue-owl-carousel";

export default {
    props: ["productData","keyVal"],
    components: {
        carousel,
        // starRating,
    },
    data() {
        return {
            whishlist: 0,
        };
    },
    mounted() {},
    methods: {},
};
</script>

<style scoped>
.owl-carousel {
    display: block;
}

.product-carousel {
    display: block !important;
}

.product-thumb .button-group a {
    width: 40px;
    height: 40px;
    display: unset;
    top: 8px;
    border: none;
    background-color: #f2f2f2;
    color: #333;
    padding: 12px 12px;
    text-align: center;
    text-transform: uppercase;
    position: relative;
    transition: none;
    vertical-align: top;
    margin-right: 0px;
}
</style>
