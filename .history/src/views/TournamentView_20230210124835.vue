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
                  <img src="@/assets/imgs/logo.png" alt="logo" />
                </RouterLink>
              </div>
            </div>
          </div>
          <div class="col l-9"></div>
        </div>
      </div>
    </div>
  </div>
</template>
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
.tournament__sidebar-logo{ 
  text-align: center;
}
.tournament__sidebar-logo a { 
  display: inline-block;
}
.tournament__sidebar-logo a img { 
  height: 60px;
  max-width: 100%;
}
</style>