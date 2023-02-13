<template>
  <div class="the-step">
    <div class="grid">
      <div class="row">
        <div class="col l-4">
          <div class="the-step__process is-process"></div>
        </div>
      </div>
    </div>
  </div>
</template>

.<style scoped>
.the-step {
  white-space: nowrap;
  display: flex;
}
.the-step__process {
  text-align: center;
  position: relative;
  width: 100%;
}
.the-step__process.is-process {
  color: #ccc;
  border-color: #ccc;
}
</style>