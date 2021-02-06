<template>
  <BaseButton
    href="https://github.com/kevbesset/toolkit"
    target="_blank"
    class="github-link"
  >
    Github
  </BaseButton>
</template>

<script>
import BaseButton from "../BaseButton.vue";
export default {
  name: "GithubLink",
  components: { BaseButton },
};
</script>

<style lang="scss" scoped>
.github-link {
  font-size: 0.75em;
}
</style>
