<template>
  <div class="the-card">
    <h3 class="the-card__heading">1. About your community</h3>
    <div class="the-card__body">
      <form action="" class="the-form">
        <div class="the-form__item is-required" label="Community name">
          <label for="name" class="the-form__item-label">Community name</label>
          <div class="the-form__item-content"></div>
        </div>
      </form>
    </div>
  </div>
</template>

<style scoped>
.the-card {
  border-radius: 32px;
  background-color: var(--background-item);
  padding: 32px;
  box-sizing: border-box;
}
.the-card__heading {
  font-size: 2.4rem;
  color: var(--white-color);
  font-weight: 700;
  margin-bottom: 0;
  text-align: center;
}
.the-card__body {
  margin-top: 32px;
}

/* The-form CSS here */
.the-form__item {
  margin-bottom: 24px;
}
.the-form__item::before {
  display: table;
  content: "";
}

.the-form__item-label {
  font-size: 1.5rem;
  font-weight: 500;
  vertical-align: middle;
  color: var(--input-color);
  text-align: left;
  padding: 0 0 10px;
}
.the-form__item.is-required:not(.is-no-asterisk)
  > .the-form__item-label::before {
  content: "*";
  color: var(--required-color);
  margin-right: 4px;
}
.the-form__item-content {
  line-height: 4rem;
  position: relative;
  font-size: 1.6rem;
}
</style>