<template>
  <component :is="tag" class="container">
    <slot />
  </component>
</template>

<script>
export default {
  name: "BaseContainer",
  props: {
    tag: { type: String, default: "div" },
  },
};
</script>

<style lang="scss" scoped>
.container {
  width: 100%;
  padding-left: 1.5em;
  padding-right: 1.5em;

  @media (min-width: 36em) {
    max-width: 33.75em;
    margin-left: auto;
    margin-right: auto;
  }

  @media (min-width: 48em) {
    max-width: 45em;
  }

  @media (min-width: 62em) {
    max-width: 60em;
  }

  @media (min-width: 75em) {
    max-width: 71.25em;
  }
}
</style>
