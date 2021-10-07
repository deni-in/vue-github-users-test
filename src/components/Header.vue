<template>
  <div class="header">
    <UserSearch/>
    <my-select
        v-model="selectedSort"
        :options="sortOptions"
    />

  </div>
</template>

<script>
import UserSearch from './UserSearch';
import MySelect from "../components/UI/MySelect";
import { mapActions, mapMutations, mapState } from 'vuex';

export default {
  name: 'header',
  components: { MySelect, UserSearch },
  computed: {
    ...mapState({
      loading: state => state.loading,
      selectedSort: state => state.selectedSort,
      sortOptions: state => state.sortOptions
    })
  },
  methods: {
    ...mapActions({
      getMoreUsers: 'getMoreUsers',
      getSortedUsers: "getSortedUsers"
    }),
    ...mapMutations({
      setSelectedSort: "setSelectedSort"
    })
  },
  watch: {
    selectedSort(newValue) {
      if (newValue !== '') {
        this.getSortedUsers()
      }
    }
  }
}
</script>

<style scoped>

</style>