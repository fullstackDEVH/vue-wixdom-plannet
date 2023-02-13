<template>
  <div v-if="!isNewEvent" class="the-event">
    <h2 class="the-heading--left">Events</h2>
    <div class="event__control">
      <div class="event__control-search input-container">
        <input type="text" class="input-inner" placeholder="Search" />
        <span class="input-inner__prefix">
          <fa icon="search" class="input-inner__icon" />
        </span>
      </div>
      <div class="the-spacer"></div>
      <button @click="handleOpenCreate()" class="the-button primary">
        <fa icon="plus" class="the-button__icon" />
        <span>New Event</span>
      </button>
    </div>
    <div class="event__table">
      <div class="the-empty">
        <img
          src="https://community-testing.openlearn.io/images/img_empty_box.svg"
          alt="empty"
          class="the-empty__image"
        />
        <span class="the-empty__text">No data to display</span>
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
.event__table {
  margin-top: 24px;
  width: 100%;
}
</style>

<script lang="ts">
import TheCreateEvent from "./TheCreateEvent.vue";
export default {
  data() {
    return {
      isNewEvent: false,
    };
  },
  methods: {
    handleOpenCreate() {
      this.isNewEvent = true;
    },
  },
};
</script>