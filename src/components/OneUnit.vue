<template>
<div>
  <h3>{{ getDate.format("ddd") }}</h3>
  <img :src=getImageUrl
       :alt=weatherInfo.day.condition.text>
  <h3>{{ weatherInfo.day.maxtemp_c }} C max</h3>
  <h3>{{ weatherInfo.day.mintemp_c}} C min</h3>
  <h3>UV: {{ weatherInfo.uv }}</h3>
</div>
</template>


<script>
  import moment from "moment";
export default {
  name: "OneUnit",
  props: {
    weatherInfo: Object,
  },
  computed: {
    getDate: function () {
     return moment(this.weatherInfo.date.split("-"));
    },
    getImageUrl: function () {
      return "http:".concat(this.weatherInfo.day.condition.icon);
    }
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
