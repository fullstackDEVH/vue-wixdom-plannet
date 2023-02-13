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
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<style lang="css" scoped>
.header__container {
  display: flex;
  align-items: center;
  height: 80px;
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
  width: /16rem;
  height: 1em;
  vertical-align: middle;
  position: relative;
  background-color: #dcdfe6;
}
</style>