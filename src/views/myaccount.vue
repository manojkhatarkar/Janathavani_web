<template>
<!-- start page-wrapper -->
<div class="page-wrapper">
    <!-- Start header -->
    <Header />
    <!-- end of header -->
    <main class="my-post" style="margin-top:60px;">
       
        <section class="account">
            <header>
                <section class="account-header-container bg-noise-texture dn db-ns bg-blue">
                    <section class="grid mr-auto ml-auto h-100" style="padding:30px;">
                        <section class="account-header-bg grid-item grid-item--cols-lg-12 grid-item--cols-md-12 grid-item--cols-sm-12 bg-right flex justify-between items-center bg-no-repeat">
                            <div>
                                <h1 class="font--headline bold white font-lg" data-qa="account-greeting">Welcome back</h1>
                                <div class="font--subhead font-xs white mt-xs mb-md" data-qa="account-subs-info">Thank you for being a reader</div>
                                <ul class="list-unstyled flex font-xxxs white font--subhead">
                                  
                                    <li>
                                        <ul class="list-unstyled flex items-start">
                                            <li class="dib mt-xs mb-xs">
                                                <ul class="list-unstyled">
                                                    <li data-qa="account-login-provider">Signed in as</li>
                                                    <li data-qa="account-login-email"> {{userdetail.email}} </li>
                                                </ul>
                                            </li>
                                        </ul>
                                    </li>
                                </ul>
                            </div>
                        </section>
                    </section>
                </section>
            </header>
            <main class="grid mr-auto ml-auto pa-0-sm">
                <nav class="grid-item grid-item--cols-sm-12 grid-item--cols-md-4 grid-item--cols-lg-3 pa-0-sm">
                    <div class="navigation-container">
                        <div class="mr-md dn db-ns">
                            <div class="font--subhead bold mt-lg pb-xl-ns">
                               
                                <section>
                                    <ul class="pt-sm-ns pb-sm-ns list-unstyled">
                                        <li data-qa="account-nav-settings"><a  class="pointer nav-list-item db font-xxs gray-darkest pa-sm-ns pr-0-ns hover-blue hover-parent" target="_blank" rel="noopener" data-qa="account-nav-settings"  @click="open_dashboard('step-1')" :class="dashboard_box == 'step-1' ? 'active' : ''" > My Account <svg class="content-box fill-gray-dark va-m dn-ns ml-xs hover-child-dib" width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false" role="img">
                                                    <title>ExternalLink</title>
                                                    <path d="M12.207 5.207L6.26 11.154 4.846 9.74l5.947-5.947L9 2h5v5l-1.793-1.793zM7 2v1H3v10h10V9h1v4a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1h4z" fill-rule="nonzero"></path>
                                                </svg></a></li>
                                        <li data-qa="account-nav-subscription"><a class="pointer nav-list-item db font-xxs gray-darkest pa-sm-ns pr-0-ns hover-blue hover-parent" target="_blank" rel="noopener" data-qa="account-nav-subscription"  @click="open_dashboard('step-5')" :class="dashboard_box == 'step-5' ? 'active' : ''" >Change Password <svg class="content-box fill-gray-dark va-m dn-ns ml-xs hover-child-dib" width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false" role="img">
                                                    <title>ExternalLink</title>
                                                    <path d="M12.207 5.207L6.26 11.154 4.846 9.74l5.947-5.947L9 2h5v5l-1.793-1.793zM7 2v1H3v10h10V9h1v4a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1h4z" fill-rule="nonzero"></path>
                                                </svg></a></li>
                                        <li data-qa="account-nav-newsletters"><a class="pointer nav-list-item db font-xxs gray-darkest pa-sm-ns pr-0-ns hover-blue hover-parent" target="_blank" rel="noopener" data-qa="account-nav-newsletters"  @click="open_dashboard('step-2')" :class="dashboard_box == 'step-2' ? 'active' : ''" >Subscription<svg class="content-box fill-gray-dark va-m dn-ns ml-xs hover-child-dib" width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false" role="img">
                                                    <title>ExternalLink</title>
                                                    <path d="M12.207 5.207L6.26 11.154 4.846 9.74l5.947-5.947L9 2h5v5l-1.793-1.793zM7 2v1H3v10h10V9h1v4a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1h4z" fill-rule="nonzero"></path>
                                                </svg></a></li>
                                                 <li data-qa="account-nav-comments"><a class="pointer nav-list-item db font-xxs gray-darkest pa-sm-ns pr-0-ns hover-blue hover-parent" target="_blank" rel="noopener" data-qa="account-nav-comments"  @click="open_dashboard('step-6')" :class="dashboard_box == 'step-6' ? 'active' : ''" >Account Settings<svg class="content-box fill-gray-dark va-m dn-ns ml-xs hover-child-dib" width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false" role="img">
                                                    <title>ExternalLink</title>
                                                    <path d="M12.207 5.207L6.26 11.154 4.846 9.74l5.947-5.947L9 2h5v5l-1.793-1.793zM7 2v1H3v10h10V9h1v4a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1h4z" fill-rule="nonzero"></path>
                                                </svg></a></li>
                                    </ul>
                                    <div class="bb b"></div>
                                </section>
                                <section>
                                    <ul class="pt-sm-ns pb-sm-ns list-unstyled">
                                        <li data-qa="account-nav-sign-out"><a @click="logout" class="pointer nav-list-item db font-xxs gray-darkest pa-sm-ns pr-0-ns hover-blue hover-parent" target="" rel="noopener noreferrer" data-qa="account-nav-sign-out">Sign Out</a></li>
                                    </ul>
                                </section>
                            </div>
                        </div>
                        <div class="dn-ns bg-blue-dark">
                            <section><button class="account-mob__section pointer w-100">
                                    <div class="flex justify-between items-center" style="height: 44px;">
                                        <div class="font--subhead font-xxs white pl-md pl-0-ns">Account Menu</div><svg class="content-box fill-white mr-md" width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false" role="img">
                                            <title>ChevronDown</title>
                                            <path d="M8 9.293L13.293 4l1.414 1.414-6 6a1 1 0 0 1-1.414 0l-6-6L2.707 4 8 9.293z" fill-rule="nonzero"></path>
                                        </svg>
                                    </div>
                                </button></section>
                        </div>
                    </div>
                </nav>
                <section class=" pl-sm-lg grid-item grid-item--rows-start-sm-2 grid-item--rows-start-md-1 grid-item--rows-start-lg-1 grid-item--cols-start-md-1 grid-item--cols-start-md-4 grid-item--cols-start-lg-4 grid-item--cols-sm-12 grid-item--cols-md-8 grid-item--cols-lg-9 pa-0 bl-ns ma-0 mt-xl-ns">
                    <section class="mypost-home pt-sm pt-0-ns pl-lg-ns pl-md pr-md">
                         <div class="tab-content" id="myaccountContent">
                                    <!-- Single Tab Content Start -->
                                    <div class="" v-if="dashboard_box == 'step-1'" id="dashboad" role="tabpanel">
                                        <div class="myaccount-content ">
                                            <h3>Dashboard</h3>
                                            <div class="welcome">
                                                <p>Hello, <strong> {{userdetail.username}} </strong>
                                                    (If Not <strong> {{userdetail.username}} !</strong><a href="#" @click="logout" class="logout"> Logout</a>)</p>
                                            </div>
                                            <p class="mb-0">From your account dashboard. you can easily check &amp; view your recent orders, manage your shipping and billing addresses and edit your password and account details.</p>
                                        </div>
                                    </div>
                                    <!-- Single Tab Content End -->
                                    <!-- Single Tab Content Start -->
                                    <div class="" v-if="dashboard_box == 'step-2'" id="orders" role="tabpanel">
                                        <div class="myaccount-content ">
                                            <h3>Subscription</h3>
                                            <div class="myaccount-table table-responsive text-center" v-if="orderDetailData">
                                            You have Subscribe {{orderDetailData.total=='Digital' ? 'You Have Subscribe All-Access Digital' : 'Premium Digital'}}
                                            </div>
                                             <div class="myaccount-table table-responsive text-center" v-else>
                                                 No Subscription
                                             </div>
                                        </div>
                                    </div>
                                    <!-- Single Tab Content End -->
                                    <!-- Single Tab Content Start -->
                                 
                                    <div class="billing-adress" id="open2" v-if="dashboard_box == 'step-8'" role="tabpanel">
                                        <div class="myaccount-content">
                                            <h3 class="theme-color">Edit Address</h3>
                                            <div class="contact-form form-style">
                                                <div class="row">
                                                    <div class="col-lg-6 col-md-12 col-12 mb-25">
                                                        <label for="fname1">Fullname</label>
                                                        <input class="form-control" type="text" v-model="userAddress.add_title" placeholder="" id="fname1" name="fname">
                                                    </div>
                                                    <div class="col-lg-6 col-md-12 col-12 mb-25">
                                                        <label for="fname2">Mobile</label>
                                                        <input class="form-control" type="text" placeholder="" v-model="userAddress.mobile_no" id="fname2" name="fname">
                                                    </div>
                                                    <div class="col-lg-6 col-md-12 col-12 mb-25">
                                                        <label for="fname2">Email</label>
                                                        <input class="form-control" type="text" placeholder="" v-model="userAddress.email" id="fname3" name="fname">
                                                    </div>
                                                    <div class="col-lg-6 col-md-12 col-12 mb-25">
                                                        <label for="Country">Country</label>
                                                        <select name="address" v-model="userAddress.country" id="Country" class="form-control">
                                                            <option value="india">India</option>
                                                        </select>
                                                    </div>
                                                    <div class="col-lg-6 col-md-12 col-12 mb-25">
                                                        <label for="City">State</label>
                                                        <input class="form-control" type="text" placeholder="" v-model="userAddress.c_state" id="state" name="state">
                                                    </div>
                                                    <div class="col-lg-6 col-md-12 col-12 mb-25">
                                                        <label for="City">City</label>
                                                        <input class="form-control" type="text" placeholder="" v-model="userAddress.city" id="City" name="City">
                                                    </div>
                                                    <div class="col-lg-6 col-md-12 col-12 mb-25">
                                                        <label for="City">Address Line 1</label>
                                                        <input class="form-control" type="text" placeholder="" v-model="userAddress.add1" id="City" name="City">
                                                    </div>

                                                    <div class="col-lg-6 col-md-12 col-12 mb-25">
                                                        <label for="Adress">Address Line 2</label>
                                                        <input class="form-control" type="text" placeholder="" id="Adress" v-model="userAddress.add2" name="Adress">
                                                    </div>
                                                    <div class="col-lg-6 col-md-12 col-12 mb-25">
                                                        <label for="Post2">Pin Code</label>
                                                        <input class="form-control" type="text" placeholder="" v-model="userAddress.zipcode" id="Post2" name="Post">
                                                    </div>
                                                    <div class="col-lg-12 col-md-12 col-12 py-3">
                                                        <button class="theme-btn contact-btn" type="button" @click="save_address">Save Address</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <!-- Single Tab Content End -->
                                    <!-- Single Tab Content Start -->
                                    <div class="" v-if="dashboard_box == 'step-5'" id="account-info" role="tabpanel">
                                        <div class="myaccount-content">
                                            <h3>Change password</h3>
                                            <ValidationObserver ref="form">
                                                <div class="account-details-form">
                                                    <div class="contact-form form-style">
                                                        <div class="row">
                                                            <div class="col-lg-6 col-md-12 col-12 mb-25 pos-relative">
                                                                <label for="fname1">Old Password</label>
                                                                <validation-provider rules="required|alpha_num|min:5" v-slot="{ errors }">
                                                                    <input class="form-control" :type="passshows" v-model="oldPassword" placeholder="" id="oldPassword" name="oldPassword">
                                                                    <span class="input-group-btn">
                                                                        <button class="btn btn-default reveal3" @mousedown="passshows = 'text'" @mouseup="passshows = 'password'" type="button"><i class="fa fa-eye"></i></button>
                                                                    </span>
                                                                    <span class="error-msgs">{{ errors[0] }}</span>
                                                                </validation-provider>
                                                            </div>
                                                            <div class="col-lg-6 col-md-12 col-12 mb-25 pos-relative">
                                                                <label for="fname1">New Password</label>
                                                                <validation-provider rules="required|alpha_num|min:5" v-slot="{ errors }">
                                                                    <input class="form-control" :type="passshows" v-model="newPassword" placeholder="" id="newPassword" name="newPassword">
                                                                    <span class="input-group-btn">
                                                                        <button class="btn btn-default reveal3" @mousedown="passshows = 'text'" @mouseup="passshows = 'password'" type="button"><i class="fa fa-eye"></i></button>
                                                                    </span>
                                                                    <span class="error-msgs">{{ errors[0] }}</span>
                                                                </validation-provider>
                                                            </div>
                                                            <div class="col-lg-6 col-md-12 col-12 mb-25 pos-relative">
                                                                <label for="fname1">Confirm Password</label>
                                                                <validation-provider rules="required|alpha_num|min:5" v-slot="{ errors }">
                                                                    <input class="form-control" :type="passshows" v-model="confirmPassword" placeholder="" id="confirmPassword" name="confirmPassword">
                                                                    <span class="input-group-btn">
                                                                        <button class="btn btn-default reveal3" @mousedown="passshows = 'text'" @mouseup="passshows = 'password'" type="button"><i class="fa fa-eye"></i></button>
                                                                    </span>
                                                                    <span class="error-msgs">{{ errors[0] }}</span>
                                                                </validation-provider>

                                                            </div>
                                                            <div class="col-lg-12 col-md-12 col-12 py-3">
                                                                <button class="theme-btn btn btn-primary contact-btn" type="button" @click="switchLoc">Update Password</button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </ValidationObserver>
                                        </div>
                                    </div> <!-- Single Tab Content End -->
                                    <div class="" v-if="dashboard_box == 'step-6'" id="account-info" role="tabpanel">
                                        <div class="myaccount-content">
                                            <h3>Account Details</h3>
                                            <div class="account-details-form">
                                                <div class="contact-form form-style">
                                                    <ValidationObserver ref="form1">
                                                        <div class="row">
                                                            <div class="col-lg-6 col-md-12 col-12 mb-25">
                                                                <label for="fname1">Fullname</label>
                                                                <validation-provider rules="required|alpha_spaces|min:3" v-slot="{ errors }">
                                                                    <input class="form-control" type="text" v-model="userdetail.username" placeholder="" id="fname1" name="fname">
                                                                    <span class="error-msgs">{{ errors[0] }}</span>
                                                                </validation-provider>

                                                            </div>
                                                            <div class="col-lg-6 col-md-12 col-12 mb-25">
                                                                <label for="fname2">Mobile</label>
                                                                <validation-provider rules="required|integer|min:10|max:11" v-slot="{ errors }">
                                                                    <input class="form-control" type="text" placeholder="" v-model="userdetail.mobile" id="fname2" name="fname">
                                                                    <span class="error-msgs">{{ errors[0] }}</span>
                                                                </validation-provider>

                                                            </div>
                                                            <div class="col-lg-6 col-md-12 col-12 mb-25">
                                                                <label for="fname2">Email</label>
                                                                <validation-provider rules="required|email" v-slot="{ errors }">
                                                                    <input class="form-control" type="text" placeholder="" v-model="userdetail.email" id="fname3" name="fname">
                                                                    <span class="error-msgs">{{ errors[0] }}</span>
                                                                </validation-provider>

                                                            </div>

                                                            <div class="col-lg-6 col-md-12 col-12 mb-25">
                                                                <label for="City">State</label>
                                                                <validation-provider rules="required|alpha_spaces|min:5" v-slot="{ errors }">
                                                                    <input class="form-control" type="text" placeholder="" v-model="userdetail.state" id="state" name="state">
                                                                    <span class="error-msgs">{{ errors[0] }}</span>
                                                                </validation-provider>

                                                            </div>
                                                            <div class="col-lg-6 col-md-12 col-12 mb-25">
                                                                <label for="City">City</label>
                                                                <validation-provider rules="required|alpha_spaces|min:5" v-slot="{ errors }">
                                                                    <input class="form-control" type="text" placeholder="" v-model="userdetail.city" id="City" name="City">
                                                                    <span class="error-msgs">{{ errors[0] }}</span>
                                                                </validation-provider>

                                                            </div>
                                                            <div class="col-lg-12 col-md-12 col-12 py-3">
                                                                <button class="theme-btn contact-btn btn btn-primary" type="button" @click="switchLoc2">Update Detail</button>
                                                            </div>
                                                        </div>
                                                    </ValidationObserver>
                                                </div>
                                            </div>
                                        </div>
                                    </div> <!-- Single Tab Content End -->
                                </div>
                    </section>
                </section>
            </main>
        </section>
      
    </main>
    <!-- start of tp-site-footer-section -->
    <Footer />
    <!-- end of tp-site-footer-section -->

</div>
<!-- end of page-wrapper -->
</template>

<script>
import Header from '@/components/Header'
import Footer from '@/components/footer'
import axios from 'axios'
import $ from "jquery";

import {
    ValidationProvider,
    ValidationObserver
} from "vee-validate";

export default {
    name: 'Detail',
    components: {
        Header,
        Footer,
        ValidationProvider,
        ValidationObserver
    },
    data() {
        return {
            passshow: 'password',
            passshows: 'password',
            isHas: false,
            showAddress: false,
            track: false,
            showOrder: false,
            categories: [],
            userAdd: [],
            products: [],
            ip_address: JSON.parse(localStorage.getItem('ip_address')),
            uid: localStorage.getItem('user'),
            chk_cat: false,
            chk_pro: false,
            userdetail: [],
            trackOrderDetail: [],
            uname: '',
            stateData: [],
            addressDatas: [],
            addressDetailData: [],
            dashboard_box: 'info',
            orderDetailData: [],
            fname: '',
            lname: '',
            email: '',
            mobile: '',
            newPassword: '',
            confirmPassword: '',
            c_state: '',
            city: '',
            address_name: '',
            address_mobile: '',
            add1: '',
            add2: '',
            zipcode: '',
            mobile_no: '',
            address_state: '',
            address_city: '',
            pincode: '',
            oldPassword: '',
            newPassword: '',
            confirmPassword: '',
            userAddress: []
        }
    },
    mounted() {
        if (this.uid == '' || this.uid == null) {
            this.$router.push({
                name: 'login'
            });
        }
        this.goToTop()

        this.getUserDetail();
        this.getState();
        this.orderDetail()
        this.goToTop()
        this.open_dashboard('step-1')
        this.getAddress()
    },
    methods: {
        cancelOrder(oid, awb_number) {
            var ev = this;
            var param = {
                type: "CancelMyOrder",
                awb_number: awb_number,
                uid: ev.uid,
                oid: oid,
            }
            this.$swal({
                title: "Cancel this order ?",
                text: "Are you sure? You won't be able to revert this!",
                icon: 'info',
                showCancelButton: true,
                confirmButtonColor: "#f00",
                confirmButtonText: "Yes, Cancel this order!",
                reverseButtons: true
            }).then((result) => {
                if (result.isConfirmed) {
                    axios({
                        method: 'POST',
                        url: this.$root.URL_ROOT + 'api.php',
                        data: param
                    }).then(function (response) {
                        var data = response.data;
                        ev.orderDetail()
                        console.log(data)
                        // this.deleted = data
                        ev.$toasted.global.success({
                            message: 'Order Cancelled Successfully '
                        })
                    })
                }
            })
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
                // setTimeout(() => {
                //     ev.clickme()
                // }, 5000);

            });
        },
        getAddress() {
            var ip_address = localStorage.getItem("ip_address");
            var user_session = localStorage.getItem("user");
            var uid = "";
            if (user_session != null) {
                uid = user_session;
            } else {
                uid = null;
            }
            var ev = this;
            axios({
                method: "POST",
                url: this.$root.URL_ROOT + "api.php",
                data: {
                    type: "getAllAddress",
                    uid: uid,
                    ip_address: ip_address,
                },
            }).then(function (response) {
                var data = response.data;
                console.log('getAllAddress', response)
                ev.addressDatas = data.data;

            });
        },
        addressShow(id) {

            if ($('#popup1' + id).hasClass("showOrder")) {
                $('#popup1' + id).removeClass("showOrder");
            } else {
                $('#popup1' + id).addClass("showOrder");

            }

            if (this.showAddress == false) {
                this.showAddress = true
            } else {
                this.showAddress = false
            }
        },
        orderShow(id) {
            if ($('#popup1' + id).hasClass("showOrder")) {
                $('#popup1' + id).removeClass("showOrder");
            } else {
                $('#popup1' + id).addClass("showOrder");

            }

        },
        trackOrder(awb_number) {
            if (this.track == false) {
                this.trackMyOrder(awb_number)
                this.track = true
            } else {
                this.track = false
            }
        },
        goToTop() {
            document.body.scrollTop = 0
            document.documentElement.scrollTop = 0
        },
        open_dashboard(vl) {
            this.dashboard_box = vl;
        },
        getUserDetail() {
            var self = this
            axios({
                method: 'POST',
                url: this.$root.URL_ROOT + 'api.php',
                data: {
                    type: 'userDetail',
                    uid: this.uid
                }
            }).then(function (response) {
                var data = response.data
                if (data.data) {
                    self.userdetail = data.data
                    self.fname = data.fname;
                    self.lname = data.lname;
                    self.email = data.email;
                    self.mobile = data.mobile;
                    self.uname = data.fullname;
                } else {
                    self.logout()
                    self.$toasted.global.error({
                        message: 'Your Account is Deactivated'
                    })
                    setTimeout(function () {
                        self.$router.push({
                            name: 'Home'
                        });
                    }, 1000);
                }

            })

        },
        switchLoc() {
            var vali = this.$refs.form.validate();
            vali.then(val => {
                    if (val == true) {
                        this.changePass()
                    }
                }

            )
        },
        switchLoc2() {
            var vali = this.$refs.form1.validate();
            vali.then(val => {
                    if (val == true) {
                        this.userDetailUpdate()
                    }
                }

            )
        },
        userDetailUpdate() {
            if (this.userdetail.username === '') {
                this.$toasted.global.error({
                    message: 'Please enter First Name'
                })
            } else if (this.userdetail.email === '') {
                this.$toasted.global.error({
                    message: 'Please enter Email'
                })
            } else if (this.userdetail.mobile === '') {
                this.$toasted.global.error({
                    message: 'Please enter Valid Mobile'
                })
            } else if (this.userdetail.address === '') {
                this.$toasted.global.error({
                    message: 'Please enter your address'
                })
            } else if (this.userdetail.state === '') {
                this.$toasted.global.error({
                    message: 'Please enter your state'
                })
            } else if (this.userdetail.city === '') {
                this.$toasted.global.error({
                    message: 'Please enter your City'
                })
            } else {
                var vi = this
                vi.userdetail.type = 'userDetailUpdate'
                axios({
                    method: 'POST',
                    url: this.$root.URL_ROOT + 'api.php',
                    data: this.userdetail
                }).then(function (response) {
                    var data = response.data
                    if (data.status === 'success') {
                        vi.$toasted.global.success({
                            message: 'Success Please wait...'
                        })
                    } else {
                        vi.$toasted.global.error({
                            message: data.msg
                        })
                    }
                })
            }
        },
        changePass() {
            var ev = this;
            if (this.oldPassword == "") {
                ev.$toasted.global.error({
                    message: 'please enter old password '
                })
            } else if (this.newPassword == "") {
                ev.$toasted.global.error({
                    message: 'please enter new password '
                })

            } else if (this.confirmPassword == "") {
                ev.$toasted.global.error({
                    message: 'please enter re-password '
                })
            } else if (this.newPassword != this.confirmPassword) {
                ev.$toasted.global.error({
                    message: 'password not match'
                })
            } else {
                axios({
                    method: 'POST',
                    url: this.$root.URL_ROOT + 'api.php',
                    data: {
                        type: 'change_password',
                        uid: ev.uid,
                        oldPassword: ev.oldPassword,
                        newPassword: ev.newPassword,
                        confirmPassword: ev.confirmPassword,

                    }
                }).then(function (response) {
                    var data = response.data
                    if (data.status == "success") {
                        ev.oldPassword = "";
                        ev.newPassword = "";
                        ev.confirmPassword = "";
                        $('.error-msg').addClass('hide');
                        setTimeout(function () {
                            $('.error-msgs').removeClass('hide');
                        }, 3000);
                        ev.$toasted.global.success({
                            message: data.msg
                        })
                    } else {
                        ev.$toasted.global.error({
                            message: data.msg
                        })
                    }
                })

            }

        },

        getState() {

            var ev = this;
            axios({
                method: 'POST',
                url: this.$root.URL_ROOT + 'api.php',
                data: {
                    type: 'getState',

                }
            }).then(function (response) {

                var data = response.data
                ev.stateData = data

            })

        },
        orderDetail() {

            var ev = this;
            axios({
                method: 'POST',
                url: this.$root.URL_ROOT + 'api.php',
                data: {
                    type: 'myorder',
                    uid: ev.uid,

                }
            }).then(function (response) {
                var data = response.data.data
                ev.orderDetailData = data
            })
        },
        saveAdd(id) {
            var ev = this;
            axios({
                method: 'POST',
                url: this.$root.URL_ROOT + 'api.php',
                data: {
                    type: 'updateAddress',
                    id: id,
                    uid: ev.uid,
                    ip_address: ev.ip_address,
                    fname: ev.fname,
                    lname: ev.lname,
                    add1: ev.add1,
                    add2: ev.add2,
                    city: ev.city,
                    mobile_no: ev.mobile_no,
                    c_state: ev.c_state,
                    zipcode: ev.zipcode
                }
            }).then(function (response) {
                var data = response.data
                if (data.status == "success") {
                    ev.$toasted.global.success({
                        message: data.msg
                    })
                }
                ev.getAddress()

            })
        },
        deleteAdd(id) {
            var ev = this;
            axios({
                method: 'POST',
                url: this.$root.URL_ROOT + 'api.php',
                data: {
                    type: 'removeAddress',
                    add_id: id,
                }
            }).then(function (response) {
                var data = response.data
                ev.getAddress()
                if (data.status == "success") {
                    ev.$toasted.global.success({
                        message: data.msg
                    })
                }
            })
        },
        editAddress(id) {
            var ev = this;
            this.open_dashboard('step-8')
            axios({
                method: 'POST',
                url: this.$root.URL_ROOT + 'api.php',
                data: {
                    type: 'singleAddress',
                    add_id: id,
                }
            }).then(function (response) {
                var data = response.data
                if (data.status == 'success') {
                    ev.userAddress = data.data
                }
            })

        },
        save_address() {
            var ev = this;
            if (this.userAddress.add_title == "") {
                ev.$toasted.global.error({
                    message: 'please enter address title '
                })
            } else if (this.userAddress.mobile_no == "") {
                ev.$toasted.global.error({
                    message: 'please enter mobile number '
                })
            } else if (this.userAddress.add1 == "") {
                ev.$toasted.global.error({
                    message: 'please enter address 1 '
                })
            } else if (this.userAddress.add2 == "") {
                ev.$toasted.global.error({
                    message: 'please enter address 2 '
                })
            } else if (this.userAddress.city == "") {
                ev.$toasted.global.error({
                    message: 'please enter city '
                })
            } else if (this.userAddress.c_state == "") {
                ev.$toasted.global.error({
                    message: 'please select state '
                })
            } else if (this.userAddress.zipcode == "") {
                ev.$toasted.global.error({
                    message: 'please enter pincode '
                })
            } else {
                axios({
                    method: 'POST',
                    url: this.$root.URL_ROOT + 'api.php',
                    data: {
                        type: 'edit_address',
                        uid: ev.uid,
                        add_title: ev.userAddress.add_title,
                        add_id: ev.userAddress.add_id,
                        add1: ev.userAddress.add1,
                        add2: ev.userAddress.add2,
                        mobile: ev.userAddress.mobile_no,
                        email: ev.userAddress.email,
                        country: ev.userAddress.country,
                        pincode: ev.userAddress.zipcode,
                        state: ev.userAddress.c_state,
                        city: ev.userAddress.city
                    }
                }).then(function (response) {
                    var data = response.data
                    if (data.status == "success") {
                        ev.$toasted.global.success({
                            message: data.msg
                        })
                        ev.open_dashboard('step-7')
                        ev.getAddress();
                    }
                })
            }
        }
    }
}
</script>

<style scoped>
/*-------- 27. My account style ---------*/
a.pointer.nav-list-item.db.font-xxs.gray-darkest.pa-sm-ns.pr-0-ns.hover-blue.hover-parent.active {
    background: #1955a5;
    color: #fff;
}
.myaccount-tab-menu {
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -webkit-flex-direction: column;
    -ms-flex-direction: column;
    flex-direction: column;
}

.myaccount-tab-menu a {
    border: 1px solid #ccc;
    border-bottom: none;
    font-weight: 600;
    font-size: 13px;
    display: block;
    padding: 10px 15px;
    text-transform: uppercase;
}

.myaccount-tab-menu a:last-child {
    border-bottom: 1px solid #ccc;
}

.myaccount-tab-menu a:hover,
.myaccount-tab-menu a.active {
    background-color: #1955a5;
    border-color: #1955a5;
    color: #ffffff !important;
}

.myaccount-tab-menu a i.fa {
    font-size: 14px;
    text-align: center;
    width: 25px;
}

@media only screen and (max-width: 767px) {
    #myaccountContent {
        margin-top: 30px;
    }
}

.myaccount-content {
    border: 1px solid #eeeeee;
    padding: 30px;
}

@media only screen and (max-width: 767px) {
    .myaccount-content {
        padding: 20px 15px;
    }
}

.myaccount-content form {
    margin-top: -20px;
}

.myaccount-content h3 {
    font-size: 20px;
    border-bottom: 1px dashed #ccc;
    padding-bottom: 10px;
    margin-bottom: 25px;
    font-weight: 600;
}

.myaccount-content .welcome a:hover {
    color: #1955a5;
}

.myaccount-content .welcome strong {
    font-weight: 600;
    color: #1955a5;
}

.myaccount-content fieldset {
    margin-top: 20px;
}

.myaccount-content fieldset legend {
    font-size: 16px;
    margin-bottom: 20px;
    font-weight: 600;
    padding-bottom: 10px;
    border-bottom: 1px solid #ccc;
}

.myaccount-content .account-details-form {
    margin-top: 50px;
}

.myaccount-tab-menu.nav a {
    cursor: pointer;
    color: #1955a5;
}

.myaccount-content .account-details-form .single-input-item {
    margin-bottom: 20px;
}

.myaccount-content .account-details-form .single-input-item label {
    font-size: 14px;
    text-transform: capitalize;
    display: block;
    margin: 0 0 5px;
}

.myaccount-content .account-details-form .single-input-item input {
    border: 1px solid #e8e8e8;
    height: 50px;
    background-color: transparent;
    padding: 2px 20px;
    color: #1f2226;
    font-size: 13px;
}

.myaccount-content .account-details-form .single-input-item input:focus {
    border: 1px solid #343538;
}

.myaccount-content .account-details-form .single-input-item button {
    border: none;
    background-color: #1955a5;
    text-transform: uppercase;
    font-weight: 600;
    padding: 9px 25px;
    color: #fff;
    font-size: 13px;
}

.myaccount-content .account-details-form .single-input-item button:hover {
    background-color: #1f2226;
}

.myaccount-table {
    /* white-space: nowrap; */
    font-size: 14px;
}

.myaccount-table table th,
.myaccount-table .table th {
    padding: 10px;
    font-weight: 600;
    background-color: #f8f8f8;
    border-color: #ccc;
    border-bottom: 0;
    color: #1f2226;
}

.myaccount-table table td,
.myaccount-table .table td {
    padding: 10px;
    vertical-align: middle;
    border-color: #ccc;
}

.saved-message {
    background-color: #fff;
    border-top: 3px solid #1955a5;
    font-size: 14px;
    padding: 20px 0;
    color: #333;
}
</style>
