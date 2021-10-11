<template>
  <div class="input">
    <input :value="modelValue" @input="updateInput" type="text" />
  </div>
</template>

<script>
export default {
  name: "MyInput",
  props: {
    modelValue: [String, Number],
  },
  methods: {
    updateInput(event) {
      this.$emit("update:modelValue", event.target.value);
    },
  },
};
</script>

<style scoped>
.input {
  width: 60%;
}
.input input {
  width: 100%;
  outline: none;
  height: 30px;
  text-align: center;
  border-radius: 5px;
  font-size: 30px;
}
</style>
