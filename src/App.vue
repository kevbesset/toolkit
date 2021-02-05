<template>
  <DefaultLayout class="app">
    <RouterView v-slot="{ Component }">
      <transition name="app-" mode="out-in">
        <component :is="Component" />
      </transition>
    </RouterView>
  </DefaultLayout>
</template>
<script>
import DefaultLayout from "./layouts/DefaultLayout.vue";

export default {
  components: { DefaultLayout },
};
</script>

<style lang="scss" scoped>
.app {
  &--enter-active,
  &--leave-active {
    transition: opacity 150ms;
  }

  &--enter,
  &--leave-to {
    opacity: 0;
  }

  &--enter-to,
  &--leave {
    opacity: 1;
  }
}
</style>
