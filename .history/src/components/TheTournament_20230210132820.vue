<template>
  <div class="the-tournament">
    <div class="the-tournament__profile">
      <img
        src="https://static.wixdomplanet.io/public/images/wxp/Org_Cover_WixdomPlanet.png"
        alt="cover"
        class="the-tournament__profile-cover"
      />
      <div class="the-tournament__profile-inner"></div>
    </div>
  </div>
</template>
<style scoped>
.the-tournament__profile {
  position: relative;
}
.the-tournament__profile-cover {
  aspect-ratio: 1137/232;
  width: 100%;
  object-fit: cover;
  max-width: 100%;
}
.the-tournament__profile-inner {
  margin-top: -40px;
  display: flex;
  justify-content: space-between;
  padding-top: 12px;
}
</style>
