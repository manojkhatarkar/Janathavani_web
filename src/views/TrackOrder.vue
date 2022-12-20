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
                            <h2>Track Order</h2>
                            <ul>
                                <li>
                                    <router-link to="/">Home</router-link>
                                </li>

                                <li><span>Track Order</span></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div class="hero-shape-img-1"><img src="../assets/images/slider/img-2.png" alt=""></div>
            <div class="hero-shape-img-2"><img src="../assets/images/slider/img-3.png" alt=""></div>
        </div>
        <!-- end of tp-breadcumb-section-->
        <div>
        </div>
        <!-- End of Order Details -->

        <!-- start about-section -->
        <section class="about-section section-padding p-t-0">
            <div class="container">
                <div class="row ">

                    <div class="col-md-6">
                        <div class="card ">
                            <div class="card-header">
                                <div class="d-inline h4">Order Details</div>
                            </div>
                            <div class="row">
                                <div class="card-body pdding">
                                    <dl class="row">
                                        <dd class="col-sm-4">AWB NUMBER : </dd>
                                        <dt class="col-sm-8"><span id="awb_num"></span></dt>

                                    </dl>
                                    <hr>

                                    <dl class="row">
                                        <dd class="col-sm-4">Destination : </dd>
                                        <dt class="col-sm-8"><span id="destination"></span></dt>

                                    </dl>
                                    <hr>

                                    <dl class="row">
                                        <dd class="col-sm-4">Company : </dd>
                                        <dt class="col-sm-8"><span id="customer"></span></dt>

                                    </dl>
                                    <hr>

                                    <dl class="row">
                                        <dd class="col-sm-4">Status : </dd>
                                        <dt class="col-sm-8"><span id="status"></span></dt>

                                    </dl>
                                    <hr>

                                    <dl class="row">
                                        <dd class="col-sm-4">Expected Date : </dd>
                                        <dt class="col-sm-8"><span id="expected_date"></span></dt>

                                    </dl>
                                    <hr>

                                    <dl class="row">
                                        <dd class="col-sm-4">City : </dd>
                                        <dt class="col-sm-8"><span id="city"></span></dt>

                                    </dl>
                                    <!-- <dl class="row">

<dt class="col-sm-12">Comments</dt>

<dd class="col-sm-12">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod

tempor incididunt ut labore et dolore magna aliqua.</dd>

</dl> -->
                                </div>

                              
                            </div>

                        </div>
                    </div>
                     <div class="col-md-6">
                        <div class="card ">
                            <div class="card-header">
                                <div class="d-inline h4">Delivery Status</div>
                            </div>
                            <div class="row">
                                <div class="card-body pdding">
                                    <dl class="row">

                                        <dd class="col-sm-4">Order ID : </dd>
                                        <dt class="col-sm-8"><span id="oid"></span></dt>
                                    </dl>
                                    <hr>

                                    <dl class="row">

                                        <dd class="col-sm-4">Current Location Name : </dd>
                                        <dt class="col-sm-8"><span id="current_location"></span></dt>
                                    </dl>
                                    <hr>

                                    <dl class="row">

                                        <dd class="col-sm-4">Pickupdate : </dd>
                                        <dt class="col-sm-8"><span id="pickupdate"></span> <br>
                                        </dt>
                                    </dl>
                                    <hr>

                                    <dl class="row">

                                        <dd class="col-sm-4">Tracking Status : </dd>
                                        <dt class="col-sm-8"><span id="tracking_status"></span><br>
                                        </dt>
                                    </dl>
                                    <hr>

                                    <dl class="row">

                                        <dd class="col-sm-4">Delivery Date : </dd>
                                        <dt class="col-sm-8"><span id="delivery_date"></span><br>
                                        </dt>
                                    </dl>
                                    <hr>

                                    <dl class="row">

                                        <dd class="col-sm-4">State : </dd>
                                        <dt class="col-sm-8"><span id="state"></span><br>
                                        </dt>
                                    </dl>
                                    <!-- <dl class="row">

<dt class="col-sm-12">Comments</dt>

<dd class="col-sm-12">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod

tempor incididunt ut labore et dolore magna aliqua.</dd>

</dl> -->
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
            <div class="container">
                <div class="row align-items-center">
                    <div class="col col-lg-12 col-12">
                        <div v-html="trackOrderDetail" class="hide"></div>

                        <div id="demo" class="hide"></div>
                        <!-- <div class="container">
                            <div class="row text-left">
                                <div class="col-sm-2 track-order-heading">
                                    <strong>AWB NUMBER</strong>
                                </div>
                                <div class="col-sm-4"><span id="awb_num"></span></div>
                                <div class="col-sm-2 track-order-heading">
                                    <strong>Order ID</strong>
                                </div>
                                <div class="col-sm-4"><span id="oid"></span></div>

                                <div class="col-sm-2 track-order-heading">
                                    <strong>Destination</strong>
                                </div>
                                <div class="col-sm-4"><span id="destination"></span></div>

                                <div class="col-sm-2 track-order-heading">
                                    <strong>Current Location Name </strong>
                                </div>
                                <div class="col-sm-4"><span id="current_location"></span></div>

                                <div class="col-sm-2 track-order-heading">
                                    <strong>Customer</strong>
                                </div>
                                <div class="col-sm-4"><span id="customer"></span></div>

                                <div class="col-sm-2 track-order-heading">
                                    <strong>Pickupdate</strong>
                                </div>
                                <div class="col-sm-4"><span id="pickupdate"></span></div>

                                <div class="col-sm-2 track-order-heading">
                                    <strong>Status</strong>
                                </div>
                                <div class="col-sm-4"><span id="status"></span></div>

                                <div class="col-sm-2 track-order-heading">
                                    <strong>Tracking Status</strong>
                                </div>
                                <div class="col-sm-4"><span id="tracking_status"></span></div>

                                <div class="col-sm-2 track-order-heading">
                                    <strong>Expected Date</strong>
                                </div>
                                <div class="col-sm-4"><span id="expected_date"></span></div>

                                <div class="col-sm-2 track-order-heading">
                                    <strong>Delivery Date</strong>
                                </div>
                                <div class="col-sm-4"><span id="delivery_date"></span></div>

                                <div class="col-sm-2 track-order-heading">
                                    <strong>city</strong>
                                </div>
                                <div class="col-sm-4"><span id="city"></span></div>
                                <div class="col-sm-2 track-order-heading">
                                    <strong>state</strong>
                                </div>
                                <div class="col-sm-4"><span id="state"></span></div>

                            </div>
                        </div> -->
                    </div>
                </div>
            </div> <!-- end container -->
        </section>
        <!-- end about-section -->

        <!-- start of tp-site-footer-section -->
        <Footer />
        <!-- end of tp-site-footer-section -->

    </div>
    <!-- end of page-wrapper -->

</body>
</template>

<script>
import Header from '@/components/Header'
import Footer from '@/components/footer'
import Testimonial from '@/components/Testimonial'
import Partners from '@/components/Partners'
import carousel2 from "vue-owl-carousel";
import carousel from 'vue-owl-carousel2'
import axios from 'axios'
import $ from "jquery";

export default {
    props: ["catedatas"],
    components: {
        Header,
        Footer,
        carousel,
        carousel2,
        Partners,
        Testimonial
    },
    data() {
        return {

            trackOrderDetail: [],
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
    mounted() {
        this.uid = localStorage.getItem('user')
        this.trackMyOrder(this.$route.params.id)
        this.goToTop()
    },
    methods: {
        goToTop() {
            document.body.scrollTop = 0
            document.documentElement.scrollTop = 0
        },
        async clickme() {
            var x = document.getElementsByTagName("field")
            var iv = this
            for (var i = 0; i <= x.length; i++) {
                
                var check = x[i]['attributes']['name']['nodeValue']; //=='awb_number';
                // console.log(check);
                if (check == 'awb_number') {
                    // iv.loadProgressBar()
                    document.getElementById('awb_num').innerHTML = x[i]['innerHTML'];
                } else if (check == 'orderid') {
                    document.getElementById('oid').innerHTML = x[i]['innerHTML'];
                } else if (check == 'destination') {
                    document.getElementById('destination').innerHTML = x[i]['innerHTML'];
                } else if (check == 'current_location_name') {
                    document.getElementById('current_location').innerHTML = x[i]['innerHTML'];
                } else if (check == 'customer') {
                    document.getElementById('customer').innerHTML = x[i]['innerHTML'];
                } else if (check == 'status') {
                    document.getElementById('status').innerHTML = x[i]['innerHTML'];
                } else if (check == 'pickupdate') {
                    document.getElementById('pickupdate').innerHTML = x[i]['innerHTML'];
                } else if (check == 'tracking_status') {
                    document.getElementById('tracking_status').innerHTML = x[i]['innerHTML'];
                } else if (check == 'expected_date') {
                    console.log('expected_date', x[i]['innerHTML']);

                    document.getElementById('expected_date').innerHTML = x[i]['innerHTML'];
                } else if (check == 'delivery_date') {
                    document.getElementById('delivery_date').innerHTML = x[i]['innerHTML'];
                } else if (check == 'city') {
                    document.getElementById('city').innerHTML = x[i]['innerHTML'];
                } else if (check == 'state') {
                    document.getElementById('state').innerHTML = x[i]['innerHTML'];
                }
            }

        },
        trackMyOrder(awb_number) {
            var ev = this;
            axios({
                method: "POST",
                url: this.$root.URL_ROOT + "api.php",
                data: {
                    type: "trackMyOrder",
                    awb_number: awb_number,
                },
            }).then(function (response) {
                var data = response.data;
                ev.trackOrderDetail = data
                    ev.getCart()
                setTimeout(() => {
                    ev.clickme()
                }, 1000);
            });
        },
    }
}
</script>
