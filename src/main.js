// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
// import 'normalize.css/normalize.css'
import $axios from './axios'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import qs from 'qs'
import store from './store'
// require styles
import 'swiper/dist/css/swiper.css'
Vue.use(VueAwesomeSwiper, qs/* { default global options } */)
Vue.prototype.$axios= $axios
Vue.config.productionTip = false
new Vue({
  el: '#app',
  router,
  store,
  VueAwesomeSwiper,
  components: { App },
  template: '<App/>'
})
