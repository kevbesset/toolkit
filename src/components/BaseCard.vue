<template>
  <component :is="tag" class="card">
    <slot />
  </component>
</template>

<script>
export default {
  name: "BaseCard",
  props: {
    tag: { type: String, default: "div" },
  },
};
</script>

<style lang="scss" scoped>
.card {
  display: block;
  background-color: var(--secondary-background-color);
  border-radius: 0.375em;
  box-shadow: var(--default-box-shadow);
}
</style>
