<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
  <div class="app">
    <TheHeader />
    <RouterView />
    <TheFooter />
    <RouterLink to="/tournament">
      <CommunityView />
    </RouterLink>
  </div>

  <!-- <header>
    <div class="wrapper">
      

      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </nav>
    </div>
  </header> -->
</template>


<script lang="ts">
import TheHeader from "./components/TheHeader.vue";
import TheFooter from "./components/TheFooter.vue";
import CommunityView from "./views/CommunityView.vue";
export default {
  // data() {
  //   return {

  //   };
  // },
  components: {
    TheHeader,
    TheFooter,
    CommunityView,
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
