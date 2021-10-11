<template>
  <div v-if="users.length > 0">
    <div class="title">
      <h1>Список пользователей</h1>
      <my-select v-model="selectedSort" :options="sortOptions" />
    </div>
    <div class="list">
      <user-card v-for="user in users" :user="user" :key="user.id" />
    </div>
  </div>
</template>

<script>
import UserCard from "./UserCard";
import { mapActions, mapState } from "vuex";
export default {
  components: { UserCard },
  computed: {
    ...mapState({
      users: (state) => state.users,
      selectedSort: (state) => state.selectedSort,
      sortOptions: (state) => state.sortOptions,
    }),
  },
  methods: {
    ...mapActions({
      getSortedUsers: "getSortedUsers",
    }),
  },
  watch: {
    selectedSort(newValue) {
      if (newValue !== "") {
        this.getSortedUsers();
      }
    },
  },
};
</script>

<style scoped>
.title{
  text-align: center;
}
.list {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
</style>
