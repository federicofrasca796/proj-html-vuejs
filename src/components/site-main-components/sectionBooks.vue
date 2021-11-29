<template>
  <section class="container" id="book_store">
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
              <div class="card-img-top position-relative">
                <img
                  :src="require('@/assets/img/' + book.thumb)"
                  alt="book cover thumbnail"
                  width="100%"
                />

                <!-- Hover options -->
                <ul class="hover_options">
                  <li>
                    <a href="">
                      <i class="fas fa-search"></i>
                    </a>
                  </li>
                  <li>
                    <a href="">
                      <i class="fas fa-shopping-cart"></i>
                    </a>
                  </li>
                  <li>
                    <a href="">
                      <i class="far fa-heart"></i>
                    </a>
                  </li>
                  <li>
                    <a href="">
                      <i class="fas fa-signal"></i>
                    </a>
                  </li>
                </ul>
              </div>

              <div class="card-title text-center">
                <!-- Course title  -->
                <a href="">
                  <h3>{{ book.title }}</h3>
                </a>

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
@import "@/assets/scss/variables.scss";

#book_store {
  .check_list {
    margin: 2rem 0;
  }

  .card-img-top {
    overflow: hidden;
  }
  .card-img-top > img {
    transition: transform 1s ease-out;
  }
  .card:hover .card-img-top > img {
    transform: scale(110%);
  }
  .card:hover .hover_options {
    opacity: 1;
  }
  .hover_options {
    opacity: 0;
    transition: opacity 0.3s ease-in-out;
    position: absolute;
    right: 0;
    top: 50%;
    transform: translateY(-50%);
    a {
      transition: color 0.3 ease-out;
    }
    li:hover a {
      color: #fff !important;
    }
    li {
      box-shadow: 0 0 4px rgb(0 0 0 / 7%);
      height: 45px;
      width: 45px;
      line-height: 45px;
      text-align: center;
      background-color: #fff;
      margin: 1rem 2rem;
      border-radius: 50%;
      color: $dark_grey;
      transition: background-color 0.3 ease-out;
      &:hover {
        background-color: $brand_primary;
      }
    }
  }
}
</style>