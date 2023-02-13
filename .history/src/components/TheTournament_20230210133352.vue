<template>
  <div class="the-tournament">
    <div class="the-tournament__profile">
      <img
        src="https://static.wixdomplanet.io/public/images/wxp/Org_Cover_WixdomPlanet.png"
        alt="cover"
        class="the-tournament__profile-cover"
      />
      <div class="the-tournament__profile-inner">
        <img
          src="https://static.wixdomplanet.io/public/images/Logo-wxp.png"
          alt="avatar"
          class="the-tournament__profile-avatar"
        />
        <div class="the-tournament__profile-inner-info">
          <h3 class="the-tournament__profile-inner-info-name">WixdomPlanet</h3>
          <p class="the-tournament__profile-inner-info-desc">
            WixdomPlanet is a D'App that helps projects to acquire new users and
            educate them to become true fans
          </p>
        </div>
      </div>
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
.the-tournament__profile-avatar {
  margin-left: 32px;
  border-radius: 50%;
  background-color: var(--white-color);
  width: 164px;
  height: 164px;
  object-fit: contain;
}
.the-tournament__profile-inner-info {
  padding: 52px 16px 16px;
  flex: 1;
  font-weight: 700;
  font-size: 2.4rem;
  line-height: 3.2rem;
}
.the-tournament__profile-inner-info-name {
  text-align: left;
  color: var(--white-color);
  font-weight: 700;
  margin-bottom: 0;
  font-size: 2.4rem;
}
.the-tournament__profile-inner-info-desc {
  text-align: left;
  margin-top: 4px;
  font-size: 1.6rem;
  line-height: 2.4rem;
  color: var(--gray-color-community);
  font-weight: 400;
  margin-bottom: 0;
  max-width: 700px;
  white-space: pre-line;
  word-break: break-word;
}
</style>
