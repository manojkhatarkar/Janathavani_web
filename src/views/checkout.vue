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
                            <h2>Checkout</h2>
                            <ul>
                                <li>
                                    <router-link to="/">Home</router-link>
                                </li>
                                <li><span>Checkout</span></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div class="hero-shape-img-1"><img src="assets/images/slider/img-2.png" alt=""></div>
            <div class="hero-shape-img-2"><img src="assets/images/slider/img-3.png" alt=""></div>
        </div>
        <!-- end of tp-breadcumb-section-->
        <!-- checkout-area start-->
        <div class="checkout-area section-padding">
            <div class="container">
                <form>
                    <div class="checkout-wrap">
                        <div class="row">
                            <div class="col-lg-8 col-12">
                                <div class="caupon-wrap s2" v-if="addressDatas.length">
                                    <div class="biling-item">
                                        <div @click="open_dashboard2" class="coupons coupon-3" :class="dashboard_box == 'step-1' ? 'active' : ''">
                                            <label id="toggle2">
                                                <i class="fa fa-check color-green" v-if="add_id>0" aria-hidden="true"></i>
                                                Select Address</label>
                                            <label v-if="dashboard_box == 'step-1'" class="pull-right">
                                                <i class="fa fa-eye font-26" aria-hidden="true"></i>
                                            </label>
                                            <label v-else class="pull-right">
                                                <i class="fa fa-eye-slash font-26" aria-hidden="true"></i>
                                            </label>
                                        </div>
                                        <div class="billing-adress" id="open1" v-if="dashboard_box == 'step-1'">
                                            <div class="contact-form form-style">
                                                <div class="row">
                                                    <div :class="userAddress.shippingBilling==true ? 'col-md-12' : 'col-md-6'">
                                                            <label>Select Shipping Address</label>
                                                        <select v-model="add_id" @change="getSelectedAddress(add_id)">
                                                            <option value="0">Select Shipping Address</option>
                                                            <option :value="getShipping.add_id" v-for="getShipping in getShippingAddressData" :key="getShipping.add_id"> {{getShipping.add1}} </option>
                                                        </select>
                                                    </div>
                                                    <div class="col-md-6" v-if="!userAddress.shippingBilling" >
                                                        <label>Select Billing Address</label>
                                                         <select v-model="billing_id" @change="getSelectedBillingAddress(billing_id)"> 
                                                            <option value="0">Select Billing address</option>
                                                              <option :value="getShipping.add_id" v-for="getShipping in getBillingAddressData" :key="getShipping.add_id"> {{getShipping.add1}} </option>
                                                        </select>
                                                    </div>   
                                                <div class="col-md-6" v-if="add_id != 0">
                                                        <div class="col-md-12 foundation ">
                                                            <h3> Shipping Address </h3>
                                                            <div class=" radio-btn">
                                                                <input type="radio" name="shipping" :id="'radio'+selectedAddress.add_id" class="radio visiblity-none" v-model="add_id" :value="selectedAddress.add_id" />
                                                                <label class="label" :for="'radio'+selectedAddress.add_id"></label>
                                                            </div>
                                                            <div class="col-md-12 foundation_sm">
                                                                <ul>

                                                                    <li>  {{selectedAddress.add_title}}  </li>
                                                                    <li><i class="fa fa-envelope-o" aria-hidden="true"></i>{{selectedAddress.email}}</li>
                                                                    <li><i class="fa fa-phone" aria-hidden="true"></i> {{selectedAddress.mobile_no}} </li>
                                                                    <li><i class="fi flaticon-pin" aria-hidden="true"></i> {{selectedAddress.add1}} </li>
                                                                    <li> {{selectedAddress.add2}} </li>
                                                                    <li> {{selectedAddress.city}}, {{selectedAddress.c_state}}, <br /> {{selectedAddress.country}}, {{selectedAddress.zipcode}} </li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </div>

                                                     <div class="col-md-6" v-if="!userAddress.shippingBilling && billing_id != 0" >
                                                        <div class="col-md-12 foundation ">
                                                            <h3> Billing Address </h3>
                                                            <div class=" radio-btn">
                                                                <input type="radio" name="billing" :id="'radio'+selectedBillingAddress.add_id" class="radio visiblity-none" v-model="billing_id" :value="selectedBillingAddress.add_id" />
                                                                <label class="label" :for="'radio'+selectedBillingAddress.add_id"></label>
                                                            </div>
                                                            <div class="col-md-12 foundation_sm">
                                                                <ul>
                                                                    <li> {{selectedBillingAddress.add_title}} </li>
                                                                    <li><i class="fa fa-envelope-o" aria-hidden="true"></i>{{selectedBillingAddress.email}}</li>
                                                                    <li><i class="fa fa-phone" aria-hidden="true"></i> {{selectedBillingAddress.mobile_no}} </li>
                                                                    <li><i class="fi flaticon-pin" aria-hidden="true"></i> {{selectedBillingAddress.add1}} </li>
                                                                    <li> {{selectedBillingAddress.add2}} </li>
                                                                    <li> {{selectedBillingAddress.city}}, {{selectedBillingAddress.c_state}}, <br /> {{selectedBillingAddress.country}}, {{selectedBillingAddress.zipcode}} </li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </div>
                                                   

                                                      <div class="col-lg-12 col-md-12 col-12" style="margin-bottom: 20px;align-items: center;display: flex;">
                                                            <input type="checkbox" placeholder="" style="width: 5%;height: 26px;margin: 15px 5px;" @change="checkBillingShipping" v-model="userAddress.shippingBilling" id="sel" name="sel">
                                                            <label for="sel">Select Shipping address as billing address</label>
                                                        </div>
                                                </div>
                                                <div class="row">
                                                    <div class="col-lg-4 col-md-4 col-4">
                                                        <button class="theme-btn" @click="add_select" v-if="add_id">Continue</button>
                                                    </div>
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                                <div class="caupon-wrap s2">
                                    <div class="biling-item">
                                        <div class="coupon coupon-3" @click="open_dashboard('step-2')" :class="dashboard_box == 'step-2' ? 'active' : ''">
                                            <label id="toggle2">Add Shipping Address</label>
                                        </div>
                                        <div class="billing-adress" id="open2" v-if="dashboard_box == 'step-2'">
                                            <div class="contact-form form-style">
                                                <ValidationObserver ref="form">
                                                    <div class="row">
                                                        <div class="col-lg-6 col-md-12 col-12">
                                                            <label for="fname1">Fullname</label>
                                                                <input type="hidden" v-model="userAddress.add_type" placeholder="" value="shipping">
                                                            <validation-provider rules="required|alpha_spaces|min:5" v-slot="{ errors }">
                                                                <input type="text" v-model="userAddress.add_title" placeholder="" id="fname1" name="Fullname">
                                                                <span class="error-msgs">{{ errors[0] }}</span>
                                                            </validation-provider>
                                                        </div>
                                                        <div class="col-lg-6 col-md-12 col-12">
                                                            <label for="fname2">Mobile</label>
                                                            <validation-provider rules="required|integer|min:10|max:10" v-slot="{ errors }">
                                                                <input type="text" placeholder="" v-model="userAddress.mobile_no" id="mobile" name="Number">
                                                                <span class="error-msgs">{{ errors[0] }}</span>
                                                            </validation-provider>
                                                        </div>
                                                        <div class="col-lg-6 col-md-12 col-12">
                                                            <label for="fname2">Email</label>
                                                            <validation-provider rules="required|email" v-slot="{ errors }">
                                                                <input type="text" placeholder="" v-model="userAddress.email" id="email" name="email">
                                                                <span class="error-msgs">{{ errors[0] }}</span>
                                                            </validation-provider>
                                                        </div>
                                                        <div class="col-lg-6 col-md-12 col-12">
                                                            <label for="Country">Country</label>
                                                            <select name="address" v-model="userAddress.country" id="Country" class="form-control">
                                                                <option value="india">India</option>
                                                            </select>
                                                        </div>
                                                        <div class="col-lg-6 col-md-12 col-12">
                                                            <label for="City">State</label>
                                                            <validation-provider rules="required|alpha_spaces|min:5" v-slot="{ errors }">
                                                                <input type="text" placeholder="" v-model="userAddress.c_state" id="state" name="state">
                                                                <span class="error-msgs">{{ errors[0] }}</span>
                                                            </validation-provider>
                                                        </div>
                                                        <div class="col-lg-6 col-md-12 col-12">
                                                            <label for="City">City</label>
                                                            <validation-provider rules="required|alpha_spaces|min:3" v-slot="{ errors }">

                                                                <input type="text" placeholder="" v-model="userAddress.city" id="City" name="City">
                                                                <span class="error-msgs">{{ errors[0] }}</span>
                                                            </validation-provider>
                                                        </div>
                                                        <div class="col-lg-6 col-md-12 col-12">
                                                            <label for="City">Address Line 1</label>
                                                            <validation-provider rules="required|min:3" v-slot="{ errors }">
                                                                <input type="text" placeholder="" v-model="userAddress.add1" id="Address line 1" name="Address line 1">
                                                                <span class="error-msgs">{{ errors[0] }}</span>
                                                            </validation-provider>
                                                        </div>

                                                        <div class="col-lg-6 col-md-12 col-12">
                                                            <label for="Adress">Address Line 2</label>
                                                            <validation-provider rules="required|min:3" v-slot="{ errors }">

                                                                <input type="text" placeholder="" id="Address line 2" v-model="userAddress.add2" name="Address line 2">
                                                                <span class="error-msgs">{{ errors[0] }}</span>
                                                            </validation-provider>
                                                        </div>
                                                        <div class="col-lg-6 col-md-12 col-12">
                                                            <label for="Post2">Pin Code</label>
                                                            <validation-provider rules="required|integer|min:6|max:6" v-slot="{ errors }">

                                                                <input type="text" placeholder="" v-model="userAddress.zipcode" id="Post2" name="Post">
                                                                <span class="error-msgs">{{ errors[0] }}</span>
                                                            </validation-provider>
                                                        </div>
                                                        <div class="col-lg-12 col-md-12 col-12" style="margin-bottom: 20px;align-items: center;display: flex;">
                                                            <input type="checkbox" placeholder="" style="width: 5%;height: 26px;margin: 15px 5px;" v-model="userAddress.shippingBilling" id="sel" name="sel">
                                                            <label for="sel">Select Shipping address as billing address</label>
                                                        </div>
                                                        <div class="col-lg-12 col-md-12 col-12">
                                                            <button class="theme-btn" type="button" @click="switchLoc">Continue</button>
                                                        </div>
                                                    </div>
                                                </ValidationObserver>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                                <!-- Billing Address -->
                                <div class="caupon-wrap s2" v-if="!userAddress.shippingBilling">
                                    <div class="biling-item">
                                        <div class="coupon coupon-3" @click="open_dashboard('step-5')" :class="dashboard_box == 'step-5' ? 'active' : ''">
                                            <label id="toggle2">Add Billing Address</label>
                                        </div>
                                        <div class="billing-adress" id="open2" v-if="dashboard_box == 'step-5'">
                                            <div class="contact-form form-style">
                                                <ValidationObserver ref="formBilling">
                                                    <div class="row">
                                                        <div class="col-lg-6 col-md-12 col-12">
                                                            <label for="fname1">Fullname</label>
                                                            <validation-provider rules="required|alpha_spaces|min:5" v-slot="{ errors }">
                                                                <input type="text" v-model="userAddressBilling.add_title" placeholder="" id="fname1" name="Fullname">
                                                                <span class="error-msgs">{{ errors[0] }}</span>
                                                            </validation-provider>
                                                        </div>
                                                        <div class="col-lg-6 col-md-12 col-12">
                                                            <label for="fname2">Mobile</label>
                                                            <validation-provider rules="required|integer|min:10|max:10" v-slot="{ errors }">
                                                                <input type="text" placeholder="" v-model="userAddressBilling.mobile_no" id="mobile" name="Number">
                                                                <span class="error-msgs">{{ errors[0] }}</span>
                                                            </validation-provider>
                                                        </div>
                                                        <div class="col-lg-6 col-md-12 col-12">
                                                            <label for="fname2">Email</label>
                                                            <validation-provider rules="required|email" v-slot="{ errors }">
                                                                <input type="text" placeholder="" v-model="userAddressBilling.email" id="email" name="email">
                                                                <span class="error-msgs">{{ errors[0] }}</span>
                                                            </validation-provider>
                                                        </div>
                                                        <div class="col-lg-6 col-md-12 col-12">
                                                            <label for="Country">Country</label>
                                                            <select name="address" v-model="userAddressBilling.country" id="Country" class="form-control">
                                                                <option value="india">India</option>
                                                            </select>
                                                        </div>
                                                        <div class="col-lg-6 col-md-12 col-12">
                                                            <label for="City">State</label>
                                                            <validation-provider rules="required|alpha_spaces|min:5" v-slot="{ errors }">
                                                                <input type="text" placeholder="" v-model="userAddressBilling.c_state" id="state" name="state">
                                                                <span class="error-msgs">{{ errors[0] }}</span>
                                                            </validation-provider>
                                                        </div>
                                                        <div class="col-lg-6 col-md-12 col-12">
                                                            <label for="City">City</label>
                                                            <validation-provider rules="required|alpha_spaces|min:3" v-slot="{ errors }">

                                                                <input type="text" placeholder="" v-model="userAddressBilling.city" id="City" name="City">
                                                                <span class="error-msgs">{{ errors[0] }}</span>
                                                            </validation-provider>
                                                        </div>
                                                        <div class="col-lg-6 col-md-12 col-12">
                                                            <label for="City">Address Line 1</label>
                                                            <validation-provider rules="required|min:3" v-slot="{ errors }">

                                                                <input type="text" placeholder="" v-model="userAddressBilling.add1" id="Address line 1" name="Address line 1">
                                                                <span class="error-msgs">{{ errors[0] }}</span>
                                                            </validation-provider>
                                                        </div>

                                                        <div class="col-lg-6 col-md-12 col-12">
                                                            <label for="Adress">Address Line 2</label>
                                                            <validation-provider rules="required|min:3" v-slot="{ errors }">

                                                                <input type="text" placeholder="" id="Address line 2" v-model="userAddressBilling.add2" name="Address line 2">
                                                                <span class="error-msgs">{{ errors[0] }}</span>
                                                            </validation-provider>
                                                        </div>
                                                        <div class="col-lg-6 col-md-12 col-12">
                                                            <label for="Post2">Pin Code</label>
                                                            <validation-provider rules="required|integer|min:6|max:6" v-slot="{ errors }">

                                                                <input type="text" placeholder="" v-model="userAddressBilling.zipcode" id="Post2" name="Post">
                                                                <span class="error-msgs">{{ errors[0] }}</span>
                                                            </validation-provider>
                                                        </div>
                                                        <div class="col-lg-12 col-md-12 col-12">
                                                            <button class="theme-btn" type="button" @click="switchLocBilling">Continue</button>
                                                        </div>
                                                    </div>
                                                </ValidationObserver>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                                <!-- End Billing Address -->
                                <div class="caupon-wrap s3">
                                    <div class="payment-area">
                                        <div class="row">
                                            <div class="col-12">
                                                <div class="coupon coupon-3" @click="open_dashboard('step-3')" :class="dashboard_box == 'step-3' ? 'active' : ''">
                                                    <label id="toggle4">Payment Method</label>
                                                </div>
                                                <div class="payment-option" id="" v-if="dashboard_box == 'step-3'">
                                                    <div id="open5" class="payment-name active">
                                                        <div class="contact-form form-style">
                                                            <div class="row">
                                                                <div class="col-lg-12 col-md-12 col-12">
                                                                    <p> <i class="fa fa-shield text-success"></i> Safe and Secure Payments. Easy returns. 100% Authentic products.</p>
                                                                    <img src="../assets/images/payment.png" />
                                                                    <br />
                                                                    <br />
                                                                    <div class=" radio-btn">
                                                                        <div style="display:flex;">
                                                                            <input type="radio" id="paymentMethod1" class="payment-radio" v-model="paymentMethod" value="1" />
                                                                            <label class="label mr-10" for="paymentMethod1">Cash On Delivery</label>
                                                                        </div>
                                                                        <br />
                                                                        <div style="display:flex;">
                                                                            <input type="radio" id="paymentMethod2" class="payment-radio" v-model="paymentMethod" value="2" />
                                                                            <label class="label mr-10" for="paymentMethod2">Credit / Debit Card</label>
                                                                        </div>

                                                                    </div>
                                                                    <div class="submit-btn-area ">
                                                                        <button class="theme-btn" v-if="paymentMethod==1" type="button" @click="pincode_status">Place
                                                                            Order</button>
                                                                        <button class="theme-btn" v-if="paymentMethod==2" type="button" @click="pincode_status">Place
                                                                            Order</button>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="col-lg-4 col-12">
                                <div class="cout-order-area">
                                    <div class="oreder-item ">
                                        <ul>
                                            <li class="o-header">Your Order<span>( {{cartCount.count}} )</span></li>

                                            <template v-for="(cart,key) in cartCount.data">
                                                <li :key="key">Product 1 X {{cart.qty}}
                                                    <span> {{cart.selling_cost*cart.qty}} </span>
                                                </li>
                                                <!-- <li :key="key">GST
                                                    <span> {{cart.c_gst}} </span> 
                                                </li> -->
                                            </template>
                                            <li class="s-total"> Sub Total <span> INR {{cartCount.total_amount}} </span></li>

                                            
                                            <li class="s-total" v-if="cartCount.total_amount>=min"> Shipping charge <span> INR {{shipping}} </span></li>
                                            <li class="s-total text-green" v-if="myCouponMoney>0"> Coupon Applyed <span> - {{myCouponMoney}}% </span> </li>
                                            <li class="o-bottom" v-else>
                                                <input type="text" v-model="couponCode" class="form-control" placeholder="enter coupon">
                                                <span> <button type="button" @click="applyCoupon" class="theme-btn">Apply</button> </span></li>
                                            <li v-if="myCouponMoney==0"> Have a coupon ?</li>

                                            <li class="s-total" v-if="cartCount.total_amount>=min"> Total <span>  INR {{  Math.round(parseFloat(cartCount.total_amount+shipping) - parseFloat((myCouponMoney / 100)*(cartCount.total_amount+shipping)))  }} </span></li>
                                            <li class="s-total" v-else> Total <span>  INR {{  Math.round(parseFloat(cartCount.total_amount) - parseFloat((myCouponMoney / 100)*(cartCount.total_amount)))  }} </span></li>
                                            <li class="s-total" v-if="cartCount.total_amount>=min">  Taxable amount <span>  INR 
                                               <span style="display:none;"> {{ withTextAmount = (parseFloat(cartCount.total_amount+shipping) - parseFloat((myCouponMoney / 100)*(cartCount.total_amount+shipping))) }}
                                                <!-- {{ withoutTextAmount =  parseFloat((5 / 100)*(withTextAmount)) }}  -->
                                                {{ totalwithoutgst = (withTextAmount / 105)*100 }}
                                                </span>
                                                {{ ttotalwithoutgst  = (totalwithoutgst).toFixed(0) }}
                                                </span></li>
                                                <li class="s-total" v-else> Taxable amount <span>  INR 
                                                <span style="display:none;"> {{ withTextAmount = (parseFloat(cartCount.total_amount) - parseFloat((myCouponMoney / 100)*(cartCount.total_amount))) }}
                                                <!-- {{ withoutTextAmount =  parseFloat((5 / 100)*(withTextAmount)) }}  -->
                                                {{ totalwithoutgst = (withTextAmount / 105)*100 }}
                                                </span>
                                                {{ ttotalwithoutgst  = (totalwithoutgst).toFixed(0) }}
                                                <!-- {{parseFloat(cartCount.total_amount) - parseFloat((myCouponMoney / 100)*cartCount.total_amount )  }} -->
                                                </span></li>

                                            <li class="s-total" v-if="ttotalwithoutgst>0 && selectedAddress && selectedAddress.c_state=='karnataka'"> CGST <span> INR {{ cgstLess = parseFloat(((2.5 / 100)*ttotalwithoutgst).toFixed(2)) }} </span></li>
                                            <li class="s-total" v-if="ttotalwithoutgst>0 && selectedAddress && selectedAddress.c_state=='karnataka'"> SGST <span>INR {{ sgstLess = parseFloat(((2.5 / 100)*ttotalwithoutgst).toFixed(2)) }} </span></li>

                                            <li class="s-total" v-else> IGST <span> INR {{ parseFloat(((5 / 100)*totalwithoutgst).toFixed(2) )}}  </span></li>

                                            <li class="o-bottom" v-if="cartCount.total_amount>=min">Total price <span> INR
                                                <!-- {{(FinalTotalAmount = totalwithoutgst+sgstLess+cgstLess).toFixed(0)}} -->
                                                                                                   {{ FinalTotalAmount = Math.round(parseFloat(cartCount.total_amount+shipping) - parseFloat((myCouponMoney / 100)*(cartCount.total_amount+shipping)))  }}
                                                </span>
                                            </li>
                                            <li class="o-bottom" v-else>Total price <span> INR
                                                                                                     {{ FinalTotalAmount = Math.round(parseFloat(cartCount.total_amount) - parseFloat((myCouponMoney / 100)*(cartCount.total_amount)))  }}
                                               </span>

                                            </li>
                                            <li>
                                                <span style="    font-weight: bold;
    color: #11da5c;
    text-align: right;
    margin-left: auto;" class="text-right"><strong>Note: </strong> Inclusive of GST</span>

                                            </li>

                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
        <!-- checkout-area end-->
        <!-- start of tp-site-footer-section -->
        <Footer />
        <!-- end of tp-site-footer-section -->
    </div>
    <!-- end of page-wrapper -->
</body>
</template>

<script>
import axios from "axios";
import Header from "@/components/Header";
import Footer from "@/components/footer";
import {
    ValidationProvider,
    ValidationObserver
} from "vee-validate";

export default {
    props: ["catedatas"],
    components: {
        Header,
        Footer,
        ValidationProvider,
        ValidationObserver
    },
    data() {
        return {
            FinalTotalAmount: 0,
            add_id: 0,
            cgstLess: 0,
            sgstLess: 0,
            withTextAmount: 0,
            withoutTextAmount: 0,
            totalwithoutgst: 0,
            ttotalwithoutgst: 0,
            billing_id: 0,
            paymentMethod: 1,
            couponCode: '',
            getCounts: '',
            myCouponMoney: localStorage.getItem('coupon') ? localStorage.getItem('coupon') : 0,
            isHas: false,
            isAdd: 0,
            shipping: 0,
            min: 0,
            dashboard_box: "step-1",
            ip_address: JSON.parse(localStorage.getItem("ip_address")),
            uid: localStorage.getItem("user"),
            userData: [],
            cartCount: [],
            amount: 100,
            addressDatas: [],
            paymenttype: 'ppd',
            awbNumber: '',
            selectedAddress: [],
            getShippingAddressData: [],
            getBillingAddressData: [],
            selectedBillingAddress: [],
            userAddress: {
                add_title: '',
                mobile_no: "",
                add1: "",
                add2: "",
                c_state: "",
                city: "",
                zipcode: "",
                add_type: 'Shipping',
                shippingBilling : false
            },
            userAddressBilling: {
                 add_title: '',
                mobile_no: "",
                add1: "",
                add2: "",
                c_state: "",
                city: "",
                zipcode: "",
                add_type: '',
            }

        };
    },
    watch: {
        add_id: function (id,oldId) {
            if (this.add_id > 0 && this.add_id != oldId) {
                this.getSelectedAddress(id);
                // if(this.userAddress.shippingBilling==true){
                //      this.billing_id = this.add_id
                // }
            }
        },
         billing_id: function (id,oldId) {
            if (this.billing_id > 0 && this.billing_id != oldId) {
                this.getSelectedBillingAddress(id);
            }
        },
        // userAddress: function(id){
        //     if(this.userAddress.shippingBilling==true){
        //         this.billing_id = this.add_id
        //     }
        // },
        //         selectedAddress: function(){
        //  if (this.add_id > 0) {
        //             this.getSelectedAddress(this.add_id);
        //         }
        //         },
        cartCount: function () {
            if (this.cartCount.count == 0) {
                this.$toasted.global.error({
                    message: 'Your cart is empty please add some product'
                });
            }
        }
    },
    mounted() {
        this.includeStripe('checkout.razorpay.com/v1/checkout.js');
        this.uid = localStorage.getItem("user");
        (this.ip_address = JSON.parse(localStorage.getItem("ip_address"))),
        this.userDetail()
        this.getAddress();
        this.getState();
        var ev = this
        if (this.add_id > 0) {
            this.getSelectedAddress(this.add_id);
        }
        setTimeout(function () {
            ev.getSelectedAddress(this.add_id);
            // ev.getSelectedBillingAddress(this.billing_id);
        }, 2000);
        this.goToTop();
        this.getCart();
        this.shippingCharge()
        this.checkfirstSigup()
        this.getShippingAddress()
        this.getBillingAddress()
    },
    methods: {
        checkBillingShipping(){
            if(this.userAddress.shippingBilling==true){
                this.billing_id = this.add_id
            }
        },
        getShippingAddress() {
            var user_session = JSON.parse(localStorage.getItem("user"));
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
                    type: "getShippingAddress",
                    uid: uid,
                },
            }).then(function (response) {
                var data = response.data;
                console.log('getShippingAddress',data);
                ev.add_id = data[0].add_id;
                ev.getShippingAddressData = data;
            });
        },
        getBillingAddress() {
            var user_session = JSON.parse(localStorage.getItem("user"));
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
                    type: "getBillingAddress",
                    uid: uid,
                },
            }).then(function (response) {
                var data = response.data;
                // ev.add_id = ev.addressDatas[0].add_id
                    ev.billing_id = data[0].add_id
                ev.getBillingAddressData = data;
            });
        },
        getSelectedBillingAddress(id){
            if(id==0){

            }else{
            var user_session = JSON.parse(localStorage.getItem("user"));
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
                    type: "getSelectedBillingAddress",
                    uid: uid,
                    aid: id,
                },
            }).then(function (response) {
                var data = response.data;
                ev.selectedBillingAddress = data;
                ev.billing_id = data.add_id;
            }); 
            }
        },
        getSelectedAddress() {
            if(this.add_id==0){

            }else{
            var user_session = JSON.parse(localStorage.getItem("user"));
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
                    type: "getSelectedAddress",
                    uid: uid,
                    aid: ev.add_id,
                },
            }).then(function (response) {
                var data = response.data;
                ev.selectedAddress = data;
                ev.add_id = data.add_id;

            });
            }
        },
        checkfirstSigup() {
            var self = this
            axios({
                method: "POST",
                url: this.$root.URL_ROOT + "api.php",
                data: {
                    type: "checkFirstSignup",
                    uid: self.uid,
                },
            }).then(function (response) {
                var data = response.data;
                // console.log(data);
                if (data.data) {

                } else {
                    self.couponCode = 'FIRST'
                    self.applyCoupon()
                }
            });
        },
        getCount(id) {
            var count = ''
            var data = count.push(id);
            this.getCounts = data
        },
        generateAwbNumber() {
            var self = this
            var oid = localStorage.getItem('oid')
            if (this.paymentMethod == 1) {
                self.paymenttype = "COD"
            }
            axios({
                method: 'POST',
                url: this.$root.URL_ROOT + 'api.php',
                data: {
                    type: 'generateAwb',
                    payment: self.paymenttype,
                    oid: oid
                }
            }).then(function (response) {
                var data = response.data
                // console.log('generateAwb',data)
                if (data.status == "success") {
                    self.awbNumber = data.data
                    self.createShipping()
                }
            })
        },
        pincode_status() {
            if (this.add_id == 0 || this.add_id == undefined) {
                this.$toasted.global.error({
                    message: 'Please Select Shipping Address'
                });
            } else if (this.billing_id == 0 || this.billing_id == undefined) {
                this.$toasted.global.error({
                    message: 'Please Select Billing address'
                });
            } 
            else if (this.cartCount.count == 0) {
                this.$toasted.global.error({
                    message: 'Your cart is empty please add some product'
                });
            } else {
                var self = this
                axios({
                    method: 'POST',
                    url: this.$root.URL_ROOT + 'api.php',
                    data: {
                        type: 'pincode_status',
                        pincode: self.selectedAddress.zipcode
                    }
                }).then(function (response) {
                    var data = response.data
                    if (data.status == 'success') {
                        self.orderGenerate()
                    }
                })
            }
        },
        createShipping() {
            var amount = 0
            var self = this
            var getcouponMoney = parseFloat(this.myCouponMoney)
            if (this.paymentMethod == 1) {
                self.paymenttype = "COD";
                // amount = parseFloat((this.cartCount.total_amount + this.shipping) - this.myCouponMoney);
                var amount = parseFloat(this.cartCount.total_amount + this.shipping - getcouponMoney) + parseFloat((this.cartCount.total_gst / 100) * this.cartCount.total_amount)
                // {{parseFloat(this.cartCount.total_amount+this.shipping-getcouponMoney) + parseFloat((this.cartCount.total_gst / 100)*this.cartCount.total_amount )}}
            }
            var oid = localStorage.getItem('oid')
            axios({
                method: 'POST',
                url: this.$root.URL_ROOT + 'api.php',
                data: {
                    type: 'testingShipping',
                    add_id: self.add_id,
                    awb_number: self.awbNumber,
                    oid: oid,
                    product: self.paymenttype,
                    qty: self.cartCount.count,
                    amount: amount
                }
            }).then(function (response) {
                var data = response.data
                if (data.status == 'success') {
                    self.$toasted.global.success({
                        message: 'Success Please wait...'
                    });
                    if (self.paymentMethod == 1) {
                        self.$router.push({
                            name: 'success_cod'
                        });
                    } else {
                        self.$router.push({
                            name: 'success'
                        });
                    }

                }

            })
        },
        applyCoupon() {
            var self = this
            axios({
                method: 'POST',
                url: this.$root.URL_ROOT + 'api.php',
                data: {
                    type: 'couponapply',
                    coupon: self.couponCode,
                    uid: self.uid
                }
            }).then(function (response) {
                var data = response.data
                if (data.status == "success") {
                    self.myCouponMoney = data.data
                    localStorage.setItem('coupon', data.data)
                    localStorage.setItem('coupon_name', self.couponCode)
                    self.$toasted.global.success({
                        message: data.msg
                    });
                } else {
                    self.$toasted.global.error({
                        message: data.msg
                    });
                }
            })
        },
        switchLoc() {
            var iv = this
            var vali = this.$refs.form.validate();
            vali.then(val => {
                    if (val == true) {
                        iv.save_address()
                    }
                }

            )
        },
         switchLocBilling() {
            var iv = this
            var vali = this.$refs.formBilling.validate();
            vali.then(val => {
                    if (val == true) {
                        iv.save_billing_address()
                    }
                }

            )
        },
        add_select() {
            if (this.add_id > 0) {
                this.dashboard_box = 'step-3';
            } else {
                this.$toasted.global.error({
                    message: "Please select address "
                });
            }
        },
        includeStripe(URL, callback) {
            let documentTag = document,
                tag = 'script',
                object = documentTag.createElement(tag),
                scriptTag = documentTag.getElementsByTagName(tag)[0];
            object.src = 'https://' + URL;
            if (callback) {
                object.addEventListener('load', function (e) {
                    callback(null, e);
                }, false);
            }
            scriptTag.parentNode.insertBefore(object, scriptTag);
        },
        makePayment: function (ev) {
            if (this.add_id == 0) {
                this.$toasted.global.error({message: 'Please add address'});
            } else {
                var ev = this
                var getcouponMoney = parseFloat(this.myCouponMoney)
                if (ev.min > this.cartCount.total_amount) {
                    this.shipping = 0
                }
                // var amount = parseFloat((this.cartCount.total_amount + this.shipping) - getcouponMoney)
                // var amount = parseFloat(this.cartCount.total_amount + this.shipping - getcouponMoney)
                //var amount = parseFloat(this.cartCount.total_amount + this.shipping) - parseFloat((this.myCouponMoney / 100)*this.cartCount.total_amount)
                var amount = (this.FinalTotalAmount).toFixed(0)
                // console.log(this.shipping);
                // console.log(this.cartCount.total_amount);
                // console.log(this.shipping);
                // console.log(getcouponMoney)
                var rzp1 = new Razorpay({
                    key: 'rzp_live_KQoPhy0e9bbSiB',
                    amount: amount * 100,
                    currency: "INR",
                    "handler": function (response) {
                        ev.pay_id = response.razorpay_payment_id
                        localStorage.setItem('successData', response)
                        ev.updatePayment(response);
                    },
                    "ondismiss": function () {
                        window.location.reload();
                    },
                    prefill: {},
                    notes: {
                        // address: this.address, //this.$store.state.profile.address
                    },
                    theme: {
                        color: "#00FFFF"
                    },
                    //order_id: 1,
                    redirect: false
                });
                rzp1.open();
            }

        },
        updatePayment(payment_detail) {
            var self = this;
            var oid = localStorage.getItem('oid');
            var uid = localStorage.getItem('user');
            var coupon_name = localStorage.getItem('coupon_name')
            var couponMoney = localStorage.getItem('coupon')
            axios.post(this.$root.URL_ROOT + "api.php", {
                type: 'payment_success',
                uid: uid,
                oid: oid,
                payment_detail: payment_detail,
                coupon_name: coupon_name,
                coupon: couponMoney,
            }).then(function (response) {
                var data = response.data
                if (data.status == 'success') {
                    self.generateAwbNumber()
                }
            });
        },
        goToTop() {
            document.body.scrollTop = 0;
            document.documentElement.scrollTop = 0;
        },
        open_dashboard(vl) {
            this.dashboard_box = vl;
            window.scrollBy(100, 0);

        },
        open_dashboard2() {
            if (this.dashboard_box == 'step-1') {
                this.dashboard_box = 'step-3'
            } else {
                this.dashboard_box = 'step-1'
            }
        },
        userDetail() {
            var ev = this;
            axios({
                method: "POST",
                url: this.$root.URL_ROOT + "api.php",
                data: {
                    type: "userDetail",
                    uid: ev.uid
                },
            }).then(function (response) {
                var data = response.data;
                if (data.data) {
                    ev.userData = data.data
                } else {
                    ev.logout()
                    ev.$toasted.global.error({
                        message: 'Your Account is Deactivated'
                    })
                    setTimeout(function () {
                        ev.$router.push({
                            name: 'Home'
                        });
                    }, 1000);
                }
            });
        },
        orderGenerate() {
            var ev = this
            var paymentType = 'Online'
            if (this.paymentMethod == 1) {
                paymentType = 'COD'
            }
            var user_session = localStorage.getItem("user");
            var uid = "";
            if (user_session != null) {
                uid = user_session;
            } else {
                uid = null;
            }
            var gst = this.cartCount.total_gst;
            if (this.cartCount.total_amount >= this.min) {
                // var amount = parseFloat(this.cartCount.total_amount + this.shipping - this.myCouponMoney)
                // var amount = parseFloat(this.cartCount.total_amount + this.shipping) - parseFloat((this.myCouponMoney / 100)*this.cartCount.total_amount)
                var amount = (this.FinalTotalAmount).toFixed(0)
                var shipping = this.shipping;
            } else {
                var amount = parseFloat(this.cartCount.total_amount - this.myCouponMoney)
              var amount = parseFloat(this.cartCount.total_amount) - parseFloat((this.myCouponMoney / 100)*this.cartCount.total_amount)
                var shipping = 0;
            }
            // console.log(amount);
            axios({
                method: "POST",
                url: this.$root.URL_ROOT + "api.php",
                data: {
                    type: "order",
                    uid: uid,
                    address_id: ev.add_id,
                    billing_id: ev.billing_id,
                    total: amount,
                    payment_type: paymentType,
                    coupon: ev.myCouponMoney,
                    shipping_amount: shipping,
                    gst: gst,
                },
            }).then(function (response) {
                var data = response.data;
                if (data.status == "success") {
                    localStorage.setItem('oid', data.oid)
                    ev.isAdd = data.add_id
                    if (ev.paymentMethod == 2) {
                        ev.makePayment()
                    } else {
                        ev.updatePayment()
                    }
                    ev.open_dashboard("step-3");
                    ev.getAddress();
                }
            });
        },
        getAddress() {
            var ip_address = JSON.parse(localStorage.getItem("ip_address"));
            var user_session = JSON.parse(localStorage.getItem("user"));
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
                if(data.status=="success"){
                ev.addressDatas = data.data;
                if (ev.addressDatas.length == 0) {
                    ev.dashboard_box = "step-2"
                }
                    // ev.add_id = ev.addressDatas[0].add_id
                    // ev.billing_id = ev.addressDatas[0].add_id
                    ev.getSelectedAddress(ev.addressDatas[0].add_id);
            }
            });
        },
        save_address() {
            var ev = this;
            if (this.userAddress.add_title == "") {
                ev.$toasted.global.error({
                    message: "please enter FullName "
                });
            } else if (this.userAddress.mobile_no == "") {
                ev.$toasted.global.error({
                    message: "please enter mobile number "
                });
            } else if (this.userAddress.email == "") {
                ev.$toasted.global.error({
                    message: "please enter Email "
                });
            } else if (this.userAddress.add1 == "") {
                ev.$toasted.global.error({
                    message: "please enter address 1 "
                });
            } else if (this.userAddress.city == "") {
                ev.$toasted.global.error({
                    message: "please enter city "
                });
            } else if (this.userAddress.c_state == "") {
                ev.$toasted.global.error({
                    message: "please select state "
                });
            } else if (this.userAddress.add1 == "") {
                ev.$toasted.global.error({
                    message: "please Enter address line 1 "
                });
            } else if (this.userAddress.add2 == "") {
                ev.$toasted.global.error({
                    message: "please Enter address line 2"
                });
            } else if (this.userAddress.zipcode == "") {
                ev.$toasted.global.error({
                    message: "please Enter zipcode"
                });
            } else {
                var user_session = localStorage.getItem("user");
                var uid = "";
                if (user_session != null) {
                    uid = user_session;
                } else {
                    uid = null;
                }
                if(ev.userAddress.shippingBilling==true){
                     ev.userAddress.add_type = 'Both'
                }
                // console.log(ev.userAddress.shippingBilling);
                axios({
                    method: "POST",
                    url: this.$root.URL_ROOT + "api.php",
                    data: {
                        type: "add_address",
                        uid: uid,
                        add_title: ev.userAddress.add_title,
                        city: ev.userAddress.city,
                        email: ev.userAddress.email,
                        mobile: ev.userAddress.mobile_no,
                        add1: ev.userAddress.add1,
                        add2: ev.userAddress.add2,
                        pincode: ev.userAddress.zipcode,
                        state: ev.userAddress.c_state,
                        country: ev.userAddress.country,
                        add_type: ev.userAddress.add_type,
                    },
                }).then(function (response) {
                    var data = response.data;
                    // console.log('add_address', response);
                    if (data.status == "success") {
                        ev.$toasted.global.success({
                            message: data.msg
                        });
                        ev.getShippingAddress()
                        ev.getBillingAddress()
                        ev.add_id = data.add_id
                        ev.isAdd = data.add_id
                        ev.open_dashboard("step-3");
                        ev.getAddress();
                    }
                });
            }
        },
        save_billing_address() {
            var ev = this;
            if (this.userAddressBilling.add_title == "") {
                ev.$toasted.global.error({
                    message: "please enter FullName "
                });
            } else if (this.userAddressBilling.mobile_no == "") {
                ev.$toasted.global.error({
                    message: "please enter mobile number "
                });
            } else if (this.userAddressBilling.email == "") {
                ev.$toasted.global.error({
                    message: "please enter Email "
                });
            } else if (this.userAddressBilling.add1 == "") {
                ev.$toasted.global.error({
                    message: "please enter address 1 "
                });
            } else if (this.userAddressBilling.city == "") {
                ev.$toasted.global.error({
                    message: "please enter city "
                });
            } else if (this.userAddressBilling.c_state == "") {
                ev.$toasted.global.error({
                    message: "please select state "
                });
            } else if (this.userAddressBilling.add1 == "") {
                ev.$toasted.global.error({
                    message: "please Enter address line 1 "
                });
            } else if (this.userAddressBilling.add2 == "") {
                ev.$toasted.global.error({
                    message: "please Enter address line 2"
                });
            } else if (this.userAddressBilling.zipcode == "") {
                ev.$toasted.global.error({
                    message: "please Enter zipcode"
                });
            } else {
                var user_session = localStorage.getItem("user");
                var uid = "";
                if (user_session != null) {
                    uid = user_session;
                } else {
                    uid = null;
                }
               
                axios({
                    method: "POST",
                    url: this.$root.URL_ROOT + "api.php",
                    data: {
                        type: "add_address",
                        uid: uid,
                        add_title: ev.userAddressBilling.add_title,
                        city: ev.userAddressBilling.city,
                        email: ev.userAddressBilling.email,
                        mobile: ev.userAddressBilling.mobile_no,
                        add1: ev.userAddressBilling.add1,
                        add2: ev.userAddressBilling.add2,
                        pincode: ev.userAddressBilling.zipcode,
                        state: ev.userAddressBilling.c_state,
                        country: ev.userAddressBilling.country,
                        add_type: 'Billing',
                    },
                }).then(function (response) {
                    var data = response.data;
                    // console.log('add_address', response);
                    if (data.status == "success") {
                        ev.$toasted.global.success({
                            message: data.msg
                        });
                        ev.getShippingAddress()
                        ev.getBillingAddress()
                        ev.add_id = data.add_id
                        ev.isAdd = data.add_id
                        ev.open_dashboard("step-3");
                        ev.getAddress();
                    }
                });
            }
        },
        getState() {
            var ev = this;
            axios({
                method: "POST",
                url: this.$root.URL_ROOT + "api.php",
                data: {
                    type: "getState",
                },
            }).then(function (response) {
                var data = response.data;
                ev.stateData = data;
            });
        },
        checked_add(id) {
            this.aid = id;
            this.getSelectedAddress();
            this.address_box = true;
        }
    },
};
</script>

<style scoped>
.mr-10 {
    margin: 10px;
}

.payment-radio {
    width: 20px !important;
    height: 25px !important;
}

.visiblity-none {
    visibility: hidden;
}

.total-table {
    position: absolute;
    right: 20px;
    top: 3px;
    font-weight: bold;
    font-size: 22px;
    color: #ba2930;
}

#frmStripePayment {
    max-width: 500px;
    padding: 25px;
    border: #d0d0d0 1px solid;
    border-radius: 4px;
    margin: auto;
}

.hide {
    display: none;
}

.test-data {
    margin-top: 40px;
}

.tutorial-table {
    border: #d0d0d0 1px solid;
    font-size: 0.8em;
    color: #4e4e4e;
}

.tutorial-table th {
    background: #efefef;
    padding: 12px;
    border-bottom: #e0e0e0 1px solid;
    text-align: left;
}

.tutorial-table td {
    padding: 12px;
    border-bottom: #d0d0d0 1px solid;
}

#frmStripePayment .field-row {
    margin-bottom: 20px;
}

#frmStripePayment div label {
    margin: 5px 0px 0px 5px;
    color: #49615d;
    width: auto;
}

.demoInputBox {
    padding: 10px;
    border: #d0d0d0 1px solid;
    border-radius: 4px;
    background-color: #fff;
    width: 100%;
    margin-top: 5px;
    box-sizing: border-box;
}

.demoSelectBox {
    padding: 10px;
    border: #d0d0d0 1px solid;
    border-radius: 4px;
    background-color: #fff;
    margin-top: 5px;
}

select.demoSelectBox {
    height: 35px;
    margin-right: 10px;
}

.error {
    background-color: #ff6600;
    padding: 8px 10px;
    border-radius: 4px;
    font-size: 0.9em;
}

.success {
    background-color: #c3c791;
    padding: 8px 10px;
    border-radius: 4px;
    font-size: 0.9em;
}

.info {
    font-size: 0.8em;
    color: #ff6600;
    letter-spacing: 2px;
    padding-left: 5px;
}

.btnAction {
    background-color: #586ada;
    padding: 10px 40px;
    color: #fff;
    border: #5263cc 1px solid;
    border-radius: 4px;
    cursor: pointer;
}

.btnAction:focus {
    outline: none;
}

.column-right {
    margin-right: 6px;
}

.contact-row {
    display: inline-block;
}

.cvv-input {
    width: 60px;
}

#error-message {
    margin: 0px 0px 10px 0px;
    padding: 5px 25px;
    border-radius: 4px;
    line-height: 25px;
    font-size: 0.9em;
    color: #ca3e3e;
    border: #ca3e3e 1px solid;
    display: none;
    width: 300px;
}

#success-message {
    margin: 0px 0px 10px 0px;
    padding: 5px 25px;
    border-radius: 4px;
    line-height: 25px;
    font-size: 0.9em;
    color: #3da55d;
    border: #43b567 1px solid;
    width: 300px;
}

.display-none {
    display: none;
}

#response-container {
    padding: 40px 20px;
    width: 270px;
    text-align: center;
}

.ack-message {
    font-size: 1.5em;
    margin-bottom: 20px;
}

#response-container.success {
    border-top: #b0dad3 2px solid;
    background: #e9fdfa;
}

#response-container.error {
    border-top: #c3b4b4 2px solid;
    background: #f5e3e3;
}

.img-response {
    margin-bottom: 30px;
}

#loader {
    display: none;
}

.checkout-span {
    font-size: 14px;
    font-weight: normal;
}

#loader img {
    width: 45px;
    vertical-align: middle;
}

.addSection {
    margin-top: 50px;
}

.sec-head {
    background: #c1c1c1;
    padding: 10px;
}

.card {
    box-shadow: 0px 0px 5px #c1c1c1;
    padding: 20px 0 0 50px;
    color: #000;
    font-weight: bold;
    font-size: 16px;
}

.mt-20 {
    margin-top: 20px;
}

.radiobtn {
    position: absolute;
    top: 60px;
    left: 20px;
    visibility: hidden;
}

.margin {
    margin: 10px;
}

.margin-left {
    margin-left: 10px;
}

.checkout-card {
    padding: 20px !important;
}

.checkout-step {
    border: 1px solid #f1f1f1;
    padding: 20px 0 15px 30px;
    border-radius: 10px;
    margin-bottom: 15px;
}

section.checkout-step.-reachable.-complete h1 .step-edit {
    cursor: pointer;
    display: block;
    float: right;
    margin-right: 2.125rem;
    text-transform: capitalize;
    font-weight: 500;
}

@media only screen and (max-width: 600px) {
    .card[data-v-fd530f40] {
        box-shadow: 0px 0px 1px hsl(0, 0%, 76%);
        padding: 15px 10px 10px 35px;
        color: #000;
        width: 100%;
        font-weight: bold;
        font-size: 13px;
    }

    .sidemenu-hide {
        display: none;
    }
}
</style>
