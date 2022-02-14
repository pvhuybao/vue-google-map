import { Loader } from '@googlemaps/js-api-loader';

class googleMapApi {
    constructor() {
        console.log('created')
        const loader = new Loader({
            apiKey: "AIzaSyDIlRaooXNccBRbh5nnuT7dYEdejLkSvn4",
        });
        loader.load().then((google) => {
            this.google = google
        })
    }
}

export default googleMapApi
