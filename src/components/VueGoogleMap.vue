<template>
  <div>
		{{ msg }}
  </div>
</template>

<script>
export default {
  name: "vue-google-map",
  props: {
		msg: {
			type: String,
			default: 'asd'
		}
  },
};
</script>

<style scoped>

</style>
