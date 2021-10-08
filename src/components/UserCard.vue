<template>
  <div class="list__card">
    <img @click="$router.push(`/user/${user.login}`); setUserLogin(user.login)"
         v-bind:src="user.avatar_url"
         class="list__card-img"
    />
    <h3>{{ user.login }}</h3>
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
}
.list__card-img {
  width: 100%;
  border-radius: 50%;
  border: solid black 1px;
}
</style>
