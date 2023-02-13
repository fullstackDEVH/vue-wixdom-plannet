<template>
  <footer class="footer">
    <div class="container">
      <div class="footer__top">
        <div class="grid">
          <div class="row">
            <div class="col l-4">
              <img
                src="@/assets/imgs/logo.png"
                alt="logo"
                height="45"
                class="footer__logo"
              />
            </div>
            <div class="col l-8">
              <div class="footer__top-nav">

              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="footer__bottom">
        <span class="footer__copyright"
          >Copyright © 2022 Open Lab. All rights reserved</span
        >
      </div>
    </div>
  </footer>
</template>
<style scoped>
.footer {
  border-top: var(--border);
}
.footer__top {
  padding-top: 80px;
  padding-bottom: 48px;
}
.footer__logo {
  max-width: 100%;
  object-fit: cover;
}
.footer__bottom {
  border-top: var(--border);
  padding: 32px 0;
}
.footer__copyright {
  color: var(--gray-color);
  font-size: 1.2rem;
}
</style>