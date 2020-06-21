import Vue from 'vue'
import Router from 'vue-router'

const Home = () => import('../views/home/Home')
const Course = () => import('../views/course/Course')
const Community = () => import('../views/community/Community')

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '',
      redirect: '/home'
    },
    {
      path: '/home',
      name: '首页',
      component: Home
    },
    {
      path: '/course',
      name: '课程',
      component: Course
    },
    {
      path: '/community',
      name: '社区',
      component: Community
    },
  ]
})
