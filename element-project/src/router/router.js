import Vue from 'vue'
import VueRouter from 'vue-router'
import Index from '../pages/index.vue'
import Todo from '../pages/Todo.vue'
import Done from '../pages/Done.vue'
import TodoDetail from '../pages/TodoDetail.vue'
import DoneDetail from '../pages/DoneDetail.vue'
import TodoTable from '../pages/TodoTable.vue'
import DoneTable from '../pages/DoneTable.vue'

Vue.use(VueRouter)

const routes = [
  { path: '/', redirect: '/index' },
  {
    path: '/index',
    component: Index,
    redirect: '/todo',
    children: [
      {
        path: '/todo',
        component: Todo,
        redirect: '/todo/todotable',
        children:
          [{ path: '/todo/tododetail', component: TodoDetail },
          { path: '/todo/todotable', component: TodoTable }]
      },
      {
        path: '/done',
        component: Done,
        redirect: '/done/donetable',
        children:
          [{ path: '/done/donedetail', component: DoneDetail },
          { path: '/done/donetable', component: DoneTable }]
      },
    ]
  },

]

const router = new VueRouter({
  routes
})
export default router