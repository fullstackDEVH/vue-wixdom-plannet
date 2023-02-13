<template>
  <header class="header">
    <div class="container">
      <div class="grid">
        <div class="row">
          <div class="col l-8">
            <div class="header__logo">
                <a href="#">
                  <img src="@/assets/imgs/logo.png" alt="logo" />
                </a>
              </div>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<style lang="css" scoped>
.header .container{ 
  display: flex;
  align-items: center;
  height: 80px;
}
.header__logo {
  display: flex;
  align-items: center;
}
.header__logo a { 
  display: block;
  height: 80px;

}
.header__logo a img {
  width: 100% ;
  height: 100%;
  object-fit: cover;
}
</style>