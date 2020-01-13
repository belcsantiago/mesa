<template>
  <div class="content">
    <p>Perfil</p>
    <v-form ref="form">
      <v-text-field
        v-model="userInfo.first_name"
        label="Primeiro Nome"
        :placeholder="f_name"
        required
      ></v-text-field>
      <v-text-field
        v-model="userInfo.last_name"
        label="Sobrenome"
        :placeholder="l_name"
        required
      ></v-text-field>
      <v-text-field
        v-model="userInfo.email_user"
        label="E-mail"
        :placeholder="e_user"
        required
      ></v-text-field>
      <v-text-field
        v-model="userInfo.password"
        label="Senha"
        type="password"
        required
      ></v-text-field>
      <v-text-field
        v-model="userInfo.confirmPassowrd"
        label="Confirme sua senha"
        type="password"
        required
      ></v-text-field>
        <v-btn @click="alterar()" class="alterar"> Alterar</v-btn >
    </v-form>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
  data: () => ({
    userInfo: {
      first_name: null,
      last_name: null,
      email_user: null,
      confirmPassowrd: null,
      password: null,
    },
  }),
  methods: {
    ...mapActions({
       makeUpdate: 'UPDATE_USER'
    }),
    alterar() {
      this.verify()
      this.makeUpdate(this.userInfo)
    },
    verify () {
      this.userInfo.first_name === null ? this.userInfo.first_name = this.$store.state.first_name : this.userInfo.first_name
      this.userInfo.last_name === null ? this.userInfo.last_name = this.$store.state.last_name : this.userInfo.last_name
      this.userInfo.email_user == null ? this.userInfo.email_user = this.$store.state.email_user : this.userInfo.email_user
      this.userInfo.confirmPassowrd == null ? this.userInfo.password = this.$store.state.password : this.userInfo.confirmPassowrd
      this.userInfo.password == null ? this.userInfo.password = this.$store.state.password : this.userInfo.password
    }
  },
  computed: {
    ...mapState({
      status: state => state.logado,
      f_name: state => state.first_name,
      l_name: state => state.last_name,
      e_user: state => state.email_user,
      p_user: state => state.password,
    }),
  },
  mounted() {
  }
}
</script>
<style lang="stylus" scoped>
.btn
  &__register
    background-color #ea9abb!important
.content
  padding 20px
</style>