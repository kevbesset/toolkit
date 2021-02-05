<template>
  <div class="default-layout">
    <BaseHeader />
    <main class="default-layout__wrapper">
      <slot></slot>
    </main>
  </div>
</template>

<script>
import BaseHeader from "./BaseHeader.vue";
export default {
  name: "DefaultLayout",
  components: { BaseHeader },
};
</script>

<style lang="scss" scoped>
.default-layout {
  display: flex;
  min-height: 100vh;

  &__wrapper {
    position: relative;
    flex: 1;
    min-width: 0;
    display: flex;
    flex-direction: column;
    background-color: var(--content-background-color);
    border-radius: 2em;
    padding: 2.5em 1.5em;
  }
}
</style>
