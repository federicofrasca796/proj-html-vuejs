<template>
  <div id="site_footer">
    <div class="container">
      <div class="row">
        <div class="col-6"></div>
        <div class="col-6 d-flex">
          <div class="col-6"></div>
          <div class="col-6"></div>
        </div>
      </div>
    </div>
  </div>
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
}
</style>