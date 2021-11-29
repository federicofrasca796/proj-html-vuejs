<template>
  <section class="container" id="clients">
    <div class="row books_clients">
      <div
        class="col-2 d-flex align-items-center justify-content-center"
        v-for="client in clientsArr"
        :key="client.id"
      >
        <img :src="require('@/assets/img/' + client)" alt="client logo" />
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    clientsArr: Array,
  },
};
</script>

<style lang="scss">
.books_clients {
  filter: grayscale(0.7) opacity(0.35);
}
</style>