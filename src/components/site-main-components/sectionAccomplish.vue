<template>
  <section class="container" id="accomplishments">
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
        <div class="numbers">200</div>
        <div class="text-uppercase txt">online instructors</div>
      </div>
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style lang="scss">
@import "@/assets/scss/variables.scss";

#accomplishments {
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
    transform: rotate(180deg);
  }
  .numbers,
  .txt {
    text-align: center;
  }
  .numbers {
    font-weight: 700;
    font-size: 1.8rem;
    margin-bottom: 0.5rem;
    color: $brand_primary;
  }
  .txt {
    color: $light_grey;
  }
}
</style>