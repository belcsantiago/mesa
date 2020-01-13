export const state = () => ({
  email: '',
  id: '',
  first_name: '',
  last_name: '',
  avatar: '',
  token: '',
  logado: false,
  email_user: '',
  password: ''
})

export const mutations = {
  ADD_USER_DATA (state, { id, email, first_name, last_name, avatar, logado, token, email_user, password}) {
    state.id = id
    state.email = email
    state.first_name = first_name
    state.last_name = last_name
    state.avatar = avatar
    state.token = token
    state.logado = logado
    state.email_user = email_user
    state.password = password
  },
  ADD_TOKEN (state, {token, logado}) {
    state.token = token
    state.logado = logado
  },
  CHANGE_USER_DATA (state, { first_name, last_name, email_user, password}) {
    state.first_name = first_name
    state.last_name = last_name
    state.email_user = email_user
    state.password = password
  }
}
export const actions = {
  // USER_DATA ({ commit }) {
  //   this.$axios.get('https://reqres.in/api/users/1')
  //   .then(({data}) => {
  //     console.log(data)
  //     commit('ADD_USER_DATA', data.data)
  //   })
  //   .catch(error => {
  //     alert(JSON.stringify(error.response.data.error))
  //   })
  // },
  REGISTER ({commit}, dados) {
  const resposta = {
    email: dados.email,
    password: dados.password
  }
  this.$axios.post('https://reqres.in/api/register/', resposta)
    .then(({data}) => {
      commit('ADD_USER_DATA', {...dados,...data})
      this.$router.push('/home')
    })
    .catch(error => {
      alert(JSON.stringify(error.response.data.error))
    })
  },
  LOGIN ({ commit }, dados) {
    const dataUser = {
      email: dados.email,
      password: dados.password
    }
    this.$axios.post('https://reqres.in/api/login', dataUser)
    .then(({data}) => {
      commit('ADD_TOKEN', {...dados,...data})
      this.$router.push('/home')
    })
    .catch(error => {
      alert(JSON.stringify(error.response.data.error))
    })
  },
  UPDATE_USER({commit}, dados) {
    commit('CHANGE_USER_DATA', dados)
  }
}