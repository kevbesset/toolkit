<template>
  <nav class="main-nav">
    <NavigationItem
      v-for="item in menuItems"
      :key="item.label"
      :item="item"
      :active="$route.name === item.route.name"
      class="main-nav__item"
    >
      {{ item.label }}
    </NavigationItem>
  </nav>
</template>

<script>
import RouteName from "../../config/RouteName";
import NavigationItem from "./NavigationItem.vue";

export default {
  name: "MainNavigation",
  components: { NavigationItem },
  data() {
    return {
      menuItems: [{ label: "Px", route: { name: RouteName.PIXEL_CONVERTER } }],
    };
  },
};
</script>

<style lang="scss" scoped>
.main-nav {
  display: flex;
  flex-direction: column;
  width: 100%;
}
</style>
