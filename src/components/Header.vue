<template>
  <div class="header">
    <div class="header__title">
      <h1>
        <router-link to="/" class="header__link">
          Поиск пользователей GitHub
        </router-link>
      </h1>
    </div>
    <UserSearch />
  </div>
</template>

<script>
import UserSearch from "./UserSearch";
import MySelect from "../components/UI/MySelect";

export default {
  name: "header",
  components: { MySelect, UserSearch },
};
</script>

<style scoped>
.header {
  max-width: 100%;
  margin: auto;
  justify-content: center;
  background: #343640;
}
.header__link {
  text-decoration: none;
  color: #fafafa;
  transition: 0.3s;
}
.header__link:hover {
  color: #e0e0e0;
}
.header__title {
  text-align: center;
}
</style>
