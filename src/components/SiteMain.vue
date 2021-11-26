<template>
  <div id="site_main">
    <!-- SECTION 1 "Accomplishments" -->
    <section class="container">
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

    <!-- SECTION 2 "About Me" -->
    <sectionAboutMe />
    <!-- <section class="container">
      <div class="section_title primary_color">about me</div>
      <div class="row justify-content-between">
        <div class="col-4">
          <h2 class="text-capitalize">
            how to be an alpha male: the 15 habits of true alphas
          </h2>
        </div>
        <div class="col-6">
          <p class="copybait">
            Want to learn to be
            <span class="primary_color">an alpha male</span>? How to be more
            masculine? How to be the man you've always wanted to be?
          </p>
          <p>
            Your goals is to show the consistency of business, core values, and
            customer care. Punctuality, responsibility, individuality, accuracy,
            enthusiasm - you have to clearly explain how these qualities are
            applicable to your work. And the important thing is you do love what
            you do.
          </p>
        </div>
      </div>

      <div class="row mt-5 align-items-center">
        <a href="#" class="col-7 video">
          <img
            src="../assets/img/home-movation-video-poster-670x450.jpg"
            alt="video thumbnail - coach max sitting in a bar with a smiling face"
            class="rounded"
            width="100%"
          />
        </a>

        <div class="col-3 ms-5">
          <p class="quote">
            "Every morning you have two choices: continue to sleep with your
            dreams, or wake up and chase them."
          </p>

          <div class="quote_info">
            <div class="quote_author">Kaixa Stark</div>
            <div class="author_team">wingman</div>
          </div>
        </div>
      </div>
    </section> -->
  </div>
</template>

<script>
import sectionAboutMe from "@/components/site-main-components/sectionAboutMe.vue";

export default {
  components: {
    sectionAboutMe,
  },
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

  // Section 1
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