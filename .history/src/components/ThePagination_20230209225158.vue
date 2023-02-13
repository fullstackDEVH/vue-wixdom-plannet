<template>
  <div class="the-pagination"></div>
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