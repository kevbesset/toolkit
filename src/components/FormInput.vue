<template>
  <component :is="tag" class="f-input">
    <label v-show="!labelHidden" :for="name" class="f-input__label">
      <slot />
    </label>
    <input
      :type="type"
      :name="name"
      :id="name"
      class="f-input__input"
      v-model="inputValue"
      v-bind="$attrs"
    />
  </component>
</template>

<script>
export default {
  name: "FormInput",
  props: {
    tag: { type: String, default: "div" },
    name: { type: String, required: true },
    type: { type: String, default: "text" },
    modelValue: { default: "" },
    labelHidden: Boolean,
  },
  computed: {
    inputValue: {
      get() {
        return this.modelValue;
      },
      set(v) {
        // send data back to parent
        this.$emit("update:modelValue", v);
        return this.modelValue;
      },
    },
  },
};
</script>

<style lang="scss" scoped>
.f-input {
  &__label {
    display: block;
    font-size: 0.75em;
    margin-bottom: 0.75em;
  }

  &__input {
    color: var(--default-color);
    background: var(--default-background-color);
    border: inherit;
    border-radius: 0.375em;
    padding: 0.5em 1em;
  }
}
</style>
