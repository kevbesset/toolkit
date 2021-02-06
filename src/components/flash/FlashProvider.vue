<template>
  <slot />
  <transition-group tag="ul" name="flash-list-" class="flash-list" appear>
    <li
      v-for="(flash, index) in flashList"
      :key="`${flash.type}-${index}`"
      class="flash-list__item"
    >
      <DefaultFlash :type="flash.type">
        {{ flash.message }}
      </DefaultFlash>
    </li>
  </transition-group>
</template>

<script>
import DefaultFlash from "./DefaultFlash.vue";
import FlashType from "../../config/FlashType";

export default {
  name: "FlashProvider",
  components: { DefaultFlash },
  data() {
    return {
      flashList: [],
    };
  },
  provide() {
    return {
      flash: (message, type = FlashType.INFO) => {
        this.flashList.push({
          type,
          message,
        });
      },
    };
  },
};
</script>

<style lang="scss" scoped>
.flash-list {
  position: fixed;
  top: 1em;
  right: 1em;
  width: 18em;

  &__item {
    display: block;
    margin-bottom: 0.5em;
  }
}
</style>
