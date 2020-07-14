import Vue from 'vue'
import VueRouter from 'vue-router'
import Index from '../pages/index.vue'
import Todo from '../pages/Todo.vue'
import Done from '../pages/Done.vue'
import TodoDetail from '../pages/TodoDetail.vue'
import DoneDetail from '../pages/DoneDetail.vue'
import TodoTable from '../pages/TodoTable.vue'
import DoneTable from '../pages/DoneTable.vue'
import test1 from '../pages/test/test1.vue'
import test2 from '../pages/test/test2.vue'
import test3 from '../pages/test/test3.vue'
import test4 from '../pages/test/test4.vue'
import test5 from '../pages/test/test5.vue'
import test6 from '../pages/test/test6.vue'

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
      {
        path: '/test1',
        component: test1,
      },
      {
        path: '/test2',
        component: test2,
      },
      {
        path: '/test3',
        component: test3,
      },
      {
        path: '/test4',
        component: test4,
      },
      {
        path: '/test5',
        component: test5,
      },
      {
        path: '/test6',
        component: test6,
      }
    ]
  },

]

const router = new VueRouter({
  routes
})
export default router