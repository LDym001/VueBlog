<template>
  <div class="navi-container">
    <ul class="language">
      <li v-for="(item,index) in tag" ref="li"
        :class="{checked:!index}"
        @click="select(index)" :key="index">
        <router-link :to="{
          path: '/home/content',
          query: {
            tag: item,
          }
        }">{{item}}笔记</router-link>
        </li>
    </ul>
    <ul class="catogry">
        <li v-for="(item,index) in catData.category" :key="index">
          <router-link :to="{
          path:'/home/content',
          query: {
            tag: activeTag,
            category: item
          }
        }">{{item}}</router-link>
        </li>
    </ul>
  </div>
  <Suspense>
    <router-view :class="nanoid()" :key="nanoid()"></router-view>
  </Suspense>
</template>

<script>
import {getCurrentInstance,computed,reactive} from 'vue'
import {useStore} from 'vuex'
import {useRoute} from 'vue-router'
import {nanoid} from 'nanoid'
import axios from 'axios'

export default {
  name: 'Navigation',
  async setup() {
    let _this = getCurrentInstance()
    const store = useStore()
    let tag = []
    const route = useRoute()
    let catData = reactive({
      category: []
    })
    let categoryList = []

    const getTag = () => axios.post('http://119.91.123.231:3000/gettag')
    const getCategory = () => axios.post('http://119.91.123.231:3000/getcategory',{})
    //将tag数据保存到vuex中
    if(!store.state.notetypes) {
      let tagList = await getTag()
      tag = tagList.data
      store.commit('addNoteType',tag)
    } else {
      tag = store.state.notetypes
    }
    
    categoryList = await getCategory()
    categoryList.data[tag[0]].forEach(item => {
      catData.category.push(item.category)
    });
    
    const select = index => {
      let lis = _this.refs.li
      //修改选中样式
      for(let i=0; i<lis.length; i++) {
        if(i==index) {
          lis[i].setAttribute('class','checked')
        } else {
          lis[i].setAttribute('class','')
        }
      }
      //修改分类信息数据
      catData.category = []
      categoryList.data[tag[index]].forEach(item => {
        catData.category.push(item.category)
      })
    }


    return {
      tag,
      select,
      catData,
      nanoid,
      route,
      activeTag: computed(() => route.query.tag?route.query.tag:tag[0])
    }
  }
}
</script>

<style scoped>
  .navi-container {
    height: 98px;
    width: 100%;
  }
  .navi-container ul {
    height: 45px;
    display: flex;
    background-color: #fff;
    justify-content: flex-start;
    align-items: center;
  }
  .navi-container li {
    font-size: 16px;
    font-weight: 300;
    margin-left: 10px;
    height: 30px;
    text-align: center;
    padding: 0 8px;
    border-radius: 5px;
  }
  .navi-container li:hover {
    background-color: #f5f5f5;
  }
  .navi-container li a {
    line-height: 30px;
  }
  .checked {
    background-color: #000;
  }
  .checked a {
    color: #fff;
  }

  .navi-container .catogry {
    background-color: #f9f9f9;
  }
  .navi-container .catogry li {
    font-size: 14px;
  }
  .navi-container .catogry li a:hover {
    border-bottom: 1px solid #000;
  }
</style>