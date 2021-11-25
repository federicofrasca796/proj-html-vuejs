<template>
  <div id="site_main">
    <section class="results_overview container">
      <div class="row">
        <div class="col-3 accomplishment">
          <div class="numbers">1.926</div>
          <div class="text-uppercase txt">finished session</div>
        </div>
        <div class="col-3 accomplishment">
          <div class="numbers">100%</div>
          <div class="text-uppercase txt">satisfaction rate</div>
        </div>
        <div class="col-3 accomplishment">
          <div class="numbers">3092+</div>
          <div class="text-uppercase txt">enrolled learners</div>
        </div>
        <div class="col-3 accomplishment">
          <div class="numbers">20</div>
          <div class="text-uppercase txt">online instructors</div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  props: {},

  data() {
    return {};
  },

  methods: {},
};
</script>

<style lang="scss">
@import "../assets/scss/variables.scss";

#site_main {
  section {
    padding: 5rem 0;
  }
  .accomplishment {
    position: relative;
  }
  .accomplishment::before {
    content: url("../assets/img/background-pattern-grid-line-06.png");
    position: absolute;
    top: 0;
  }
  .accomplishment:last-child::after {
    content: url("../assets/img/background-pattern-grid-line-06.png");
    position: absolute;
    top: 0;
    right: 0;
  }
  .numbers,
  .txt {
    font-weight: 800;
    text-align: center;
  }
  .numbers {
    font-size: 1.8rem;
    margin-bottom: 0.5rem;
    color: $brand_primary;
  }
}
</style>