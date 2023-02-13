<template>
  <div class="the-create-event">
    <div class="the-container">
      <div class="create-event__top">
        <h2 class="the-heading--center">Create a new Events</h2>
        <div class="create-event__step">
          <TheStep />
        </div>
      </div>
      <div class="the-card"></div>
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
</style>