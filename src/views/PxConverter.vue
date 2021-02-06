<template>
  <PageTitle>Pixel converter</PageTitle>
  <PageSubtitle>Px to Em conversion made simple</PageSubtitle>
  <header class="px-converter__header">
    <PxForm :size-list="sizeList" @newSize="handleSubmit" />
  </header>
  <pre>{{ sizeList }}</pre>
</template>

<script>
import PageTitle from "../components/page/PageTitle.vue";
import PageSubtitle from "../components/page/PageSubtitle.vue";
import PxForm from "../components/modules/px/PxForm.vue";
import { copy } from "../utils/clipboard";
import { convert } from "../utils/pxConverter";
export default {
  name: "PxConverter",
  components: { PxForm, PageSubtitle, PageTitle },
  data() {
    return {
      sizeList: [],
    };
  },
  methods: {
    handleSubmit({ size, base }) {
      if (!this.sizeList.find((s) => s === size)) {
        // this size hasn't already been added
        this.sizeList.push(size);
        this.sizeList.sort((a, b) => a - b);
      }

      copy(`${convert(size, base)}em`).then(() => {
        // successfully added to board
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.px-converter {
  &__header {
    display: flex;
    justify-content: flex-start;
  }
}
</style>
