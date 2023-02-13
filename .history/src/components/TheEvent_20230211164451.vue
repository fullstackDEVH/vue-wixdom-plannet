<template>
  <div class="the-event">
    <h2 class="the-heading--left">Events</h2>
    <div class="event__control">
      <div class="input-container">
        <input type="text" class="input-inner" placeholder="Search" />
        <span class="input-inner__icon"> </span>
      </div>
    </div>
  </div>
</template>

<style lang="css">
.the-event {
  width: 100%;
}
.event__control {
  margin-top: 56px;
  display: flex;
  align-items: center;
}
.event__control-search {
  max-width: 272px;
}
</style>

<script lang="ts">
export default {};
</script>