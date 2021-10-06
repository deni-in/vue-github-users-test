<template>
 <input class="input" :value="modelValue" @input="updateInput" type="text" >
</template>

<script>
export default {
  name: 'my-input',
  props: {
    modelValue: [String, Number]
  },
  methods: {
    updateInput(event) {
      this.$emit('update:modelValue', event.target.value)
    }
  }
}
</script>

<style scoped>
  .input {
    width: 80%;
    font-size: large;
    text-align: center;
  }
</style>