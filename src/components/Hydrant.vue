<template>
      <l-marker @click="hydrantOnClick(this.art + '<br><hr>' + this.durchlaufmenge, this.bemerkung)" :lat-lng="this.markerPosition">
        <l-icon>
            <img class="iconImg" src="../assets/KartenIcons/Hydrant.svg">
        </l-icon>
      </l-marker>
</template>

<script>
import { LMarker, LIcon } from "@vue-leaflet/vue-leaflet";
import Swal from 'sweetalert2'

export default {
  name: "Hydrant",
  components: {
    LMarker,
    LIcon
  },
  props: {
    durchlaufmenge: String,
    bemerkung: String,
    lat: String,
    lng: String,
    art: String
  },
  data() {
    return {
      markerPosition: [0, 0],
    };
  },
  methods: {
    hydrantOnClick: function (durchlaufmenge, bemerkung){
        Swal.fire(
            durchlaufmenge + " l/min",
            bemerkung
        )
    }
  },
  created(){
    //console.log(this.markerPosition2);
    //console.log(this.$props.markerPosition);
    this.markerPosition[0] = this.$props.lat;
    this.markerPosition[1] = this.$props.lng;
  }
};
</script>

<style lang="scss">
  .iconImg{
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    max-height: 2.5rem !important;
    filter: drop-shadow(0 0 0.05rem rgb(53, 53, 53));
  }
</style>