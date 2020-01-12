<template>
  <v-content>
    <p>Login</p>
    <v-form ref="form">
      <v-text-field
        v-model="email"
        label="E-mail"
        required
      ></v-text-field>
      <v-text-field
        v-model="user.password"
        label="Senha"
        type="password"
        required
      ></v-text-field>
        <v-btn class="btn__confirm" @click="submit()">
            Logar
          </v-btn >
    </v-form>
  </v-content>
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
  data: () => ({
    email: '',
    user: {
      email: 'eve.holt@reqres.in',
      password: '',
      // first_name: '',
      // last_name: '',
    }
  }),
  methods: {
    ...mapActions({
       fazerLogin: 'LOGIN' 
    }),
    submit() {
      this.fazerLogin(this.user)
      this.$router.push('dashboard/home')
    },

  }
}
</script>
<style lang="stylus" scoped>
.btn
  &__register
    background-color #ea9abb!important
  &__confirm
    background-color #fea5ad!important

</style>