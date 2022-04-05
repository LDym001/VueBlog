<template>
  <Suspense>
    <template #default>
      <BlogContent/>
    </template>
    <template #fallback>
      <div>loader...</div>
    </template>
  </Suspense>
  <Footer/>
</template>

<script>
import BlogContent from '../components/BlogContent.vue'
import Footer from '../components/BlogFooter.vue'

export default {
  name: 'Blog',
  components: {
    BlogContent,
    Footer
  }
}
</script>

<style>

</style>