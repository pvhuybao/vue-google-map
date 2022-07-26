<template>
  <div>
		<div style="width: 50%; margin: auto; display: flex; margin-top: 5%; margin-bottom: 20px">
			<input
				type="text"
				ref="inputSearch"
				style="width: 100%"
			>
			<input type="button" ref="submitSearch" value="Find" @click="codeAddress">
		</div>
		<div ref="gmap" style="width: 100%; height: 700px"></div>
  </div>
</template>

<script>
import { Loader } from '@googlemaps/js-api-loader';

export default {
  name: "vue-google-map",
  props: {
  },

	data() {
		return {
			google: null,
			map: null,
			geocoder: null,
			center: {
				lat: 41.90476224706472,
				lng: 12.49822074385094
			},
			marker: null
		}
	},

	async mounted() {
		await this.initMap()
		this.initMarker()
	},

	methods: {
		async initMap() {
			const loader = new Loader({
				apiKey: "AIzaSyDIlRaooXNccBRbh5nnuT7dYEdejLkSvn4",
				version: "weekly",
				libraries: ["places"]
			});

			this.google = await loader.load()
			this.map = new google.maps.Map(this.$refs.gmap, {
				center: this.center,
				zoom: 14,
			});

			// loader.load().then((google) => {
			// 	console.log('google', google)
			// 	this.google = google
			// 	this.map = new google.maps.Map(this.$refs.gmap, {
			// 		center: this.center,
			// 		zoom: 14,
			// 	});

			// 	// this.initMarker()
			// 	this.geocoder = new google.maps.Geocoder();
			// 	// this.showAutoComplete()
			// })
		},

		initMarker() {
			this.marker = new this.google.maps.Marker({
				position: this.center,
				map: this.map,
				title: "Marker Center",
			});
		},

		codeAddress() {
			let address = this.$refs.submitSearch.value;
			this.geocoder.geocode( { 'address': address}, function(results, status) {
				if (status == 'OK') {
					map.setCenter(results[0].geometry.location);
					let marker = new this.google.maps.Marker({
							map: this.map,
							position: results[0].geometry.location
					});
				} else {
					alert('Geocode was not successful for the following reason: ' + status);
				}
			});
		}

		// showAutoComplete() {
    //   const input = this.$refs.inputSearch;
		// 	console.log('this.google.maps', this.google.maps)
		// 	console.log('this.google.maps.places', this.google.maps.places)
    //   const autocomplete = new this.google.maps.places.Autocomplete(input);

    //   const infowindow = new this.google.maps.InfoWindow();
    //   const infowindowContent = document.getElementById("infowindow-content");
    //   infowindow.setContent(infowindowContent);
    //   autocomplete.addListener("place_changed", () => {
    //     const place = autocomplete.getPlace();

    //     if (!place.geometry) {
    //       // User entered the name of a Place that was not suggested and
    //       // pressed the Enter key, or the Place Details request failed.

    //       // window.alert("No details available for input: '" + place.name + "'");
    //       return;
    //     } // If the place has a geometry, then present it on a map.
    //   });
    // },
	}
};
</script>

<style scoped>

</style>
