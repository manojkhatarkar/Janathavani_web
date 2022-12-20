<template>
<body onmousedown = 'return false' onselectstart = 'return false'>

    <!-- Start header -->
    <Header />
    <!-- end of header -->
    <div class="contact-body">
        <div class="containers">
            <div class="content">
                <div class="left-side">
                    <div class="address details">
                        <i class="fa fa-map-marker"></i>
                        <div class="topic">Address</div>
                        <div class="text-one"> {{LinksDetails.address}} </div>
                        <div class="text-two">Birendranagar 06</div>
                    </div>
                    <div class="phone details">
                        <i class="fa fa-phone"></i>
                        <div class="topic">Phone</div>
                        <div class="text-one"> {{LinksDetails.mobile}} </div>
                    </div>
                    <div class="email details">
                        <i class="fa fa-envelope"></i>
                        <div class="topic">Email</div>
                        <div class="text-one">{{LinksDetails.email}} </div>
                    </div>
                </div>
                <div class="right-side">
                    <div class="topic-text">Send us a message</div>
                    <p>If you have any work from us or any types of quries related to my News, you can send me message from here. It's my pleasure to help you.</p>
                    <form action="#">
                       <div class="row">
                        <div class="col-sm-6 col-md-6 col-lg-6 input-box">
                            <input type="text" v-model="name" placeholder="Enter your name">
                        </div>
                        <div class="col-sm-6 col-md-6 col-lg-6  input-box">
                            <input type="text" v-model="email" placeholder="Enter your email">
                        </div>
                         <div class="col-sm-6 col-md-6 col-lg-6  input-box">
                            <input type="text" v-model="mobile" placeholder="Enter your mobile number">
                        </div>
                         <div class="col-sm-6 col-md-6 col-lg-6  input-box">
                            <input type="text"  v-model="subject" placeholder="Enter subject">
                        </div>
                        </div>

                        <div class="input-box message-box">
 <div class=" input-box">
                            <textarea rows="3"  v-model="msg" placeholder="Enter your message" style="height:120px;"></textarea>
                        </div>
                        </div>
                        <div class="button">
                            <input type="button" @click="contact_submit" value="Send Now">
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
    <!-- start of tp-site-footer-section -->
    <Footer />
    <!-- end of tp-site-footer-section -->

</body>
</template>

<script>
import axios from "axios";
import $ from "jquery";
import Header from "@/components/Header";
import Footer from "@/components/footer";
import VueRecaptcha from 'vue-recaptcha';
import {
    ValidationProvider,
    ValidationObserver
} from "vee-validate";

export default {
    components: {
        Header,
        Footer,
        VueRecaptcha,
        ValidationProvider,
        ValidationObserver
    },
    data() {
        return {
            name: '',
            mobile: '',
            email: '',
            subject: '',
            msg: '',
            reCap: false,
            LinksDetails: []
        };
    },
    mounted() {
        this.goToTop()

        this.site_setting()
        this.uid = localStorage.getItem("user");
    },

    methods: {
        markRecaptchaAsVerified(response) {
            this.pleaseTickRecaptchaMessage = 'This field is required';
            this.recaptchaVerified = true;
        },
        switchLoc() {
            var vali = this.$refs.form.validate();
            if (!this.recaptchaVerified) {
                this.pleaseTickRecaptchaMessage = 'Please tick recaptcha.';
                this.reCap = true

            } else {
                this.reCap = false
                vali.then(val => {
                        if (val == true) {
                            this.contact_submit()
                        }
                    }

                )
            }

        },

        quickbox() {
            if ($(window).width() > 767) {
                $(".quickview-button").magnificPopup({
                    type: "iframe",
                    delegate: "a",
                    preloader: true,
                    tLoading: "Loading image #%curr%...",
                });
            }
        },
        contact_submit() {
            var vi = this;
            if (this.name == "") {
                this.$toasted.global.error({
                    message: "Please enter name"
                });
            } else if (this.email == "") {
                this.$toasted.global.error({
                    message: "Please enter email"
                });
            } else if (this.mobile == "") {
                this.$toasted.global.error({
                    message: "Please enter mobile number"
                });
            } else if (this.subject == "") {
                this.$toasted.global.error({
                    message: "Please enter subject"
                });
            } else if (this.msg == "") {
                this.$toasted.global.error({
                    message: "Please enter Message"
                });
            } else {
                axios({
                    method: "POST",
                    url: this.$root.URL_ROOT + "api.php",
                    data: {
                        type: "contact",
                        name: this.name,
                        email: this.email,
                        mobile: this.mobile,
                        subject: this.subject,
                        msg: this.msg,
                    },
                }).then(function (response) {
                    var data = response.data;
                    console.log(response.data)
                    if (data.status == "success") {
                        vi.$toasted.global.success({
                            message: data.msg
                        });

                        vi.name = "";
                        vi.email = "";
                        vi.subject = "";
                        vi.mobile = "";
                        vi.msg = "";
                        $('.error-msg').addClass('hide');
                        setTimeout(function () {
                            $('.error-msg').removeClass('hide');
                        }, 10000);

                    } else {
                        vi.$toasted.global.error({
                            message: data.msg
                        });
                    }
                });
            }
        },
    },
};
</script>

<style scoped>
/* Google Font CDN Link */
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@200;300;400;500;600;700&display=swap');

.contact-body {
    min-height: 100vh;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
}

.containers {
    width: 85%;
    background: #fff;
    border-radius: 6px;
    padding: 20px 60px 30px 40px;
    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);
}

.containers .content {
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.containers .content .left-side {
    width: 25%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 15px;
    position: relative;
}

.content .left-side::before {
    content: '';
    position: absolute;
    height: 70%;
    width: 2px;
    right: -15px;
    top: 50%;
    transform: translateY(-50%);
    background: #afafb6;
}

.content .left-side .details {
    margin: 14px;
    text-align: center;
}

.content .left-side .details i {
    font-size: 30px;
    color: #1955a5;
    margin-bottom: 10px;
}

.content .left-side .details .topic {
    font-size: 18px;
    font-weight: 500;
}

.content .left-side .details .text-one,
.content .left-side .details .text-two {
    font-size: 14px;
    color: #afafb6;
}

.containers .content .right-side {
    width: 75%;
    margin-left: 75px;
}

.content .right-side .topic-text {
    font-size: 23px;
    font-weight: 600;
    color: #1955a5;
}

.right-side .input-box {
    height: 50px;
    /* width: 100%; */
    margin: 12px 0;
}

.right-side .input-box input,
.right-side .input-box textarea {
    height: 100%;
    width: 100%;
    border: none;
    outline: none;
    font-size: 16px;
    background: #F0F1F8;
    border-radius: 6px;
    padding: 0 15px;
    resize: none;
}

.right-side .message-box {
    min-height: 110px;
}

.right-side .input-box textarea {
    padding-top: 6px;
}

.right-side .button {
    display: inline-block;
    margin-top: 12px;
}

.right-side .button input[type="button"] {
    color: #fff;
    font-size: 18px;
    outline: none;
    border: none;
    padding: 8px 16px;
    border-radius: 6px;
    background: #1955a5;
    cursor: pointer;
    transition: all 0.3s ease;
}

.button input[type="button"]:hover {
    background: #5029bc;
}

@media (max-width: 950px) {
    .container {
        width: 90%;
        padding: 30px 40px 40px 35px;
    }

    .containers .content .right-side {
        width: 75%;
        margin-left: 55px;
    }
}

@media (max-width: 820px) {
    .container {
        margin: 40px 0;
        height: 100%;
    }

    .containers .content {
        flex-direction: column-reverse;
    }

    .containers .content .left-side {
        width: 100%;
        flex-direction: row;
        margin-top: 40px;
        justify-content: center;
        flex-wrap: wrap;
    }

    .containers .content .left-side::before {
        display: none;
    }

    .containers .content .right-side {
        width: 100%;
        margin-left: 0;
    }
}
</style>
