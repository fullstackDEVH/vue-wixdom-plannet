<template>
  <div class="the-sidebar">
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
</template>
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
</style>