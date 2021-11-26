<template>
  <ul class="socials">
    <li v-for="social in socialEl" :key="social.id">
      <a :href="social.link">
        <i :class="`${social.prefix} ${social.icon_name}`"></i>
      </a>
    </li>
  </ul>
</template>

<script>
export default {
  props: {
    socialEl: Array,
  },
};
</script>

<style>
</style>