<template>
  <component :is="tag" class="page">
    <slot />
  </component>
</template>

<script>
export default {
  name: "BasePage",
  props: {
    tag: { type: String, default: "main" },
  },
};
</script>

<style lang="scss" scoped>
.page {
  padding: 2em;
}
</style>
