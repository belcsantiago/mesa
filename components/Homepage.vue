<template>
<v-container>
  <v-row>
    <v-col>
      <div>
        <h1>Olá, Bem-vindo {{ nome === '' ? email : nome }}</h1>
      </div>
    </v-col>
    <v-col>
      <div>
        <h3 @click="openProfile()"> Perfil</h3>
      </div>
    </v-col>
    <v-col>
      <div>
        <h3 @click="openMap()"> Maps</h3>
      </div>
    </v-col>
    <v-col>
      <div>
        <h5 @click="logout()"> Logout</h5>
      </div>
    </v-col>
  </v-row>
  <v-card v-if="profile === true">
      <Profile />
   </v-card>
   <v-card v-if="map === true">
      <Maps />
   </v-card>
</v-container>
  
</template>

<script>
import { mapState } from 'vuex'
export default {
  components: {
    Profile: () => import("~/components/Profile.vue"),
    Maps: () => import("~/components/Maps.vue")
  },
  data: () => ({
    profile:'',
    map: ''
  }),
  computed: {
    ...mapState({
      nome: state => state.first_name,
      email: state => state.email_user
    })
  },
  mounted() {
    if( this.$store.state.logado === false){
      this.$router.push('../')
    }
  },
  methods: {
    openProfile() {
      this.profile = !this.profile
      this.map = false
    },
    openMap() {
      this.map = !this.map
      this.profile = false
    },
    logout() {
      localStorage.removeItem('mesa');
      this.$router.push('../')
    }
  }
}
</script>

<style lang="stylus" scoped>
h3:hover
  background-color #ea9abb
  cursor context-menu
h5:hover
  cursor context-menu
</style>