<template>
  <div class="__layout">
    <div class="panel-full-layout">
      <div class="panel-full-layout__main">
        <div class="the-header is-fluid">
          <TheUserInfo />
        </div>
        <div class="panel-full-layout__content">
          <div class="create-community__wrapper">
            <div>
              <div class="create-community__content">
                <h2 class="create-community__heading">
                  Create a new community
                </h2>
                div.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import TheUserInfo from "../components/TheUserInfo.vue";
export default {
  components: {
    TheUserInfo,
  },
};
</script>

<style scoped>
.panel-full-layout__main {
  flex: 1;
  display: flex;
  flex-direction: column;
  margin-left: 0;
  padding-top: var(--header-height);
  position: relative;
  width: 100%;
}
.panel-full-layout__content {
  padding: 24px 0;
  flex: 1;
}
.create-community__wrapper {
  width: 100%;
  height: 100%;
  box-sizing: border-box;
}
.create-community__content {
  max-width: 544px;
  margin: 0 auto;
  box-sizing: border-box;
}
.create-community__heading {
  font-size: 3.4rem;
  text-align: center;
  font-weight: 700;
  color: var(--white-color);
  margin-bottom: 0;
}
@media (min-width: 768px) {
  .create-community__content {
    padding: 140px 0;
  }
}
</style>