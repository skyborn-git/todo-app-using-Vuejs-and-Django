import Vue from 'vue'
import Router from 'vue-router'
import TodoTable from '@/components/TodoTable'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'TODOS',
      component: TodoTable
    }
  ]
})
