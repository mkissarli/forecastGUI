<template>
  <div class="home">
    <dashboard></dashboard>
  </div>
</template>

<script>
// @ is an alias to /src
import Dashboard from "@/components/Dashboard.vue";

export default {
  name: "Home",
  components: {
    Dashboard,
  },
};
</script>

<style>
.home {
  display: flex;
  justify-content: center;
}
</style>
