<template>
  <BaseCard :class="classList" @click="handleClick">
    <div class="px-item__em">
      {{ convertedSize }}
      <div class="px-item__unit">em</div>
    </div>
    <div class="px-item__px">
      {{ size }}
      <div class="px-item__unit">px</div>
    </div>
  </BaseCard>
</template>

<script>
import BaseCard from "../../BaseCard.vue";
import { convert } from "../../../utils/pxConverter";
import { copy } from "../../../utils/clipboard";
import FlashType from "../../../config/FlashType";

const BLOCK_SELECTOR = "px-item";

export default {
  name: "PxItem",
  components: { BaseCard },
  inject: ["flash"],
  props: {
    size: { type: Number, required: true },
    base: { type: Number, required: true },
  },
  computed: {
    classList() {
      return [
        BLOCK_SELECTOR,
        {
          [`${BLOCK_SELECTOR}--base`]: this.size === this.base,
        },
      ];
    },
    convertedSize() {
      return convert(this.size, this.base);
    },
  },
  methods: {
    handleClick() {
      const em = `${this.convertedSize}em`;
      copy(em).then(() => {
        // successfully added to board
        this.flash(`${em} copied`, FlashType.SUCCESS);
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.px-item {
  cursor: pointer;
  opacity: 0.7;
  transition: opacity var(--default-transition-duration);

  &:hover {
    opacity: 1;
  }

  &--base {
    opacity: 0.3;
  }

  &__px,
  &__em {
    display: flex;
    align-items: baseline;
    font-weight: bold;
  }

  &__px {
    justify-content: flex-end;
    color: var(--important-text-color);
  }

  &__em {
    font-size: 0.75em;
  }

  &__unit {
    font-size: 0.75em;
    font-weight: normal;
    margin-left: 0.25em;
  }
}
</style>
