<template>
  <div>
    <div
      style="
        width: 50%;
        margin: auto;
        display: flex;
        margin-top: 5%;
        margin-bottom: 20px;
      "
    >
      <input type="text" ref="inputSearch" style="width: 100%" />
      <input type="button" ref="submitSearch" value="Find" />
    </div>
    <div ref="gmap" style="width: 100%; height: 700px"></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      map: null,
      center: {
        lat: 41.90476224706472,
        lng: 12.49822074385094,
      },
      marker: null,
    };
  },

  async mounted() {
    await this.$google.loadGoogleApi();
    this.map = this.$google.initMap(this.$refs.gmap, this.center);
    // this.marker = this.$google.createMarker(this.center)
    // this.marker = this.$google.createMarker('asd zxc')

    // let result = await this.$google.getAddress(this.center)
    // console.log('result', result)
    this.showAutoComplete();
  },

  methods: {
    showAutoComplete() {
      const input = this.$refs.inputSearch;
      const autocomplete = new this.$google.google.maps.places.Autocomplete(
        input
      );

      const infowindow = new this.$google.google.maps.InfoWindow();
      const infowindowContent = document.getElementById("infowindow-content");
      infowindow.setContent(infowindowContent);
      autocomplete.addListener("place_changed", () => {
        const place = autocomplete.getPlace();

        if (!place.geometry) {
          // User entered the name of a Place that was not suggested and
          // pressed the Enter key, or the Place Details request failed.

          // window.alert("No details available for input: '" + place.name + "'");
          return;
        } // If the place has a geometry, then present it on a map.
      });
    },
  },
};
</script>

<style scoped>
</style>
