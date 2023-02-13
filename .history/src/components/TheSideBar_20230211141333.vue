<script setup lang="ts">
import { RouterLink } from "vue-router";
</script>
<template>
  <div class="the-sidebar">
    <div class="the-sidebar__logo">
      <RouterLink to="/">
        <img
          src="https://wxp.wixdomplanet.io/images/logo_horizontal.png"
          alt="logo"
        />
      </RouterLink>
    </div>
    <ul class="the-sidebar__menu">
      <li class="the-sidebar__menu-item is-active">
        <RouterLink to="/" class="the-sidebar__menu-link">
          <fa icon="house" class="the-sidebar__menu-icon" />
          <span>Home</span>
        </RouterLink>
      </li>
      <li class="the-sidebar__menu-item">
        <RouterLink to="/" class="the-sidebar__menu-link">
          <fa icon="calendar" class="the-sidebar__menu-icon" />
          <span>My events</span>
        </RouterLink>
      </li>
    </ul>
  </div>
</template>
<script lang="ts">
export default {};
</script>
<style scoped>
.tournament__layout {
  margin-right: 0;
  padding-left: 240px;
  min-height: 100vh;
  background-color: var(--background-color);
  display: flex;
  padding-top: 80px;
  transition: all 0.3s ease;
  overflow-x: hidden;
}

.the-sidebar {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  max-width: var(--sidebar__width);
  display: flex;
  flex-direction: column;
  border-right: var(--border);
  padding: 32px 16px;
  z-index: 51;
  overflow-y: auto;
  transition: all 0.3s ease;
}
.the-sidebar__logo {
  text-align: center;
}
.the-sidebar__logo a {
  display: inline-block;
}
.the-sidebar__logo a img {
  height: 60px;
  max-width: 100%;
}
.the-sidebar__menu {
  margin-top: 48px;
  margin-bottom: 16px;
}
.the-sidebar__menu-link {
  padding: 15px;
  border-radius: var(--border-radius-8);
  display: flex;
  align-items: center;
  color: var(--white-color);
  position: relative;
  overflow: hidden;
  transition: color 0.3s ease;
}
.the-sidebar__menu-icon {
  font-size: 1.6rem;
  z-index: 2;
}
.the-sidebar__menu-link::before {
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
.the-sidebar__menu-item.is-active a::before {
  background: var(--main-color);
  opacity: 1;
}
.the-sidebar__menu-link span {
  font-size: 1.4rem;
  margin-left: 12px;
  z-index: 2;
}
</style>