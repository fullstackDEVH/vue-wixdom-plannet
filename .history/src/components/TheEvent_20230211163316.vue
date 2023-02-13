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
  background-color: #1c1c1e;
  border-radius: 8px;
  padding-left: 30px;
  border: 1px solid #3a3a3c;
  box-sizing: border-box;
  color: #eee;
  display: inline-block;
  font-size: inherit;
  height: 40px;
  line-height: 40px;
  outline: none;
  padding: 0 15px;
  transition: border-color 0.2s cubic-bezier(0.645, 0.045, 0.355, 1);
  width: 100%;
}
</style>

<script lang="ts">
export default {};
</script>