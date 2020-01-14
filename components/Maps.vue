<template>
  <v-card>
    <gmap-autocomplete
      ref="complete"
      class="pesquisar"
      required
      placeholder="pesquisar"
      @place_changed="local"
    ></gmap-autocomplete>
    <GmapMap
      :center="{ lat: coordenadas.lat, lng: coordenadas.lng }"
      :zoom="17"
      map-type-id="terrain"
      class="mapa"
      @click="setMarker"
    >
      <GmapMarker
        v-for="(marker, index) in markers"
        :key="index"
        :position="marker"
        :clickable="true"
        :draggable="true"
        @click="centralizar(marker)"
      />
    </GmapMap>
  </v-card>
</template>

<script>
export default {
  data: () => ({
    markers: [],
    coordenadas: {
      lat: -8.0640726,
      lng: -34.87393520000001
    }
  }),
  methods: {
    centralizar({ lat, lng }) {
      this.coordenadas.lat = lat
      this.coordenadas.lng = lng
    },
    setMarker({ latLng, placeId }) {
      if (!latLng && !placeId) return;

      const position = {
        lat: latLng.lat(),
        lng: latLng.lng()
      };

      this.markers.push(position);
    },
    local({ geometry }) {
      this.coordenadas.lat = geometry.location.lat()
      this.coordenadas.lng = geometry.location.lng()
      this.markers.push({ lat: this.coordenadas.lat, lng:  this.coordenadas.lng })
    }
  },
  mounted() {
    navigator.geolocation.getCurrentPosition(({ coords }) => {
      this.coordenadas.lat = coords.latitude;
      this.coordenadas.lng = coords.longitude;
    });
  }
};
</script>

<style lang="stylus" scoped>
.mapa
  width 83vw
  height 80vh

.pesquisar
  padding 10px
  margin 10px 0
  background #f8f8f8
  color black
  width 100%
</style>