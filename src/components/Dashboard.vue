<template>
  <div id="dash">
    <h3 id="location">{{ getApiResult.location.name }}</h3>
    <h3 id="time">{{ getTime }}</h3>
    <div class="container">
      <div id="futureWeather">
        <oneUnit
          v-for="day in getApiResult.forecast.forecastday"
          v-bind:key="day.date"
          v-bind:weatherInfo="day"
        >
        </oneUnit>
      </div>
    </div>
    <forecast></forecast>
  </div>
</template>

<script>
import moment from "moment";
import OneUnit from "@/components/OneUnit.vue";
import Forecast from "@/components/Forecast.vue";

export default {
  name: "Dashboard",
  components: {
    OneUnit,
    Forecast,
  },
  props: {
    title: String,
    temp: Number,
    time: String,
  },
  computed: {
    getApiResult: function () {
      return this.$store.getters.getStoredApiResult;
    },
    getTime: function () {
      return moment().format("ddd Do MMM HH:mm");
    },
  },
  methods: {
    //loadData: async function (){
    //  await this.$store.dispatch("newApiResult");
    //}
  },
  beforeMount() {
    this.$store.dispatch("newApiResult");
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#futureWeather {
  display: flex;
}
.container {
  display: flex;
  justify-content: center;
}
#location {
  text-align: right;
  margin-right: 128px;
  margin-top: 32px;
  margin-bottom: 4px;
  font-size: 48px;
  color: #4d4d4d;
}
#time {
  text-align: right;
  margin-right: 148px;
  margin-bottom: 8px;
  font-size: 32px;
  color: #999999;
}
#dash {
  width: 720px;
  border-radius: 25px;
  background-color: #c2c5d6;
  padding: 36px;
}
</style>
