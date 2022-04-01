<template>
  <TopTitle/>
  <router-view></router-view>
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