<template>
  <FlashProvider>
    <div class="default-layout">
      <BaseHeader class="default-layout__header" />
      <RouterView v-slot="{ Component }">
        <transition name="default-layout-" mode="out-in">
          <BasePage :key="Component" class="default-layout__wrapper">
            <component :is="Component" />
          </BasePage>
        </transition>
      </RouterView>
    </div>
  </FlashProvider>
</template>

<script>
import BaseHeader from "../components/BaseHeader.vue";
import BasePage from "../components/page/BasePage.vue";
import FlashProvider from "../components/flash/FlashProvider.vue";
export default {
  name: "DefaultLayout",
  components: { FlashProvider, BasePage, BaseHeader },
};
</script>

<style lang="scss" scoped>
.default-layout {
  min-height: 100vh;

  &--enter-active,
  &--leave-active {
    transition: opacity var(--default-transition-duration);
  }

  &--enter,
  &--leave-to {
    opacity: 0;
  }

  &--enter-to,
  &--leave {
    opacity: 1;
  }

  &__header {
    position: fixed;
    top: 0;
    bottom: 0;
  }

  &__wrapper {
    position: relative;
    margin-left: 5em;
    width: calc(100% - 5em);
  }
}
</style>
