<template>
  <div class="app">
    <Header/>
    <router-view/>
  </div>
</template>

<script>
import Header from './components/Header';
export default {
  name: "App.vue",
  components: { Header },
}
</script>

<style>
  .app {
    max-width: 1140px;
    margin: auto;
    justify-content: center;
  }
  .header {
    max-width: 80%;
    margin: auto;
    justify-content: center;
  }
  .content {
    max-width: 80%;
    margin: auto;
    justify-content: center;
  }
</style>