// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import nav from './components/common/nav'
import footer from './components/common/footer'
import router from './router'
import axios from 'axios'
import $ from 'jquery'
import vcolorpicker from 'vcolorpicker'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.min.js'

Vue.config.productionTip = false
Vue.prototype.axios = axios

var dev = "http://localhost:8081"
var prod = "http://47.107.121.88:8081"

axios.interceptors.request.use((config) => {
  //请求之前重新拼装url
  if (config.url.indexOf("http") < 0) {
    config.url = prod + config.url;
  }
  return config;
});

Vue.component('my-nav', nav);
Vue.component('my-footer', footer);
Vue.use(vcolorpicker)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})

