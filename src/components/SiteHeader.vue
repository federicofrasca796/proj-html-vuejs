<template>
  <div id="site_header">
    <div class="container">
      <!-- NAVBAR -->
      <nav class="row" id="navbar">
        <!-- LOGO -->
        <div class="col-4 logo">
          <img src="../assets/img/dark-logo.png" alt="MaxCoach logo" />
        </div>

        <!-- DROPDOWN LINKS -->
        <ul class="col-4">
          <li class="dropdown show">
            <a
              class="dropdown-toggle"
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
              class="dropdown-toggle"
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
              class="dropdown-toggle"
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
              class="dropdown-toggle"
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
              class="dropdown-toggle"
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
              class="dropdown-toggle"
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
        <div class="col-4">
          <ul class="socials">
            <li>
              <a href="#">
                <i class="fab fa-twitter"></i>
              </a>
            </li>
            <li>
              <a href="#">
                <i class="fab fa-facebook"></i>
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
        </div>
      </nav>
    </div>
  </div>
</template>

<script>
// import "bootstrap/js/dist/dropdown";

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
</style>