<template>
  <component :is="tag" v-bind="boundProps">
    <slot />
  </component>
</template>

<script>
export const ButtonType = Object.freeze({
  BUTTON: "button",
  SUBMIT: "submit",
  LINK: "a",
  ROUTER_LINK: "RouterLink",
});
const BLOCK_SELECTOR = "button";

export default {
  name: "BaseButton",
  props: {
    type: {
      type: String,
      default: ButtonType.BUTTON,
      validator(v) {
        return Object.values(ButtonType).includes(v);
      },
    },
    href: { type: String, default: null },
    to: { type: [String, Object], default: null },
    disabled: Boolean,
    square: Boolean,
    primary: Boolean,
  },
  computed: {
    typeAttr() {
      if ([ButtonType.BUTTON, ButtonType.SUBMIT].includes(this.type)) {
        return this.type;
      }

      // Default to type="button" when href is empty
      if (!this.href && !this.to) {
        return ButtonType.BUTTON;
      }

      return null;
    },
    tag() {
      return this.to
        ? ButtonType.ROUTER_LINK
        : this.href
        ? ButtonType.LINK
        : ButtonType.BUTTON;
    },
    classList() {
      return [
        BLOCK_SELECTOR,
        {
          [`${BLOCK_SELECTOR}--disabled`]: this.disabled,
          [`${BLOCK_SELECTOR}--square`]: this.square,
          [`${BLOCK_SELECTOR}--primary`]: this.primary,
        },
      ];
    },
    boundProps() {
      return {
        ...this.$attrs,
        type: this.typeAttr,
        class: this.classList,
        href: this.href,
        to: this.to,
        disabled: this.disabled,
      };
    },
  },
};
</script>

<style lang="scss" scoped>
.button {
  // reset button styles
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0.5em 1em;
  color: inherit;
  line-height: inherit;
  text-align: center;
  text-decoration: none;
  font-family: inherit;
  font-style: normal;
  font-size: 1em;
  font-weight: inherit;
  cursor: pointer;
  vertical-align: middle;
  -webkit-tap-highlight-color: transparent;
  border: inherit;
  background: inherit;
  border-radius: 0.5em;
  transition: all var(--default-transition-duration);

  &--primary {
    background-color: var(--primary-color);
    color: var(--reverse-primary-color);
    font-weight: bold;
  }

  &--square {
    width: 2em;
    height: 2em;
  }
}
</style>
