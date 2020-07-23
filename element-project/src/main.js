import Vue from 'vue'
import App from './App.vue'
import router from './router/router'
import axios from 'axios';
import store from './vuex/store';
import Element from 'element-ui'
// 导入样式表
import './assets/css/global.css'
import './assets/css/reset.css'
import 'element-ui/lib/theme-chalk/index.css'
// 导入插件

// 导入VueCookies
import cookies from 'vue-cookie'
import session from 'vue-session'
Vue.use(Element)
Vue.use(cookies)
Vue.use(session)
Vue.prototype.$eventBus = new Vue()
Vue.prototype.$axios = axios;  //那么在其他vue组件中就可以this.$axios调用使用
axios.defaults.withCredentials = true;//允许跨域
axios.defaults.headers.post['Content-Type'] = 'application/json;charset=UTF-8';//设置请求头
Vue.config.productionTip = false

// 错误监控
// Vue.config.errorHandler = (err, vm, info) => {
//   alert(err + '&' + vm + '&' + info)
// }

// router.beforeEach((to, from, next) => {
//   const user = sessionStorage.getItem('user');
//   console.log(to);
//   if (to.meta.title) {
//     document.title = to.meta.title
//   }
//   if (to.name != "error" && to.name != "login") {
//     //设置关闭
//     if (to.query.preClose) {
//       delete to.query.preClose;
//       store.commit('removeRouteList', from.name);
//     }
//     if (from.query.close) {
//       delete from.query.close;
//       store.commit('removeRouteList', from.name);
//     }
//     //添加路由记录，去重
//     let repeated = false;
//     for (let i = 0; i < store.getters.routeList.length; i++) {
//       if (to.name == store.getters.routeList[i].code) {
//         const query = to.query;
//         store.commit('coverRouteQuery', { num: i, query: query });
//         repeated = true;
//       }
//     }
//     if (!repeated) {
//       const name = to.meta.title;
//       const code = to.name;
//       const path = to.path;
//       const query = to.query;
//       store.commit('pushRouteList', { code: code, name: name, path: path, query: query });
//     }

//     if (user && user != "{}") {
//       const json = JSON.parse(user);
//       //if(store.getters.path)
//       store.commit('setSysUserId', json.userId);
//       store.commit('setSysUserName', json.userName);
//       next();
//     } else {
//       let url = "/landed/perosns/current-person";
//       //next();
//       axios({
//         url: store.getters.authPath + url + "?timestamp=" + new Date().getTime(),
//         method: "GET",
//       }).then(function (res) {
//         if (res.data.errcode == 0) {
//           const result = res.data.data;
//           const user = { 'userId': result.id, 'userName': result.name };
//           sessionStorage.setItem('user', JSON.stringify(user));
//           store.commit('setSysUserId', user.userId);
//           store.commit('setSysUserName', user.userName);
//           next();
//         } else {
//           next({
//             path: '/error',
//             query: { error: "当前用户于系统不存在!" }  // 将跳转的路由path作为参数，登录成功后跳转到该路由
//           })
//         }
//       }).catch((error) => {
//         next({
//           path: '/error',
//           query: { error: "当前用户于系统不存在!" }
//         })
//       });
//     }
//   } else {
//     next();
//   }
// })

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
