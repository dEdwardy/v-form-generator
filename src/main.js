import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'normalize.css'
import 'element-ui/lib/theme-chalk/index.css'
import Element from 'element-ui'
Vue.config.productionTip = false

Vue.use(Element, { size: 'small' })
new Vue({
  router,
  store,
  render: (h) => h(App)
}).$mount('#app')
