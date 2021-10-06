<template>
  <div>
    <form @submit.prevent>
      <my-input
          type="text"
          :model-value="login"
          @update:model-value="setLogin"
      />
      <my-button @click="getUsers">Поиск</my-button>
    </form>
  </div>
</template>

<script>
import { mapActions, mapMutations, mapState } from 'vuex';

export default {
  computed: {
    ...mapState({
      login: state => state.login
    })
  },
  methods: {
    ...mapActions({
      getUsers: 'getUsers'
    }),
    ...mapMutations({
      setLogin: 'setLogin'
    })
  }
}
</script>

<style>

</style>