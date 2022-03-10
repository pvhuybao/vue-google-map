<template>
  <div id="app">
    <!-- <vue-google-map /> -->
    <plugin />
  </div>
</template>

<script>
import VueGoogleMap from './components/VueGoogleMap.vue'
import Plugin from './components/Plugin.vue'

export default {
  name: 'App',
  components: {
    VueGoogleMap,
    Plugin
  }
}
</script>

<style>
</style>
