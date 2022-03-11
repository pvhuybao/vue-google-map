import { Loader } from '@googlemaps/js-api-loader';

let google = null
let map = null

const googleMapApi = {
    loadGoogleApi: (options) => {
        const loader = new Loader(options)
        return loader
    },
    
    initMap: (mapElement, center) => {
        map = new google.maps.Map(mapElement, {
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

    // Vue.prototype.$googleMapApi = googleMapApi
    Vue.prototype.$google = google
    Vue.prototype.$googleMapApi = googleMapApi
}

export default installGoogleMapPlugin
