<template>
  <section class="container" id="blog_articles">
    <!-- Section header  -->
    <div class="row">
      <h4 class="section_title">Blog Updated</h4>
      <h2>
        Interesting <span class="primary_color">articles updated</span> daily
      </h2>
    </div>

    <!-- Articles cards -->
    <div class="row">
      <div class="col-3" v-for="article in articlesArr" :key="article.key">
        <div class="card">
          <img
            :src="require(`@/assets/img/${article.thumb}`)"
            alt="article thumbnail"
            class="card-img-top rounded-3"
          />
          <div class="card-title">
            <div class="publish_date">
              <i class="far fa-calendar"></i>
              {{ article.publish_date }}
            </div>

            <h3>{{ article.title }}</h3>
          </div>
          <div class="card-text">
            {{ article.text }}
          </div>
        </div>
      </div>
    </div>

    <!-- View all CTA  -->
    <div class="text-center my-5">
      <a class="btn_underline_primary">View All Posts</a>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    articlesArr: Array,
  },
};
</script>

<style lang="scss">
</style>