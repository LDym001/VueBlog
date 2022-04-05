<template>
  <TopTitle/>
  <Suspense>
    <router-view></router-view>
  </Suspense>
</template>

<script>
import TopTitle from '../components/TopTitle.vue'

export default {
  name: 'Page',
  components: {
    TopTitle
  }
}
</script>

<style>

</style>