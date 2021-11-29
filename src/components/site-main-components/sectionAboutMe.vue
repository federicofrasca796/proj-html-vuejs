<template>
  <section class="container">
    <h4 class="section_title primary_color">about me</h4>
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
          src="@/assets/img/home-movation-video-poster-670x450.jpg"
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
  </section>
</template>

<script>
export default {};
</script>

<style lang="scss">
@import "@/assets/scss/variables.scss";

.video {
  position: relative;
  img {
    box-shadow: rgba(0, 0, 0, 0.4) 0px 100px 100px -100px;
  }
  &::after {
    content: url("../../assets/img/icon-youtube-play.png");
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
}
</style>