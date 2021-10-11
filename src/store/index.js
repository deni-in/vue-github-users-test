import { createStore } from "vuex";
import axios from "axios";

export default createStore({
  state: () => {
    return {
      users: [],
      user: {},
      userRepos: [],
      userLogin: "",
      login: "",
      loading: false,
      page: 1,
      limit: 15,
      totalPages: 0,
      selectedSort: "",
      sortOptions: [
        { value: "bigToSmall", name: "По убыванию" },
        { value: "smallToBig", name: "По возрастанию" },
      ],
    };
  },
  getters: {},
  mutations: {
    setUsers(state, users) {
      state.users = users;
    },
    setMoreUsers(state, users) {
      state.users = [...state.users, ...users];
    },
    setLogin(state, login) {
      state.login = login;
    },
    setLoading(state, loading) {
      state.loading = loading;
    },
    setTotalPages(state, count) {
      state.totalPages = Math.ceil(count / state.limit);
    },
    setIncrementPage(state) {
      state.page += 1;
    },
    setResetPage(state) {
      state.page = 1;
    },
    setSelectedSort(state, value) {
      state.selectedSort = value;
    },
    setResetSelectedSort(state) {
      state.selectedSort = "";
    },
    setUser(state, user) {
      state.user = user;
    },
    setUserLogin(state, login) {
      state.userLogin = login;
    },
    setUserRepos(state, repos) {
      state.userRepos = repos;
    },
  },
  actions: {
    async getUsers({ state, commit }) {
      try {
        commit("setLoading", true);
        commit("setResetPage");
        commit("setResetSelectedSort");
        const res = await axios.get(
          `https://api.github.com/search/users?q=${state.login}`,
          {
            params: {
              page: state.page,
              per_page: state.limit,
            },
          }
        );
        commit("setTotalPages", res.data.total_count);
        commit("setUsers", res.data.items);
      } catch (e) {
        console.log("Ошибка:" + e.message);
      } finally {
        commit("setLoading", false);
      }
    },
    async getMoreUsers({ state, commit }) {
      try {
        commit("setIncrementPage");
        const res = await axios.get(
          `https://api.github.com/search/users?q=${state.login}`,
          {
            params: {
              sort: state.selectedSort ? "repositories" : null,
              order: state.selectedSort === "bigToSmall" ? "desc" : "asc",
              page: state.page,
              per_page: state.limit,
            },
          }
        );
        commit("setTotalPages", res.data.total_count);
        commit("setMoreUsers", res.data.items);
      } catch (e) {
        console.log("Ошибка:" + e.message);
      }
    },
    async getSortedUsers({ state, commit }) {
      try {
        commit("setLoading", true);
        commit("setResetPage");
        const res = await axios.get(
          `https://api.github.com/search/users?q=${state.login}`,
          {
            params: {
              sort: "repositories",
              order: state.selectedSort === "bigToSmall" ? "desc" : "asc",
              page: state.page,
              per_page: state.limit,
            },
          }
        );
        commit("setTotalPages", res.data.total_count);
        commit("setUsers", res.data.items);
      } catch (e) {
        console.log("Ошибка:" + e.message);
      } finally {
        commit("setLoading", false);
      }
    },
    async getOneUser({ state, commit }) {
      try {
        commit("setLoading", true);
        const res = await axios.get(
          `https://api.github.com/users/${state.userLogin}`
        );
        commit("setUser", res.data);
      } catch (e) {
        console.log("Ошибка:" + e.message);
      } finally {
        commit("setLoading", false);
      }
    },
    async getUserRepos({ state, commit }) {
      try {
        const res = await axios.get(
          `https://api.github.com/users/${state.userLogin}/repos`
        );
        commit("setUserRepos", res.data);
      } catch (e) {
        console.log("Ошибка:" + e.message);
      }
    },
  },
});
