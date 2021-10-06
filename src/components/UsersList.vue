<template>
  <div class="list">
    <user-card v-for="user in users" :user="user" />
  </div>
</template>

<script>
import UserCard from "./UserCard";
export default {
  components: { UserCard },
  props: {
    users: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style scoped></style>
