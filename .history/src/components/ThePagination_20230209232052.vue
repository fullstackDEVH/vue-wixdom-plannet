<template>
  <div class="the-pagination">
    <button type="button">
      <fa icon="angle-left" class="btn-icon" />
    </button>
    <ul class="pager">
      <li class="number active">1</li>
    </ul>
    <button type="button">
      <fa icon="angle-left" class="btn-icon" />
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
.the-pagination button {
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
.btn-icon {
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
.pager li {
  padding: 0 4px;
  vertical-align: top;
  display: inline-block;
  font-size: 1.4rem;
  min-width: 35.5px;
  height: 30px;
  line-height: 30px;
  box-sizing: border-box;
  text-align: center;
  border-radius: 8px;
  background: linear-gradient(239deg, #3262dd, #7af4ae 98.78%);
  color: #fff;
  margin: 0 4px;
}
</style>