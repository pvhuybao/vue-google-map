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
      <input
        type="button"
        ref="submitSearch"
        value="Find"
      />
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
				lng: 12.49822074385094
			},
    }
  },

  mounted() {
    // setTimeout(() => {
      console.log('this.$googleMapApi', this.$googleMapApi)
      console.log('this.$google', this.$google)
      this.map = this.$googleMapApi.initMap(this.$refs.gmap, this.center)
    // }, 1000)
  }
};
</script>

<style scoped>

</style>
