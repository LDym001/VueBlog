<template>
  <div class="editor-box">
    <v-md-editor v-model="blogdata.MdFile" height="400px"></v-md-editor>
    <div class="editor-btn-box"><button @click="editor()">保存</button></div>
  </div>
</template>

<script>
import axios from 'axios'
import {reactive} from 'vue'
import {useRoute,useRouter} from 'vue-router'

export default {
  name: 'Edit',
  async setup() {
    const route = useRoute()
    const router = useRouter()
    const getData = () => axios.post('http://119.91.123.231:3000/getdata',{'path':route.query.filePath})
    let blogdata = reactive({
      MdFile: ''
    })
    let BlogMdFile = await getData()
     blogdata.MdFile = BlogMdFile.data
    const editor = () => axios.post('http://119.91.123.231:3000/editdata',{
        filePath:route.query.filePath,fileContent:blogdata.MdFile
      }).then(msg => {
        if(msg.data.status == 'success') {
          router.push('/profile')
        } else if(msg.data.status == 'fail') {
          window.alert('文件修改失败')
        }
      })
    
    return {
      editor,
      blogdata
    }
  }
}
</script>

<style>
  .editor-box {
    width: 80%;
    margin: 0 auto;
  }
  .editor-btn-box {
    display: flex;
    justify-content: end;
    margin-top: 10px;
  }
  .editor-btn-box button {
    height: 30px;
    width: 80px;
  }
</style>