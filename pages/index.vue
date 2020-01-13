<template>
  <v-layout>
    
    <v-row>
      <v-col>
        <div v-if="showLogin === true" class="initial">
          <Login />
        </div>
        <div @click="showL()" v-else class="title-card">
          <p>Fazer login</p>
        </div>
      </v-col>
      <v-col>
        <p class="title">Olá, você deseja:</p>
      </v-col>
      <v-col>
        <div v-if="showRegister === true" class="initial">
          <Register />
        </div>
        <div @click="showR()" v-else class="title-card">
          <p>Fazer registro</p>
        </div>
      </v-col>
    </v-row>
  </v-layout>
</template>

<script>
export default {
  components: {
    Login: () => import("~/components/Login.vue"),
    Register: () => import("~/components/Register.vue")
  },
  data: () => ({
    showLogin: '',
    showRegister: ''
  }),
  methods: {
    showL() {
      this.showLogin = !this.showLogin
    },
    showR() {
      this.showRegister = !this.showRegister
    }
  }
}
</script>

<style lang="stylus" scoped>

.initial
  margin auto
  background-color #be8abf
  width 20vw
  padding 20px 20px 10px 10px
  border-radius 10px
  display flex
  text-align center
  
.title
  font-size 4em
  text-align: center

.title-card
  margin auto
  background-color #be8abf
  width auto
  padding 20px 20px 10px 10px
  border-radius 10px
  display flex
  text-align center
  justify-content center
  align-items center

</style>
