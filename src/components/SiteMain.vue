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

    <!-- SECTION 3 "Online Courses" -->
    <section class="container">
      <div class="text-center">
        <div class="section_title">begin your journey at MaxCoach</div>
        <h2>Latest <span class="primary_color">Online Courses</span></h2>
      </div>
      <div class="row-cols-3 gy-5">
        <div class="card">
          <img class="card-img-top" src="" />
          <div class="card-title"></div>
          <div class="card-text"></div>
        </div>
      </div>
    </section>
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
    return {
      onlineCourses: [
        {
          thumb: "../img/motivation-course-06-480x298.jpg",
          price: [30, 0],
          title: "How to be Successful: Create A Growth Mindset For Success",
          lessons: 3,
          students: 50,
        },
        {
          thumb: "../img/motivation-course-05-480x298.jpg",
          price: [30, 0],
          title: "How to Build Confidence in Your Abilities",
          lessons: 1,
          students: 50,
        },
        {
          thumb: "../img/motivation-course-04-480x298.jpg",
          price: [20, 0],
          title: "Productivity Machine - Focus in a Distracted World",
          lessons: 5,
          students: 50,
        },
        {
          thumb: "../img/motivation-course-03-480x298.jpg",
          price: [20, 0],
          title: "Effective Time Management Mastery - Complete Guide",
          lessons: 18,
          students: 50,
        },
        {
          thumb: "../img/motivation-course-02-480x298.jpg",
          price: [25, 99],
          title: "Body Language Secrets for Entrepreneurs",
          lessons: 18,
          students: 50,
        },
        {
          thumb: "../img/motivation-course-01-480x298.jpg",
          price: [19, 99],
          title: "Management Skills: The Science of Leadership",
          lessons: 17,
          students: 50,
        },
      ],
    };
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