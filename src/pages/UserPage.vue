<template>
  <div class="page">
    <div class="list__card">
      <img
           v-bind:src="user.avatar_url"
           class="list__card-img"
      />
      <h3>{{ user.login }}</h3>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex';

export default {
  name: "UserPage",
  computed: {
    ...mapState({
      user: state => state.user
    })
  },
  methods:{
    ...mapActions({
      getOneUser: 'getOneUser',
    })
  },
  mounted() {
    this.getOneUser()
  }
}
</script>

<style scoped>
.list__card {
  width: 250px;
  text-align: center;
  margin: auto;
}
.list__card-img {
  width: 100%;
  border-radius: 50%;
  border: solid black 1px;
}
</style>