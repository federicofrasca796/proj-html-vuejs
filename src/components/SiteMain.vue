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
    <sectionCourses :coursesArr="onlineCourses" />

    <!-- SECTION 4 "Book Store" -->
    <sectionBooks :booksArr="books" />
  </div>
</template>

<script>
import sectionAboutMe from "@/components/site-main-components/sectionAboutMe.vue";
import sectionCourses from "@/components/site-main-components/sectionCourses.vue";
import sectionBooks from "@/components/site-main-components/sectionBooks.vue";

export default {
  components: {
    sectionAboutMe,
    sectionCourses,
    sectionBooks,
  },
  props: {},

  data() {
    return {
      onlineCourses: [
        {
          thumb: "motivation-course-06-480x298.jpg",
          alt: "Max reading and laughing at a phone screen",
          price: [30, 0],
          title: "How to be Successful: Create A Growth Mindset For Success",
          lessons: 3,
          students: 50,
        },
        {
          thumb: "motivation-course-05-480x298.jpg",
          alt: "Max sitting in a sofa having a toast",
          price: [30, 0],
          title: "How to Build Confidence in Your Abilities",
          lessons: 1,
          students: 50,
        },
        {
          thumb: "motivation-course-04-480x298.jpg",
          alt: "Max sitting in a sofa writing with a laptop",
          price: [20, 0],
          title: "Productivity Machine - Focus in a Distracted World",
          lessons: 5,
          students: 50,
        },
        {
          thumb: "motivation-course-03-480x298.jpg",
          alt: "Max and another guy discussing and looking at a laptop",
          price: [20, 0],
          title: "Effective Time Management Mastery - Complete Guide",
          lessons: 18,
          students: 50,
        },
        {
          thumb: "motivation-course-02-480x298.jpg",
          alt: "Guy giving a public speach in front of a little crowd",
          price: [25, 99],
          title: "Body Language Secrets for Entrepreneurs",
          lessons: 18,
          students: 50,
        },
        {
          thumb: "motivation-course-01-480x298.jpg",
          alt: "Max and another guy with a blue suit laughing and pointing at a laptop",
          price: [19, 99],
          title: "Management Skills: The Science of Leadership",
          lessons: 17,
          students: 50,
        },
      ],
      books: [
        {
          thumb: "product-book-11-400x400.jpg",
          title: "Alpha man by Maxcoach",
          price: [29, 0],
        },
        {
          thumb: "product-book-10-400x400.jpg",
          title: "Real man 4.0 by Maxcoach",
          price: [39, 0],
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