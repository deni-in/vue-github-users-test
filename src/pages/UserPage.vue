<template>
  <div class="page">
    <div class="user">
      <img v-bind:src="user.avatar_url" class="user-img" />
      <h3>{{ user.name }}</h3>
      <h4>{{ user.login }}</h4>
      <h4>Location: {{ user.location }}</h4>
      <h4>Company: {{ user.company }}</h4>
      <h4>Following: {{ user.following }}</h4>
      <h4>Followers: {{ user.followers }}</h4>
    </div>
    <div class="user__repos">
      <ul>
        <li v-for="repo in userRepos" :repo="repo" :key="repo.id">
          {{repo.name}}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";

export default {
  name: "UserPage",
  computed: {
    ...mapState({
      user: (state) => state.user,
      userRepos: state => state.userRepos
    }),
  },
  methods: {
    ...mapActions({
      getOneUser: "getOneUser",
      getUserRepos: "getUserRepos"
    }),
  },
  mounted() {
    this.getOneUser();
    this.getUserRepos()
  },
};
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
}
.page {
  display: flex;
  flex-wrap: wrap;

  justify-content: space-between;
}
.user {
  width: 30%;
}
.user-img {
  width: 100%;
  border-radius: 1%;
  border: solid black 1px;
}
.user__repos {
  width: 60%;
}
</style>
