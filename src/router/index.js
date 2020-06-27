import Vue from 'vue'
import Router from 'vue-router'

const Home = () => import('../views/home/Home')
const Course = () => import('../views/course/Course')
const Community = () => import('../views/community/Community')
const Source = () => import('../views/source/Source')
const Ask = () => import('../views/ask/Ask')

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '',
      redirect: '/home'
    },
    {
      path: '/home',
      component: Home
    },
    {
      path: '/course',
      component: Course
    },
    {
      path: '/source',
      component: Source
    },
    {
      path: '/community',
      component: Community
    },
    {
      path: '/ask',
      component: Ask
    },
  ],
  mode:'history'
})
