<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
  <div class="app">
    <RouterView />
  </div>
</template>


<script lang="ts">
// import TheHeader from "./components/TheHeader.vue";
// import TheFooter from "./components/TheFooter.vue";
import MainLayout from "./components/Layout/MainLayout.vue";
export default {
  // data() {
  //   return {

  //   };
  // },
  components: {
    MainLayout,
  },
  props: {},
  methods: {},
};
</script>
<style scoped>
.app {
  background-color: var(--background-color);
  min-height: 100vh;
}
</style>
