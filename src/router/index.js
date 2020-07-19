import Vue from 'vue'
import Router from 'vue-router'

const Home = () => import('../views/home/Home')
const Course = () => import('../views/course/Course')
const Community = () => import('../views/community/Community')
const Source = () => import('../views/source/Source')
const Ask = () => import('../views/ask/Ask')
const Buy = () => import('../views/buy/Buy')
const Login = () => import('../views/login/Login')
const Exam = () => import('../views/exam/Exam')

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
    {
      path: '/buy',
      component: Buy
    },
    {
      path: '/login',
      component: Login
    },
    {
      path: '/exam',
      component: Exam
    }
  ],
  mode:'history'
})
