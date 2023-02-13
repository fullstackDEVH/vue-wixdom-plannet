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
              <div class="footer__top-menu">
                <ul>
                  <li>
                    <a href="#">White paper</a>
                  </li>
                  <li>
                    <a href="#">For Business</a>
                  </li>
                  <li>
                    <a href="#">Pitch deck</a>
                  </li>
                  <li>
                    <a href="#">Follow Us</a>
                  </li>
                </ul>
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
.footer__top-menu {
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: flex-end;
}
.footer__top-menu ul {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 0 48px;
}
.footer__top-menu li a {
  font-size: 1.6rem;
  color: var(--white-color);
  transition: color 0.3s ease;
}
.footer__top-menu li a:hover {
  color: var(--hover-color);
}
</style>