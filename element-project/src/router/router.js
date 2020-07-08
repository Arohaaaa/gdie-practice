import Vue from 'vue'
import VueRouter from 'vue-router'
import Index from '../pages/index.vue'
import Todo from '../pages/Todo.vue'
import Done from '../pages/Done.vue'
import Test from '../pages/Test.vue'

Vue.use(VueRouter)

const routes = [
  { path: '/', redirect: '/index' },
  {
    path: '/index',
    component: Index,
    children: [
      { path: '/todo', component: Todo },
      { path: '/done', component: Done },
      { path: '/test', component: Test }]
  },

]

const router = new VueRouter({
  routes
})
export default router