<template>
  <div class="list__card">
    <img @click="$router.push(`/user/${user.login}`); setUserLogin(user.login)"
         v-bind:src="user.avatar_url"
         class="list__card-img"
    />
    <h1
        @click="$router.push(`/user/${user.login}`); setUserLogin(user.login)"
    >
      {{ user.login }}
    </h1>
  </div>
</template>

<script>
import { mapMutations } from 'vuex';

export default {
  name: 'UserCard',
  props: {
    user: {
      type: Object,
      required: true,
    },
  },
  methods: {
    ...mapMutations({
      setUserLogin: 'setUserLogin'
    })
  }
};
</script>

<style scoped>
.list__card {
  width: 250px;
  text-align: center;
  background: #343640;
  margin-top: 15px;
  border-radius: 3%;
  color: #fafafa;
  cursor: pointer;
  box-shadow: 0 4px 16px #343640;
  transition: 0.3s;
}
.list__card:hover{
  transform: scale(1.1);
  box-shadow: 0 4px 16px #343640;
}
.list__card-img {
  width: 100%;
  border-radius: 3% 3% 0 0 ;
}
</style>
