<template>
  <ul>
    <li class="dropdown show" v-for="link in navlinkArr" :key="link.id">
      <a
        class="dropdown_toggle"
        href="#"
        role="button"
        id="dropdownMenuLink"
        data-toggle="dropdown"
        aria-haspopup="true"
        aria-expanded="false"
      >
        {{ link.name }}
      </a>
    </li>
  </ul>
</template>

<script>
export default {
  props: {
    navlinkArr: Array,
  },
};
</script>

<style>
</style>