<template>
  <footer id="site_footer">
    <div class="container">
      <div class="row">
        <!-- Address and socials -->
        <div class="col-6">
          <!-- Address  -->
          <div class="address">
            <h3 class="white-txt">Address</h3>
            <ul>
              <li>382 NE 191st St # 87394 Miami, FL 33179-3899</li>
              <li>+1 (305) 547-9909 (9am - 5pm EST, Monday - Friday)</li>
              <li><a href="#">support@maxcoach.com</a></li>
            </ul>
          </div>

          <!-- Socials -->
          <div class="socials">
            <a href="">
              <i class="fab fa-facebook-square me-4"></i>
            </a>
            <a href="">
              <i class="fab fa-twitter me-4"></i>
            </a>
            <a href="">
              <i class="fab fa-instagram me-4"></i>
            </a>
            <a href="">
              <i class="fab fa-linkedin me-4"></i>
            </a>
          </div>
        </div>

        <!-- Links  -->
        <div class="col-6 d-flex" id="footer_links">
          <div
            class="col-6"
            v-for="section in footer_sections"
            :key="section.id"
          >
            <h3>{{ section.title }}</h3>
            <ul>
              <li v-for="link in section.links" :key="link.id">
                <a :href="link.href">{{ link.link_name }}</a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <!-- Copyright -->
      <div class="row justify-content-center mt-5">
        © 2020 Maxcoach. All Rights Reserved
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  props: {},

  data() {
    return {
      footer_sections: [
        {
          title: "Explore",
          links: [
            {
              link_name: "Start here",
              href: "#",
            },
            {
              link_name: "Blog",
              href: "#",
            },
            {
              link_name: "About us",
              href: "#",
            },
            {
              link_name: "Success story",
              href: "#",
            },
            {
              link_name: "Courses",
              href: "#",
            },
            {
              link_name: "Contact us",
              href: "#",
            },
          ],
        },
        {
          title: "Information",
          links: [
            {
              link_name: "Membership",
              href: "#",
            },
            {
              link_name: "Purchase guide",
              href: "#",
            },
            {
              link_name: "Privacy policy",
              href: "#",
            },
            {
              link_name: "Terms of service",
              href: "#",
            },
          ],
        },
      ],
    };
  },

  methods: {},
};
</script>

<style lang="scss">
@import "../assets/scss/variables.scss";

#site_footer {
  font-size: 14px;
  background: $bg_dark;
  color: $lighter_grey;
  margin-top: 10rem;
  padding: 4rem 0;
  h1,
  h2,
  h3 {
    color: #fff;
  }
  li {
    margin-bottom: 1rem;
  }
  .socials {
    font-size: 1.6rem;
    margin: 2.5rem 0;
    a:hover {
      color: #fff;
    }
  }

  #footer_links {
    .col-6 {
      margin-right: 1rem;
    }
    .col-6:first-child {
      ul {
        display: flex;
        flex-wrap: wrap;
      }
      li {
        width: 50%;
      }
    }
  }
}
</style>