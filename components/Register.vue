<template>
  <v-content>
    <p>Registro</p>
    <v-form ref="form">
      <v-text-field
        v-model="userInfo.first_name"
        :rules="simpleRules"
        label="Primeiro Nome"
        required
      ></v-text-field>
      <v-text-field
        v-model="userInfo.last_name"
        :rules="simpleRules"
        label="Sobrenome"
        required
      ></v-text-field>
      <v-text-field
        v-model="userInfo.email_user"
        :rules="emailRules"
        label="E-mail"
        required
      ></v-text-field>
      <v-text-field
        v-model="userInfo.password"
        label="Senha"
        :rules="simpleRules"
        type="password"
        required
      ></v-text-field>
      <v-text-field
        v-model="userInfo.confirmPassowrd"
        :rules="simpleRules"
        label="Confirme sua senha"
        type="password"
        required
      ></v-text-field>
        <v-btn @click="submit()" class="btn__register"> Cadastro</v-btn >
    </v-form>
  </v-content>
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
  data: () => ({
    userInfo: {
      first_name: '',
      last_name: '',
      email_user: '',
      confirmPassowrd: '',
      logado: true,
      email: 'eve.holt@reqres.in',
      password: '',
    },
    simpleRules: [
      v => !!v || 'Campo obrigatório',
    ],
    emailRules: [
      v => !!v || 'Campo obrigatório',
      v => /.+@.+\..+/.test(v) || 'Email inválido',
    ],
  }),
  methods: {
    ...mapActions({
       makeRegister: 'REGISTER'
    }),
    submit() {
      if(this.userInfo.password === this.userInfo.confirmPassowrd ) {
        this.makeRegister(this.userInfo)
      } else {
        alert("As senhas não são iguais")
      }
    },
  },
  computed: {
    ...mapState({
      status: state => state.logado
    })
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