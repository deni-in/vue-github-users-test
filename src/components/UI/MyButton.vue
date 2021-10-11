<template>
  <div class="button">
    <button>
      <slot></slot>
    </button>
  </div>
</template>

<script>
export default {
  name: "my-button",
};
</script>

<style scoped>
.button {
  width: 10%;
  margin-left: 30px;
}
button {
  height: 36px;
  text-transform: uppercase;
  cursor: pointer;
  color: #343640;
  border: none;
  border-radius: 5px;
  transition: 0.3s;
}
button:hover {
  color: #e0e0e0;
  background: #343640;
}
</style>
