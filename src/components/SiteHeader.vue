<template>
  <div id="site_header">
    <div class="container">
      <!-- NAVBAR -->
      <nav class="navbar" id="navbar">
        <!-- LOGO -->
        <img
          class="logo"
          src="../assets/img/dark-logo.png"
          alt="MaxCoach logo"
        />

        <!-- DROPDOWN LINKS -->
        <ul>
          <li class="dropdown show">
            <a
              class="dropdown_toggle"
              href="#"
              role="button"
              id="dropdownMenuLink"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Home
            </a>
            <!-- Dropdown menu (NOT WORKING. MUST IMPORT BOOTSTRAP JS) -->
            <!-- <div class="dropdown-menu" aria-labelledby="dropdownMenuLink">
                <a class="dropdown-item" href="#">Action</a>
                <a class="dropdown-item" href="#">Another action</a>
                <a class="dropdown-item" href="#">Something else here</a>
              </div> -->
          </li>
          <li class="dropdown show">
            <a
              class="dropdown_toggle"
              href="#"
              role="button"
              id="dropdownMenuLink"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Pages
            </a>
            <!-- Dropdown menu (NOT WORKING. MUST IMPORT BOOTSTRAP JS) -->
            <!-- <div class="dropdown-menu" aria-labelledby="dropdownMenuLink">
                <a class="dropdown-item" href="#">Action</a>
                <a class="dropdown-item" href="#">Another action</a>
                <a class="dropdown-item" href="#">Something else here</a>
              </div> -->
          </li>
          <li class="dropdown show">
            <a
              class="dropdown_toggle"
              href="#"
              role="button"
              id="dropdownMenuLink"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Courses
            </a>
            <!-- Dropdown menu (NOT WORKING. MUST IMPORT BOOTSTRAP JS) -->
            <!-- <div class="dropdown-menu" aria-labelledby="dropdownMenuLink">
                <a class="dropdown-item" href="#">Action</a>
                <a class="dropdown-item" href="#">Another action</a>
                <a class="dropdown-item" href="#">Something else here</a>
              </div> -->
          </li>
          <li class="dropdown show">
            <a
              class="dropdown_toggle"
              href="#"
              role="button"
              id="dropdownMenuLink"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Features
            </a>
            <!-- Dropdown menu (NOT WORKING. MUST IMPORT BOOTSTRAP JS) -->
            <!-- <div class="dropdown-menu" aria-labelledby="dropdownMenuLink">
                <a class="dropdown-item" href="#">Action</a>
                <a class="dropdown-item" href="#">Another action</a>
                <a class="dropdown-item" href="#">Something else here</a>
              </div> -->
          </li>
          <li class="dropdown show">
            <a
              class="dropdown_toggle"
              href="#"
              role="button"
              id="dropdownMenuLink"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Blog
            </a>
            <!-- Dropdown menu (NOT WORKING. MUST IMPORT BOOTSTRAP JS) -->
            <!-- <div class="dropdown-menu" aria-labelledby="dropdownMenuLink">
                <a class="dropdown-item" href="#">Action</a>
                <a class="dropdown-item" href="#">Another action</a>
                <a class="dropdown-item" href="#">Something else here</a>
              </div> -->
          </li>
          <li class="dropdown show">
            <a
              class="dropdown_toggle"
              href="#"
              role="button"
              id="dropdownMenuLink"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Shop
            </a>
            <!-- Dropdown menu (NOT WORKING. MUST IMPORT BOOTSTRAP JS) -->
            <!-- <div class="dropdown-menu" aria-labelledby="dropdownMenuLink">
                <a class="dropdown-item" href="#">Action</a>
                <a class="dropdown-item" href="#">Another action</a>
                <a class="dropdown-item" href="#">Something else here</a>
              </div> -->
          </li>
        </ul>

        <!-- SOCIALS  -->
        <ul class="socials">
          <li>
            <a href="#">
              <i class="fab fa-twitter"></i>
            </a>
          </li>
          <li>
            <a href="#">
              <i class="fab fa-facebook-f"></i>
            </a>
          </li>
          <li>
            <a href="#">
              <i class="fab fa-instagram"></i>
            </a>
          </li>
          <li>
            <a href="#">
              <i class="fab fa-linkedin"></i>
            </a>
          </li>
        </ul>
      </nav>

      <!-- JUMBO -->
      <section class="row-cols-3" id="jumbotron">
        <div class="col jumbo_cta">
          <div class="section_title">i'm wingman</div>
          <h1 class="text-capitalize">
            peace on earth a wonderful wish but no way
          </h1>
          <p>
            Success isn't overnight. It's when everyday you get a little better
            than the day before. It all adds up.
          </p>
          <a href="#" class="btn btn_primary text-capitalize"
            >get started for free <span class="img fs-6 ms-2">&#8594;</span>
          </a>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
export default {
  props: {},

  data() {
    return {};
  },

  methods: {},
};
</script>

<style lang="scss">
@import "../assets/scss/variables.scss";

#site_header {
  //   height: 600px;
  background: $bg_light;
  background-image: url("../assets/img/background-pattern-wavify.png");
  p {
    line-height: 1.7rem;
    color: $light_grey;
  }
}
#navbar {
  height: 70px;
  ul {
    margin: 0;
  }
  li {
    display: inline-block;
  }
  .logo {
    width: 120px;
  }

  .dropdown {
    margin: 0 1rem;
  }
  .socials > li {
    margin: 0 0.8rem;
  }
  .dropdown a {
    color: $brand_purple;
  }
  .dropdown_toggle::after {
    font-family: "Font Awesome 5 Free";
    font-weight: 900;
    content: "\f107";
    font-size: 0.6rem;
    margin-left: 0.1rem;
    vertical-align: middle;
  }
}

#jumbotron {
  background-image: url("../assets/img/home-movation-hero-image.png"),
    url("../assets/img/home-movation-shape-face.png");
  background-repeat: no-repeat;
  background-position: 80% bottom, 90% 125%;
  background-size: 38%, 40%;
  .jumbo_cta {
    padding: 8rem 0;
  }
}
</style>