<template>
  <div class="cms">
    <TheSideBar />
    <div class="panel__layout-main">
      <div class="the-header-cms">
        <TheUserInfo />
      </div>
    </div>
  </div>
</template>


<style scoped>
.cms {
  height: 100%;
  display: flex;
}
.the-header-cms {
  left: var(--sidebar-width);
  border-bottom: var(--border);
  height: var(--header-height);
  display: flex;
  align-items: center;
  padding: 16px 32px;
  background-color: var(--background-color);
  position: fixed;
  top: 0;
  right: 0;
  z-index: 50;
}
</style>
<script lang="ts">
import TheSideBar from "../components/TheSideBar.vue";
import TheUserInfo from "../components/TheUserInfo.vue";
export default {
  components: {
    TheSideBar,
    TheUserInfo,
  },
};
</script>