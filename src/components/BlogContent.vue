<template>
  <div class="blog-container">
    <v-md-preview :text="MdFile" height="400px"></v-md-preview>
  </div>
</template>

<script>
import axios from 'axios'
import {useRoute} from 'vue-router'

export default {
  name: 'BlogContent',
  async setup() {
    const route = useRoute()
    const getData = () => axios.post('http://119.91.123.231:3000/getdata',{'path':route.query.filePath})
    let BlogMdFile = await getData()
    let MdFile = BlogMdFile.data
    return {
      MdFile
    }
  }
}
</script>

<style>
  .blog-container {
    height: 100%;
    width: 70%;
    margin: 0 auto;
  }
</style>