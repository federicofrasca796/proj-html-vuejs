<template>
  <section class="container">
    <div class="row">
      <!-- CTA column -->
      <div class="col-3">
        <h4 class="section_title">Book Store Online</h4>
        <h2>Be Alpha With <span class="primary_color">Wingman's Book</span></h2>
        <ul class="check_list">
          <li><span>Help you understand yourself better</span></li>
          <li><span>Revealing mature tips</span></li>
          <li><span>Give the right advice</span></li>
          <li><span>Fascinating examples of alpha man</span></li>
        </ul>

        <a href="" class="btn btn_primary text-capitalize">Get free ebook</a>
      </div>

      <!-- Books column -->
      <div class="col-8 ms-auto">
        <div class="row">
          <div class="col-6 gx-5" v-for="book in booksArr" :key="book.id">
            <div class="card">
              <img
                class="card-img-top"
                :src="require('@/assets/img/' + book.thumb)"
                alt="book cover thumbnail"
              />

              <div class="card-title text-center">
                <!-- Course title  -->
                <h3>{{ book.title }}</h3>

                <!-- Course price -->
                <div class="price primary_color">
                  ${{ book.price[0]
                  }}<span
                    >.{{
                      book.price[1] === 0 ? book.price[1] + "0" : book.price[1]
                    }}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    booksArr: Array,
    clients: Array,
  },
};
</script>

<style lang="scss">
.check_list {
  margin: 2rem 0;
}
</style>