import { createStore } from 'vuex';

export default createStore({
  state: () => {
    return {
      users: [],
      login: '',
      loading: false
    }
  },
  getters: {

  },
  mutations: {
    setUsers(state, users) {
      state.users = users
    },
    setLogin(state, login) {
      state.login = login
    },
    setLoading(state, loading) {
      state.loading = loading
    }
  },
  actions: {
    async getUsers({state, commit}) {
      try {
        commit('setLoading', true)
        const res = await fetch(`https://api.github.com/search/users?q=${state.login}`)
        const data = await res.json()
        commit('setUsers', data.items)
      } catch (e) {
        console.log("Ошибка:" + e.message)
      } finally {
        commit('setLoading', false)
      }
    },
  }
})