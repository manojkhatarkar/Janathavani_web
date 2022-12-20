<template>
<body>

    <!-- start page-wrapper -->
    <div class="page-wrapper">
        <!-- Start header -->
         <Header/>
        <!-- end of header -->


        <!-- start of breadcumb-section -->
        <div class="tp-breadcumb-area">
            <div class="container">
                <div class="row">
                    <div class="col-12">
                        <div class="tp-breadcumb-wrap">
                            <h2>Wishlist</h2>
                            <ul>
                                <li><a href="index.html">Home</a></li>
                                <li><span>Wishlist</span></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div class="hero-shape-img-1"><img src="assets/images/slider/img-2.png" alt=""></div>
            <div class="hero-shape-img-2"><img src="assets/images/slider/img-3.png" alt=""></div>
        </div>
        <!-- end of tp-breadcumb-section-->


        <!-- cart-area start -->
        <div class="cart-area section-padding">
            <div class="container">
                <div class="form">
                     <div class="cart-wrapper">
                        <div class="row">
                            <div v-if="Allproducts.length>0" class="col-12">
                                <div class="cart-table overflow-hidden">

                                    <div class="row cart-row" v-for="cart in Allproducts" :key="cart.id">
                                        <div class="col-xs-12 col-md-2 text-center">
                                            <img :src="$root.URL_ROOT+'uploads/Product/'+cart.front_image" width="100%" class="mobile-cart-product">
                                        </div>
                                        <div class="col-md-6  mobile-text-center mobile-cart-margin">
                                            <!-- <div class="product-articlenr">#643489</div> -->
                                            <div class="product-name"> {{cart.product_name}} </div>
                                            <div class="product-price">
                                             
                                                <div class="product-price"><small>INR</small> {{cart.selling_cost}} </div>
                                            </div>
                                        </div>
                                        <div class="col-md-3 cart-actions">
                                            <div class="product-delete">
                                                    <button class="delete" title="Add to Cart"  @click="add_to_cart(cart.pid,cart.product_name,'1',cart.selling_cost)"><i
                                                                    class="fi flaticon-shopping-cart fi-del"></i></button>
                                                <button type="button" @click="remove(cart.id)" data-toggle="tooltip" title="Delete" class="delete"><i class="fi flaticon-delete fi-del"></i></button>
                                            </div>
                                        </div>
                                    </div><!-- cart-row-->
                                </div>
                            </div>
                            <div v-else class="text-center">
                                <h1>No Record Found</h1>
                            </div>
                        </div>
                    </div>
                    <!-- <div class="cart-wrapper">
                        <div class="row">
                            <div class="col-12" v-if="Allproducts.length>0">
                                <form action="#">
                                    <table class="table-responsive cart-wrap">
                                        <thead>
                                            <tr>
                                                <th class="images images-b">Image</th>
                                                <th class="product-2">Product Name</th>
                                                <th class="ptice">Price</th>
                                                <th class="remove remove-b">Action</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr v-for="Product in Allproducts" :key="Product.id">
                                                <td class="images"><img :src="$root.URL_ROOT+'uploads/Product/'+Product.front_image" width="100" alt=""></td>
                                                <td class="product">
                                                    <ul>
                                                        <li class="first-cart"> {{Product.product_name}} </li>
                                                        
                                                    </ul>
                                                </td>
                                                <td class="ptice">INR {{Product.selling_cost}} </td>
                                                <td class="action">
                                                    <ul>
                                                        <li class="c-btn"><a class="pointer" title="Add to Cart"  @click="add_to_cart(Product.pid,Product.product_name,'1',Product.selling_cost)"><i
                                                                    class="fi flaticon-shopping-cart"></i></a></li>
                                                        <li class="w-btn"><a class="pointer" title="Remove from Cart" @click="remove(Product.id)"><i
                                                                    class="fi flaticon-delete"></i></a></li>
                                                    </ul>
                                                </td>
                                            </tr>
                                           
                                        </tbody>
                                    </table>
                                </form>
                            </div>
                            <div v-else class="col-12 text-center">
                              <h1>No Record Found</h1>  
                            </div>
                        </div>
                    </div> -->
                </div>
            </div>
        </div>
        <!-- cart-area end -->

        <!-- start of tp-site-footer-section -->
      <Footer/>
        <!-- end of tp-site-footer-section -->

    </div>
    <!-- end of page-wrapper -->



  
</body>
</template>

<script>
import Header from "@/components/Header";
import Footer from "@/components/footer";
export default {
    components: {
        Header,
        Footer
    },
    data() {
        return {
            Allproducts: [],
            loading: true,
            NoRecord: false,
            AllproductsShow: false,
            name: this.$route.params.name,
            uid: localStorage.getItem("user"),
        };
    },
    mounted() {
        this.getData();
        this.goToTop()
    },
    watch: {
        // Allproducts: function (id) {
        //     this.Allproducts = id;
        //     this.getData();
        // },
    },
    methods: {
         remove(id) {
            const axios = require("axios");
            var ev = this;
            var param = {
                id: id,
                table: 'mss_wishlist',
                type: 'commonDelete'
            }
            this.$swal({
                title: "Delete this ?",
                text: "Are you sure? You won't be able to revert this!",
                icon: 'info',
                showCancelButton: true,
                confirmButtonColor: "#f00",
                confirmButtonText: "Yes, Delete it!",
                reverseButtons: true
            }).then((result) => {
                if (result.isConfirmed) {
                    axios({
                        method: 'POST',
                        url: this.$root.URL_ROOT + 'api.php',
                        data: param
                    }).then(function (response) {
                        var data = response.data;
                        ev.getData()
                        console.log(data)
                        // this.deleted = data
                        ev.$toasted.global.success({
                            message: 'Deleted successfully'
                        })
                    })
                }
            })
      },
        goToTop() {
            document.body.scrollTop = 0
            document.documentElement.scrollTop = 0
        },
        getData() {
            const axios = require("axios");
            var ip_address = localStorage.getItem("ip_address");
            var user_session = localStorage.getItem("user");
            var uid = "";
            if (user_session != null) {
                uid = user_session;
            } else {
                uid = null;
            }
            var self = this;
            axios
                .post(this.$root.URL_ROOT + "api.php", {
                    type:'getMyWishList',
                    uid: uid,
                    ip: ip_address,
                })
                .then(function (response) {
                    var data = response.data;
                    if (data.status == 'success') {
                        self.AllproductsShow = true
                        self.Allproducts = data.data;
                    } else {
                        self.NoRecord = true
                        self.AllproductsShow = false
                    }
                });
        },
    },
};
</script>

<style>
.color-div {
    width: 50px;
    height: 50px;
}
</style>
