<template>
  <div class="profile-container">
    <div class="menu">
      <ul>
        <li><router-link to="/create">新建笔记</router-link></li>
        <li v-for="item in tagList" :key="nanoid">
          <router-link :to="{
            path: '/profile/content',
            query: {
              tag: item
            }
          }">{{item}}笔记</router-link>
        </li>
      </ul>
    </div>
    <div class="article">
      <Suspense>
        <router-view :class="nanoid()" :key="nanoid()"></router-view>
      </Suspense>
    </div>
  </div>
</template>

<script>
import {useStore} from 'vuex'
import {useRouter} from 'vue-router'
import axios from 'axios'
import {nanoid} from 'nanoid'

export default {
  name: 'Profile',
  async setup() {
    const store = useStore()
    const getTag = () => axios.post('http://119.91.123.231:3000/gettag')
    let tagList
    if(store.state.notetypes) {
      tagList = store.state.notetypes
    } else {
      let tagdata = await getTag()
      tagList = tagdata.data
    }

    const router = useRouter()
    router.beforeEach((to,from,next) => {
      if(to.path == '/login') {
        console.log('-----路由匹配-----')
        router.push('/')
        return
      }
      next()
    })
    return {
      tagList,
      nanoid
    }
  }
}
</script>

<style scoped>
  .profile-container {
    width: 70%;
    margin: 0 auto;
    display: flex;
    justify-content: flex-start;
  }
  .menu {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    margin-top: 24px;
  }
  .menu li {
    width: 10%;
    min-width: 110px;
    font-size: 16px;
    font-weight: 300;
    height: 30px;
    padding: 0 8px;
    border-radius: 5px;
    margin-bottom: 10px;
  }
  .menu li a {
    line-height: 30px;
    background-color: #f9f9f9;
  }
  .article {
    flex: 1
  }
</style>