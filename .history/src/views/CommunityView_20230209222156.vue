<template>
  <main class="layout">
    <div class="container">
      <div class="community">
        <h1 class="community__heading">Communities</h1>
        \
        <div class="community__find">
          <div class="spacer"></div>
          <div class="community__find-input">
            <input
              type="text"
              placeholder="Find a community"
              autocomplete="off"
            />
          </div>
        </div>
      </div>
    </div>
  </main>
</template>
<style scoped>
.layout {
  padding-top: var(--header-height);
}
.community {
  padding: 40px 0;
}
.community__heading {
  font-size: 4.8rem;
  text-align: center;
  color: var(--white-color);
  font-weight: 700;
  margin-bottom: 0;
  line-height: 4.8rem;
}
.community__find {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 40px;
}
.spacer {
  flex: 1;
}
.community__find-input {
  width: 280px;
  box-sizing: border-box;
  position: relative;
  font-size: 1.4rem;
  display: inline-block;
}
.community__find-input input {
  background-color: var(--background-color-layer);
  border-radius: 8px;
  padding-left: 30px;
  border: 1px solid var(--gray-color);
  color: var(--input-color);
  display: inline-block;
  font-size: 1.4rem;
  height: 40px;
  line-height: 40px;
  outline: none;
  padding: 0 15px;
  width: 100%;
}
</style>
