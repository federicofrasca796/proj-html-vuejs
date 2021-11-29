<template>
  <section class="container" id="online_courses">
    <!-- Section title -->
    <div class="text-center">
      <h4 class="section_title">begin your journey at MaxCoach</h4>
      <h2>Latest <span class="primary_color">Online Courses</span></h2>
    </div>

    <!-- Courses cards -->
    <div class="row g-5">
      <div class="col-4" v-for="course in coursesArr" :key="course.id">
        <div class="card">
          <img
            class="card-img-top"
            :src="require('@/assets/img/' + course.thumb)"
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
            <a href="">
              <h3>{{ course.title }}</h3>
            </a>
          </div>

          <!-- Card info -->
          <div class="card-text">
            <span class="lessons">
              <i class="far fa-file-alt"></i> {{ course.lessons }}
              {{ course.lessons > 1 ? "Lessons" : "Lesson" }}
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
    <div class="text-center">
      <a href="" class="btn btn_primary text-center"
        >View all courses <span class="img fs-6 ms-2">&#8594;</span></a
      >
    </div>
  </section>
</template>

<script>
export default {
  props: {
    coursesArr: Array,
  },
};
</script>

<style lang="scss">
@import "@/assets/scss/variables.scss";

#online_courses {
  .card {
    transition: box-shadow 0.5s ease-in-out;
    &:hover {
      box-shadow: 0 14px 59px rgb(0 0 0 / 12%);
    }

    h3 {
      margin-bottom: 0.5rem;
    }
    .card-title,
    .card-text {
      margin: 1rem 2.5rem;
    }
    .card-text {
      color: $light_grey;
      margin-bottom: 2rem;
      i {
        font-size: 0.9rem;
        margin-right: 0.4rem;
      }
      .lessons,
      .students {
        margin-right: 1.5rem;
      }
    }
  }
}
</style>