<script setup lang="ts">
import { RouterLink } from "vue-router";
import { menuCMS } from "../constants/index";
</script>
<template>
  <div class="cms">
    <TheSideBar :menu="menuCMS" />
    <div class="panel__layout-main">
      <div class="the-header-cms">
        <TheUserInfo />
      </div>
      <div class="panel__layout-content">
        <div class="the-container">
          <TheEvent />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import TheSideBar from "../components/TheSideBar.vue";
import TheUserInfo from "../components/TheUserInfo.vue";
import TheEvent from "../components/TheEvent.vue";
export default {
  components: {
    TheSideBar,
    TheUserInfo,
    TheEvent,
  },
};
</script>
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
.input-inner__icon {
  height: 100%;
  text-align: center;
  transition: all 0.3s;
}
</style>
