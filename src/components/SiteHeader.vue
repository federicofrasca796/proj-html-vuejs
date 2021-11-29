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
        <dropdown-links :navlinkArr="navLinks" />

        <!-- SOCIALS  -->
        <social-icons :socialEl="socialIcons" />
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
import dropdownLinks from "./site-header-components/dropdownLinks.vue";
import socialIcons from "./site-header-components/IconSocial.vue";

export default {
  components: { dropdownLinks, socialIcons },
  props: {},

  data() {
    return {
      navLinks: [
        {
          name: "Home",
          popupActive: false,
        },
        {
          name: "Pages",
          popupActive: false,
        },
        {
          name: "Courses",
          popupActive: false,
        },
        {
          name: "Features",
          popupActive: false,
        },
        {
          name: "Blog",
          popupActive: false,
        },
        {
          name: "Shop",
          popupActive: false,
        },
      ],
      socialIcons: [
        {
          name: "Twitter",
          prefix: "fab",
          icon_name: "fa-twitter",
          link: "https://twitter.com/vuejs",
        },
        {
          name: "Facebook",
          prefix: "fab",
          icon_name: "fa-facebook-f",
          link: "https://www.facebook.com/groups/263127194965412",
        },
        {
          name: "Instagram",
          prefix: "fab",
          icon_name: "fa-instagram",
          link: "https://www.instagram.com/explore/tags/vuejs/",
        },
        {
          name: "Linkedin",
          prefix: "fab",
          icon_name: "fa-linkedin",
          link: "https://www.linkedin.com/groups/8384105/",
        },
      ],
    };
  },

  methods: {},
};
</script>

<style lang="scss">
@import "../assets/scss/variables.scss";

#site_header {
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