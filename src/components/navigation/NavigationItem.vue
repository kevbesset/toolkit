<template>
  <BaseButton :to="item.route" :class="classList">
    {{ item.label }}
  </BaseButton>
</template>

<script>
import BaseButton from "../BaseButton.vue";

const BLOCK_SELECTOR = "nav-item";
export default {
  name: "NavigationItem",
  components: { BaseButton },
  props: {
    item: { type: Object, required: true },
    active: Boolean,
  },
  computed: {
    classList() {
      return [
        BLOCK_SELECTOR,
        {
          [`${BLOCK_SELECTOR}--active`]: this.active,
        },
      ];
    },
  },
};
</script>

<style lang="scss" scoped>
.nav-item {
  font-weight: bold;
  text-align: center;
  width: 100%;
  border-radius: 0;
  border-right: 2px solid transparent;
  color: var(--important-text-color);

  &--active {
    color: var(--primary-color);
    border-color: var(--primary-color);
  }
}
</style>
