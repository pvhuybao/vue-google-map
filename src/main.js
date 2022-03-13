import Vue from 'vue'
import App from './App.vue'

import googleMapApi from '@/plugins/GoogleMapPlugin.js'

// import googleMapApi from '@/utils/googleMap.js'

Vue.config.productionTip = false

const googleMapOptions = {
  apiKey: "AIzaSyDIlRaooXNccBRbh5nnuT7dYEdejLkSvn4",
  version: "weekly",
  libraries: ["places"]
}
// Vue.use(GoogleMapPlugin, googleMapOptions)

// Vue.prototype.$google = new googleMapApi()

Vue.prototype.$google = new googleMapApi(googleMapOptions);

new Vue({
  render: function (h) { return h(App) },
}).$mount('#app')
