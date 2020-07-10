import Vue from 'vue'
import App from './App.vue'
import router from './router/router'

// 导入样式表
import './assets/css/global.css'
import './assets/css/reset.css'
import 'element-ui/lib/theme-chalk/index.css'
// 导入插件
// 导入element.js
import './plugins/element.js'
// 导入VueCookies
import cookies from 'vue-cookie'

Vue.prototype.$cookies = cookies;
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
