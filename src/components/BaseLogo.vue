<template>
  <BaseButton :to="{ name: RouteName.HOME }" primary square class="logo">
    tk
  </BaseButton>
</template>

<script>
import BaseButton from "./BaseButton.vue";
import RouteName from "../config/RouteName";
export default {
  name: "BaseLogo",
  components: { BaseButton },
  data() {
    return {
      RouteName,
    };
  },
};
</script>

<style lang="scss" scoped>
.logo {
  box-shadow: 0 0 0.75em 0.01em var(--primary-color);
}
</style>
