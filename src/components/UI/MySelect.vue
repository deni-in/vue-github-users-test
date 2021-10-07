<template>
  <select v-model="modelValue" @change="changeOption">
    <option disabled value="">
      Выберите из списка
    </option>
    <option
        v-for="option in options"
        :key="option.value"
        :value=option.value
    >
      {{ option.name }}
    </option>
  </select>
</template>

<script>
import {mapMutations} from "vuex";

export default {
  name: 'my-select',
  props: {
    modelValue: {
      type: String
    },
    options: {
      type: Array,
      default: () => []
    }
  },
  methods: {
    ...mapMutations({
      setSelectedSort: "setSelectedSort"
    }),
    changeOption(event) {
      this.setSelectedSort(event.target.value)
    }
  }
}
</script>

<style scoped>

</style>