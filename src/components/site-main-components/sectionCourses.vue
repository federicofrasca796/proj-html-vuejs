<template>
  <section class="container">
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
            <h3>{{ course.title }}</h3>
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
    <a href="" class="btn btn_primary text-center"
      >View all courses <span class="img fs-6 ms-2">&#8594;</span></a
    >
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
</style>