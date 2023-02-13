<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
  <div class="app">
    <TheHeader />
    <RouterView />
    <TheFooter />
  </div>
</template>


<script lang="ts">
import TheHeader from "./components/Layout/TheHeader.vue";
import TheFooter from "./components/Layout/TheFooter.vue";
export default {
  // data() {
  //   return {

  //   };
  // },
  components: {
    TheHeader,
    TheFooter,
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
