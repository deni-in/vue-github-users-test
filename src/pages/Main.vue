<template>
  <div>
    <div >
      <div v-if="!loading">
        <UsersList />
      </div>
      <div v-else><my-preloader/></div>
      <div ref="observer" class="observer" />
    </div>
  </div>
</template>

<script>
import UsersList from "../components/UsersList";
import { mapActions, mapState } from "vuex";
import MyPreloader from '../components/UI/MyPreloader';

export default {
  name: "App.vue",
  components: { MyPreloader, UsersList },
  computed: {
    ...mapState({
      page: (state) => state.page,
      totalPages: (state) => state.totalPages,
      loading: (state) => state.loading,
    }),
  },
  methods: {
    ...mapActions({
      getMoreUsers: "getMoreUsers",
    }),
  },
  mounted() {
    const options = {
      rootMargin: "0px",
      threshold: 1.0,
    };
    const callback = (entries, observer) => {
      if (entries[0].isIntersecting && this.page < this.totalPages) {
        this.getMoreUsers();
      }
    };
    const observer = new IntersectionObserver(callback, options);
    observer.observe(this.$refs.observer);
  },
};
</script>

<style></style>
