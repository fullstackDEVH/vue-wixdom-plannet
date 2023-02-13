<template>
  <div class="the-pagination">
    <button type="button" class="btn-prev">
      <fa icon="angle-left" class="btn-prev-icon" />
    </button>
    <ul class="pager">
        <li>1</li>
    </ul>
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
.btn-prev {
  font-size: 1.4rem;
  border-radius: var(--border-radius-8);
  height: 30px;
  margin: 0 4px;
  border: none;
  padding: 4px 16px;
  background: 50% no-repeat;
  background-size: 16px;
  background-color: #222933;
  color: #eee;
  cursor: pointer;
  /* cursor: not-allowed; */
}
.btn-prev-icon {
  display: block;
  font-size: 1.2rem;
  font-weight: 700;
}
.pager {
  user-select: none;
  list-style: none;
  display: inline-block;
  vertical-align: top;
  font-size: 0;
  padding: 0;
  margin: 0;
}
</style>