<template>
  <v-layout
  >
    <v-flex d-flex>
      <div class="initial">
        <Login />
      </div>
      <div class="initial">
        <Register />
      </div>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  components: {
    Login: () => import("~/components/Login.vue"),
    Register: () => import("~/components/Register.vue")
  },
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

</style>
