<template>
  <section class="container">
    <div class="row">
      <!-- CTA column -->
      <div class="col-3">
        <div class="section_title">Book Store Online</div>
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
    <div class="row books_clients">
      <!-- <div class="col-2">
        <img src="@/assets/img/client-logo-01-primary.png" alt="client logo" />
      </div> -->
      <div class="col-2 d-flex align-items-center justify-content-center">
        <img src="@/assets/img/client-logo-05-primary.png" alt="client logo" />
      </div>
      <div class="col-2 d-flex align-items-center justify-content-center">
        <img src="@/assets/img/client-logo-06-primary.png" alt="client logo" />
      </div>
      <div class="col-2 d-flex align-items-center justify-content-center">
        <img src="@/assets/img/client-logo-07-primary.png" alt="client logo" />
      </div>
      <div class="col-2 d-flex align-items-center justify-content-center">
        <img src="@/assets/img/client-logo-04-primary.png" alt="client logo" />
      </div>
      <div class="col-2 d-flex align-items-center justify-content-center">
        <img src="@/assets/img/client-logo-03-primary.png" alt="client logo" />
      </div>
      <div class="col-2 d-flex align-items-center justify-content-center">
        <img src="@/assets/img/client-logo-02-primary.png" alt="client logo" />
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    booksArr: Array,
  },
};
</script>

<style lang="scss">
.check_list {
  margin: 2rem 0;
}
.books_clients {
  margin: 8rem 0;
  filter: grayscale(0.7) opacity(0.35);
}
</style>