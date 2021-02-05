<template>
  <header class="header">
    <BaseContainer class="header__container">
      <BaseLogo />
    </BaseContainer>
  </header>
</template>

<script>
import BaseContainer from "./BaseContainer.vue";
import BaseLogo from "./BaseLogo.vue";
export default {
  name: "BaseHeader",
  components: { BaseLogo, BaseContainer },
};
</script>

<style lang="scss" scoped>
.header {
  height: 3.125em;
  display: flex;
  align-items: center;
  border-bottom: 1px solid var(--default-color-opacity);
  margin-bottom: 1.25em;
}
</style>
