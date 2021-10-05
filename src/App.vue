<template>
  <div class="app">
    <div class="content">
      <UserSearch :login="login" @search="getUsers"/>
      <div class="list">
        <UsersList :users="users" />
      </div>
    </div>
  </div>
</template>

<script>
import UsersList from './components/UsersList';
import UserSearch from './components/UserSearch';
export default {
  name: "App.vue",
  components: { UserSearch, UsersList },
  data() {
    return {
      users: [],
      login: ''
    }
  },
  methods :{
    async getUsers(login) {
      try {
        const res = await fetch(`https://api.github.com/search/users?q=${login}`)
        const data = await res.json()
        this.users = data.items
      } catch (e) {
        console.log("Ошибка:" + e.message)
      }
    },
  },
}
</script>

<style>
  .app {
    max-width: 1140px;
    margin: auto;
    justify-content: center;
  }
  .content {
    max-width: 80%;
    margin: auto;
    justify-content: center;
  }
  .list {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }
  .list__card {
    width: 250px;
    text-align: center;
  }
  .list__card-img {
    width: 100%;
  }
</style>