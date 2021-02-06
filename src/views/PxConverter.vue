<template>
  <PageTitle>Pixel converter</PageTitle>
  <PageSubtitle>Px to Em conversion made simple</PageSubtitle>
  <PxForm :size-list="sizeList" @newSize="handleSubmit">
    <template #default="{ base }">
      <PxList :base="base" :sizes="sizeList" />
    </template>
  </PxForm>
</template>

<script>
import PageTitle from "../components/page/PageTitle.vue";
import PageSubtitle from "../components/page/PageSubtitle.vue";
import PxForm from "../components/modules/px/PxForm.vue";
import PxList from "../components/modules/px/PxList.vue";
import { copy } from "../utils/clipboard";
import { convert, defaultSizes } from "../utils/pxConverter";
import FlashType from "../config/FlashType";

export default {
  name: "PxConverter",
  components: { PxList, PxForm, PageSubtitle, PageTitle },
  inject: ["flash"],
  data() {
    return {
      sizeList: defaultSizes(),
    };
  },
  methods: {
    handleSubmit({ size, base }) {
      if (!this.sizeList.find((s) => s === size)) {
        // this size hasn't already been added
        this.sizeList.push(size);
        this.sizeList.sort((a, b) => a - b);
      }

      const em = `${convert(size, base)}em`;
      copy(em).then(() => {
        // successfully added to board
        this.flash(`${em} copied`, FlashType.SUCCESS);
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.px-converter {
}
</style>
