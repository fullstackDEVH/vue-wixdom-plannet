<template>
  <div class="__layout">
    <div class="panel-full-layout">
      <div class="panel-full-layout__main">
        <div class="the-header is-fluid">
          <TheUserInfo />
        </div>
        <div class="panel-full-layout__content"></div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import TheUserInfo from "../components/TheUserInfo.vue";
export default {
  components: {
    TheUserInfo,
  },
};
</script>

<style scoped>
.panel-full-layout__main {
  flex: 1;
  display: flex;
  flex-direction: column;
  margin-left: 0;
  padding-top: var(--header-height);
  position: relative;
  width: 100%;
}
.panel-full-layout__content {
  padding: 24px 0;
  flex: 1;
}
</style>