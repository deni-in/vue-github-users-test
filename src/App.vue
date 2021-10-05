<template>
  <div class="test">{{title}}</div>
</template>

<script>
export default {
  name: "App.vue",
  data() {
    return {
      title: "test"
    }
  }
}
</script>

<style>
  .test {
    color: red;
  }
</style>