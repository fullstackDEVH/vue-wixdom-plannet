<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
  <div class="app">
    <TheHeader />
  </div>
  <!-- <header>
    <div class="wrapper">
      

      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </nav>
    </div>
  </header>

  <RouterView /> -->
</template>


<script lang="ts">
import TheHeader from "./components/TheHeader.vue";
export default {
  components: {
    TheHeader,
  },
  props: {},
  methods: {},
};
</script>
<style scoped>
.app {
  background-color: var(--background-color);
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}
</style>
