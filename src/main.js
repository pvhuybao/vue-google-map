import Vue from 'vue'
import App from './App.vue'
import googleMapApi from '@/utils/googleMap.js'

Vue.config.productionTip = false

// Vue.prototype.$google = new googleMapApi()

new Vue({
  render: function (h) { return h(App) },
}).$mount('#app')
