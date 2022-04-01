<template>
  <Suspense>
    <template #default>
      <BlogDetail/>
    </template>
    <template #fallback>
      <div>loader...</div>
    </template>
  </Suspense>
  <!-- <BlogDetail/> -->
  <Footer/>
</template>

<script>
import BlogDetail from '../components/BlogDetail.vue'
import Footer from '../components/BlogFooter.vue'

export default {
  name: 'Blog',
  components: {
    BlogDetail,
    Footer
  }
}
</script>

<style>

</style>