<template>
  <div class="the-create-event">
    <div class="the-container">
      <div class="create-event__top">
        <h2 class="the-heading--center">Create a new Events</h2>
        <div class="create-event__step">
          <TheStep />
        </div>
      </div>
      <div class="create-event__card">
        <h3 class="the-heading--center medium">1. Setup Event</h3>
        <div class="create-event__card-body"></div>
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
</style>