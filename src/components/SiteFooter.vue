<template>
  <footer id="site_footer">
    <div class="container">
      <div class="row">
        <!-- Address and socials -->
        <div class="col-6">
          <div class="address">
            <h3 class="white-txt">Address</h3>
            <div>382 NE 191st St # 87394 Miami, FL 33179-3899</div>
            <div>+1 (305) 547-9909 (9am - 5pm EST, Monday - Friday)</div>
            <a href="#">support@maxcoach.com</a>
          </div>
          <div class="socials">
            <i class="fab fa-facebook-square"></i>
            <i class="fab fa-twitter"></i>
            <i class="fab fa-instagram"></i>
            <i class="fab fa-linkedin"></i>
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
  background: $bg_dark;
  color: $lighter_grey;
  padding: 3rem 0;
  #footer_links {
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