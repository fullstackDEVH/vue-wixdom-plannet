<script setup lang="ts">
import { RouterView } from "vue-router";
import { EXCEPT_PATH } from "./constants";
import TheHeader from "./components/Layout/TheHeader.vue";
import TheFooter from "./components/Layout/TheFooter.vue";
</script>

<template>
  <div class="app">
    <TheHeader v-if="isMatchRouter($route.name)" />
    <RouterView />
    <TheFooter v-if="isMatchRouter($route.name)" />
  </div>
</template>


<script lang="ts">
export default {
  components: {
    TheHeader,
    TheFooter,
  },
  props: {},
  methods: {
    isMatchRouter(fullPath: any) {
      if (!EXCEPT_PATH.includes(fullPath)) return true;
    },
  },
};
</script>
<style scoped>
.app {
  background-color: var(--background-color);
  min-height: 100vh;
}
</style>
