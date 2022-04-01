<template>
  <Content/>
  <Footer/>
</template>

<script>
import TopTitle from '../components/TopTitle.vue'
import Content from '../components/Content.vue'
import Footer from '../components/BlogFooter.vue'


export default {
  name: 'Home',
  components: {
    TopTitle,
    Content,
    Footer
  }
}
</script>

<style>
  * {
    margin: 0;
    padding: 0;
    list-style: none;
    text-decoration: none;
    color: #000;
  }
</style>