<template>
  <div class="app">
    <div class="content">
      <UserSearch/>
      <div class="list">
        <UsersList/>
      </div>
      <div ref="observer" class="observer"/>
    </div>
  </div>
</template>

<script>
import UsersList from './components/UsersList';
import UserSearch from './components/UserSearch';
import { mapActions, mapState } from 'vuex';
export default {
  name: "App.vue",
  components: { UserSearch, UsersList },
  computed: {
    ...mapState({
      page: state => state.page,
      totalPages: state => state.totalPages
    })
  },
  methods: {
    ...mapActions({
      getMoreUsers: 'getMoreUsers'
    })
  },
  mounted() {
    console.log(this.$refs.observer)
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
  }
}
</script>

<style>
  .app {
    max-width: 1140px;
    margin: auto;
    justify-content: center;
  }
  .content {
    max-width: 80%;
    margin: auto;
    justify-content: center;
  }
  .list {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }
  .list__card {
    width: 250px;
    text-align: center;
  }
  .list__card-img {
    width: 100%;
  }
</style>