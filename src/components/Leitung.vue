<template>
    <l-tile-layer :url="url" :attribution="attribution"></l-tile-layer>
    <l-polyline :lat-lngs="polyline.latlngs" :color="polyline.color"></l-polyline>
</template>

<script>
import { LTileLayer, LPolyline } from "@vue-leaflet/vue-leaflet";

export default {
  name: "Leitung",
  components: {
    LTileLayer,
    LPolyline
  },
  props: {
    coords: Array,
  },
  data() {
    return {
      url: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
      attribution:
        '&copy; <a target="_blank" href="http://osm.org/copyright">OpenStreetMap</a> contributors',
      polyline: {
        latlngs: [],
        color: 'blue'
      }
    };
  },
  methods: {

  },
  created(){
    console.log(this.$props.coords);
    for(var i = 0; i<this.$props.coords.length; i++){
      this.polyline.latlngs.push(this.$props.coords[i])
      console.log(this.polyline.latlngs);
    }
  }
};
</script>

<style lang="scss">

</style>