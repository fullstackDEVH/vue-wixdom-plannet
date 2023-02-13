<template>
  <div class="the-event">
    <h2 class="the-heading--left">Events</h2>
    <div class="event__control">
      <div class="event__control-search">
        <input
          type="text"
          class="event__control-search-inner"
          placeholder="Search"
        />
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
.event__control-search-inner {
  width: 100%;
  display: inline-block;
  border-radius: 8px;
  padding-left: 30px;
  padding-right: 15px;
  background-color: #1c1c1e;
  border: 1px solid #3a3a3c;
  color: #eee;

  height: 40px;
  line-height: 40px;
  outline: none;
  transition: border-color 0.2s cubic-bezier(0.645, 0.045, 0.355, 1);
}
</style>

<script lang="ts">
export default {};
</script>