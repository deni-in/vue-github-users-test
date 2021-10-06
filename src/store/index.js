import { createStore } from 'vuex';
import axios from 'axios';

export default createStore({
  state: () => {
    return {
      users: [],
      login: '',
      loading: false,
      page: 1,
      limit: 9,
      totalPages: 0
    }
  },
  getters: {

  },
  mutations: {
    setUsers(state, users) {
      state.users = users
    },
    setMoreUsers(state, users) {
      state.users = [...state.users, ...users]
    },
    setLogin(state, login) {
      state.login = login
    },
    setLoading(state, loading) {
      state.loading = loading
    },
    setTotalPages(state, count) {
      state.totalPages = Math.ceil(count / state.limit)
    },
    setIncrementPage(state) {
      state.page += 1
    },
    setResetPage(state) {
      state.page = 1
    }
  },
  actions: {
    async getUsers({state, commit}) {
      try {
        commit('setLoading', true)
        commit('setResetPage')
        const res = await axios.get(`https://api.github.com/search/users?q=${state.login}`, {
          params: {
            page: state.page,
            per_page: state.limit
          }
        })
        commit('setTotalPages', res.data.total_count)
        commit('setUsers', res.data.items)
      } catch (e) {
        console.log("Ошибка:" + e.message)
      } finally {
        commit('setLoading', false)
      }
    },
    async getMoreUsers({state, commit}) {
      try {
        commit('setIncrementPage')
        const res = await axios.get(`https://api.github.com/search/users?q=${state.login}`, {
          params: {
            page: state.page,
            per_page: state.limit
          }
        })
        commit('setTotalPages', res.data.total_count)
        commit('setMoreUsers', res.data.items)
      } catch (e) {
        console.log("Ошибка:" + e.message)
      }
    },
  }
})