<template>
  <transition name="flash-" appear>
    <component v-show="show" :is="tag" :class="classList">
      <div class="flash__icon">i</div>
      <div class="flash__body">
        <div class="flash__title">{{ type }}</div>
        <div class="flash__message">
          <slot />
        </div>
      </div>
      <BaseButton @click="close" square class="flash__close" />
    </component>
  </transition>
</template>

<script>
import BaseButton from "../BaseButton.vue";

const BLOCK_SELECTOR = "flash";
const DEFAULT_DURATION = 3000;

export default {
  name: "DefaultFlash",
  components: { BaseButton },
  props: {
    tag: { type: String, default: "div" },
    type: { type: String, default: "info" },
  },
  data() {
    return {
      show: true,
    };
  },
  mounted() {
    setTimeout(() => {
      this.close();
    }, DEFAULT_DURATION);
  },
  computed: {
    classList() {
      return [BLOCK_SELECTOR, `${BLOCK_SELECTOR}--${this.type}`];
    },
  },
  methods: {
    close() {
      this.show = false;
    },
  },
};
</script>

<style lang="scss" scoped>
.flash {
  --flash-color: var(--default-color);

  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.5em 1.25em;
  border-left: 2px solid var(--flash-color);
  background-color: var(--important-background-color);
  color: var(--default-color);
  box-shadow: var(--default-box-shadow);
  width: 100%;

  &--info {
    --flash-color: var(--info-color);
  }

  &--success {
    --flash-color: var(--success-color);
  }

  &--error {
    --flash-color: var(--error-color);
  }

  &--warning {
    --flash-color: var(--warning-color);
  }

  &--enter-active,
  &--leave-active {
    transition-property: transform;
    transition-duration: var(--default-transition-duration);
  }

  &--enter-from,
  &--leave-to {
    transform: translateX(100%);
  }

  &--enter-to,
  &--leave-from {
    transform: translateX(0);
  }

  &__icon {
    margin-right: 1.25em;
    width: 1.5em;
    height: 1.5em;
    font-size: 0.75em;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: var(--flash-color);
    color: var(--important-background-color);
    border-radius: 50%;
    font-style: italic;
    font-weight: bold;
  }

  &__title {
    color: var(--important-text-color);
    font-size: 0.75em;
    font-weight: bold;
    text-transform: capitalize;
    margin-bottom: 0.25em;
  }

  &__body {
    flex: 1;
  }

  &__message {
    font-size: 0.75em;
  }

  &__close {
    margin-right: -0.625em;

    &::before,
    &::after {
      position: absolute;
      left: 1em;
      content: " ";
      height: 1em;
      width: 2px;
      background-color: var(--default-color);
    }

    &::before {
      transform: rotate(45deg);
    }
    &::after {
      transform: rotate(-45deg);
    }
  }
}
</style>
