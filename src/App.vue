<template>
  <div id="app">
    <nav id="side_nav">
      <ul>
        <li>
          <a href="">
            <img src="./assets/img/png-icons/triangular-ruler.png" alt="" />
          </a>
        </li>
        <li>
          <a href="">
            <img
              src="./assets/img/png-icons/help-lifeguard-symbol.png"
              alt=""
            />
          </a>
        </li>
        <li>
          <a href="">
            <img src="./assets/img/png-icons/book.png" alt="" />
          </a>
        </li>
        <li>
          <a href="">
            <img src="./assets/img/png-icons/shopping-cart.png" alt="" />
          </a>
        </li>
      </ul>
    </nav>
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

#side_nav {
  position: fixed;
  top: 20%;
  right: 0;
  z-index: 99;
  ul {
    background: #fff;
    border-radius: 0.5rem;
    box-shadow: -3px 0 10px -2px rgb(0 0 0 / 10%);
    padding: 0.2rem 0.8rem;
  }
  li {
    padding: 0.6rem 0;
  }
  img {
    width: 20px;
    filter: invert(21%) sepia(4%) saturate(46%) hue-rotate(314deg)
      brightness(90%) contrast(96%);
  }
}

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
