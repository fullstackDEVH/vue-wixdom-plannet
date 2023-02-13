<script setup lang="ts">
</script>


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
              <div class="header__user">
                <div class="header__user-notification">
                  <!-- icon -->
                </div>
                <div class="header__user-info">
                  <div class="header__user-info-wrapper">
                    <div class="header__user-info-inner">
                      <img
                        src="https://static.wixdomplanet.io/public/images/avatar/Avatar1.png"
                        alt="avatar"
                      />
                      <span>Hậu Đặng Ngọc</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>



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
  height: 80px;
  padding-bottom: 100px;
}
.header__logo a {
  display: flex;
  align-items: center;
  height: 80px;
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
.header__user {
  display: flex;
  align-items: center;
  width: 100%;
  height: 100%;
  justify-content: flex-end;
}
.header__user-info {
  margin-left: 16px;
}
.header__user-info-wrapper {
  border-radius: 25px;
  padding: 2px;
  background: var(--main-color);
  max-width: 200px;
}
.header__user-info-inner {
  border-radius: 25px;
  padding: 6px 16px 6px 6px;
  display: flex;
  align-items: center;
  background-color: var(--background-color);
}
.header__user-info-inner img {
  border-radius: 50%;
  object-fit: cover;
  width: 32px;
  height: 32px;
}
.header__user-info-inner span {
  -webkit-line-clamp: 1;
  display: -webkit-box;
  color: var(--username-color);
  font-size: 14px;
  margin-left: 12px;
  max-width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  -webkit-box-orient: vertical;
  line-height: inherit;
  word-break: break-word;
}
</style>