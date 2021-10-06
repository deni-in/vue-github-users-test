<template>
  <div class="list__card">
    <img v-bind:src="user.avatar_url" class="list__card-img" />
    <p>{{ user.login }}</p>
  </div>
</template>

<script>
export default {
  props: {
    user: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style scoped></style>
