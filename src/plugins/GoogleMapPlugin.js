import { Loader } from '@googlemaps/js-api-loader';

let google = null
let map = null

const googleMapApi = {
    loadGoogleApi: (options) => {
        const loader = new Loader(options)
        return loader
    },
    
    initMap: (center) => {
        map = new google.maps.Map(this.$refs.gmap, {
            center: center,
            zoom: 14,
        })
    
        return map
    },
    
    createMarker: (center) => {
        const marker = new google.maps.Marker({
            position: center,
            map: map,
            title: "Marker Center",
        });
    
        return marker
    }
}


async function installGoogleMapPlugin(Vue, options) {
    google = await googleMapApi.loadGoogleApi(options).load()

    // Vue.prototype.$google = google
    // Vue.prototype.$googleMapApi = googleMapApi
    Vue.prototype.$googleMapApi = 'abc'
}

export default installGoogleMapPlugin
