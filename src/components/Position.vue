<template>
      <l-marker :lat-lng="this.markerPosition">
        <l-icon>
            <img class="positionImg" src="../assets/KartenIcons/Standort.png">
        </l-icon>
      </l-marker>
</template>

<script>
import { LMarker, LIcon } from "@vue-leaflet/vue-leaflet";

export default {
  name: "Position",
  components: {
    LMarker,
    LIcon
  },
  props: {
    lat: String,
    lng: String,
  },
  data() {
    return {
      markerPosition: [0, 0],
    };
  },
  methods: {

  },
  created(){
    this.markerPosition[0] = this.$props.lat;
    this.markerPosition[1] = this.$props.lng;
  }
};
</script>

<style lang="scss">
  .positionImg{
    position: absolute;
    top: -10px;
    left: -10px;
    max-height: 2.5rem !important;
    height: 20px !important;
    width: 20px !important;
  }
</style>