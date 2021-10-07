<template>
  <div class="app">
    <div class="header">
      <UserSearch/>
      <my-select
      v-model="selectedSort"
      :options="sortOptions"
      />

    </div>
    <div class="content">
      <div v-if="!loading">
        <UsersList/>
      </div>
      <div v-else>
        Загрузка
      </div>
      <div ref="observer" class="observer"/>
    </div>
  </div>
</template>

<script>
import UsersList from './components/UsersList';
import UserSearch from './components/UserSearch';
import {mapActions, mapMutations, mapState} from 'vuex';
import MySelect from "./components/UI/MySelect";
export default {
  name: "App.vue",
  components: {MySelect, UserSearch, UsersList },
  computed: {
    ...mapState({
      page: state => state.page,
      totalPages: state => state.totalPages,
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
  mounted() {
    const options = {
      rootMargin: '0px',
      threshold: 1.0
    }
    const callback = (entries, observer) => {
      if (entries[0].isIntersecting && this.page < this.totalPages) {
        this.getMoreUsers()
      }
    };
    const observer = new IntersectionObserver(callback, options);
    observer.observe(this.$refs.observer)
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