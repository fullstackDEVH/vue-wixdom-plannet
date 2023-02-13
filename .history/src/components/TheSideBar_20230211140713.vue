<template>
  <div class="the-sidebar">
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
</template>
<style scoped>
</style>