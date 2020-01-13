/*
 * @Author: 作者：LIN
 * @Date: 2020-01-08 09:02:06
 * @LastEditors  : 最后编写者
 * @LastEditTime : 2020-01-12 14:00:40
 * @Description: 文件描述
 */
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import VueAwesomeSwiper from 'vue-awesome-swiper'

import './assets/scss/style.scss'
import 'swiper/dist/css/swiper.css'
import './assets/iconfont/iconfont.css'

import Card from './components/Card'
Vue.component('m-card', Card)

import ListCard from './components/ListCard'
Vue.component('m-list-card', ListCard)

Vue.config.productionTip = false

// 导入 axios
import axios from 'axios'
Vue.prototype.$http = axios.create({
  baseURL: process.env.VUE_APP_API_URL || '/web/api'
  // baseURL: 'http://localhost:3000/web/api'
})

Vue.use(VueAwesomeSwiper, /* { default global options } */)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
