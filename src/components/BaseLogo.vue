<template>
  <div class="logo">Tool<strong class="logo__important">Kit</strong></div>
</template>

<script>
export default {
  name: "BaseLogo",
};
</script>

<style lang="scss" scoped>
.logo {
  font-weight: bold;
  color: var(--default-color);
  letter-spacing: -0.075em;
  font-size: 1.25em;

  &__important {
    color: var(--primary-color);
  }
}
</style>
