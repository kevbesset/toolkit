<template>
  <component :is="tag" class="page-title">
    <slot />
  </component>
</template>

<script>
export default {
  name: "PageTitle",
  props: {
    tag: { type: String, default: "h1" },
  },
};
</script>

<style lang="scss" scoped>
.page-title {
  font-weight: bold;
  font-size: 1.5em;
  margin: 0 0 0.5em;
  color: var(--important-text-color);
}
</style>
