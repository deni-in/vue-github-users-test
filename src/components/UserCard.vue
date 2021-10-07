<template>
  <div class="list__card">
    <img @click="$router.push(`/user/${user.id}`)" v-bind:src="user.avatar_url" class="list__card-img" />
    <h3>{{ user.login }}</h3>
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

<style scoped>
.list__card {
  width: 250px;
  text-align: center;
}
.list__card-img {
  width: 100%;
  border-radius: 50%;
  border: solid black 1px;
}
</style>
