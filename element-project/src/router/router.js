import Vue from 'vue'
import VueRouter from 'vue-router'
// const Index = () => import(/* webpackChunkName: 'Index' */ '../pages/index.vue')
// const Todo = () => import(/* webpackChunkName: 'group-todo' */ '../pages/Todo.vue')
// const TodoDetail = () => import(/* webpackChunkName: 'group-todo' */ '../pages/TodoDetail.vue')
// const TodoTable = () => import(/* webpackChunkName: 'group-todo' */ '../pages/TodoTable.vue')
// const Done = () => import(/* webpackChunkName: 'group-done' */ '../pages/Done.vue')
// const DoneDetail = () => import(/* webpackChunkName: 'group-done' */ '../pages/DoneDetail.vue')
// const DoneTable = () => import(/* webpackChunkName: 'group-done' */ '../pages/DoneTable.vue')
// const Task = () => import(/* webpackChunkName: 'group-task' */ '../pages/Task.vue')
// const test1 = () => import(/* webpackChunkName: 'group-test' */ '../pages/test/test1.vue')
// const test2 = () => import(/* webpackChunkName: 'group-test' */ '../pages/test/test2.vue')
// const test3 = () => import(/* webpackChunkName: 'group-test' */ '../pages/test/test3.vue')
// const test4 = () => import(/* webpackChunkName: 'group-test' */ '../pages/test/test4.vue')
// const test5 = () => import(/* webpackChunkName: 'group-test' */ '../pages/test/test5.vue')
// const test6 = () => import(/* webpackChunkName: 'group-test' */ '../pages/test/test6.vue')
import Index from '../pages/index.vue'
import Todo from '../pages/Todo.vue'
import Done from '../pages/Done.vue'
import TodoDetail from '../pages/TodoDetail.vue'
import DoneDetail from '../pages/DoneDetail.vue'
import TodoTable from '../pages/TodoTable.vue'
import DoneTable from '../pages/DoneTable.vue'
import Task from '../pages/Task.vue'
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
        path: '/task',
        component: Task
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