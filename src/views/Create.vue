<template>
  <div class="create-container">
    <div class="create-detail">
      <div class="tag">
        笔记语言<select v-model="tag">
          <option key="tagfist"></option>
          <option v-for="(item,index) in tagList" :key="index">{{item}}</option>
        </select>
      </div>
      <div class="category">
        笔记类型<select v-model="category">
          <option key="catefist"></option>
          <option v-for="(item,index) in categoryData" :key="index">{{item}}</option>
        </select>
      </div>
      <div class="title">笔记标题<input v-model="title" placeholder="请输入标题"></div>
      <span>{{tag}}</span>
      <span>{{category}}</span>
      <span>{{title}}</span>
    </div>
    <div class="create-content">
      <v-md-editor v-model="MdFile" height="400px"></v-md-editor>
      <div class="save-btn-box"><button @click="save()">保存笔记</button></div>
    </div>
  </div>
</template>

<script>
import {reactive,toRefs} from'vue'
import {useStore} from 'vuex'
import {useRouter} from 'vue-router'
import axios from 'axios'

export default {
  name:'create',
  async setup() {
    const store = useStore()
    const tagList = store.state.notetypes
    const router = useRouter()

    const getCategory = () => axios.post('http://119.91.123.231:3000/getcategory',{})
    const categoryList = await getCategory()
    let categoryData = []
    const addData = () => {
      console.log('---addata---start---')
      tagList.forEach(tag => {
        categoryList.data[tag].forEach(item => {
          categoryData.push(item.category)
        })
      })
    }
    addData()
    
    const save = () => axios.post('http://119.91.123.231:3000/addblog',{
        tag: createObj.tag,
        category: createObj.category,
        title: createObj.title,
        content: createObj.MdFile
      }).then(msg => {
        if(msg.data.status == 'success') {
          router.push('/profile')
        } else if(msg.data.status == 'fail') {
          window.alert('文件修改失败')
        }
      })

    let createObj = reactive({
      tag: '',
      category: '',
      title: '',
      MdFile: ''
    })
    return {
      ...toRefs(createObj),
      tagList,
      categoryData,
      save
    }
  }
}
</script>

<style>
  .create-container {
    width: 80%;
    margin: 0 auto;
  }
  .create-detail {
    display: flex;
    justify-content: flex-start;
    margin-bottom: 5px;
  }
  .category {
    margin-left: 10px;
  }
  .title {
    margin-left: 15px;
  }
  .title input {
    padding-left: 5px;
    width: 200px;
    height: 18px;
    vertical-align: middle;
  }
  .title input:focus {
    outline: none;
  }
  .save-btn-box {
    display: flex;
    justify-content: end;
    margin-top: 10px;
  }
</style>