import Vue from 'vue'
import App from './App.vue'
import router from './router'
import {checkGroup} from './checkbox/index.js'
import {checkItem} from './checkbox/index.js'

Vue.config.productionTip = false
Vue.use(checkGroup)
Vue.use(checkItem)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
