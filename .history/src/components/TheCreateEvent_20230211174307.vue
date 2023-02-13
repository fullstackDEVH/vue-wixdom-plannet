<template>
  <div class="the-create-event">
    <div class="the-container">
      <div class="create-event__top">
        <TheStep />
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
</style>