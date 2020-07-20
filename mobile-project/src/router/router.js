import Vue from 'vue'
import VueRouter from 'vue-router'
import Todo from '../components/pages/Todo.vue'
import Done from '../components/pages/Done.vue'
import Tododetail from '../components/pages/Tododetail.vue'
import Donedetail from '../components/pages/Donedetail.vue'


Vue.use(VueRouter)
const router = new VueRouter({
  routes: [
    {
      path: '*',
      redirect: '/todo'
    },
    {
      path: '/todo',
      component: Todo,
      name: 'todo'
    },
    {
      path: '/done',
      component: Done,
      name: 'done'
    },
    {
      path: '/tododetail',
      component: Tododetail,
      name: 'tododetail'
    },
    {
      path: '/donetail',
      component: Donedetail,
      name: 'donetail'
    }
  ]
})

export default router