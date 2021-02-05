<template>
  <header class="header">
    <BaseLogo />
  </header>
</template>

<script>
import BaseLogo from "../BaseLogo.vue";
export default {
  name: "BaseHeader",
  components: { BaseLogo },
};
</script>

<style lang="scss" scoped>
.header {
  width: 15em;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 2.5em 1.5em;
}
</style>
