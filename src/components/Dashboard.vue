<template>
<div class="dash">
  <h2>{{ title }}</h2>
  <h3>{{ apiResult.location.name }}</h3>
  <h3>{{ apiResult.current.temp_c }}</h3>
  <img :src=apiResult.current.condition.icon.slice(2)>
  <h3>{{ time }}</h3>
  <p>{{ apiResult }}</p>
  <button @click="getData">Get</button>
</div>
</template>

<script>
export default {
  name: "Dashboard",
  props: {
    title: String,
    temp: Number,
    time: String,
  },
  computed: {
    apiResult: function () {
      return this.$store.getters.getStoredApiResult;
    }
  },
  methods: {
    getData: async function (){
      await this.$store.dispatch("newApiResult");
    }
  },
  beforeMount(){
    console.log("YAS");
    this.$store.dispatch("newApiResult");
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
