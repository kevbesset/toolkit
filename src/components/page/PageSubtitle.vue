<template>
  <component :is="tag" class="page-subtitle">
    <slot />
  </component>
</template>

<script>
export default {
  name: "PageSubtitle",
  props: {
    tag: { type: String, default: "p" },
  },
};
</script>

<style lang="scss" scoped>
.page-subtitle {
  font-weight: normal;
  margin: 0 0 1em;
  font-size: 0.75em;
}
</style>
