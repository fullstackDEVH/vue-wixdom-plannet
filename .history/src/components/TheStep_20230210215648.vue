<template>
  <div class="the-step">
    <div class="grid">
      <div class="row">
        <div class="col l-4">
          <div class="the-step__process is-process">
            <div class="the-step__process-line">
              <i class="the-step__process-line-inner"></i>
            </div>
          </div>
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
.the-step__process-line {
  position: absolute;
  border-color: inherit;
  background-color: #525252;
  top: 14px;
  height: 6px;
  border-radius: 25px;
  overflow: hidden;
  left: 62%;
  right: -38%;
}
.the-step__process-line-inner {
  transition-delay: 0ms;
  width: 50% !important;
  border-color: #386df5;
  border-width: 3px !important;
  display: block;
  border: 1px solid;
  transition: 0.15s ease-out;
  box-sizing: border-box;
  height: 0;
}
</style>