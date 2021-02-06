<template>
  <FlashProvider>
    <div class="default-layout">
      <BaseHeader />
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
  display: flex;
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

  &__wrapper {
    position: relative;
    flex: 1;
    min-width: 0;
    display: flex;
    flex-direction: column;
  }
}
</style>
