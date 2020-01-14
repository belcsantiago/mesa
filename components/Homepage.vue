<template>
  <v-container>
    <v-card>
        <v-card color="grey lighten-4" flat>
          <v-toolbar>
            <v-toolbar-title>Bem-vindo {{usuario}}</v-toolbar-title>
            <v-spacer></v-spacer>
            <v-btn title="abrir/fechar perfil" @click="openProfile" icon>
              <v-icon>mdi-account</v-icon>
            </v-btn>
            <v-btn title="abrir/fechar mapa" @click="openMap" icon>
              <v-icon>mdi-google-maps</v-icon>
            </v-btn>
            <v-btn title="sair" @click="logout" icon>
              <v-icon>mdi-logout</v-icon>
            </v-btn>
          </v-toolbar>
        </v-card>
    </v-card>
          <v-card v-if="profile" class="card">
            <Profile />
          </v-card>
          <v-card v-if="map" class="card">
                <Maps />
          </v-card>
    
  </v-container>
</template>

<script>
import { mapState } from "vuex";
export default {
  components: {
    Profile: () => import("~/components/Profile.vue"),
    Maps: () => import("~/components/Maps.vue")
  },
  data: () => ({
    profile: false,
    map: true
  }),
  computed: {
    ...mapState({
      nome: state => state.first_name,
      email: state => state.email_user,
      logado: state => state.logado
    }),
    usuario() {
      return this.nome === "" ? this.email : this.nome;
    }
  },
  mounted() {
    if (!this.logado) {
      this.$router.push("/");
    }
  },
  methods: {
    openProfile() {
      this.profile = !this.profile;
      this.map = false;
    },
    openMap() {
      this.map = !this.map;
      this.profile = false;
    },
    logout() {
      localStorage.removeItem("mesa");
      this.$router.push("/");
    }
  }
};
</script>

<style lang="stylus" scoped>
h3:hover
  background-color #ea9abb
  cursor context-menu
h5:hover
  cursor context-menu
.v-toolbar
  background-color #ea9abb
.card
  margin-top 20px
</style>