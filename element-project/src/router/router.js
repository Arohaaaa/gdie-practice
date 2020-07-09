import Vue from 'vue'
import VueRouter from 'vue-router'
import Index from '../pages/index.vue'
import Todo from '../pages/Todo.vue'
import Done from '../pages/Done.vue'
import TodoDetail from '../pages/TodoDetail.vue'
import DoneDetail from '../pages/DoneDetail.vue'

Vue.use(VueRouter)

const routes = [
  { path: '/', redirect: '/index' },
  {
    path: '/index',
    component: Index,
    redirect: '/todo',
    children: [
      { path: '/todo', component: Todo },
      { path: '/done', component: Done },
      { path: '/tododetail', component: TodoDetail },
      { path: '/donedetail', component: DoneDetail }]
  },

]

const router = new VueRouter({
  routes
})
export default router