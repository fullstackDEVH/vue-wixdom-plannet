<template>
  <div class="the-pagination">
    <button type="button" class="btn-prev">
      <fa icon="angle-left" />
    </button>
  </div>
</template>
<style scoped>
.the-pagination {
  white-space: nowrap;
  padding: 2px 5px;
  color: #fff;
  font-weight: 700;
}
.the-pagination::before {
  display: table;
  content: "";
}
</style>