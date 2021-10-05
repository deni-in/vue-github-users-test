<template>
  <div class="list">
    <div v-for="user in users" >
      <div class="list__card">
        <img v-bind:src="user.avatar_url" class="list__card-img">
        <p>{{user.login}}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    props: {
        users: {
          type: Array,
          required: true
        }
    }
}
</script>

<style scoped>

</style>