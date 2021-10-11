<template>
  <div class="app">
    <Header />
    <div class="content">
      <router-view />
    </div>
  </div>
</template>

<script>
import Header from "./components/Header";
export default {
  name: "App.vue",
  components: { Header },
};
</script>

<style>
* {
  margin: 0;
}
.app {
  max-width: 1280px;
  margin: auto;
  justify-content: center;
}

.content {
  max-width: 100%;
  margin: auto;
  justify-content: center;
}
</style>
