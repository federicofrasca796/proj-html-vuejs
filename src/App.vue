<template>
  <div id="app">
    <SiteHeader />
    <SiteMain />
    <SiteFooter />
  </div>
</template>

<script>
import SiteHeader from "./components/SiteHeader.vue";
import SiteMain from "./components/SiteMain.vue";
import SiteFooter from "./components/SiteFooter.vue";

export default {
  name: "App",
  components: {
    SiteHeader,
    SiteMain,
    SiteFooter,
  },
};
</script>

<style lang="scss">
@import "./assets/scss/variables.scss";
@import "~bootstrap/scss/bootstrap";
@import "./assets/scss/common.scss";

#online_courses,
#book_store {
  .card {
    a {
      color: $brand_purple;
      transition: color 0.5s;
      &:hover {
        color: $brand_primary;
      }
    }
  }
}
</style>
