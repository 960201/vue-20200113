/*
 * @Author: 作者：LIN
 * @Date: 2020-01-09 14:27:07
 * @LastEditors  : 最后编写者
 * @LastEditTime : 2020-01-10 01:57:27
 * @Description: 文件描述
 */
import Vue from 'vue'
import App from './App.vue'
import './plugins/element.js'
import router from './router'
import '../src/assets/css/common.css'

// import './style.css'

Vue.config.productionTip = false

import http from './http'
Vue.prototype.$http = http

Vue.mixin({
  computed: {
    uploadUrl(){
      return this.$http.defaults.baseURL + '/upload'
    }
  },
  methods: {
    getAuthHeaders(){
      return {
        Authorization: `Bearer ${localStorage.token || ''}`
      }
    }
  }
})

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
