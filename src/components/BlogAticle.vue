<template>
  <div>
    <ul>
      <li v-for="item in blogList" :key="nanoid()">
        <router-link :to="{
          path: '/blog',
          query: {
            filePath: item.path
          }
        }">
          {{item.title}}
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
import {useRoute,useRouter} from 'vue-router'
import {nanoid} from 'nanoid'
import axios from 'axios'
export default {
  name: 'BlogAticle',
  async setup() {
    const rt = useRoute()
   
    let blogList

    const getData = () => axios.post('http://127.0.0.1:3000/getdesc',{'data':rt.query})
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
  li {
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
  /* p {
    font-weight: 300;
    margin-left: 10px;
  }
  .title {
    font-size: 1.25rem;
    margin-bottom: 4px;
    color: #6c757d;
    margin-left: 10px;
  }
  .content {
    margin-top: 8px;
    margin-bottom: 8px;
    font-size: 1rem;
  }
  li div {
    margin-left: 10px;
    margin-bottom: 10px;
  }
  li div span {
    margin-right: 15px;
    font-size: 13px;
  } */
</style>