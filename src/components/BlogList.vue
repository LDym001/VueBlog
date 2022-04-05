<template>
  <div>
    <ul>
      <li v-for="item in blogList" :key="nanoid()">
        <router-link :to="{
          path: '/edit',
          query: {
            filePath: item.path
          }
        }">
          {{item.title}}
        </router-link>
        <div class="btn-box">
          <button>修改</button>
          <button>删除</button>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import {useRoute,useRouter} from 'vue-router'
import {nanoid} from 'nanoid'
import axios from 'axios'
export default {
  name: 'BlogList',
  async setup() {
    const rt = useRoute()
   
    let blogList
    const getData = () => axios.post('http://119.91.123.231:3000/getdesc',{'data':rt.query})
    let blogData = await getData()
    blogList = blogData.data
    
    return {
      rt,
      blogList,
      nanoid
    }
  }
}
</script>

<style scoped>
  ul {
    min-width: 550px;
  }
  li {
    display: flex;
    justify-content: space-between;
    background-color: #fff;
    margin-top: 1em;
    margin-bottom: 1em;
    list-style-type: disc;
    color: #d3d3d4;
    border-bottom: 1px dashed #d3d3d4;
    padding: 0.5em 0;
    margin-left: 1.2em;
  }
  li a {
    margin-left: 1em;
    font-size: 1.1em;
    font-weight: 300;
    color: #313135;
  }
  li button {
    width: 80px;
    height: 20px;
    margin-right: 3px;
  }
</style>