<template>
    <l-tile-layer :url="this.$props.url" :attribution="attribution"></l-tile-layer>
    <l-polyline  @click="leitungOnClick()" :lat-lngs="polyline.latlngs" :color="polyline.color" weight="7"></l-polyline>
</template>

<script>
import { LTileLayer, LPolyline } from "@vue-leaflet/vue-leaflet";
import Swal from 'sweetalert2'

export default {
  name: "Leitung",
  components: {
    LTileLayer,
    LPolyline
  },
  props: {
    url: String,
    coords: Array,
    bezeichnung: String
  },
  data() {
    return {
      //url: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
      attribution:
        '&copy; <a target="_blank" href="http://osm.org/copyright">OpenStreetMap</a> contributors',
      polyline: {
        latlngs: [],
        color: 'blue'
      }
    };
  },
  methods: {
    leitungOnClick: function (){
        Swal.fire(
            this.$props.bezeichnung
        )
    }
  },
  created(){
    console.log(this.$props.coords);
    for(var i = 0; i<this.$props.coords.length; i++){
      this.polyline.latlngs.push(this.$props.coords[i])
      console.log(this.polyline.latlngs);
    }
    console.log(this.$props.bezeichnung);
  }
};
</script>

<style lang="scss">

</style>