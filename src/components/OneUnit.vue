<template>
<div class="singleUnit" @click="setForecast">
  <h3 class="day">{{ getDate.format("ddd") }}</h3>
  <img :src=getImageUrl
       :alt=weatherInfo.day.condition.text>
  <h3 class="maxTemp">{{ weatherInfo.day.maxtemp_c }} C</h3>
  <h3 class="minTemp">{{ weatherInfo.day.mintemp_c}} C</h3>
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
    setForecast: function() {
      this.$store.dispatch("setCurrentForecast", this.weatherInfo);
    }
  },
  beforeMount(){
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .singleUnit {
  margin: 24px
  }
  .day {
  font-weight: italic;
  font-size:14px;
  color: #4d4d4d;
  }
  .maxTemp{
  font-weight: bold;
  font-size:20px;
  text-align: right;
  color: #4d4d4d;
  }
  .minTemp{
  font-size:14px;
  text-align:right;
  color: #999999;
  }
</style>
