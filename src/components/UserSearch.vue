<template>
  <div>
    <form @submit.prevent>
      <my-input type="text" v-model="login"/>
      <my-button @click="getUsers">Поиск</my-button>
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