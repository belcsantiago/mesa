<template>
  <v-content>
    <p>Login</p>
    <v-form ref="form">
      <v-text-field
        v-model="user.email_user"
        label="E-mail"
        required
      ></v-text-field>
      <v-text-field
        v-model="user.password"
        label="Senha"
        type="password"
        required
      ></v-text-field>
      <v-btn class="btn__confirm" @click="submitLogin()">
        Logar
      </v-btn>
    </v-form>
  </v-content>
</template>

<script>
import { mapState, mapActions } from "vuex";
export default {
  data: () => ({
    user: {
      email: "eve.holt@reqres.in",
      password: null,
      logado: true,
      email_user: null
    },
    credentials: null
  }),
  computed: {
    ...mapState({
      email: state => state.email_user,
      password: state => state.password
    })
  },
  methods: {
    ...mapActions({
      makeLogin: "LOGIN"
    }),
    verifyUser() {
      if (
        (this.user.email_user === this.email_user) &
        (this.user.password === this.password)
      ) {
        this.credentials = true;
      }
    },
    submitLogin() {
      this.verifyUser();
      if (this.credentials || this.user.email_user === this.user.email) {
        this.makeLogin(this.user);
      } else {
        alert("E-mail não cadastrado ou senha inválida");
      }
    }
  }
};
</script>
<style lang="stylus" scoped>
.btn
  &__register
    background-color #ea9abb!important
  &__confirm
    background-color #fea5ad!important
</style>