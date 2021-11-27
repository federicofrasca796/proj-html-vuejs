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
      <!-- Section title -->
      <div class="text-center">
        <div class="section_title">begin your journey at MaxCoach</div>
        <h2>Latest <span class="primary_color">Online Courses</span></h2>
      </div>

      <!-- Courses cards -->
      <div class="row g-5">
        <div class="col-4" v-for="course in onlineCourses" :key="course.id">
          <div class="card">
            <img
              class="card-img-top"
              :src="require('../assets/img/' + course.thumb + '.jpg')"
              :alt="course.alt"
            />
            <div class="card-title">
              <!-- Course price -->
              <div class="price primary_color">
                ${{ course.price[0]
                }}<span
                  >.{{
                    course.price[1] === 0
                      ? course.price[1] + "0"
                      : course.price[1]
                  }}</span
                >
              </div>

              <!-- Course title  -->
              <h3>{{ course.title }}</h3>
            </div>

            <!-- Card info -->
            <div class="card-text">
              <span class="lessons">
                <i class="far fa-file-alt"></i> {{ course.lessons }} Lessons
              </span>
              <span class="students">
                <i class="far fa-user"></i>
                {{ course.students }} Students
              </span>
            </div>
          </div>
        </div>
      </div>

      <!-- CTA -->
      <a href="" class="btn btn_primary text-center"
        >View all courses <span class="img fs-6 ms-2">&#8594;</span></a
      >
    </section>

    <!-- SECTION 4 "Book Store" -->
    <section class="container">
      <div class="row">
        <div class="col-3">
          <div class="section_title">Book Store Online</div>
          <h2>
            Be Alpha With <span class="primary_color">Wingman's Book</span>
          </h2>
          <ul class="check_list">
            <li>Help you understand yourself better</li>
            <li>Revealing mature tips</li>
            <li>Give the right advice</li>
            <li>Fascinating examples of alpha man</li>
          </ul>

          <a href="" class="btn btn_primary text-capitalize">Get free ebook</a>
        </div>

        <div class="col-6 ms-auto">
          <div class="row">
            <div class="col-6" v-for="book in books" :key="book.id">
              <div class="card">
                <img
                  class="card-img-top"
                  :src="require('../assets/img/' + book.thumb)"
                  alt="book cover thumbnail"
                />

                <div class="card-title">
                  <!-- Course title  -->
                  <h3>{{ book.title }}</h3>

                  <!-- Course price -->
                  <div class="price primary_color">
                    ${{ book.price[0]
                    }}<span
                      >.{{
                        book.price[1] === 0
                          ? book.price[1] + "0"
                          : book.price[1]
                      }}</span
                    >
                  </div>
                </div>
              </div>
            </div>
          </div>
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
          thumb: "motivation-course-06-480x298",
          alt: "Max reading and laughing at a phone screen",
          price: [30, 0],
          title: "How to be Successful: Create A Growth Mindset For Success",
          lessons: 3,
          students: 50,
        },
        {
          thumb: "motivation-course-05-480x298",
          alt: "Max sitting in a sofa having a toast",
          price: [30, 0],
          title: "How to Build Confidence in Your Abilities",
          lessons: 1,
          students: 50,
        },
        {
          thumb: "motivation-course-04-480x298",
          alt: "Max sitting in a sofa writing with a laptop",
          price: [20, 0],
          title: "Productivity Machine - Focus in a Distracted World",
          lessons: 5,
          students: 50,
        },
        {
          thumb: "motivation-course-03-480x298",
          alt: "Max and another guy discussing and looking at a laptop",
          price: [20, 0],
          title: "Effective Time Management Mastery - Complete Guide",
          lessons: 18,
          students: 50,
        },
        {
          thumb: "motivation-course-02-480x298",
          alt: "Guy giving a public speach in front of a little crowd",
          price: [25, 99],
          title: "Body Language Secrets for Entrepreneurs",
          lessons: 18,
          students: 50,
        },
        {
          thumb: "motivation-course-01-480x298",
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