<template>
  <select class="select" v-model="modelValue" @change="changeOption">
    <option disabled value="">Сортировать по количеству репозиториев</option>
    <option v-for="option in options" :key="option.value" :value="option.value">
      {{ option.name }}
    </option>
  </select>
</template>

<script>
import { mapMutations } from "vuex";

export default {
  name: "MySelect",
  props: {
    modelValue: {
      type: String,
    },
    options: {
      type: Array,
      default: () => [],
    },
  },
  methods: {
    ...mapMutations({
      setSelectedSort: "setSelectedSort",
    }),
    changeOption(event) {
      this.setSelectedSort(event.target.value);
    },
  },
};
</script>

<style scoped>
.select {
  margin: 0;
  position: relative;
  font-size: x-large;
  outline: none;
  text-align: center;
}
</style>
