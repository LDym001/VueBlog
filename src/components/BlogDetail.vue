<template>
  <div class="blog-container">
    <v-md-preview :text="MdFile" height="400px"></v-md-preview>
  </div>
</template>

<script>
import axios from 'axios'
import {useRoute} from 'vue-router'

export default {
  name: 'BlogDetail',
  async setup() {
    const route = useRoute()
    console.log('-----------------',route.query,'----------------')
    const getData = () => axios.post('http://127.0.0.1:3000/getdata')
    let BlogMdFile = await getData()
    console.log('aaaaaaaaaaaaaaa',BlogMdFile,'aaaaaaaaaaa')
    let MdFile = BlogMdFile.data
    console.log('bbbbbb',MdFile,'bbbbbbbbbb');

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