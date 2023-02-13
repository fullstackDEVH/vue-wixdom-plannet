<template>
  <header class="header">
    <div class="container">
      <div class="grid">
        <div class="row">
          <div class="col l-8">
            <div class="header__container">
              <div class="header__logo">
                <a href="#">
                  <img src="@/assets/imgs/logo.png" alt="logo" />
                </a>
              </div>
              <div class="header__divider"></div>
              <div class="header__nav">
                <ul class="header__nav-menu">
                  <li>
                    <a href="">Communities</a>
                  </li>
                  <li>
                    <a href="">Events</a>
                  </li>
                  <li>
                    <a href="">Follow Us</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div class="col l-4">
            <div class="header__container">
              <TheUserInfo />
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script lang="ts">
import TheUserInfo from "@/components/Common/TheUserInfo.vue";
export default {
  components: {
    TheUserInfo,
  },
  data() {
    return {};
  },
};
</script>

<style lang="css" scoped>
.header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background-color: var(--background-color);
  z-index: 50;
}
.header__container {
  display: flex;
  align-items: center;
  height: var(--header-height);
}
.header__logo a {
  display: flex;
  align-items: center;
  height: var(--header-height);
}
.header__logo a img {
  max-width: 100%;
  height: 100%;
  object-fit: cover;
}
.header__divider {
  margin: 0 32px;
  display: inline-block;
  width: 1px;
  height: 1.6rem;
  vertical-align: middle;
  position: relative;
  background-color: var(--header-divide-color);
}
.header__nav-menu {
  display: flex;
  align-items: center;
  gap: 0 32px;
}
.header__nav-menu li a {
  font-size: 1.6rem;
  color: var(--white-color);
  transition: color 0.3s ease;
}
.header__nav-menu li a:hover {
  color: var(--hover-color);
}
</style>