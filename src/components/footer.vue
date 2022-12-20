<template>
  <footer class="hpgrid-max-width ma-auto overflow-hidden">
    <footer
      class="dn flex-ns flex-column w-100 b bt"
      data-sc-v="5.1.1"
      data-sc-c="desktopfooter"
    >
      <div class="flex" data-sc-v="5.1.1" data-sc-c="desktopfooter">
        <div
          class="flex-1 border-box"
          data-qa="footer-section"
          data-sc-v="5.1.1"
          data-sc-c="footersection"
        >
          <div
            data-qa="footer-section-title"
            class="
              font--subhead
              lh-default
              font-xxxxs font-xxxs-l
              gray-darkest
              font-bold
              mt-md
            "
            data-sc-v="5.1.1"
            data-sc-c="footersection"
          >
          </div>
          <ul
            class="list-none pa-0 ml-0 mt-0 mb-md mr-0"
            data-qa="footer-section-list"
            data-sc-v="5.1.1"
            data-sc-c="footersection"
          >
            <li
              data-qa="footer-section-link"
              data-sc-v="5.1.1"
              data-sc-c="desktopfooterlink"
            >
              <img src="../assets/assembler/images/logo.webp" width="200" />
            </li>
            <!-- <li
              data-qa="footer-section-link"
              data-sc-v="5.1.1"
              data-sc-c="desktopfooterlink"
            ><a class="font-times hover-blue
                  font--subhead
                  lh-default
                  font-xxxxs font-xxxs-l
                  gray-darkest" href="#" style="margin-top:20px;">
             Lorem Ipsum is simply dummy text of the printing and typesetting industry.
              Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</a>
            </li> -->
          </ul>
        </div>
        <div
          class="flex-1 border-box"
          data-qa="footer-section"
          data-sc-v="5.1.1"
          data-sc-c="footersection"
        >
         
        </div>
        <div
          class="flex-1 border-box"
          data-qa="footer-section"
          data-sc-v="5.1.1"
          data-sc-c="footersection"
        >
          <div
            data-qa="footer-section-title"
            class="
              font--subhead
              lh-default
              font-xxxxs font-xxxs-l
              gray-darkest
              font-bold
              mt-md
            "
            data-sc-v="5.1.1"
            data-sc-c="footersection"
          >
            Contact 
          </div>
 <ul
            class="list-none pa-0 ml-0 mt-0 mb-md mr-0"
            data-qa="footer-section-list"
            data-sc-v="5.1.1"
            data-sc-c="footersection"
          >
            
           <!-- <li>
                <i class="fas fa-long-arrow-alt-right"></i
                ><router-link :to="{name : 'aboutus'}" class=" hover-blue
                  font--subhead
                  lh-default
                  font-xxxxs font-xxxs-l
                  gray-darkest">ABOUT US</router-link>
              </li> -->
              <li>
                <i class="fas fa-long-arrow-alt-right"></i
                ><router-link :to="{name : 'TermsConditions'}" class="font-times hover-blue
                  font--subhead
                  lh-default
                  font-xxxxs font-xxxs-l
                  gray-darkest">TERMS AND CONDITIONS</router-link>
              </li>
               <li>
                <i class="fas fa-long-arrow-alt-right"></i
                ><router-link :to="{name : 'privecypolicy'}" class="font-times hover-blue
                  font--subhead
                  lh-default
                  font-xxxxs font-xxxs-l
                  gray-darkest">PRIVACY POLICY</router-link>
              </li>
              <li>
                <i class="fas fa-long-arrow-alt-right"></i
                ><router-link :to="{name : 'contactus'}" class="font-times hover-blue
                  font--subhead
                  lh-default
                  font-xxxxs font-xxxs-l
                  gray-darkest">CONTACT US</router-link>
              </li>


          </ul>
         


        </div>
        <!-- <div
          class="flex-1 border-box"
          data-qa="footer-section"
          data-sc-v="5.1.1"
          data-sc-c="footersection"
        >
          <div
            data-qa="footer-section-title"
            class="
              font--subhead
              lh-default
              font-xxxxs font-xxxs-l
              gray-darkest
              font-bold
              mt-md font-times
            "
            data-sc-v="5.1.1"
            data-sc-c="footersection"
          >
            News Category
          </div>
         <ul
            class="list-none pa-0 ml-0 mt-0 mb-md mr-0"
            data-qa="footer-section-list"
            data-sc-v="5.1.1"
            data-sc-c="footersection"
          >
            <li v-for="category in allCategory" :key="category.id"
              data-qa="footer-section-link"
              data-sc-v="5.1.1"
              data-sc-c="desktopfooterlink"
            >
             
               <router-link :to="{
                        name: 'Category',
                        params: { name: category.heading, id: category.id },
                      }" class=" hover-blue
                  font--subhead
                  lh-default
                  font-xxxxs font-xxxs-l
                  gray-darkest"> {{category.heading}} </router-link>
            </li>
           


          </ul>
        </div> -->
      </div>
      <div
        class="
          w-100
          b
          bt
          mt-sm
          pt-sm
          center
          font--subhead
          lh-default
          font-xxxxs font-xxxs-l
          gray-darkest
        "
        data-qa="desktop-copyright"
        data-sc-v="5.1.1"
        data-sc-c="desktopfooter"
      >
        <a
          data-href="#index.html"
          class="hover-blue gray-darkest"
          data-qa="desktop-footer-site-link"
          data-sc-v="5.1.1"
          data-sc-c="footerlink"
          >janathavani.com</a
        >
        © 1996-2022 Janathavani
      </div>
    </footer>
    <!-- <div class="dn-ns" data-sc-v="5.1.1" data-sc-c="footer">
      <footer class="b bt pt-sm" data-sc-v="5.1.1" data-sc-c="mobilefooter">
        <div
          class="w-100 mr-gutter ml-gutter"
          data-sc-v="5.1.1"
          data-sc-c="mobilefooter"
        >
          <ul
            class="list-none pa-0 ml-0 mt-md mr-0 mb-md"
            data-sc-v="5.1.1"
            data-sc-c="mobilefooter"
          >
            <li data-sc-v="5.1.1" data-sc-c="mobilefooter">
             
            </li>
            <li
              data-qa="mobile-copyright"
              class="mb-sm font--subhead lh-default font-xxxs gray-darkest"
              data-sc-v="5.1.1"
              data-sc-c="mobilefooter"
            >
              © 1996-2022 Janathavani
            </li>
            <li data-sc-v="5.1.1" data-sc-c="mobilefooter">
              <a
                data-href="#about-the-post/index.html"
                class="hover-blue font--subhead font-xxxs gray-darkest"
                data-sc-v="5.1.1"
                data-sc-c="footerlink"
                >About The Post</a
              >
            </li>
            <li data-sc-v="5.1.1" data-sc-c="mobilefooter">
              <a
                data-href="#https://helpcenter.washingtonpost.com/hc/en-us/articles/360002940991-Leadership-of-The-Washington-Post-newsroom"
                class="hover-blue font--subhead font-xxxs gray-darkest"
                data-sc-v="5.1.1"
                data-sc-c="footerlink"
                >Contact the Newsroom</a
              >
            </li>
            <li data-sc-v="5.1.1" data-sc-c="mobilefooter">
              <a
                data-href="#https://helpcenter.washingtonpost.com/hc/en-us"
                class="hover-blue font--subhead font-xxxs gray-darkest"
                data-sc-v="5.1.1"
                data-sc-c="footerlink"
                >Contact Customer Care</a
              >
            </li>
            <li data-sc-v="5.1.1" data-sc-c="mobilefooter">
              <a
                data-href="#https://helpcenter.washingtonpost.com/hc/en-us/articles/115003675928-Submit-a-correction"
                class="hover-blue font--subhead font-xxxs gray-darkest"
                data-sc-v="5.1.1"
                data-sc-c="footerlink"
                >Request a Correction</a
              >
            </li>
            <li data-sc-v="5.1.1" data-sc-c="mobilefooter">
              <a
                data-href="#anonymous-news-tips/index.html"
                class="hover-blue font--subhead font-xxxs gray-darkest"
                data-sc-v="5.1.1"
                data-sc-c="footerlink"
                >Send a News Tip</a
              >
            </li>
            <li data-sc-v="5.1.1" data-sc-c="mobilefooter">
              <a
                data-href="#discussions/2021/05/13/vulnerability-disclosure-policy/index.html"
                class="hover-blue font--subhead font-xxxs gray-darkest"
                data-sc-v="5.1.1"
                data-sc-c="footerlink"
                >Report a Vulnerability</a
              >
            </li>
            <li data-sc-v="5.1.1" data-sc-c="mobilefooter">
              <a
                data-href="#https://wapo.onelink.me/e76N/8081805d"
                class="hover-blue font--subhead font-xxxs gray-darkest"
                data-sc-v="5.1.1"
                data-sc-c="footerlink"
                >Download the Washington Post App</a
              >
            </li>
            <li data-sc-v="5.1.1" data-sc-c="mobilefooter">
              <a
                data-href="#policies-and-standards/index.html"
                class="hover-blue font--subhead font-xxxs gray-darkest"
                data-sc-v="5.1.1"
                data-sc-c="footerlink"
                >Policies &amp; Standards</a
              >
            </li>
            <li data-sc-v="5.1.1" data-sc-c="mobilefooter">
              <a
                data-href="#terms-of-service/2011/11/18/gIQAldiYiN_story.html"
                class="hover-blue font--subhead font-xxxs gray-darkest"
                data-sc-v="5.1.1"
                data-sc-c="footerlink"
                >Terms of Service</a
              >
            </li>
            <li data-sc-v="5.1.1" data-sc-c="mobilefooter">
              <a
                data-href="#privacy-policy/index.html"
                class="hover-blue font--subhead font-xxxs gray-darkest"
                data-sc-v="5.1.1"
                data-sc-c="footerlink"
                >Privacy Policy</a
              >
            </li>
            <li data-sc-v="5.1.1" data-sc-c="mobilefooter">
              <a
                data-href="#cookie-policy/index.html"
                class="hover-blue font--subhead font-xxxs gray-darkest"
                data-sc-v="5.1.1"
                data-sc-c="footerlink"
                >Cookie Settings</a
              >
            </li>
            <li data-sc-v="5.1.1" data-sc-c="mobilefooter">
              <a
                data-href="#terms-of-sale-for-print-products/2014/05/08/d60c4bc8-d6c0-11e3-aae8-c2d44bd79778_story.html"
                class="hover-blue font--subhead font-xxxs gray-darkest"
                data-sc-v="5.1.1"
                data-sc-c="footerlink"
                >Print Products Terms of Sale</a
              >
            </li>
            <li data-sc-v="5.1.1" data-sc-c="mobilefooter">
              <a
                data-href="#terms-of-sale-for-digital-products/2014/05/06/b7763844-cbf9-11e3-93eb-6c0037dde2ad_story.html"
                class="hover-blue font--subhead font-xxxs gray-darkest"
                data-sc-v="5.1.1"
                data-sc-c="footerlink"
                >Digital Products Terms of Sale</a
              >
            </li>
            <li data-sc-v="5.1.1" data-sc-c="mobilefooter">
              <a
                data-href="#news/ask-the-post/discussion-and-submission-guidelines/index.html"
                class="hover-blue font--subhead font-xxxs gray-darkest"
                data-sc-v="5.1.1"
                data-sc-c="footerlink"
                >Submissions &amp; Discussion Policy</a
              >
            </li>
            <li data-sc-v="5.1.1" data-sc-c="mobilefooter">
              <a
                data-href="#discussions/2021/01/01/rss-terms-service/index.html"
                class="hover-blue font--subhead font-xxxs gray-darkest"
                data-sc-v="5.1.1"
                data-sc-c="footerlink"
                >RSS Terms of Service</a
              >
            </li>
            <li data-sc-v="5.1.1" data-sc-c="mobilefooter">
              <a
                data-href="#how-can-i-opt-out-of-online-advertising-cookies/2011/11/18/gIQABECbiN_story.html"
                class="hover-blue font--subhead font-xxxs gray-darkest"
                data-sc-v="5.1.1"
                data-sc-c="footerlink"
                >Ad Choices</a
              >
            </li>
          </ul>
        </div>
      </footer>
    </div> -->
  </footer>
</template>
<script>
import axios from "axios";
export default {
  components: {},
  data() {
    return {
      catedatas: [],
      footData: [],
      email: "",
      LinksDetails: [],
      site_logo: [],
      allCategory: [],
      uid: localStorage.getItem("user"),
    };
  },
  mounted() {
    this.footerData();
    this.site_setting();
    this.site_logos();
    this.categories()
    // console.log(this.cdata)
  },
  methods: {
      categories() {
            var ev = this;
            axios
                .get(this.$root.URL_ROOT + "api.php?type=getCategory")
                .then(function (response) {
                    var data = response.data;
                    if (data.status == "success") {
                        ev.allCategory = data.category;
                    }
                });
        },
    footerData() {
      const axios = require("axios");
      var self = this;
      axios
        .get(this.$root.URL_ROOT + "api.php?type=footer_menu")
        .then(function (response) {
          self.footData = response.data.data;
          // console.log(response.data.data)
        });
    },
    sendEmail() {
      var ev = this;
      axios({
        method: "POST",
        url: this.$root.URL_ROOT + "api.php",
        data: { type: "subscribe", email: this.email },
      }).then(function (response) {
        // console.log(response);
        if (response.data.status == "success") {
          ev.email = "";
          alert(response.data.msg);
        } else {
          alert(response.data.msg);
        }
      });
    },
  },
};
</script>
<style scoped>
.float {
  position: fixed;
  width: 60px;
  height: 60px;
  bottom: 40px;
  right: 40px;
  background-color: #25d366;
  color: #fff;
  border-radius: 50px;
  text-align: center;
  font-size: 30px;
  box-shadow: 2px 2px 3px #999;
  z-index: 100;
}

.my-float {
  margin-top: 16px;
}
</style>