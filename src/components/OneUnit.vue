<template>
  <div>
    <h3>Max: {{ weatherInfo.day.maxtemp_c }} C</h3>
    <h3>Min: {{ weatherInfo.day.mintemp_c}} C</h3>
    <h3>UV: {{ weatherInfo.uv }}</h3>
    <img :src=weatherInfo.day.condition.icon.slice(2)>
  </div>
</template>


<script>
export default {
  name: "OneUnit",
  props: {
    weatherInfo: Object
  },
  computed: {
  },
  methods: {
  },
  beforeMount(){
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
