<template>
  <div  v-if="users.length > 0">
    <div>
      <h1>Список пользователей</h1>
    </div>
    <div class="list">
      <user-card v-for="user in users" :user="user" :key="user.id"/>
    </div>
  </div>
  <h3 v-else>Пусто</h3>
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
.list {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
</style>
