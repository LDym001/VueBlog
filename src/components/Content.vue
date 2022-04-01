<template>
  <div class="container">
    <div class="left-container">
      <Suspense>
        <template #default>
          <Navigation/>
        </template>
        <template #fallback>
          <div>loading...</div>
        </template>
      </Suspense>
    </div>
  </div>
</template>

<script>
import Navigation from './Navigation.vue'

export default {
  name: 'Content',
  components: {
    Navigation
  }
}
</script>

<style scoped>
  .container {
    display: flex;
    justify-content: center;
    height: 100%;
    width: 70%;
    margin: 0 auto;
  }
  .left-container {
    width: 100%;
  }
  
</style>