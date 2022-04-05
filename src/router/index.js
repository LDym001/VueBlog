import {createRouter,createWebHashHistory} from 'vue-router'
import BlogArticle from '../components/BlogArticle.vue'
import BlogList from '../components/BlogList.vue'
import Blog from '../views/Blog.vue'
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import Profile from '../views/Profile.vue'
import Edit from '../views/Edit.vue'
import Create from '../views/Create.vue'
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
        component: BlogArticle
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
  },
  {
    path: '/profile',
    component: Profile,
    redirect: '/profile/content',
    children: [
      {
        path: '/profile/content',
        component: BlogList
      }
    ]
  },
  {
    path: '/edit',
    component: Edit
  },
  {
    path: '/create',
    component: Create
  }
]

export default createRouter({
  history: createWebHashHistory(),
  routes
})