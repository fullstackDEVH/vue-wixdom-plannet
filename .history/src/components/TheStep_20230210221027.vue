<template>
  <div class="the-step">
    <div class="grid">
      <div class="row">
        <div class="col l-4 no-padding">
          <div class="the-step__process is-process">
            <div class="the-step__process-line">
              <i class="the-step__process-line-inner"></i>
            </div>
            <div class="the-step__process-index is-text">
              <span>1</span>
            </div>
          </div>
        </div>
        <div class="col l-4 no-padding">
          <div class="the-step__process is-wait">
            <div class="the-step__process-line">
              <i class="the-step__process-line-inner"></i>
            </div>
            <div class="the-step__process-index">
              <span>2</span>
            </div>
          </div>
        </div>
        <div class="col l-4 no-padding">
          <div class="the-step__process is-wait">
            <div class="the-step__process-index">
              <span>3</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

.<style scoped>
.no-padding {
  padding: 0;
}
.the-step {
  white-space: nowrap;
  display: flex;
}
.the-step__process {
  text-align: center;
  position: relative;
  width: 100%;
}

.the-step__process.is-process
  .the-step__process-line
  .the-step__process-line-inner {
  color: #ccc;
  border-color: #386df5;
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
  width: 50%;
  border: 3px solid;
  border-color: #525252;
  display: block;
  /* transition-delay: 0ms; */
  transition: 0.15s ease-out;
  height: 0;
}

.the-step__process-index {
  position: relative;
  z-index: 1;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  width: 24px;
  height: 24px;
  font-size: 14px;
  box-sizing: border-box;
  background: #222933;
  transition: 0.15s ease-out;
}
.the-step__process-index {
  width: 36px;
  height: 36px;
  border: none;
  background-color: #525252;
  border-radius: 50%;
  color: #fff;
}
.the-step__process-index.is-text {
  background-color: #386df5;
  border-color: #386df5;
}
.the-step__process-index span {
  display: inline-block;
  user-select: none;
  text-align: center;
  font-weight: 700;
  line-height: 1;
  color: inherit;
}
</style>