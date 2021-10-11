<template>
  <div>
    <form class="form" @submit.prevent>
      <my-input
        type="text"
        :model-value="login"
        @update:model-value="setLogin"
      />
      <my-button
        @click="
          getUsers();
          $router.push(`/`);
        "
        >НАЙТИ</my-button
      >
    </form>
  </div>
</template>

<script>
import { mapActions, mapMutations, mapState } from "vuex";

export default {
  name: "UserSearch",
  computed: {
    ...mapState({
      login: (state) => state.login,
    }),
  },
  methods: {
    ...mapActions({
      getUsers: "getUsers",
    }),
    ...mapMutations({
      setLogin: "setLogin",
    }),
  },
};
</script>

<style scoped>
.form {
  display: flex;
  justify-content: center;
  padding-bottom: 20px;
}
</style>
