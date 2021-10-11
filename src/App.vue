<template>
  <div class="app">
    <AppHeader />
    <div class="content">
      <router-view />
    </div>
  </div>
</template>

<script>
import AppHeader from "./components/AppHeader";
export default {
  name: "App.vue",
  components: { AppHeader },
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
