<template>
  <div class="list">
    <user-card v-for="user in users" :user="user" :key="user.id"/>
  </div>
</template>

<script>
import UserCard from "./UserCard";
import { mapState } from 'vuex';
export default {
  components: { UserCard },
  computed:{
    ...mapState({
      users: state => state.users,
      login: state => state.login,
      loading: state => state.loading
    })
  }
};
</script>

<style scoped>

</style>
