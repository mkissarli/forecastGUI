<template>
<div class="dash">
  <h3>{{ getApiResult.location.name }}</h3>
  <h3>{{ time }}</h3>
  <div class="container">
    <div id="futureWeather">
      <oneUnit v-for="day in getApiResult.forecast.forecastday"
	       v-bind:key="day.date"
	       v-bind:weatherInfo="day">
      </oneUnit>
    </div>
  </div>
</div>
</template>

<script>
  import OneUnit from "@/components/OneUnit.vue";

export default {
  name: "Dashboard",
  components: {
    OneUnit
  },
  props: {
    title: String,
    temp: Number,
    time: String,
  },
  computed: {
    getApiResult: function () {
      return this.$store.getters.getStoredApiResult;
    }
  },
  methods: {
    //loadData: async function (){
    //  await this.$store.dispatch("newApiResult");
    //}
  },
  beforeMount(){
    this.$store.dispatch("newApiResult");
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  #futureWeather {
  display:flex;
  }
  .container {
  display: flex;
  justify-content: center;
  }
</style>
