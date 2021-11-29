<template>
  <section class="container-fluid bg_waves position-relative">
    <div class="row">
      <!-- Stories column -->
      <div class="col-6 text-center">
        <h4 class="section_title primary_color">Real Stories</h4>

        <div v-for="story in storiesArr" :key="story.id">
          <div class="real_story" v-if="story.showActive === true">
            <p class="story_quote">{{ story.review_text }}</p>
            <img
              class="story_avatar rounded-circle"
              :src="require(`@/assets/img/${story.author.avatar}`)"
              alt="testimonial avatar"
            />
            <div class="story_author">{{ story.author.name }}</div>
            <div class="story_job">/{{ story.author.job }}</div>
          </div>
        </div>

        <div class="carousel_scroll">
          <img
            src="@/assets/img/image.png"
            alt="arrow up"
            class="d-inline-block"
          />
          <div class="carousel_counter">1/4</div>
          <img
            src="@/assets/img/image (1).png"
            alt="arrow up"
            class="d-inline-block"
          />
        </div>
      </div>
      <!-- MaxCoach img column  -->
      <div class="col-6 px-0">
        <img
          class="img-fluid"
          src="@/assets/img/home-movation-testimonial-image.jpg"
          alt="max coach looking outside the window while talking at the phone"
          width="100%"
        />
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    storiesArr: Array,
  },
};
</script>

<style lang="scss">
</style>