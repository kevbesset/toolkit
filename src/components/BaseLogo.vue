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
