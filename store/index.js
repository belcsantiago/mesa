export const state = () => ({
  email: '',
  id: '',
  first_name: '',
  last_name: '',
  avatar: '',
  token: '',
})

export const mutations = {
  ADD_USER_DATA (state, { id, email, first_name, last_name, avatar}) {
    state.id = id
    state.email = email
    state.first_name = first_name
    state.last_name = last_name
    state.avatar = avatar
  },
  CREATE_USER(state, {id, token}) {
    state.id = id
    state.token = token
  },
  ADD_TOKEN(state, token) {
    state.token = token
  }
}
export const actions = {
  USER_DATA ({ commit }) {
    this.$axios.get('https://reqres.in/api/users/1')
    .then(({data}) => {
      console.log(data)
      commit('ADD_USER_DATA', data.data)
    })
    .catch(error => {
      console.log('deu ruim')
    })
  },
  REGISTER ({commit}, dados) {
    this.$axios.post('https://reqres.in/api/register/', dados)
    .then(({data}) => {
      console.log(data)
      commit('CREATE_USER', data)
    })
    .catch(error => {
      alert(error)
    })
  },
  LOGIN ({ commit }, dados) {
    this.$axios.post('https://reqres.in/api/login', dados)
    .then(({data}) => {
      console.log(data)
      commit('ADD_TOKEN', data )
    })
    .catch(error => {
      console.log(error)
    })
  },
}