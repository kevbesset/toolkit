<template>
  <ul class="px-list">
    <li v-for="size in sizes" :key="size" class="px-list__item">
      <PxItem :size="size" :base="base" />
    </li>
  </ul>
</template>

<script>
import PxItem from "./PxItem.vue";

export default {
  name: "PxList",
  components: { PxItem },
  props: {
    base: { type: Number, required: true },
    sizes: { type: Array, required: true },
  },
};
</script>

<style lang="scss" scoped>
.px-list {
  width: 100%;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-gap: 1em;
  padding: 0;

  &__item {
    display: block;
  }
}
</style>
