import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

import store from './store/index'
import axios from 'axios'
import './assets/css/main.css'
import router from './router'


Vue.config.productionTip = false
Vue.prototype.$axios = axios

Vue.use(ElementUI)

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')
