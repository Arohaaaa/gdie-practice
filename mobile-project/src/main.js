import Vue from 'vue'
import App from './App.vue'
import router from './router/router.js'

import './plugins/vant.js'
import './util/resizeFont'
import './assets/css/public.css'
import './assets/css/reset.css'
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
