<template>
  <BaseCard tag="form" @submit.prevent="handleSubmit" class="f-px">
    <FormInput type="number" name="px_base" class="f-px__row" v-model="base">
      Base
    </FormInput>
    <FormInput
      type="number"
      name="px_add"
      class="f-px__row"
      v-model="newSize"
      required
      autofocus
    >
      Size in pixel
    </FormInput>
    <BaseButton primary type="submit" class="f-px__submit">Send</BaseButton>
  </BaseCard>
</template>

<script>
import BaseButton from "../../BaseButton.vue";
import BaseCard from "../../BaseCard.vue";
import FormInput from "../../FormInput.vue";

export default {
  name: "PxForm",
  components: { FormInput, BaseCard, BaseButton },
  props: {
    sizeList: { type: Array, required: true },
  },
  data() {
    return {
      newSize: null,
      base: 16,
    };
  },
  methods: {
    handleSubmit() {
      this.$emit("newSize", { size: this.newSize, base: this.base });
      this.newSize = null;
    },
  },
};
</script>

<style lang="scss" scoped>
.f-px {
  display: flex;
  align-items: flex-end;
  justify-content: space-between;

  &__row {
    margin-right: 0.5em;

    &:last-child {
      margin-right: 0;
    }
  }
}
</style>
