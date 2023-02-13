<template>
  <div class="__layout">
    <div class="panel-full-layout">
      <div class="panel-full-layout__main">
        <div class="the-header">
          <TheUserInfo />
        </div>
      </div>
    </div>
  </div>
</template>

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
</style>