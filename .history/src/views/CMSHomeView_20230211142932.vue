<template>
  <div class="cms">
    <TheSideBar />
    <div class="panel__layout-main"></div>
  </div>
</template>


<style scoped>
.cms {
  height: 100%;
  display: flex;
}
</style>
<script lang="ts">
import TheSideBar from "../components/TheSideBar.vue";
export default {
  components: {
    TheSideBar,
  },
};
</script>