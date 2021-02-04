<template>
  <div class="default-layout">
    <main class="default-layout__wrapper">
      <slot></slot>
    </main>
  </div>
</template>

<script>
export default {
  name: "DefaultLayout",
};
</script>

<style lang="scss" scoped>
.default-layout {
  display: flex;
  flex-direction: column;
  min-height: 100vh;

  &__wrapper {
    position: relative;
    flex: 1;
    min-height: 0;
    display: flex;
    flex-direction: column;
  }
}
</style>
