<script setup lang="ts">
import { RouterLink } from "vue-router";
</script>

<template>
  <div class="tournament">
    <div class="tournament__layout">
      <div class="grid">
        <div class="row">
          <div class="col l-3">
            <div class="tournament__sidebar">
              <div class="tournament__sidebar-logo">
                <RouterLink to="/">
                  <img
                    src="https://wxp.wixdomplanet.io/images/logo_horizontal.png"
                    alt="logo"
                  />
                </RouterLink>
              </div>
              <ul class="tournament__sidebar-menu">
                <li class="tournament__sidebar-menu-item is-active">
                  <RouterLink to="/" class="tournament__sidebar-menu-link">
                    <fa icon="house" class="tournament__sidebar-menu-icon" />
                    <span>Home</span>
                  </RouterLink>
                </li>
                <li class="tournament__sidebar-menu-item">
                  <RouterLink to="/" class="tournament__sidebar-menu-link">
                    <fa icon="calendar" class="tournament__sidebar-menu-icon" />
                    <span>My events</span>
                  </RouterLink>
                </li>
              </ul>
            </div>
          </div>
          <div class="col l-9">
            <div class="tournament__content">
              <div class="tournament__header">
                <TheUserInfo />
              </div>
              <div class="tournament__content-main">
                <div class="container">
                  
                </div>
              </div>
            </div>
          </div>
        </div>
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
</script>>
<style scoped>
.tournament {
  height: 100%;
}
.tournament__sidebar {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  max-width: var(--sidebar-width);
  display: flex;
  flex-direction: column;
  border-right: var(--border);
  padding: 32px 16px;
  z-index: 51;
  overflow-y: auto;
  transition: all 0.3s ease;
}
.tournament__sidebar-logo {
  text-align: center;
}
.tournament__sidebar-logo a {
  display: inline-block;
}
.tournament__sidebar-logo a img {
  height: 60px;
  max-width: 100%;
}
.tournament__sidebar-menu {
  margin-top: 48px;
  margin-bottom: 16px;
}
.tournament__sidebar-menu-link {
  padding: 15px;
  border-radius: var(--border-radius-8);
  display: flex;
  align-items: center;
  color: var(--white-color);
  position: relative;
  overflow: hidden;
  transition: color 0.3s ease;
}
.tournament__sidebar-menu-icon {
  font-size: 1.6rem;
  z-index: 2;
}
.tournament__sidebar-menu-link::before {
  position: absolute;
  content: "";
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  opacity: 0;
  z-index: 1;
  transition: all 0.3s ease;
  background: var(--main-color);
}
.tournament__sidebar-menu-item.is-active a::before {
  background: var(--main-color);
  opacity: 1;
}
.tournament__sidebar-menu-link span {
  font-size: 1.4rem;
  margin-left: 12px;
  z-index: 2;
}
.tournament__content {
  flex: 1;
  transition: all 0.3s ease;
}
.tournament__header {
  padding: 20px 32px;
  left: var(--sidebar-width);
  display: flex;
  position: fixed;
  top: 0;
  right: 0;
  background-color: var(--background-color);
  z-index: 50;
  height: var(--header-height);
}
.tournament__content-main { 
  padding: 16px 12px;
}
</style>