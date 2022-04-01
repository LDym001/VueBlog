import {createRouter,createWebHashHistory} from 'vue-router'
import BlogAticle from '../components/BlogAticle.vue'
import Blog from '../views/Blog.vue'
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
const routes = [
  {
    path: '/',
    redirect: {
      path: '/home/content'
    }
  },
  {
    path: '/home',
    component: Home,
    children: [
      {
        path: '/home/content',
        component: BlogAticle
      }
    ]
  },
  {
    path: '/login',
    component: Login
  },
  {
    path: '/blog',
    component: Blog
  }
]

export default createRouter({
  history: createWebHashHistory(),
  routes
})