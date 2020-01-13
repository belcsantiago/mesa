<template>
  <div>
    <p>Mapa</p>
    <v-card>
     <GmapMap
      :center="{lat:coordenadas.lat, lng:coordenadas.lng}"
      :zoom="15"
      map-type-id="terrain"
    style="width: 500px; height: 300px"
    >
      <GmapMarker
        :key="index"
        v-for="(m, index) in markers"
        :position="m.position"
        :clickable="true"
        :draggable="true"
        @click="center=m.position"
      />
</GmapMap>
    </v-card>
  </div>
</template>

<script>
export default {
  data: () => ({
    markers: [],
    coordenadas: {
      lat: '',
      lng: ''
    }
  }),
  mounted() {
    navigator.geolocation.getCurrentPosition((pos) => {
      const cord = pos.coords
      this.coordenadas.lat = cord.latitude
      this.coordenadas.lng = cord.longitude
    })
  }
}
</script>

<style lang="stylus" scoped>

</style>