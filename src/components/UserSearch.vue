<template>
  <div>
    <form @submit.prevent>
      <input type="text" v-model="login">
      <button @click="getUsers">Поиск</button>
    </form>
  </div>
</template>

<script>
export default {
  props: {
    login: {
      type: String
    }
  },
  methods: {
    async getUsers() {
      this.$emit('search', this.login)
    }
  }
}
</script>

<style>

</style>