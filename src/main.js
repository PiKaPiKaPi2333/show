// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import axois from 'axios'
import ElementUI from 'element-ui'
import "element-ui/lib/theme-chalk/index.css"
import Vue from 'vue'
import VueAxios from 'vue-axios'
import App from './App'
import router from './router'
import store from './store'
Vue.config.productionTip = false
Vue.use(axois,VueAxios)
Vue.use(ElementUI)
axois.defaults.baseURL="/api"
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
}).$mount('#app')
