<template>
  <div class="cms">
    <TheSideBar />
    <div class="panel__layout-main">
      <div class="the-header-cms"></div>
    </div>
  </div>
</template>


<style scoped>
.cms {
  height: 100%;
  display: flex;
}
.the-header-cms {
  left: 240px;
  border-bottom: 1px solid #525252;
  height: 80px;
  display: flex;
  align-items: center;
  padding: 16px 32px;
  background-color: #1c1c1e;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 50;
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