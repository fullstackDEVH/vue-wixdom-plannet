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
                  <input type="file" class="upload-image_file" />
                  <div class="upload-image__content">
                    <div class="upload-image__icon">
                      <fa icon="cloud-arrow-up"></fa>
                    </div>
                    <div class="upload-image__description">
                      <p class="upload-image__description__text">
                        <strong>Click to upload</strong>
                        <span>or drag and drop</span>
                      </p>
                      <p class="upload-image__description__type">
                        png,jpg,svg,gif (1100x225px)
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="the-form__item is-required" label="Step by step guide">
              <label for="step" class="the-form__item-label"
                >Step by step guide</label
              >
              <div class="the-form__item-content">
                <div class="the-input">
                  <textarea
                    rows="6"
                    id="step"
                    :style="{ minHeight: `32.6px` }"
                    placeholder="Enter a description"
                    autocomplete="off"
                    class="textarea"
                  />
                </div>
              </div>
            </div>
            <div
              class="the-form__item is-required"
              label="Project Introduction"
            >
              <label for="project-intro" class="the-form__item-label"
                >Project Introduction</label
              >
              <div class="the-form__item-content">
                <div class="the-input">
                  <textarea
                    rows="6"
                    id="project-intro"
                    :style="{ minHeight: `32.6px` }"
                    placeholder="Enter a description"
                    autocomplete="off"
                    class="textarea"
                  />
                </div>
              </div>
            </div>
            <div class="the-form__item is-required" label="About the community">
              <label for="about" class="the-form__item-label"
                >About the community</label
              >
              <div class="the-form__item-content">
                <div class="the-input">
                  <textarea
                    rows="6"
                    id="about"
                    :style="{ minHeight: `32.6px` }"
                    placeholder="Enter a description"
                    autocomplete="off"
                    class="textarea"
                  />
                </div>
              </div>
            </div>
            <div class="the-form__item is-required" label="Rewarding note">
              <label for="reward" class="the-form__item-label"
                >Rewarding note</label
              >
              <div class="the-form__item-content">
                <div class="the-input">
                  <textarea
                    rows="6"
                    id="reward"
                    :style="{ minHeight: `32.6px` }"
                    placeholder="Enter a description"
                    autocomplete="off"
                    class="textarea"
                  />
                </div>
              </div>
            </div>
            <div class="the-form__item is-required" label="Start time">
              <label for="start-time" class="the-form__item-label"
                >Start time</label
              >
              <div class="the-form__item-content">
                <div class="the-input">
                  <el-date-picker
                    v-model="value1"
                    type="datetime"
                    placeholder="Select date and time"
                    popper-class="the-date-picker"
                  />
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>


<script lang="ts" setup>
import { ref } from "vue";
const value1 = ref("");
</script>

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
.upload-image_file {
  display: none;
  overflow: visible;
}
.upload-image__content {
  color: var(--white-color);
  padding: 16px 24px;
  box-sizing: border-box;
}
.upload-image__icon {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: #fcfcfc;
  margin: 0 auto;
  color: #386df5;
  font-size: x-large;
  display: flex;
  justify-content: center;
  align-items: center;
}
.upload-image__description {
  margin-top: 12px;
}
.upload-image__description__text {
  line-height: 1.5;
  font-size: 1.4rem;
}
.upload-image__description__text strong {
  font-weight: 700;
  margin-right: 3px;
}

.upload-image__description__type {
  font-size: 1.2rem;
  line-height: 1.5;
}
.el-date-editor.el-input,
.el-date-editor.el-input__wrapper {
  width: 100%;
  max-width: 474px;
}
</style>