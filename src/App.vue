<template>
  <div class="app">
    <div class="content">
      <UserSearch/>
      <div class="list">
        <UsersList/>
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