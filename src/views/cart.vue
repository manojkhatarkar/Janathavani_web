<template>
<body>

    <!-- start page-wrapper -->
    <div class="page-wrapper">

        <!-- Start header -->
        <Header />
        <!-- end of header -->
        <!-- start of breadcumb-section -->
        <div class="tp-breadcumb-area">
            <div class="container">
                <div class="row">
                    <div class="col-12">
                        <div class="tp-breadcumb-wrap">
                            <h2>Cart</h2>
                            <ul>
                                <li>
                                    <router-link to="/">Home</router-link>
                                </li>

                                <li><span>Cart</span></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div class="hero-shape-img-1"><img src="assets/images/slider/img-2.png" alt=""></div>
            <div class="hero-shape-img-2"><img src="assets/images/slider/img-3.png" alt=""></div>
        </div>
        <!-- end of tp-breadcumb-section-->

        <br />
        <br />
        <br />
        <div class="container clearfix">
            <!--nocache-->
            <div class="page" v-if="cartCount.count>0">
                <div class="cart-page">
                    <div class="row">
                        <div class="col-12">
                            <h1 class="text-center">Your Cart  </h1>
                        </div>
                    </div>
                    <div class="clearfix"></div>
                    <div class="row mt-4">
                        <div class="col-sm-12 col-12">
                            <div class="clearfix">
                                <div class="row no-gutters" v-for="cart in cartCount.data" :key="cart.id">
                                    <div class="col-3 col-sm-2 col-md-1">
                                        <router-link :to="{ name: 'productDetail', params: { id: cart.pid } }">
                                            <img :src="$root.URL_ROOT+'uploads/Product/'+cart.front_image" class="py-1 img-fluid" alt="">
                                        </router-link>
                                    </div>
                                    <div class="col-9 col-sm-10 col-md-11">
                                        <div class="px-2">
                                            <div class="row no-gutters">
                                                <div class="col-12 col-sm-4">
                                                    <div class="clearfix">
                                                        <div class="item-name">
                                                            <router-link :to="{ name: 'productDetail', params: { id: cart.pid } }" class="p-color"> {{cart.name}} </router-link>
                                                            <a href="#" @click="remove(cart.id)" class="remove-color cart-item-remove mb-1 viewcart-sku " data-title="Remove" data-placement="top" data-tip="tooltip">
                                                                <!-- <i class="d-sm-none fa fa-trash-o btn btn-link btn-sm text-danger"></i> -->
                                                                <span class="pull-right d-lg-none d-md-none mobile-delete">
                                                                    <i class="fa fa-trash"></i></span></a>
                                                        </div>
                                                        <span class="clearfix item-del">
                                                            <a href="#" @click="remove(cart.id)" class="remove-color cart-item-remove mb-1 viewcart-sku " data-title="Remove" data-placement="top" data-tip="tooltip">
                                                                <!-- <i class="d-sm-none fa fa-trash-o btn btn-link btn-sm text-danger"></i> -->
                                                                <span class="d-none d-sm-block">
                                                                    <i class="fa fa-trash"></i>Remove</span></a>
                                                        </span>
                                                    </div>
                                                </div>
                                                <div class="col-12 col-sm-4 text-left text-sm-left">
                                                    <div class="mb-1 text-uppercase p-color" style="letter-spacing: 1px; font-size: 11px;">
                                                        Quantity </div>
                                                    <div class="cart-quantity">
                                                        <form action="#" class="form-horizontal" id="StoreCartCartForm" method="post" accept-charset="utf-8">
                                                            <div class="row no-gutters d-flex align-items-center">
                                                                <div class="col-7 col-sm-12">
                                                                    <div class="d-block position-relative count-input clearfix mr-2">
                                                                        <a class="position-absolute border-right text-center incr-btn z-index" :class="cart.qty==1 ? 'not-active' : ''" @click="minusCart(cart.id,cart.qty)" data-action="decrease" href="#">-</a>
                                                                        <input name="data[StoreCart][quantity]" id="quantity" class="quantity form-control text-center" :value="cart.qty" onkeyup="allow_numeric(this)" type="numeric">
                                                                        <a class="position-absolute border-left text-center incr-btn" @click="addCart(cart.id,cart.qty)" data-action="increase" href="#">+</a>
                                                                    </div>
                                                                </div>
                                                                <div class="col-5 col-sm-12 hide">
                                                                    <button type="button" @click="addCart(cart.id,cart.qty)" class="p-color btn-link btn-update small" style="background: none; border: none; padding-left: 0;">Update</button>
                                                                </div>
                                                            </div>
                                                        </form>
                                                    </div>
                                                </div>
                                                <div class="col-6 col-sm-2 text-left text-sm-left d-none d-sm-block">
                                                    <div class="marginbottom10 text-uppercase" style="letter-spacing: 1px; font-size: 11px;">
                                                        Price
                                                    </div>
                                                    <div class="price-font"><span class="price-font">₹</span> {{cart.amount}} </div>
                                                </div>
                                                <!-- <div class="col-6 col-sm-2 text-left text-sm-right d-none d-sm-block">
                                                    <div class="marginbottom10 text-uppercase" style="letter-spacing: 1px; font-size: 11px;">GST</div>
                                                    <div class="price-font">{{cart.c_gst}} <span class="price-font">%</span></div>
                                                </div> -->
                                                <div class="col-6 col-sm-2 text-left text-sm-right d-none d-sm-block">
                                                    <div class="marginbottom10 text-uppercase" style="letter-spacing: 1px; font-size: 11px;">Amount</div>
                                                    <div class="price-font"><span class="price-font">₹</span>{{cart.totalamount}}</div>

                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                    <hr class="my-2">
                                </div>
                                <!-- END PRODUCT -->
                            </div>
                        </div>
                    </div>
                    <div class="clearfix"></div>
                    <div class="row">
                        <div class="col-12">
                            <div class="border-solid margin0">
                                <div class="row margintop10">
                                    <div class="col-md-8 col-sm-7 col-12">
                                        <!--<div class="hidden-xs"></div>-->
                                        <div class="hidden-xs">
                                            <router-link :to="{ name: 'Product', params: {name:'BNECTAR HONEY', id:1} }" class="py-1 btn-link p-color">
                                                <i class="fa fa-angle-left"></i> Continue Shopping
                                            </router-link>
                                        </div>
                                    </div>
                                    <div class="col-md-4 col-sm-5 col-12">
                                        <div class="my-4 short-details">
                                            <ul class="order-menu list-unstyled">
                                                <li style="margin-bottom:30px;" class="d-flex  justify-content-between" v-if="cartCount.total_amount>=min">
                                                    <span>Shipping: </span>
                                                    <span><span class="price-font">₹</span> {{shipping}} </span>
                                                </li>
                                                <!-- <li style="margin-bottom:30px;" class="d-flex  justify-content-between">
                                                    <span>Total GST : </span>
                                                    <span><span class="price-font"></span>INR {{cartCount.total_gst_amount}} </span>
                                                </li> -->
                                                <li class="d-flex h4 justify-content-between">
                                                    <span>Total: </span>
                                                    <span v-if="cartCount.total_amount>=min"><span class="price-font">₹</span>
                                                        {{parseFloat(cartCount.total_amount+shipping)}}
                                                        <!-- {{cartCount.total_amount+shipping+cartCount.total_gst}} -->
                                                    </span>
                                                    <span v-else><span class="price-font">₹</span>
                                                        {{parseFloat(cartCount.total_amount)}}
                                                        <!-- {{cartCount.total_amount+cartCount.total_gst}} -->
                                                    </span>
                                                </li>
                                                <li style="text-align: right;margin: 10px 0;color: #00a505;">
                                                    <span class="text-right"><strong>Note: </strong> Inclusive of GST</span>
                                                </li>
                                            </ul>
                                            <div class="row">
                                                <div class="col-12">
                                                    <router-link v-if="!uid" :to="{ name: 'login'}" class="btn btn-primary btn-lg btn-block margintop10 marginbottom10 w-100">Login for Checkout</router-link>
                                                    <router-link v-if="uid" :to="{ name: 'checkout'}" class="btn btn-primary btn-lg btn-block margintop10 marginbottom10 w-100">Checkout</router-link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="clearfix"></div>
                    <div class="row">
                        <div class="col-md-12">
                            <div class="secure-logos">
                                <ul class="list-inline clearfix">
                                </ul>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            <div v-else class="text-center">
                <h1>No Record Found</h1>
            </div>
            <!--/nocache-->
        </div>
        <!-- cart-area start -->

        <!-- cart-area end -->

        <!-- start of tp-site-footer-section -->
        <Footer />
        <!-- end of tp-site-footer-section -->

    </div>
    <!-- end of page-wrapper -->
</body>
</template>

<script>
require('../assets/css/main.css')
import axios from 'axios'
import Header from "@/components/Header";
import Footer from "@/components/footer";
export default {
    props: ["catedatas"],
    components: {
        Header,
        Footer
    },
    data() {
        return {
            data: "",
            cartCount: [],
            shipping: 0,
            min: 0,
            card: "",
            fields: {
                type: "update_profile",
                uid: "",
                fullname: "",
                mobile: "",
                address: "",
                Token: this.$root.auth,
            },
        };
    },
    watch: {
        cartCount: function (cartCount) {
            this.cartCount = cartCount;
            // this.getCart();
        },
    },
    mounted() {
        this.uid = localStorage.getItem("user");
        this.goToTop();
        this.getCart();
        this.shippingCharge()
    },
    methods: {
        addCart(id, qty) {
            var ev = this
            axios.post(this.$root.URL_ROOT + "api.php", {
                    type: 'addQty',
                    cart_id: id,
                    qty: qty
                })
                .then(function (response) {
                    console.log(response);
                    if (response.data.status == "success") {
                        ev.$toasted.global.success({
                            message: response.data.msg
                        });
                        ev.getCart()
                    } else {
                        ev.$toasted.global.error({
                            message: response.data.msg
                        });
                    }
                });
        },
        minusCart(id, qty) {
            var ev = this
            axios.post(this.$root.URL_ROOT + "api.php", {
                    type: 'minQty',
                    cart_id: id,
                    qty: qty
                })
                .then(function (response) {
                    console.log(response);
                    if (response.data.status == "success") {
                        ev.$toasted.global.success({
                            message: response.data.msg
                        });
                        ev.getCart()
                    } else {
                        ev.$toasted.global.error({
                            message: response.data.msg
                        });
                    }
                });
        },
        remove(id) {
            var ev = this;
            var param = {
                id: id,
                table: 'mss_cart',
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
                        ev.getCart()
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
            document.body.scrollTop = 0;
            document.documentElement.scrollTop = 0;
        },
        update_cart_pre(cid, pid, pname, qty, price, mode) {
            var t = this.update_cart(cid, pid, pname, qty, price, mode);
            console.log(t)
            setTimeout(() => {
                if (t != null) {
                    this.getCart();
                }
            }, 1000);
        },
    },
};
</script>

<style scoped>
.shopping-cart .img-thumbnail {
    width: 50px;
}
</style>
