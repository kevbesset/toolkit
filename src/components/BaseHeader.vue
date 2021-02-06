<template>
  <header class="header">
    <BaseLogo />
    <MainNavigation />
    <GithubLink />
  </header>
</template>

<script>
import BaseContainer from "./BaseContainer.vue";
import BaseLogo from "./BaseLogo.vue";
import MainNavigation from "./navigation/MainNavigation.vue";
import GithubLink from "./github/GithubLink.vue";
export default {
  name: "BaseHeader",
  components: { GithubLink, MainNavigation, BaseLogo, BaseContainer },
};
</script>

<style lang="scss" scoped>
.header {
  width: 5em;
  background-color: var(--secondary-background-color);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 2em 0;
  box-shadow: var(--default-box-shadow);
}
</style>
