<template>
  <div id="app">
    <vue-google-map msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
import VueGoogleMap from './components/VueGoogleMap.vue'

export default {
  name: 'App',
  components: {
    VueGoogleMap
  }
}
</script>

<style>
</style>
