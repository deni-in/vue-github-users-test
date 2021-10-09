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
  background: #06091f;
  margin-top: 15px;
  border-radius: 3%;
  color: #fafafa;
  cursor: pointer;
}
.list__card-img {
  width: 100%;
  border-radius: 3% 3% 0 0 ;
}
</style>
