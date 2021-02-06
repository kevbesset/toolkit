<template>
  <component :is="tag" :class="classList">
    <slot />
  </component>
</template>

<script>
const BLOCK_SELECTOR = "card";

export default {
  name: "BaseCard",
  props: {
    tag: { type: String, default: "div" },
    primary: Boolean,
  },
  computed: {
    classList() {
      return [
        BLOCK_SELECTOR,
        {
          [`${BLOCK_SELECTOR}--primary`]: this.primary,
        },
      ];
    },
  },
};
</script>

<style lang="scss" scoped>
.card {
  display: block;
  background-color: var(--important-background-color);
  border-radius: 0.375em;
  box-shadow: var(--default-box-shadow);
  padding: 0.75em;

  &--primary {
    background-color: var(--primary-color);
    color: var(--reverse-primary-color);
  }
}
</style>
