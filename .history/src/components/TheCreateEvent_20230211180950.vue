<template>
  <div class="the-create-event">
    <div class="the-container-create">
      <div class="create-event__top">
        <h2 class="the-heading--center">Create a new Events</h2>
        <div class="create-event__step">
          <TheStep />
        </div>
      </div>
      <div class="create-event__card">
        <h3 class="the-heading--center medium">1. Setup Event</h3>
        <div class="create-event__card-body">
          <form action="">
            <div class="the-form__item is-required" label="Event name">
              <label for="name" class="the-form__item-label">Event name</label>
              <div class="the-form__item-content">
                <div class="the-input">
                  <input
                    id="name"
                    type="text"
                    placeholder="Enter your event name"
                    autocomplete="off"
                    class="the-input-inner"
                  />
                </div>
              </div>
            </div>
            <div class="the-form__item is-required" label="Banner">
              <label for="banner" class="the-form__item-label">Banner</label>
              <div class="the-form__item-content">
                <div class="upload-image">
                  <input type="file" />
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>


<script lang="ts">
import TheStep from "./TheStep.vue";
export default {
  components: {
    TheStep,
  },
};
</script>
<style scoped>
.create-event__top {
  margin-bottom: 36px;
}
.create-event__step {
  margin-top: 36px;
}
.create-event__card {
  border-radius: 32px;
  background-color: var(--background-item);
  padding: 32px;
}
.create-event__card-body {
  margin-top: 32px;
}
.upload-image {
  border: 1px dashed var(--background-color-layer);
  border-radius: 8px;
  background-color: var(--background-color);
  text-align: center;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  justify-content: center;
  transition: border 0.3s ease;
  overflow: hidden;
  aspect-ratio: 1100 / 225;
  max-width: 1100px;
  max-height: 225px;
}
</style>