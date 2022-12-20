<template>
  <footer class="footer-v2">
    <div class="container">
      <div class="row">
        <div class="col-lg-4">
          <a href="#" class="copyright"> © 1996-2022 The Janatavani </a>
        </div>
        <div class="col-lg-4">
          <ul class="links">
            <li>
              <router-link :to="{name: 'privecypolicy'}" class="text-white">Privacy Policy</router-link>
            </li>
           
            <li class="last">
              <router-link :to="{name: 'contactus'}" class="text-white">Contact</router-link>
            </li>
          </ul>
        </div>
        <div class="col-lg-4"></div>
      </div>
    </div>
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
      uid: localStorage.getItem("user"),
    };
  },
  mounted() {
    this.footerData();
    this.site_setting();
    this.site_logos();
    // this.sendEmail()
    // console.log(this.cdata)
  },
  methods: {
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
        console.log(response);
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