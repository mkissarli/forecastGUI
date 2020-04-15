<template>
  <div>
    <table class="forecastTable">
      <tr>
        <td class="tag">Max Temperature</td>
        <td class="value">{{ getForecast.day.maxtemp_c }} C</td>
      </tr>
      <tr>
        <td class="tag">Min Temperature</td>
        <td class="value">{{ getForecast.day.mintemp_c }} C</td>
      </tr>
      <tr>
        <td class="tag">Precipitation</td>
        <td class="value">{{ getForecast.day.totalprecip_mm }} mm</td>
      </tr>
      <tr>
        <td class="tag">UV Index</td>
        <td class="value">{{ getForecast.day.uv }}</td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  name: "Forecast",
  props: {
    msg: String,
  },
  computed: {
    getForecast: function () {
      return this.$store.getters.getCurrentForecast;
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.forecastTable {
  margin-top: 16px;
  margin-left: 128px;
}
.tag {
  padding-right: 72px;
}
.value {
  text-align: right;
}
td {
  padding: 8px;
}
</style>
