<template>
  <div class="the-card">
    <h3 class="the-card__heading">{{ headingContent }}</h3>
    <div class="the-card__body">
      <form action="" class="the-form">
        <!-- <div class="the-form__item is-required" label="Community name">
          <label for="name" class="the-form__item-label">Community name</label>
          <div class="the-form__item-content">
            <div class="the-input">
              <input
                type="text"
                placeholder="Enter your community name"
                autocomplete="off"
                class="the-input-inner"
              />
            </div>
          </div>
        </div>
        <div class="the-form__item is-required" label="Community name">
          <label for="name" class="the-form__item-label">Subdomain</label>
          <div class="the-form__item-content">
            <div class="the-input">
              <input
                type="text"
                placeholder="Enter your subdomain"
                autocomplete="off"
                class="the-input-inner"
              />
            </div>
          </div>
        </div>
        <button
          type="button"
          @click="onClickNextButton()"
          class="the-form__button"
        >
          <span>Next</span>
        </button> -->
        <div class="the-form__item">
          <div class="the-form__item-content">
            <div class="the-form__checkbox">
              <label for="" class="the-form__checkbox-tag">
                <span class="the-form__checkbox-label">NFT</span>
              </label>
              <label for="" class="the-form__checkbox-tag">
                <span class="the-form__checkbox-label">NFT</span>
              </label>
            </div>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>
<script lang="ts">
export default {
  props: {
    headingContent: {
      type: String,
      default: "",
    },
    currentStep: {
      type: Number,
      default: 1,
    },
  },
  methods: {
    onClickNextButton() {
      this.$emit("onClickNextButton");
    },
  },
};
</script>
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
  display: block;
  font-size: 1.5rem;
  font-weight: 500;
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
.the-form__item-content::before {
  display: table;
  content: "";
}
/* The input CSS here  */
.the-input {
  position: relative;
  font-size: 1.4rem;
  display: inline-block;
  width: 100%;
}
.the-input-inner {
  background-color: var(--background-color);
  border-radius: 8px;
  border: 1px solid var(--background-color-layer);
  color: var(--input-color);
  display: inline-block;
  font-size: inherit;
  height: 40px;
  line-height: 40px;
  outline: none;
  padding: 0 15px;
  transition: border-color 0.2s cubic-bezier(0.645, 0.045, 0.355, 1);
  width: 100%;
}
.the-form__button {
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: var(--border-radius-8);
  overflow: visible;
  color: #fff;
  background: var(--hover-color);
  border: 1px solid var(--hover-color);
  padding: 12px 20px;
  margin-top: 12px;
  white-space: nowrap;
  cursor: pointer;
  transition: 0.1s;
  outline: none;
  user-select: none;
}
.the-form__button span {
  font-size: 1.6rem;
  font-weight: 500;
  display: inline-flex;
  align-items: center;
  justify-content: center;
}

.the-form__checkbox-tag {
  padding: 4px 12px;
  background-color: #3a3a3c;
  border-radius: 16px;
  line-height: 20px;
  color: #eee;
  font-weight: 500;
  font-size: 14px;
  position: relative;
  cursor: pointer;
  display: inline-block;
  white-space: nowrap;
  user-select: none;
}
.the-form__checkbox-tag:not(:last-child) {
  margin-right: 16px;
}
.the-form__checkbox-label {
  padding-left: 0;
  text-align: center;
  line-height: 19px;
  font-size: 14px;
  display: inline-block;
}
</style>