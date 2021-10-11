<template>
  <div class="page">
    <div class="user">
      <img v-bind:src="user.avatar_url" class="user-img" />
      <a class="user-name" :href="user.html_url" target="_blank"><h1>{{ user.name }}</h1></a>
      <h3>{{ user.login }}</h3>
      <h3>Location: {{ user.location }}</h3>
      <h3>Company: {{ user.company }}</h3>
      <h3>Following: {{ user.following }}</h3>
      <h3>Followers: {{ user.followers }}</h3>
    </div>
      <div class="user__repos">
        <div class="user__repos-title">
          <h1>Список репозиториев</h1>
        </div>
        <div class="user__repos-list">
          <a v-for="repo in userRepos" :repo="repo" :key="repo.id" class="user__repos-repo" :href="repo.html_url" target="_blank">{{ repo.name }}</a>
        </div>
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
      userRepos: (state) => state.userRepos,
    }),
  },
  methods: {
    ...mapActions({
      getOneUser: "getOneUser",
      getUserRepos: "getUserRepos",
    }),
  },
  mounted() {
    this.getOneUser();
    this.getUserRepos();
  },
};
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
}
.user-name{
  text-decoration: none;
  color: #cccccc;
  transition: 0.3s;
}
.user-name:hover{
  color: wheat;
}
.page {
  margin-top: 20px;
  background: #343640;
  display: flex;
  justify-content: space-between;
  border-radius: 10px;
}
.user {
  margin: 10px;
  text-align: center;
  width: 40%;
  color: #cccccc;
  padding-bottom: 10px;
}
.user-img {
  width: 70%;
  border-radius: 50%;
  border: solid black 1px;
}
.user__repos{
  margin: 10px;
  width: 60%;
}
.user__repos-list {
  padding-top: 10px;
  display: flex;
  flex-wrap: wrap;
}
.user__repos-title{
  text-align: center;
  color: #cccccc;
}
.user__repos-repo{
  margin: 5px;
  font-size: larger;
  font-weight: bold;
  background: #cccccc;
  color: #343640;
  height: 30px;
  line-height: 30px;
  padding: 5px;
  border-radius: 10px;
  transition: 0.3s;
  cursor: pointer;
  text-decoration: none;
}
.user__repos-repo:hover{
  transform: scale(1.05);
  background: wheat;
}
</style>
